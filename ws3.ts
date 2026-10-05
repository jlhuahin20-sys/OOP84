class Product {
    constructor(public name : string , public price : number,public quantity: number){}
    getSubtotal(): number {
        return this.price * this.quantity ;
    }
}

class Order {
    private products : Product [] = [];
    addProduct(product: Product):void{
        this.products.push(product);
        console.log(`${product.name}: ${product.price} x ${product.quantity}ขึ้น -${product.getSubtotal}`);
        
    }
    calculateTotal():number {
        let  total = 0 ;
        for (const p of this.products){
            total += p.getSubtotal();
        }
        return total ;
    }
    calculateDiscount(percent: number): number {
        return this.calculateTotal() * percent /100;
    }
    calculateNetTal(percent: number): number {
        return this.calculateTotal()-this.calculateDiscount(percent);
    }
}
const o1 = new Order ();
const pro1 = new Product ("Laptop",30000,20);
const pro2 = new Product ("Com",50000,10);
o1.addProduct(pro1);
o1.addProduct(pro2);
const disc =10 ;
console.log(`รวมเงินทั้งหมด${o1.calculateTotal()}บาท`)
console.log(`ส่วนลด ${disc}เป็นเงิน ${o1.calculateDiscount(disc)}`)
console.log(`ชำระเงิน${o1.calculateNetTal(disc)}บาท`)