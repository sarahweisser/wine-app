import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, EMPTY, Subject } from 'rxjs';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';
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
      tap(data => console.log('Users: ', JSON.stringify(data))),
      map(users => 
        users.map(user => ({
          ...user,
          fullName: `${user.firstName} ${user.lastName}`
        }) as UserRegistration)),
      catchError(err => {
        // TODO create appropriate error handling
        console.log(err);
        return EMPTY;
      })
    );

  private userSelectedSubject = new Subject<number>();
  userSelectedAction$ = this.userSelectedSubject.asObservable();

  selectedUser$ = combineLatest([
    this.users$,
    this.userSelectedAction$
  ]).pipe(
    map(([users, selectedUserId]) =>
      users.find(user => user.id === selectedUserId)
    ),
    tap(user => console.log('selected user', user)),
    shareReplay(1)
  );

  selectedUserChanged(selectedUserId: number): void {
    this.userSelectedSubject.next(selectedUserId);
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