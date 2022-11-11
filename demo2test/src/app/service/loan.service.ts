
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.dev';
import { Loan } from '../models/loan.model';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/loan';

@Injectable({
  providedIn: 'root'
})

export class LoanService {

  constructor(private httpClient : HttpClient) { }

  getLoans() {
   let url = environment.LOAN_BASE_URL+environment.LOAN.GET_ALL_LOAN;
   return this.httpClient.get(url);
  }

  createLoan(body): Observable<Loan> {
    let url = environment.LOAN_BASE_URL+environment.LOAN.POST;
    return this.httpClient.post<Loan>(url,body);
  }

}