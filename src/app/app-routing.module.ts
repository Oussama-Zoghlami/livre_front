import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignComponent } from './sign/sign.component';
import { AdminComponent } from './admin/admin.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  {path:'',component:SignComponent},
  {path:'adminBoard',component:AdminComponent},
  {path:'accueil',component:AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
