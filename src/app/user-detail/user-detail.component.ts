import { Identifiers } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  selectedUser?: User;
  userForm = this.fb.group({
    username: [''],
    phone: [''],
    email: ['']
  });
  constructor(private common: CommonService, private fb: FormBuilder, private _router: Router) {
    this.selectedUser = common.selectedUser;
  }
  updateUser(): void{
    let b = <number>this.common.ind; //ép kiểu để tránh undefined
    this.common.users[b] = this.userForm.value;

    console.log(b);
    this._router.navigate(['/list']);
  }
  ngOnInit(): void {
    this.userForm.patchValue({
      username: this.selectedUser?.username,
      phone: this.selectedUser?.phone,
      email: this.selectedUser?.email
    });

  }
}
