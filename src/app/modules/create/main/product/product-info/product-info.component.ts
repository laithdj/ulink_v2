import { Component, OnInit, ViewChild } from '@angular/core';
import { GlobalService } from 'src/app/shared/services/global.service';
import { Product } from './../../../../../shared/models/product';
import { ProductComponent } from '../product.component';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {

  product: Product = new Product();
  productcount = 1;
  prodno: number;
  productArray = [];
  constructor(private globalService: GlobalService,
              private localStorage: LocalStorage) { }

  ngOnInit() {
    this.prodno = parseInt(window.localStorage.getItem('product_no'), 10);
  }

  nextProduct() {
    this.productArray.push(this.product);
    this.product = new Product();
    this.productcount = this.productcount + 1;

    if (this.productcount === this.prodno) {
    this.globalService
      .saveProductToLocalStorage( 'products', this.productArray);

  }
  }
}
