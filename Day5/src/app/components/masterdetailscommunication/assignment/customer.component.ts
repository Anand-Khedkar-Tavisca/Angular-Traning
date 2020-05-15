import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../models/app.models';
import { Customers } from '../../../models/app.constants';
import { CommunicationService } from '../../../services/app.coomunication.service';

@Component({
  selector: 'app-customers-component',
  template: `
     <table>
       <thead>
         <tr>
           <th>Customer Id</th>
           <th>Customer Name</th>
           <th>City</th>
           <th>Email</th>
           <th>Contact</th>
          </tr>
       </thead>
       <tbody>
         <tr *ngFor="let c of ctm" (click)="getSelectedRow(c)">
            <td>{{c.CustomerId}}</td>
            <td>{{c.CustomerName}}</td>
            <td>{{c.City}}</td>
            <td>{{c.Email}}</td>
            <td>{{c.ContactNumber}}</td>
         </tr>
       </tbody>
     </table>
  `
})

export class CustomersComponent implements OnInit {
  customer: Customer;
  ctm = Customers;
  allCtm = Customers;

  constructor(private serv: CommunicationService) {
    this.customer = new Customer(0, '','','','');
  }

  ngOnInit() {
    this.ctm = Customers;
    this.allCtm = Customers;

    this.serv.currentSearch.subscribe((data) => {
      console.log(`The customer->search value is ${data}`);
      console.log(JSON.stringify(this.allCtm));
      let customerIds: Array<number>;
      if(!data){
        this.ctm = this.allCtm;
      } else {
        this.ctm = this.allCtm.filter((v) => (v.CustomerName.toLowerCase() === data.toLowerCase() || v.City.toLowerCase() === data.toLowerCase()));
      }
      console.log(JSON.stringify(this.ctm));
      customerIds = this.ctm.map((v)=> v.CustomerId);
      console.log(JSON.stringify(customerIds));
      this.serv.onCurrentCustomers(customerIds);

  });
   }


  getSelectedRow(c: Customer): void {
      this.customer = c;
      this.serv.onCurrentCustomers([this.customer.CustomerId]);
  }


}
