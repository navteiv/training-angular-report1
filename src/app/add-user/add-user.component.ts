import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  public userForm = new FormGroup({
    username: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl('')
  });
  constructor(private common: CommonService, private _router: Router) {
  }

  addUser (): void{
    this.common.users.push(this.userForm.value);
    this._router.navigate(['/list']);
  }
  ngOnInit(): void {
  }
}
