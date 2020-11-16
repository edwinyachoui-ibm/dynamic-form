import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {
  CountriesEnum,
  mapCountryTranslate,
  mapProvinces,
  mapProvinceTranslate,
  mapTrumpTranslate,
  ProvincesEnum,
  TrumpEnum
} from '../../enum/enum';
import {MyOptionModel} from '../../model/my-option.model';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {FormValuesModel} from '../../model/form-values.model';
import {combineLatest, Observable, zip} from 'rxjs';
import {map} from 'rxjs/operators';
import {FormDataService} from '../../sevices/form-data.service';
import {AgePipe} from '../../pipe/age-pipe';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfileForm: FormGroup;
  countries: MyOptionModel<CountriesEnum, string>[];
  provinces: MyOptionModel<ProvincesEnum, string>[] = [];
  doYouLikeTrump: MyOptionModel<TrumpEnum, string>[];
  formValues: FormValuesModel = {name: '', isOld: '', isYoung: '', phoneNumber: '', country: '', province: '', trump: ''};
  showFormValues = false;
  currentUserId = '23';

  constructor(private formBuilder: FormBuilder,
              private translateService: TranslateService,
              private formDataService: FormDataService,
              private agePipe: AgePipe) {
  }

  ngOnInit(): void {
    this.userProfileForm = this.createFormGroup();
    this.formDataService.getUserInformation(this.currentUserId).subscribe(userInfo => {
      this.userProfileForm.patchValue({
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        age: this.agePipe.transform(userInfo.age),
        phoneNumber: userInfo.phoneNumber,
        trump: '',
      });
      this.userProfileForm.markAllAsTouched();
    });
    this.formDataService.getLocalisationInformation(this.currentUserId).subscribe(userLocation => {
      this.userProfileForm.patchValue({
        dropdownGroup: {
          country: userLocation.country,
          province: userLocation.province
        }
      });
      this.userProfileForm.markAllAsTouched();

    });

    this.userProfileForm.updateValueAndValidity();
    const getCanada = mapCountryTranslate.get(CountriesEnum.CANADA);
    const getUS = mapCountryTranslate.get(CountriesEnum.US);
    const getTrumpYes = mapTrumpTranslate.get(TrumpEnum.YES);
    const getTrumpNo = mapTrumpTranslate.get(TrumpEnum.NO);

// Load Country Dropdown and Trump Radio btn depending on language selected
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.translateService.get([getCanada, getUS])
        .subscribe((countriesTranslation) => {
          this.countries = [{label: countriesTranslation[getCanada], value: CountriesEnum.CANADA},
            {label: countriesTranslation[getUS], value: CountriesEnum.US}];
        });
      this.translateService.get([getTrumpYes, getTrumpNo])
        .subscribe(trumpTranslation => {
          this.doYouLikeTrump = [{label: trumpTranslation[getTrumpYes], value: TrumpEnum.YES},
            {label: trumpTranslation[getTrumpNo], value: TrumpEnum.NO}];
        });
    });

    // Load Dropdown Options on Country Change
    this.userProfileForm.get('dropdownGroup.country').valueChanges
      .subscribe(country => {
        if (country && country in CountriesEnum) {
          const provinces = mapProvinces.get(country);

          const provinceTranslations$ = provinces.map(key => {
            return this.translateService.get(mapProvinceTranslate.get(key));
          });
          combineLatest(provinceTranslations$).subscribe(translation => {
            this.provinces = provinces.map((province, index) => {
              return {value: province, label: translation[index]};
            });
          });

        } else {
          this.userProfileForm.markAllAsTouched();
          console.warn('No country');
        }
      });

    this.getAge().valueChanges.subscribe(age => {
      if (age > 40) {
        this.getTrump().clearValidators();
        this.getTrump().updateValueAndValidity();
      } else {
        this.getTrump().setValidators(Validators.required);
        this.getTrump().updateValueAndValidity();
      }
    });

    this.userProfileForm.valueChanges
      .subscribe(formData => {
        const countryObservable$ = this.getTranslation(mapCountryTranslate.get(CountriesEnum[formData.dropdownGroup.country]));
        const provinceObservable$ = this.getTranslation(mapProvinceTranslate.get(ProvincesEnum[formData.dropdownGroup.province]));
        const trumpObservable$ = this.getTranslation(mapTrumpTranslate.get(TrumpEnum[formData.trump]));
        zip(countryObservable$, provinceObservable$, trumpObservable$).subscribe(val => {
          this.formValues.country = val[0];
          this.formValues.province = val[1];
          this.formValues.trump = val[2];
          this.formValues.name = formData.firstName + ' ' + formData.lastName;
          this.formValues.phoneNumber = formData.phoneNumber;
          formData.age > 50 ? this.formValues.isOld = 'Yes' : this.formValues.isOld = 'No';
          formData.age < 20 ? this.formValues.isYoung = 'Yes' : this.formValues.isYoung = 'No';
        }, error => {
          console.log('error');
        });

      });
  }

  onSubmit(): void {
    this.showFormValues = true;
  }

  createFormGroup(): FormGroup {
    return this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{3}-\d{3}-\d{4}/)]],
      age: ['', [Validators.required, Validators.min(1), Validators.max(77)]],
      trump: [''],
      dropdownGroup: this.formBuilder.group({
        country: ['', Validators.required],
        province: ['', Validators.required]
      })
    });
  }

  getFirstName(): AbstractControl {
    return this.userProfileForm.get('firstName');
  }

  getLastName(): AbstractControl {
    return this.userProfileForm.get('lastName');
  }

  getCountry(): AbstractControl {
    return this.userProfileForm.get('dropdownGroup.country');
  }

  getProvince(): AbstractControl {
    return this.userProfileForm.get('dropdownGroup.province');
  }

  getPhoneNumber(): AbstractControl {
    return this.userProfileForm.get('phoneNumber');
  }

  getAge(): AbstractControl {
    return this.userProfileForm.get('age');
  }

  getTrump(): AbstractControl {
    return this.userProfileForm.get('trump');
  }

  getTranslation(input: string, lang = 'en'): Observable<string> {
    return this.translateService.getTranslation(lang)
      .pipe(map(translations => {
          return translations[input] ? translations[input] : null;
        }
      ));
  }
}
