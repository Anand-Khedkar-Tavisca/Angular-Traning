import {Product} from './product';
class SortReversProduction {
    private products: Array<Product>;
    constructor(){
        this.products = new Array<Product>();

        this.products.push(new Product(101, 'P143234', 'C1'));
        this.products.push(new Product(102, 'P22', 'C2'));
        this.products.push(new Product(103, 'P3432', 'C3'));
        this.products.push(new Product(103, 'P3432432523', 'C3'));

    }
    sortByNameLength(): Array<Product> {
        return this.products.sort(this.orderAssendingLength)
    }
    reveseByNameLength(): Array<Product> {
        return this.products.sort(this.orderDecendingLength)
    }

    private orderDecendingLength(a:Product,b:Product):number{
        return b.ProdName.length - a.ProdName.length;
    }

    private orderAssendingLength(a:Product,b:Product):number{
        return a.ProdName.length - b.ProdName.length;
    }
}

let orderer = new SortReversProduction();
console.log("--sort--");
console.log(JSON.stringify(orderer.sortByNameLength()));

console.log("--reverse--");
console.log(JSON.stringify(orderer.reveseByNameLength()));
