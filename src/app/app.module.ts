import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbLayoutModule, NbThemeModule, NbSidebarModule, NbButtonModule, NbMenuModule, NbListModule, NbCardModule, NbUserModule, NbInputModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbLayoutModule,
    RouterModule,
    NbButtonModule,
    NbSidebarModule.forRoot(),
    NbThemeModule.forRoot(),
    NbMenuModule.forRoot(),
    NbEvaIconsModule,
    FormsModule,
    NbListModule,
    NbCardModule,
    NbUserModule,
    NbInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
