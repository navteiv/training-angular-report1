import { Router } from '@angular/router';
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
  users: any;
  public searchName = '';
  constructor(private common: CommonService) {
    this.users = common.users;
   }
  displayUser (user: User): void{
    const index: number = this.users.indexOf(user);
    this.common.ind = index;
    this.common.selectedUser = user;
    console.log(this.common.selectedUser);
  }
  deleteUser (user: User): void{
    const index: number = this.users.indexOf(user);
    if(index !== -1){
      this.common.users.splice(index, 1);
    }
  }
  Search(){
    this.users = this.common.users.filter(res =>{
      return res.username.toLocaleLowerCase().match(this.searchName.toLocaleLowerCase());
    });
  }
  ngOnInit(): void {
  }
}
