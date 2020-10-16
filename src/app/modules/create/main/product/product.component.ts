import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductInfoComponent } from './product-info/product-info.component';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productno: number;
  constructor(private localStorage: LocalStorage,
              private router: Router) { }

  ngOnInit() {
  }

  add() {
    window.localStorage.setItem('product_no', this.productno.toString());

    this.router.navigate([
      'dashboard/create/product-info'
    ]);
  }

}
