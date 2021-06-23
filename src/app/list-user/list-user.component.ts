import { Component, OnInit } from '@angular/core';
import { USERS } from 'src/list-user';
import { User } from 'src/models/user';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users = USERS;

  constructor(private common: CommonService) { }
  displayUser (user: User): void{
    this.common.selectedUser = user;
    console.log(this.common.selectedUser);
  }

  ngOnInit(): void {
  }
}
