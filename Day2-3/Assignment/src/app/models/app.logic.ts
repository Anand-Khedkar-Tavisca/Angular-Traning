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

  deleteProduct(p: Product): Array<Product>{
    this.products = this.products.filter((v: Product) => v.ProductId !== p.ProductId);
    return this.products;
    }

  getProducts(): Array<Product> {
    return this.products;
  }

  saveProducts(prd: Product): Array<Product> {
    const existingProduct = this.products.find((v: Product) => v.ProductId === prd.ProductId);
    if (existingProduct)
    {
      this.deleteProduct(existingProduct);
    }

    this.products.push(prd);
    return this.products;
  }
}
