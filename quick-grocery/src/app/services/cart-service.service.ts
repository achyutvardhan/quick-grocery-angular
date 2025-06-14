import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private apiUrl = 'http://localhost:3000/cartItem';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private cartItemsSource = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSource.asObservable();

  constructor(private http: HttpClient) {
    this.loadInitialCart();
  }

  private loadInitialCart() {
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (items) => this.cartItemsSource.next(items || []),
      error: (err) => {
        console.error('Error loading initial cart:', err);
        this.cartItemsSource.next([]); 
      }
    });
  }

  getCartItem(): Observable<any[]> {
    return this.cartItems$;
  }


  private refreshCart() {
    return this.http.get<any[]>(this.apiUrl).pipe(
      tap(items => this.cartItemsSource.next(items || []))
    );
  }

  findAndUpdate(item: any) { 
    this.http.get<any[]>(`${this.apiUrl}?name=${item.name}`).subscribe(existingItems => {
      const product = existingItems.length > 0 ? existingItems[0] : null;
      if (product) {
        product.quantity += item.quantity;
        this.http.put<any>(`${this.apiUrl}/${product.id}`, product, this.httpOptions)
          .subscribe({
            next: (res) => {
              console.log('Updated:', res);
              this.refreshCart().subscribe();
            },
            error: (err) => console.error('Error updating item:', err),
          });
      } else {
        this.http.post<any>(this.apiUrl, item, this.httpOptions)
          .subscribe({
            next: (res) => {
              console.log('Added:', res);
              this.refreshCart().subscribe();
            },
            error: (err) => console.error('Error adding item:', err),
          });
      }
    });
  }

  findAndUpdateCart(item: any) { 
    if (item.id) {
      this.http.put<any>(`${this.apiUrl}/${item.id}`, item, this.httpOptions)
        .subscribe({
          next: (res) => {
            console.log('Cart Updated:', res);
            this.refreshCart().subscribe();
          },
          error: (err) => console.error('Error updating cart item:', err),
        });
    } else { 
        this.http.get<any[]>(`${this.apiUrl}?name=${item.name}`).subscribe(existingItems => {
            const product = existingItems.length > 0 ? existingItems[0] : null;
            if (product) {
                product.quantity = item.quantity;
                 this.http.put<any>(`${this.apiUrl}/${product.id}`, product, this.httpOptions)
                .subscribe({
                    next: (res) => {
                        console.log('Cart Updated (fallback):', res);
                        this.refreshCart().subscribe();
                    },
                    error: (err) => console.error('Error updating cart item (fallback):', err),
                });
            }
        });
    }
  }

  deleItemFromCart(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`, this.httpOptions).pipe(
      tap(() => {
        this.refreshCart().subscribe();
      })
    );
  }
}
