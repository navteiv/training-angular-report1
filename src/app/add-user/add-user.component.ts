import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { CommonService } from '../Services/common.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  // userForm = new FormGroup({
  //   username: new FormControl(''),
  //   phone: new FormControl(''),
  //   email: new FormControl('')
  // });
  userForm = this.fb.group({
    username: [''],
    phone: [''],
    email: ['']
  });

  selectedUser?: User;
  constructor(private common: CommonService, private _router: Router, private fb: FormBuilder) {
    this.selectedUser = common.selectedUser;
  }

  addUser (): void{
    this.common.users.push(this.userForm.value);
    this._router.navigate(['/list']);
  }
  ngOnInit(): void {
  }
}
