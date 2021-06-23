import { Injectable } from '@angular/core';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  selectedUser?: User;
}
