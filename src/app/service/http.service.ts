import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  /**
   * server API URL
   */
  private sendInfo = `${environment.apiUrl}/v1/api/post`;
  private getAllUserInfoURL = `${environment.apiUrl}/v1/api/user-list`;
  private getUserInfoByIdURL = `${environment.apiUrl}/v1/api/user-data/`;

  /**
   * meathod that posts the user Information to the server
   * @param data the user Information Object
   */
  sendUserSysInfo(data: any) {
    return this.http.post(this.sendInfo, data);
  }

  getAllUserInfo() {
    return this.http.get(this.getAllUserInfoURL);
  }

  getUserInfoById(id: any) {
    return this.http.get(`${this.getUserInfoByIdURL}${id}`);
  }
}
