import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {

fullname = "Saumya Goel"
title="aura";

changeHandler(event){
    this.title=event.target.value

}

address={
    city:'Mumbai',
    lname:'Goel'
}

changeCity(event){
this.address.city ={... this.address , "city":event.target.value}
}

users = ['Vishal','Saumya','Mishti']

get firstUser(){
    return this.users[0];

}

num1=10;
num2=20;

get multiply(){
    return this.num1*this.num2;
}

}