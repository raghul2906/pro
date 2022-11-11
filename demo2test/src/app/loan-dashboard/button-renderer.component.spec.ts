import { ComponentFixture, TestBed ,fakeAsync,tick, inject } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import {By} from '@angular/platform-browser';
import {ButtonRendererComponent } from "./button-renderer.component"
import { AgGridModule } from 'ag-grid-angular';
import { Params } from '@angular/router';


describe(' LoanDashboardComponent', () => {
  let component:  ButtonRendererComponent;
  let fixture: ComponentFixture< ButtonRendererComponent>;
  let params:{};
  let label: Params;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [ReactiveFormsModule, AgGridModule],
      declarations: [  ButtonRendererComponent ],

    })
    .compileComponents();

    fixture = TestBed.createComponent( ButtonRendererComponent);
    component = fixture.componentInstance;
    component.label;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call refresh',()=>{
    spyOn(component,'refresh').and.callThrough();
    component.refresh(params);
    expect(component.refresh).toHaveBeenCalled();
  
  })

  it('should call onClick',()=>{
    spyOn(component,'onClick').and.callThrough();
    component.onClick(params);
    expect(component.onClick).toHaveBeenCalled();
  
  })

  it('should call agInit',()=>{
    spyOn(component,'agInit').and.callThrough();
    component.agInit;
    expect(component.agInit).not.toBeNaN();
  })


})