import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogServiceService {
  private apiUrl = 'https://dogapi.dog/api/v2/breeds';

  constructor(private http: HttpClient) { }

  getRequest(url=this.apiUrl): Observable<any> {
    return this.http.get(url);
  }
}
