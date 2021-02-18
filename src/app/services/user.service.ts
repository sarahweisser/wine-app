import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';
import { UserRegistration} from '../models/user-registration';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('/server/api/v1/users');
  }

  getUser(id: number) {
    return this.http.get('/server/api/v1/users/' + id);
  }

  createUser(user: UserRegistration) {
    
    let body = JSON.stringify(user);
    console.log(body);
    return this.http.post('/server/api/v1/users', body, httpOptions);
  }

  deleteUser(id: number) {
    return this.http.delete('/server/api/v1/users/' + id);
  }

}