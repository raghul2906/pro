import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoanService } from '../service/loan.service';
import { ButtonRendererComponent } from './button-renderer.component';
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';
import { ColDef, GridApi, SelectionChangedEvent } from 'ag-grid-community';

@Component({
  selector: 'app-loan-dashboard',
  template: `
    <button (click)="getSelectedRowData()">Get Selected Rows</button>
    <ag-grid-angular
    style="width: 900px; height: 800px; margin-left: 230px; margin-top: 10px;"
      class="ag-theme-alpine"
      [columnDefs]="columnDefs"
      [defaultColDef]="defaultColDef"
      [rowData]="rowData"
      [editType]="'fullRow'"
      (rowEditingStopped)="onRowEditingStopped"
      [frameworkComponents]="frameworkComponents"
      (gridReady)="onGridReady($event)"
      (selectionChanged)="onSelectionChanged($event)"
      rowSelection="multiple"
    ></ag-grid-angular>
  `,
  styles: ['button { margin-left: 230px; margin-top: 50px; }'],
  styleUrls: ['./loan-dashboard.component.css']
})
export class LoanDashboardComponent {
  frameworkComponents: any;
  private gridApi: GridApi;
  gridOptions: any;
  loanResult : any;
  loanList : any;
  loanlive : any;
  name : any;

  public columnDefs: ColDef[] = [
    {
      headerName:'LOAN ID',
      field: 'loanid',
      editable: false,
      minWidth: 100,
      flex:1
    },
    {
      headerName:'PURPOSE OF LOAN',
      field: 'purposeofloan',
      editable: true,
      maxWidth: 250,
      flex:1
    },
    {
      headerName:'STATUS',
      field: 'status',
      editable: false,
      minWidth: 100,
      flex:1
    },
 {
    headerName: 'EDIT',
    minWidth: 100,
    cellRenderer: 'buttonRenderer',
    cellRendererParams: {
    onClick: this.onEditButtonClick.bind(this),
    label: 'EDIT'
    },
  },
  // {
  //   headerName: 'SAVE',
  //   cellRenderer: 'buttonRenderer',
  //   cellRendererParams: {
  //   onClick: this.onSaveButtonClick.bind(this),
  //   label: 'SAVE'
  //   },
  // },
  ];
  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
  };
  public rowData: any[];

  constructor(private http: HttpClient, public loanservice : LoanService) {
    this.frameworkComponents = {
            buttonRenderer: ButtonRendererComponent,
          }
          this.getLoans();
  }


  getSelectedRowData() {
    const selectedData = this.gridApi.getSelectedRows();
    alert(`Selected Data:\n${JSON.stringify(selectedData)}`);
    return selectedData;
  }

  onSelectionChanged(event: SelectionChangedEvent) {
    const selectedData = this.gridApi.getSelectedRows();
    console.log('Selection Changed', selectedData);
  }
onRowEditingStopped(params)
{
  debugger;
}

onEditButtonClick(params)
{
  this.gridApi.startEditingCell
({
    rowIndex: params.rowIndex,
    colKey: 'purposeofloan'
  });
}

onSaveButtonClick(params)
{
 this.gridApi.stopEditing();
}

  onGridReady(params) {
    this.gridApi = params.api;

    this.http
      .get<any[]>(
        'https://mocki.io/v1/b8f1d773-6307-49fb-ba9a-56d51bb31a89'
      )
      .subscribe((data : any) => {
        this.rowData = data;
      });
   }
   getLoans() {
    this.loanservice. getLoans().subscribe((data : any[]) => {
       this.loanResult = data;
       this.loanList = this.loanResult.results;
       console.log(this.loanResult);
    });
  }

}
