import { HttpService } from './../../service/http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-submitted-data',
  templateUrl: './user-submitted-data.component.html',
  styleUrls: ['./user-submitted-data.component.scss']
})
export class UserSubmittedDataComponent implements OnInit {
  longitude: any;
  latitude: any;
  browser: any;
  version: any;
  prefferedLanguage: any;
  userInterst: any;

  id: any;
  constructor(private route: ActivatedRoute, private apiService: HttpService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.getData(this.id);
  }

  getData(id: any) {
    this.apiService.getUserInfoById(id).subscribe(
      (res: any) => {
        this.longitude = res.data[0].location.coordinates[1];
        this.latitude = res.data[0].location.coordinates[0];
        this.prefferedLanguage = res.data[0].prefferedLanguages;
        this.browser = res.data[0].browser;
        this.version = res.data[0].browserVersion;
        this.userInterst = res.data[0].userInterest;
      }
    );
  }

}
