import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private apiUrl = 'http://localhost:3000/cartItem';
  private httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
   };
  constructor(private http :HttpClient) { }

  getCartItem():Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }


  findAndUpdate(item: any) {
    this.getCartItem().subscribe((data) => {
      const itemsArray = Array.isArray(data) ? data : [];
      const product = itemsArray.find((dataItem: any) => dataItem.name === item.name);
      if (product) {
        product.quantity += item.quantity;
        product.price += item.price;
        this.http.put<any>(`${this.apiUrl}/${product.id}`, product, this.httpOptions)
          .subscribe({
            next: (res) => { console.log('Updated:', res); console.log(res.id) },
            error: (err) => console.error('Error:', err),
            complete: () => console.log('Item updated in cart')
          });
      } else {

        this.http.post<any>(this.apiUrl, item, this.httpOptions)
          .subscribe({
            next: (res) => console.log('Success:', res),
            error: (err) => console.error('Error:', err),
            complete: () => console.log('Item added into cart')
          });
      }
    });
  }

  // deleteItem(item: any): Observable<any> {
  //   return this.http.delete<any>(this.apiUrl, this.httpOptions);
  // }

   
}
