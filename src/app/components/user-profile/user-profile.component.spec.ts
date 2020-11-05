import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileComponent } from './user-profile.component';
import {CountriesEnum, mapProvinces} from '../../data/data';
import {FormBuilder} from '@angular/forms';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileComponent ],
      providers: [FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('The prov dropdown value should change to canada prov when country value change to Canada', () => {
    const form = component.userProfileForm;
    const countryInput = form.controls.country;
    const provInput = form.controls.province;
    countryInput.setValue('Canada');
    expect(form.get('province').value === mapProvinces.get(CountriesEnum.CANADA)).toBeTruthy();
  });
});
