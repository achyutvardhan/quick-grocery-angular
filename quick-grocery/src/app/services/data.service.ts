import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,of } from 'rxjs';
import { tap , shareReplay } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000/product';
  private cache : any;
  constructor(private http: HttpClient) { }

  getProducts() : Observable<any>{
    if(this.cache){
      return of(this.cache);
    }
    return this.http.get<any>(this.apiUrl).pipe(
      tap(data => this.cache = data),
      shareReplay(1)
    );
  }
  
}
