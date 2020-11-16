import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserInfoModel, UserLocationModel} from '../model/form-values.model';
import {UserInfo} from '../DTO/user-info';
import {delay, map} from 'rxjs/operators';
import {UserLocationDTO} from '../DTO/user-location';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor(private http: HttpClient) { }

  getUserInformation(id: string): Observable<UserInfo> {
    return this.http.get<UserInfoModel>(`/api/userInfo/${id}`)
      .pipe(map(response => new UserInfo(response)));
      // .pipe(map(response => new UserInfo(response))).pipe(delay(3000));
  }

  getLocalisationInformation(id: string): Observable<UserLocationDTO> {
    return this.http.get<UserLocationModel>(`/api/userLocation/${id}`)
      .pipe(map(response => new UserLocationDTO(response)));
  }
}
