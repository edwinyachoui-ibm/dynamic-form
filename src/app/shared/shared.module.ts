import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AgePipe} from './pipe/age-pipe';
import {RadioButtonComponent} from './components/radio-button/radio-button.component';
import {LoaderComponent} from './components/loader/loader.component';
import {InputComponent} from './components/input/input.component';
import {DropdownComponent} from './components/dropdown/dropdown.component';
import {LanguageComponent} from './language/language.component';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [
    RadioButtonComponent,
    LoaderComponent,
    AgePipe,
    InputComponent,
    DropdownComponent,
    LanguageComponent
  ],
  imports: [
    CommonModule,
    MatOptionModule,
    MatSelectModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,


  ],
  providers: [AgePipe],
  exports: [
    MatOptionModule,
    MatSelectModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    RadioButtonComponent,
    LoaderComponent,
    AgePipe,
    InputComponent,
    DropdownComponent,
    LanguageComponent,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule {
}
