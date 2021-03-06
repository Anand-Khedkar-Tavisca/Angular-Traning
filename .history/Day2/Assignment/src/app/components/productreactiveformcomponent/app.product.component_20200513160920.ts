import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/app.product';
import { Logic } from 'src/app/models/app.logic';
import {Categories} from 'src/app/models/app.constants';
import {FormGroup, FormControl} from '@angular/forms';
import { formatWithOptions } from 'util';

@Component({
  selector: 'app-product-reactive',
  templateUrl: './app.product.component.html'
})
export class ProductReactiveComponent implements OnInit {
  searchText: string;
  product: Product;
  products: Array<Product>;
  private logic: Logic;
  cats = Categories;
  headers: Array<string>;
  productForm: FormGroup;

  productId: FormControl;
  constructor() {
      this.product = new Product(0, '', 0, '');
      this.products = new Array<Product>();
      this.logic = new Logic();
      this.headers = new Array<string>();

      this.productForm = new FormGroup({
        productId : this.productId
      });
  }

  // inoked after the ctor
  // write a performance internsicive code
  // whihc we cannot write in ctor
  ngOnInit(): void {
     this.products = this.logic.getProducts();
     // read product Scehma from Product class
     for(let p in this.product) {
       this.headers.push(p);
     }
  }
  clear(): void {
    this.product = new Product(0, '', 0, '');
  }
  save(): void {
    this.products = this.logic.saveProducts(this.product);
    console.log(JSON.stringify(this.products));
  }
  getSelectedProduct(p: Product): void {
      this.product = Object.assign({}, p);
  }

  deleteProduct(p: Product): void {
    this.products =  this.logic.deleteProduct(p);
  }
  sortChanged(value:string){
    if (value === 'sort')
    {
      this.ascendingSort();
    }
    else {
      this.descendingSort();
    }
  }

  search(){
    console.log(this.searchText);
    if (!this.searchText){
      this.products = this.logic.getProducts();
    }
    this.products = this.products.filter((v: Product) =>
     {
      let index =  v.ProductName.toUpperCase().indexOf(this.searchText.toUpperCase());
      console.log(index);
      return index >= 0;
      });
  }
  private ascendingSort(){
    this.products = this.products.sort((a: Product, b: Product) => a.ProductName.localeCompare(b.ProductName));
  }

  private descendingSort(){
    this.products = this.products.sort((a: Product, b: Product) => b.ProductName.localeCompare(a.ProductName));
  }

}

