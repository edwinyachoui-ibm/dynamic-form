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


export const mapProvinces = new Map<CountriesEnum, ProvincesEnum[]>([
  [CountriesEnum.CANADA, [ProvincesEnum.QUEBEC, ProvincesEnum.ONTARIO, ProvincesEnum.BC]],
  [CountriesEnum.US, [ProvincesEnum.CALIFORNIA, ProvincesEnum.FLORIDA, ProvincesEnum.TEXAS]]
]);

console.log('Map:', mapProvinces.get(CountriesEnum.US));







