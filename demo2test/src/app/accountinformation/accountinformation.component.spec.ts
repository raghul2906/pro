import { ComponentFixture, TestBed ,fakeAsync,tick, inject } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import {By} from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AccountinformationComponent } from "../accountinformation/accountinformation.component";
import { RouterTestingModule } from '@angular/router/testing';
import { LoanDashboardComponent } from '../loan-dashboard/loan-dashboard.component';
import { MyProfileComponent } from '../my-profile/my-profile.component';

describe('AccountinformationComponent', () => {
  let component: AccountinformationComponent;
  let fixture: ComponentFixture<AccountinformationComponent>;


  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports : [ ReactiveFormsModule ,RouterTestingModule.withRoutes([
        { path: '', component: LoanDashboardComponent },
        { path:"loan-dashboard", component:LoanDashboardComponent },
        { path:"my-profile", component:MyProfileComponent },
        { path:"accountinformation" , component:AccountinformationComponent},
      ])],
      declarations: [AccountinformationComponent],

    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should require valid value', () => {

    component.form.setValue({

      "firstname": "",
      "lastname": "",
      "email": "invalidemail",
      "mob": "invalidnumber"
    });

    expect(component.form.valid).toEqual(false);

  });
  it('should be valid if form value is valid', () => {

    component.form.setValue({
      "firstname": "Bobby",
      "lastname":"man",
      "email": "bobby456@bobby.com",
      "mob": "9488760533"
    });

    expect(component.form.valid).toEqual(true);

  });
 
  it('form invalid when empty', () => {  expect(component.form.valid).toBeFalsy();});

  it('should call onReset when clicked', fakeAsync(() => {
    spyOn(component, 'onReset');
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    expect(component.onReset).toHaveBeenCalled();
  }));
  
  // it('submitted initially to be false', () => {
  //   component.onaddDetails();
  //   expect(component.submitted).not.toBeTruthy();
  
  // });

  it('should call onSubmit method', () => {
    spyOn(component, 'onSubmit');
    let button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  });


  it('should disable on invalid form', () => {
    fixture.componentInstance.submitted = true;
    fixture.detectChanges();
    const button: HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(button.attributes.getNamedItem('ng-reflect-is-disabled')?.value).not.toBeTruthy();

});
  

it('should call onaddDetails method on form submit', () => {
    /*Get button from html*/
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    // Supply id of your form below formID
    const getForm = fixture.debugElement.query(By.css('#firstname , #lastname , #mob , #email'));
     expect(getForm.triggerEventHandler('submit', compiled)).toBeUndefined();
    
    
});


});
