import { LightningElement, wire } from 'lwc';
import getProduct from '@salesforce/apex/Product.getProducts';

export default class Product extends LightningElement {
    getMyProducts ; 

    @wire(getProduct)
    wiredProducts({ error, data }) {
        if (data) {
            this.getMyProducts = data;
            console.log(this.getMyProducts);
        } else if (error) {
            console.log(error);
            this.error = error;
        }
    }


    handlerAddCart(event){
       console.log('Button Value:'+ event.target.value.Id);

    }

}