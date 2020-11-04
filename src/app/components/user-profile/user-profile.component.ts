import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CountriesEnum, ProvincesEnum} from '../../data/data';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfileForm: FormGroup;
  countries = CountriesEnum;
  provinces = ProvincesEnum;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    console.log('Countries: ', this.countries);
    console.log('Provinces: ', this.provinces);
    this.userProfileForm = this.createFormGroup();
    this.userProfileForm.get('fullName').valueChanges
      .subscribe(fullName => console.log('Full name value changed: ', fullName));

    this.userProfileForm.get('dropdownGroup.country').valueChanges
      .subscribe(country => console.log('Country value changed: ', country));

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


