// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Account } from '../models/account.model';

// const baseUrl = 'http://localhost:8080/account/details';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {

//   constructor(private http: HttpClient) { }

//   getAll(): Observable<Account[]> {
//     return this.http.get<Account[]>(baseUrl);
//   }

//   get(id: any): Observable<Account> {
//     return this.http.get<Account>(`${baseUrl}/${id}`);
//   }

//   create(data: any): Observable<any> {
//     return this.http.post(baseUrl, data);
//   }

//   update(id: any, data: any): Observable<any> {
//     return this.http.put(`${baseUrl}/${id}`, data);
//   }

//   delete(id: any): Observable<any> {
//     return this.http.delete(`${baseUrl}/${id}`);
//   }

//   deleteAll(): Observable<any> {
//     return this.http.delete(baseUrl);
//   }

//   findByTitle(title: any): Observable<Account[]> {
//     return this.http.get<Account[]>(`${baseUrl}?title=${title}`);
//   }
// }



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.dev';
import { Account } from '../models/account.model';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/account';

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  constructor(private httpClient : HttpClient) { }

  getAccounts() {
   let url = environment.ACCOUNT_BASE_URL+environment.ACCOUNT.GET_ALL_ACCOUNT;
   return this.httpClient.get(url);
  }

  createAccount(body): Observable<Account> {
    let url = environment.ACCOUNT_BASE_URL+environment.ACCOUNT.POST;
    return this.httpClient.post<Account>(url,body);
  }

}