import {ChangeDetectionStrategy, Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-manager';
  items: NbMenuItem[] = [
 {
   title: "List User",
   icon: 'list-outline',
   link: '/'
 },
 {
   title: "User Information",
   link: 'detail',
   icon: 'person-outline'
 }
];
}
