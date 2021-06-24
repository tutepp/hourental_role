import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role } from './model/role';


@Injectable({
  providedIn: 'root'
})
export class RoleService {

  baseUrl: any;


  constructor(private http: HttpClient) {
  }


  getRoleList() : Observable<Role[]> {
    return this.http.get<Role[]>(`${environment.apiUrl}role/list`);
  }
  deleteRole(id: number): Observable<Role[]> {
    return this.http.delete<Role[]>(`${environment.apiUrl}role/list/${id}`);
  }

  updateRole(id: number, role:any): Observable<Role[]> {
    return this.http.post<Role[]>(`${environment.apiUrl}role/update/${id}`, role);
  }
  findById(id:number):Observable<Role[]> {
    return this.http.get<Role[]>(`${environment.apiUrl}role/edit/${id}`);
  }
}
