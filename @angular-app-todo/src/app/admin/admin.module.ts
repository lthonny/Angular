import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { LoginPageComponent } from "./login-page/login-page.component";
import { AdminLayoutComponent } from "./shared/components/admin-layout/admin-layout.component";
import { SharedModule } from "../shared/shared.module";
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { CreateTaskPageComponent } from './create-task-page/create-task-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { SearchPipe } from "./shared/pipes/search.pipe";
import { AlertLayoutComponent } from './shared/components/alert-layout/alert-layout.component';
import { AlertService } from "./shared/services/alert-service";
import { FilterPipe } from "./shared/pipes/filter.pipe";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { StyleFilter } from "./shared/directives/styleFilter.directive";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,

    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
          { path: 'login', component: LoginPageComponent },
          { path: 'create', component: CreateTaskPageComponent },
          { path: 'dashboard', component: DashboardPageComponent },
          { path: 'task/:id/edit', component: EditPageComponent }
        ]
      }
    ])
  ],
  exports: [],
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    DashboardPageComponent,
    CreateTaskPageComponent,
    EditPageComponent,
    SearchPipe,
    FilterPipe,
    AlertLayoutComponent,
    StyleFilter
  ],
  providers: [
    AlertService
  ]
})
export class AdminModule { }