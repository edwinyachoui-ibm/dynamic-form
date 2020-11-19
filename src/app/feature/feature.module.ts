import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {HomeComponent} from './home/home.component';
import {SharedModule} from '../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';



@NgModule({
  declarations: [
    UserProfileComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule
  ],
  exports: [
    UserProfileComponent,
    HomeComponent,
  ]
})
export class FeatureModule { }
