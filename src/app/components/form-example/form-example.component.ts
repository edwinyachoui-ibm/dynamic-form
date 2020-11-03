import {Component, OnInit} from '@angular/core';
import {FormBuilder, NgForm, Validators} from '@angular/forms';
import {CITIES, COUNTRIES, PROVINCES} from '../../data/data';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.scss']
})
export class FormExampleComponent implements OnInit {

  countries = COUNTRIES;
  provinces = PROVINCES;
  cities = CITIES;

  constructor() {
  }

  ngOnInit(): void {
  }

  onCountrySelect(countryId): void {
    this.provinces = PROVINCES;
    this.provinces = this.provinces.filter((province) => province.countryId === countryId);
  }

  onProvinceSelect(provinceId): void {
    this.cities = CITIES;
    this.cities = this.cities.filter((city) => city.provinceId === provinceId);
  }

  onSubmit(f: NgForm): void {
    console.log(f);
  }

}
