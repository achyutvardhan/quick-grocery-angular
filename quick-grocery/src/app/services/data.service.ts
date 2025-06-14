import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000/product';
  private cache :any = []
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.cache = this.http.get<any>(this.apiUrl);
  }

   getProductByCategory(category: string): Observable<any> {
      const data  = this.http.get<any>(this.apiUrl);
      return new Observable(observe => {
          data.subscribe((res:any)=>{
            const filteredData = res[category] || [];
            observe.next(filteredData);
            observe.error = (err:any) => {
              console.error('Error fetching data:', err); }
            observe.complete();
          })
      })
   }

   getProductByCategoryAndName(category:string , name:string): Observable<any>{
     return new Observable(observe =>{
        this.getProductByCategory(category).subscribe((data)=>{
          const product = data.find((item:any)=> item.name === name);
          if(product){
            observe.next(product);
            observe.complete();
          }else {
            observe.error('Product not found');
          }
        })
     })
   }

}
