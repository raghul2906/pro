import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { AccountService } from './service/api.service';
//Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';;
import {MatTableModule} from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar';


import { AppRoutingModule , routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoanDashboardComponent } from './loan-dashboard/loan-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AccountinformationComponent } from './accountinformation/accountinformation.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoanDashboardComponent,
    AccountinformationComponent,
    MyProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgGridModule,
    AppRoutingModule,
    BrowserAnimationsModule , 
    MatButtonModule ,
    MatIconModule ,
    MatListModule ,
    MatSidenavModule ,
    MatToolbarModule,
    LayoutModule ,
    MatProgressBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule ,
    ReactiveFormsModule,
    MatFormFieldModule, 
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
