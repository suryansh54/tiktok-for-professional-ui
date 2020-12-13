// Core files
import { Component, OnInit } from '@angular/core';

// Service files
import { HttpService } from '../../service/http.service';

// Data files
import { InterestData } from '../../interest-data';

@Component({
  selector: 'app-select-interest',
  templateUrl: './select-interest.component.html',
  styleUrls: ['./select-interest.component.scss']
})
export class SelectInterestComponent implements OnInit {
  userInfo = {};
  location = {};
  selected: any[] = [];
  minSelection = 4;
  remainsSelection = 4;
  buttonWidth = 0;
  interestInformation = InterestData;
  isInterestSubmit: boolean = false;

  /**
   * conponent constructor
   * @param apiService the http service to contact with our custom API
   */
  constructor(private apiService: HttpService) { }

  /**
   *  A life cycle hook of Angular that is call as soon as the component is initilized
   */
  ngOnInit() {
    this.getUserInfo();
  }

  /**
   * A class meathod that finds out the basic information of the user like location (if allowed), prefferd language etc..
   */
  getUserInfo() {
    Object.assign(this.userInfo, { languages: window.navigator.languages });
    navigator.geolocation.getCurrentPosition(
      (res: any) => {
        Object.assign(this.location, { coordinates: [res.coords.latitude, res.coords.longitude], accuracy: res.coords.accuracy });
      },
      (err: any) => {
        
      }, {
      enableHighAccuracy: true
    }
    );

    Object.assign(this.userInfo, { geolocation: this.location });

  }

  /**
   * A meathod that saves the interest of the user in an temperory array before it saves it into the database
   * @param item interest selected by the user
   */
  getSelected(item: any) {
    item.active = !item.active;
    if (item.active) {
      this.selected.push({ general: item.title, specific: [] });
    } else {
      const index = this.selected.map(function (e) { return e.title; }).indexOf('item.title');
      this.selected.splice(index, 1);
    }
    this.remainsSelection = this.minSelection - this.selected.length;
    this.buttonWidth = (100 / this.minSelection) * this.selected.length;
  }

  /**
   * A method that creates the final user information Object
   */
  createUserInfo() {
    Object.assign(this.userInfo, { userInterest: this.selected });
    this.sendInfo();
  }


  selectSubCategory(item: any, title: String) {
    item.active = !item.active
    if(item.active) {
      const index = this.selected.map(function (e) { return e.general; }).indexOf(title);
      this.selected[index].specific.push(item.title);
    } else {
      const index = this.selected.map(function (e) { return e.general; }).indexOf(title);
      let i = this.selected[index].specific.indexOf(item.title);
      this.selected[index].specific.splice(i,1);
    }
  }
  
  /**
   * A meathod that submits the user Information to the API.
   */
  sendInfo() {
    this.apiService.sendUserSysInfo(this.userInfo).subscribe(
      (res: any) => {
        this.isInterestSubmit = true;
      },
      (err: any) => {
        this.isInterestSubmit = false;
        alert('Developer mode: Some issue on backend side');
      }
    );
  }
}
