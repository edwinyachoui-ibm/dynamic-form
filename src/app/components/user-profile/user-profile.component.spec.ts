import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileComponent } from './user-profile.component';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Prov dropdown value should change after select Country ', () => {
    const form = component.userProfileForm;
    const countryInput = form.controls.country;
    const provInput = form.controls.province;
    countryInput.setValue('Canada');
    // expect(form.getProv.contain('ON')).toBeTruthy();
    // expect(form.getProv.contain('CALIFORNIA')).toBeFalsy();
  });
});
