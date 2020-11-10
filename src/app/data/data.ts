import {marker} from '@biesbjerg/ngx-translate-extract-marker';

export enum CountriesEnum {
  CANADA = 'CANADA',
  US = 'US'
}

export enum ProvincesEnum {
  QUEBEC = 'QUEBEC',
  ONTARIO = 'ONTARIO',
  BC = 'BC',
  CALIFORNIA = 'CALIFORNIA',
  FLORIDA = 'FLORIDA',
  TEXAS = 'TEXAS',
}

export const mapCountryTranslate = new Map<CountriesEnum, string>([
  [CountriesEnum.CANADA, marker('canada')],
  [CountriesEnum.US, marker('us')],
]);

export const mapProvinceTranslate = new Map<ProvincesEnum, string>([
  [ProvincesEnum.TEXAS, marker('tx')],
  [ProvincesEnum.FLORIDA, marker('fl')],
  [ProvincesEnum.CALIFORNIA, marker('cali')],
  [ProvincesEnum.QUEBEC, marker('qc')],
  [ProvincesEnum.BC, marker('bc')],
  [ProvincesEnum.ONTARIO, marker('on')],
]);

export const mapProvinces = new Map<CountriesEnum, string[]>([
  [CountriesEnum.CANADA, [mapProvinceTranslate.get(ProvincesEnum.QUEBEC),
    mapProvinceTranslate.get(ProvincesEnum.ONTARIO), mapProvinceTranslate.get(ProvincesEnum.BC)]],
  [CountriesEnum.US, [mapProvinceTranslate.get(ProvincesEnum.TEXAS),
    mapProvinceTranslate.get(ProvincesEnum.FLORIDA), mapProvinceTranslate.get(ProvincesEnum.CALIFORNIA)]]
]);

// export const mapProvinces = new Map<CountriesEnum, ProvincesEnum[]>([
//   [CountriesEnum.CANADA, [ProvincesEnum.QUEBEC, ProvincesEnum.ONTARIO, ProvincesEnum.BC]],
//   [CountriesEnum.US, [ProvincesEnum.CALIFORNIA, ProvincesEnum.FLORIDA, ProvincesEnum.TEXAS]]
// ]);








