import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
// import { Observable } from 'rxjs';
import { WineRegistration } from '../models/wine-registration';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class WineService {

  constructor(private http:HttpClient) {

  }

  getWines() {
    return this.http.get('/server/api/v1/wines');
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
