import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { UserRegistration} from '../models/user-registration';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userRegistrationUrl = '/server/api/v1/users';

  constructor(private http: HttpClient) { }

  users$ = this.http.get<UserRegistration[]>(this.userRegistrationUrl)
    .pipe(
      tap(data => console.log('Products: ', JSON.stringify(data))),
      catchError(this.handleError)
    );

  private handleError(err: any): Observable<never> {
    // TODO create appropriate error handling
    let errorMessage: string = "ERROR_MESSAGE";
    console.error(err);
    return throwError(errorMessage);
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