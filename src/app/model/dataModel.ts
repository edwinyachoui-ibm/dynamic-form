import {CountriesEnum, ProvincesEnum} from '../data/data';

export interface DataModel {
  id: number;
  name: string;
  provinceId?: number;
  countryId?: number;
}

export interface CountryModel {
  id: CountriesEnum;
}

export interface ProvinceModel {
  id: ProvincesEnum;
}
