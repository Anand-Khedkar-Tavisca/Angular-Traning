import { Component, OnInit } from '@angular/core';
import { Product } from '../models/app.product';
import { Products } from '../models/app.constants';
import { Logic } from '../models/app.logic';

@Component({
  selector: 'app-simple-element-component',
  templateUrl: './app.simple.element.view.html'
})

export class SimpleElementComponent implements OnInit {
  myname: string;
  dataSource:Array<Product>;
  private logic: Logic;
  constructor() {
     this.myname= '';
     this.logic = new Logic();

  }
  receveData(event) : void {
    console.log(`In Parent ${event.detail.data}`);
  }
  ngOnInit() {
    this.dataSource = this.logic.getProducts();
   }
}
