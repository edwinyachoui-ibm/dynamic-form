import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CountriesEnum, mapProvinces, ProvincesEnum} from '../../data/data';
import {MyOption} from '../../model/MyOption';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfileForm: FormGroup;
  countries = Object.keys(CountriesEnum).map(key => ({value: CountriesEnum[key], label: key} as MyOption));
  provinces: MyOption[];
  selectedCountry: string;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    console.log('Countries: ', this.countries);
    console.log('Provinces: ', this.provinces);
    this.userProfileForm = this.createFormGroup();
    this.userProfileForm.get('fullName').valueChanges
      .subscribe(fullName => console.log('Full name value changed: ', fullName));

    this.userProfileForm.get('dropdownGroup.country').valueChanges
      .subscribe(country => {
        this.selectedCountry !== country ? this.userProfileForm.get('dropdownGroup.province').reset() : this.selectedCountry = country;
        this.userProfileForm.get('dropdownGroup.province').patchValue('');
        this.provinces = mapProvinces.get(CountriesEnum[country])
          .map(province =>  ({value: province, label: province} as MyOption));
      });

    this.userProfileForm.get('dropdownGroup.province').valueChanges
      .subscribe(province => console.log('Province value changed: ', province));
  }

  onSubmit(formValues): void {
    console.log(this.userProfileForm.getRawValue());
  }

  createFormGroup(): FormGroup {
    return this.formBuilder.group({
      fullName: ['', Validators.required],
      dropdownGroup: this.formBuilder.group({
        country: ['', Validators.required],
        province: ['', Validators.required]
      })
    });
  }

}


