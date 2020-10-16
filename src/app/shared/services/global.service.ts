import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Product } from './../models/product';
@Injectable({
    providedIn: 'root'
  })
export class GlobalService {

  prodno: number;

  constructor(protected localStorage: LocalStorage) {
  }



saveProductToLocalStorage(productNumber: string,  product: Product[]) {
    return this.localStorage.setItem(productNumber, product);
  }

}
