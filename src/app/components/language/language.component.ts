import {Component, OnInit} from '@angular/core';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';

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

  constructor() {
  }

  ngOnInit(): void {
    this.defaultLang = localStorage.getItem('lang') || 'en';
    console.log('Lang', this.defaultLang);
  }

  changeLang(lang): void {
    console.log(lang);
    localStorage.setItem('lang', lang);
    window.location.reload();
  }


}
