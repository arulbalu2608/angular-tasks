import { Component, OnInit } from '@angular/core';
import { FakeProductService } from '../services/fake-product.service';
import { FakeProduct } from '../shared/interface';

@Component({
  selector: 'app-fake-product',
  templateUrl: './fake-product.component.html',
})
export class FakeProductComponent implements OnInit {

  constructor(public productService: FakeProductService) { }

  product: FakeProduct[] = []

  getProductList = (): void => {
    this.productService.getProduct().subscribe((data) => {
      this.product = data
    })
  }

  ngOnInit() {
    this.getProductList()
  }

}
