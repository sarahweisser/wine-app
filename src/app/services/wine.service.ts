import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { WineRegistration } from '../models/wine-registration';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class WineService {

  private wineUrl = '/server/api/v1/wines';

  constructor(private http:HttpClient) {

  }

  wines$ = this.http.get(this.wineUrl)
    .pipe(
      tap(data => console.log('Wines: ', JSON.stringify(data))),
      catchError(this.handleError)
    );

  private handleError(err: any): Observable<never> {
    // TODO create appropriate error handling
    let errorMessage: string = "ERROR_MESSAGE";
    console.error(err);
    return throwError(errorMessage);
  }

  getWine(id: number) {
    return this.http.get('/server/api/v1/wines/' + id);
  }

  createWine(wine: WineRegistration) {
    let body = JSON.stringify(wine)
    return  this.http.post('/server/api/v1/wines', body, httpOptions);
  }

  
  deleteWine(id: number) {
    return this.http.delete('/server/api/v1/wines/' + id);
  }

}
