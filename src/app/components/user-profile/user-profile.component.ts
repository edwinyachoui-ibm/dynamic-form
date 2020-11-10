import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CountriesEnum, mapCountryTranslate, mapProvinces, mapProvinceTranslate, ProvincesEnum} from '../../data/data';
import {MyOption} from '../../model/MyOption';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {FormValues} from '../../model/FormValues';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfileForm: FormGroup;
  countries: MyOption<CountriesEnum, string>[];
  provinces: MyOption<ProvincesEnum, string>[];
  formValues: FormValues = {name: '',  isOld: '', isYoung: '', phoneNumber: '', country: '', province: ''};
  showFormValues = false;

  constructor(private formBuilder: FormBuilder, private translateService: TranslateService) {
  }

  ngOnInit(): void {
    const getCanada = mapCountryTranslate.get(CountriesEnum.CANADA);
    const getUS = mapCountryTranslate.get(CountriesEnum.US);
    const getQC = mapProvinceTranslate.get(ProvincesEnum.QUEBEC);
    const getBC = mapProvinceTranslate.get(ProvincesEnum.BC);
    const getON = mapProvinceTranslate.get(ProvincesEnum.ONTARIO);
    const getTX = mapProvinceTranslate.get(ProvincesEnum.TEXAS);
    const getCALI = mapProvinceTranslate.get(ProvincesEnum.CALIFORNIA);
    const getFL = mapProvinceTranslate.get(ProvincesEnum.FLORIDA);


    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.translateService.get([getCanada, getUS])
        .subscribe((countriesTranslation) => {
          this.countries = [{label: countriesTranslation[getCanada], value: CountriesEnum.CANADA},
            {label: countriesTranslation[getUS], value: CountriesEnum.US}];
        });
    });


    this.userProfileForm = this.createFormGroup();
    this.userProfileForm.get('dropdownGroup.country').valueChanges
      .subscribe(country => {
        if (country) {
          this.translateService.get(mapProvinces.get(country))
            .subscribe((provinceTranslation) => {

              // whole point of mapping was not to do this
              if (country === 'CANADA') {
                this.provinces = [
                  {label: provinceTranslation[getQC], value: ProvincesEnum.QUEBEC},
                  {label: provinceTranslation[getON], value: ProvincesEnum.ONTARIO},
                  {label: provinceTranslation[getBC], value: ProvincesEnum.BC}
                ];
              } else {
                this.provinces = [
                  {label: provinceTranslation[getCALI], value: ProvincesEnum.CALIFORNIA},
                  {label: provinceTranslation[getTX], value: ProvincesEnum.TEXAS},
                  {label: provinceTranslation[getFL], value: ProvincesEnum.FLORIDA}
                ];
              }
            });
        } else {
          console.warn('No country');
        }
      });

    this.userProfileForm.valueChanges
      .subscribe(formData => {
        this.formValues.name = formData.firstName + ' ' + formData.lastName;
        this.formValues.country = formData.dropdownGroup.country;
        this.formValues.province = formData.dropdownGroup.province;
        this.formValues.phoneNumber = formData.phoneNumber;
        formData.age > 50 ? this.formValues.isOld = 'Yes' : this.formValues.isOld = 'No';
        formData.age < 20 ? this.formValues.isYoung = 'Yes' : this.formValues.isYoung = 'No';
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

}


