import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {UserProfileComponent} from './feature/user-profile/user-profile.component';
import {FormDataService} from './sevices/form-data.service';
import {LoaderService} from './shared/services/loader.service';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './feature/home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {FeatureModule} from './feature/feature.module';


export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule,
    AppRoutingModule,
    SharedModule,
    FeatureModule
  ],
  providers: [HttpClient, FormDataService, LoaderService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {
}
