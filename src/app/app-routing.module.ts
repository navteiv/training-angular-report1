import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {path: "", component: ListUserComponent},
  {path: "detail", component: UserDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
