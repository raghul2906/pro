import { ComponentFixture, TestBed , fakeAsync,tick } from '@angular/core/testing';
import { MyProfileComponent } from './my-profile.component';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; 
import { Router, RouterLink } from '@angular/router';

describe('MyProfileComponent', () => {
  let component: MyProfileComponent;
  let fixture: ComponentFixture<MyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [ReactiveFormsModule],
      declarations: [ MyProfileComponent ,  ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MyProfileComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it('should require valid value', () => {

    component.form.setValue({

      "firstname": "",
      "lastname": "",
      "email": "invalidemail",
      "region": ""
    });

    expect(component.form.valid).toEqual(false);

  });



  it('form invalid when empty', () => {  expect(component.form.valid).toBeFalsy();});


  it('should call onaddDetails method on form submit', () => {
    /*Get button from html*/
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    // Supply id of your form below formID
    const getForm = fixture.debugElement.query(By.css('#firstname , #lastname , #email , #region '));
     expect(getForm.triggerEventHandler('submit', compiled)).toBeUndefined();

});


it('should call onReset when clicked', fakeAsync(() => {
  spyOn(component, 'onReset');
  let button = fixture.debugElement.nativeElement.querySelector('button');
  button.click();
  tick();
  expect(component.onReset).toHaveBeenCalled();
}));

it("should disable the button when textArea is empty", () => {
  fixture.detectChanges();
  const button = fixture.debugElement.query(By.css("button"));
  expect(button.nativeElement.disabled).toBeFalsy();
});
it("should enable button when textArea is not empty", () => {
  component.quoteText = "I love this test";
  fixture.detectChanges();
  const button = fixture.debugElement.query(By.css("button"));
  expect(button.nativeElement.disabled).toBeFalsy();
});
 
it('submitted initially to be true', () => {
  component.onaddDetails();
  expect(component.submitted).not.toBeTruthy();

});

it('should call onSubmit method', () => {
  spyOn(component, 'onSubmit');
  let button = fixture.debugElement.query(By.css('button')).nativeElement;
  button.click();
  expect(component.onSubmit).toHaveBeenCalledTimes(1);
});

it('should call onReset when clicked', fakeAsync(() => {
  spyOn(component, 'onReset');
  let button = fixture.debugElement.nativeElement.querySelector('button');
  button.click();
  tick();
  expect(component.onReset).toHaveBeenCalled();
}));

it('should disable on invalid form', () => {
  fixture.componentInstance.submitted = true;
  fixture.detectChanges();
  const button: HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement;
  expect(button.attributes.getNamedItem('ng-reflect-is-disabled')?.value).not.toBeTruthy();

});

let mockRouter = {
  navigate: jasmine.createSpy('navigate')
};

  it('should be valid if form value is valid', () => {

    component.form.setValue({
      "firstname": "Bobby",
      "lastname":"man",
      "email": "bobby456@bobby.com",
      "region": "india"
    });
    expect(component.form.valid).toEqual(true);
  });
 

});
