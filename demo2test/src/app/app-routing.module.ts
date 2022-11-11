import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountinformationComponent } from './accountinformation/accountinformation.component';
import { LoanDashboardComponent } from './loan-dashboard/loan-dashboard.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
export const routes: Routes = [
  {
    path:"", component:LoanDashboardComponent,
  },
  {
    path:"loan-dashboard", component:LoanDashboardComponent,  
  },
  {
    path:"my-profile", component:MyProfileComponent,
  }, 
  {
    path:"accountinformation" , component:AccountinformationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule ]
})
export class AppRoutingModule { }
export const routingComponents =[LoanDashboardComponent , MyProfileComponent , AccountinformationComponent]
