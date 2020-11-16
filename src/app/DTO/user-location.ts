import {UserLocationModel} from '../model/form-values.model';

export class UserLocationDTO {
  country: string;
  province: string;

  constructor(private model: UserLocationModel) {
    this.country = model && model.Country || '';
    this.province = model && model.ProVince || '';
  }
}
