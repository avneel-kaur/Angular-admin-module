import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl="http://localhost:8080/api/v1/admin";
  private baseUrl2="http://localhost:8080/api/v1";
   constructor(private httpClient: HttpClient) { }

   createAdmin(admin: Admin): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, admin);
   }

   validateLogin(name: string, password: string){
    return this.httpClient.get(`${this.baseUrl2}/${name}/${password}`);
   }

   getAllAdmin():Observable<Admin[]>{
    return this.httpClient.get<Admin[]>(`${this.baseUrl}`);
   }

   deleteAdmin(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
