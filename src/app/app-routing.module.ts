import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './feature/home/home.component';
import {UserProfileComponent} from './feature/user-profile/user-profile.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'user-form', component: UserProfileComponent},
  {path: '**' , component: HomeComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }



