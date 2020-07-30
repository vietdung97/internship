import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SideMenuPage } from './side-menu.page';


const routes: Routes = [
  {
    path: 'menu',
    component: SideMenuPage,
    
    children: [
      {
        path: 'home',
        loadChildren: '../home/home.module#HomePageModule'

      },
      {
        path: 'login',
        loadChildren: '../components/login/login.module#LoginPageModule'
      },
      {
        path: 'signup',
        loadChildren: '../components/signup/signup.module#SignupPageModule'
      },
    ]
  },
  {
    path: '',
    redirectTo: 'menu/home',
  }

];

@NgModule({ 
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [SideMenuPage]
})
export class SideMenuPageRoutingModule {}
