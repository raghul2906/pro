
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.dev';
import { Profile } from '../models/profile.model';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/profile';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  constructor(private httpClient : HttpClient) { }

  getProfiles() {
   let url = environment.PROFILE_BASE_URL+environment.PROFILE.GET_ALL_PROFILE;
   return this.httpClient.get(url);
  }

  createProfile(body): Observable<Profile> {
    let url = environment.PROFILE_BASE_URL+environment.PROFILE.POST;
    return this.httpClient.post<Profile>(url,body);
  }

}