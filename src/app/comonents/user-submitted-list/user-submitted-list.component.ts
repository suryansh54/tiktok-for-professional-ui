import { HttpService } from './../../service/http.service';
import { Component, OnInit } from '@angular/core';

export interface IUserList {
  id: string;
  date: string
}


@Component({
  selector: 'app-user-submitted-list',
  templateUrl: './user-submitted-list.component.html',
  styleUrls: ['./user-submitted-list.component.scss']
})
export class UserSubmittedListComponent implements OnInit {
  userList :IUserList[] = [];
  displayedColumns: string[] = ['srno', 'id', 'submittedDate'];
  dataSource: any;
  isLoad: boolean = false;
  constructor(private apiService: HttpService){}
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.isLoad = true;
    this.apiService.getAllUserInfo().subscribe(
      (res: any) => {
        for(let i = 0; i<res.user.length;i++) {
          this.userList.push({id: res.user[i]._id, date:res.user[i].creationDate });
        }
        this.isLoad = false;
        this.dataSource = this.userList;
      }, error => {
        this.isLoad = false;
      }
    );
  }

}
