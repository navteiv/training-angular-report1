import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  selectedUser?: User;
  constructor(private common: CommonService) {
    this.selectedUser = common.selectedUser;
  }
  ngOnInit(): void {
  }
}
