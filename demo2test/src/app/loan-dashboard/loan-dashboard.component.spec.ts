import { ComponentFixture, TestBed,fakeAsync,tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoanDashboardComponent } from './loan-dashboard.component';
import { AgGridModule } from 'ag-grid-angular';
import { By } from '@angular/platform-browser';

describe('LoanDashboardComponent', () => {
  let component: LoanDashboardComponent;
  let fixture: ComponentFixture<LoanDashboardComponent>;  
  let params:{startEditingCell};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      
      declarations: [ LoanDashboardComponent ],
      imports: [FormsModule, AgGridModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  

  it('should call onRowEditingStopped',()=>{
    spyOn(component,'onRowEditingStopped').and.callThrough();
    component.onRowEditingStopped(params);
    expect(component.onRowEditingStopped).toHaveBeenCalled();
  })


  it('should call onEditButtonClick',()=>{
    spyOn(component,'onEditButtonClick').and.callThrough();
    component.onEditButtonClick(params);
    expect(component.onEditButtonClick(params)).toBeUndefined();
  })


  it('should call onGridReady',()=>{
    spyOn(component,'onGridReady').and.callThrough();
    component.onGridReady(params);
    expect(component.onGridReady).toHaveBeenCalledTimes(1);
  
  })

});
