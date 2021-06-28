import { Injectable } from '@angular/core';
import { USERS } from 'src/list-user';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  selectedUser?: User;
  users = USERS;
  ind?: number;
}
