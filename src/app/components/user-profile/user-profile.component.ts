import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CountriesEnum, mapProvinces, ProvincesEnum} from '../../data/data';
import {MyOption} from '../../model/MyOption';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfileForm: FormGroup;
  countries: MyOption<CountriesEnum, CountriesEnum>[];
  provinces: MyOption<ProvincesEnum, ProvincesEnum>[];
  displayFields: Array<object>;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.countries = [{value: CountriesEnum.CANADA, label: CountriesEnum.CANADA},
      {label: CountriesEnum.US, value: CountriesEnum.US}];
    this.userProfileForm = this.createFormGroup();
    this.getFirstName().valueChanges
      .subscribe(firstName => console.log('Full name value changed: ', firstName));

    this.userProfileForm.get('dropdownGroup.country').valueChanges
      .subscribe(country => {
        if (country) {
          this.userProfileForm.get('dropdownGroup.province').patchValue('');
          console.log('CountriesEnum', CountriesEnum);
          console.log('country', country);
          this.provinces = mapProvinces.get(country)
            .map(province => ({value: province, label: province}));
          console.log('this.provinces', this.provinces);
        } else {
          console.log('No country');
        }
      });

    this.userProfileForm.get('dropdownGroup.province').valueChanges
      .subscribe(province => console.log('Province value changed: ', province));
  }

  onSubmit(formValues): void {
    console.log(this.userProfileForm.getRawValue());
  }

  createFormGroup(): FormGroup {
    return this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
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

}


