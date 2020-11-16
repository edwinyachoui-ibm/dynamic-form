import {UserInfoModel} from '../model/form-values.model';
import {UserLocationDTO} from './user-location';

export class UserInfo {

  firstName: string;
  lastName: string;
  age: string;
  phoneNumber: string;

  constructor(userInfoModel: UserInfoModel) {
    this.firstName = userInfoModel && userInfoModel.FirstName || '';
    this.lastName = userInfoModel && userInfoModel.LoserName || '';
    this.age = userInfoModel && userInfoModel.Age || '';
    this.phoneNumber = userInfoModel && userInfoModel.Hotline || '';
  }
}
