import {Component, OnInit} from '@angular/core';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';
import {TranslateService} from '@ngx-translate/core';

interface Languages {
  code: string;
  value: string;
}

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  languages: Languages[] = [
    {code: 'en', value: 'English'},
    {code: 'fr', value: 'Francais'}
  ];
  defaultLang;

  constructor(private translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.defaultLang = localStorage.getItem('lang') || 'en';
    console.log('Lang', this.defaultLang);
  }

  changeLang(lang): void {
    console.log(lang);
    localStorage.setItem('lang', lang);
    this.translateService.use(lang);
  }


}
