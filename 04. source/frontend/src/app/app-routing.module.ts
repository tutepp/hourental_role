import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './category/create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoleListComponent } from './role/role-list/role-list.component';
import { RoleUpdateComponent } from './role/role-update/role-update.component';

const routes: Routes = [
  {
    path: 'admin/category/create',
    component: CreateComponent
  },
  {
    path: 'role',
    component: RoleListComponent
  },
  {
    path: 'role/edit/:id',
    component: RoleUpdateComponent
  },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
