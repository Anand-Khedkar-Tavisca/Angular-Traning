import { Component, OnInit } from '@angular/core';
import { Order } from '../../../models/app.models';
import { Orders } from '../../../models/app.constants';
import { CommunicationService } from '../../../services/app.coomunication.service';

@Component({
  selector: 'app-orders-component',
  template: `
     <table>
       <thead>
         <tr>
         <th>OrderId</th>
         <th>OrderName</th>
         <th>Date</th>
         <th>CustomerId</th>
         <th>Quantity</th>
         <th>Amount</th>
         </tr>
       </thead>
       <tbody>
         <tr *ngFor="let o of filteredOrders">
         <td>{{o.OrderId}}</td>
         <td>{{o.OrderName}}</td>
         <td>{{o.Date}}</td>
         <td>{{o.CustomerId}}</td>
         <td>{{o.Quantity}}</td>
         <td>{{o.Amount}}</td>
         </tr>
       </tbody>
     </table>
  `
})

export class OrdersComponent implements OnInit {
  orders = Orders;
  customersIds: Array<number>;
  _filteredOrders: Array<Order>;
  constructor(private serv: CommunicationService) {
    this.customersIds = [0];
    this._filteredOrders = new Array<Order>();
    console.log('Constructor Called');
  }
  // receiver will subscribe to the event from the service
  // and receiv data from the event
  ngOnInit() {
      console.log('in ngOnInit() method')
      this.serv.currentCustomers.subscribe((data) => {
          console.log(`The order->customer value is ${data}`);
          this.customersIds = data;
      });
  }

  get filteredOrders(): Array<Order> {
    this._filteredOrders = new Array<Order>();
    if (this.customersIds) {
       this._filteredOrders = this.orders.filter((e,i) => {
         return this.customersIds.includes(e.CustomerId);
       });
    } else {
      this._filteredOrders = this.orders;
    }
    return this._filteredOrders;
  }
}
