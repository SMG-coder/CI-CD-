import { LightningElement, wire } from 'lwc';
import Boat_logo from '@salesforce/resourceUrl/test';
const COLORSLIST = ['Black', 'Blue', 'Red', 'Grey'];
const Families= 'electronics';
export default class StaticImages extends LightningElement {
    colors=COLORSLIST;
    selectedColor=this.colors[0];
    family=Families;


    //BoatImage = Boat_logo+'/TShirt_Black.jpg';
    get SelectedImage(){
    // return `${Boat_logo}/TShirt_${this.selectedColor}.jpg`
     return `${Boat_logo}/${this.family}/TShirt_${this.selectedColor}.jpg`

    }

    selecthandler(event){

        this.selectedColor= event.target.dataset.color;
    }

  





}