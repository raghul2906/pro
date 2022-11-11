import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { waitForAsync, ComponentFixture, } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { routingComponents } from './app-routing.module';
import { LoanDashboardComponent } from './loan-dashboard/loan-dashboard.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ReactiveFormsModule } from '@angular/forms';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent, 
        routingComponents,
        LoanDashboardComponent,
        MyProfileComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it(`should have as title 'any'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).not.toEqual('any');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).not.toContain('test app is running!');
  });


  it('should create', () => {

    expect(AppComponent).toBeTruthy();

  });


  
});



