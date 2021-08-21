import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from "./shared/components/error-page/error-page.component";
import { HeaderLayoutComponent } from "./shared/components/header-layout/header-layout.component";
import { HomePageComponent } from "./home/home.component";
import { RegisterComponent } from './home/register/register.component';

const routes: Routes = [
  {
    path: '', component: HeaderLayoutComponent, children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: HomePageComponent },
      { path: 'task/:id', component: HomePageComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule),
  },
  { path: 'error', component: ErrorPageComponent },
  { path: '**', redirectTo: '/error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


