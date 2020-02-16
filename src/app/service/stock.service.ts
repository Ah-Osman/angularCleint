import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Stock } from '../model/stock';
import {ProductItem} from '../model/product-item';
import {ProductStock} from '../model/product-stock';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StockService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080';
   }

   public findAllStock(): Observable<Stock[]> {
    return this.http.get<Stock[]>(`${this.baseUrl}/stocks`);
  }
  public findAllItemsStock(id: number): Observable<ProductItem[]> {
    return this.http.get<ProductItem[]>(`${this.baseUrl}/stockItems/${id}`);
  }

  public findProductStock(): Observable<ProductStock[]> {
    return this.http.get<ProductStock[]>(`${this.baseUrl}/productStock`);
  }
  public buyProduct(productName: string) {
    return this.http.post<String>(`${this.baseUrl}/buyProduct/${productName}`, null);
  }

    public refillStock(product: ProductItem, stockId: number, amount: number) {
     return this.http.post<ProductItem>(`${this.baseUrl}/refillStock/${stockId}/${amount}`, product);
   }

}
