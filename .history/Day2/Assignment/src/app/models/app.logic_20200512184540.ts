import { Product } from './app.product';
import {Products} from './app.constants';

export class Logic {
  private products: Array<Product>;
  private prds = Products;

  constructor() {
    this.products = new Array<Product>();
    this.prds.forEach((p,i)=> {
         this.products.push(new Product(p.ProductId,p.ProductName,p.Price,p.Catgory)
         );
      });
  }

  deleteProduct(p:Product):void{
    this.products = this.products.filter((v:Product)=>{ return v.ProductId !== p.ProductId});
    }

  getProducts(): Array<Product> {
    return this.products;
  }

  saveProducts(prd: Product): Array<Product> {
    this.products.push(prd);
    return this.products;
  }
}
