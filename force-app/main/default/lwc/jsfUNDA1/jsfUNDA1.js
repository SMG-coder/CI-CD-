import { LightningElement } from 'lwc';

export default class JsfUNDA1 extends LightningElement {

companyNames = ['Infosys','Deloitte','TCS'];
cloneCompanyNames = [];

employess = [
                {code:1,name:"Saumya" , age:20, Title:'Developer'},
                {code:2,name:"Shikha" , age:30, Title:'Architect'},
                {code:3,name:"Shipra" , age:40, Title:'Tester'}

];

flag=false;

clickHandler(){
    console.log(this.employess);

    /*for(var i=0;i<this.companyNames.length;i++){
        console.log(this.companyNames[i])
    }

    for(const company of this.companyNames){

        console.log(company);
    }

    this.companyNames.forEach(function(company){

        console.log(company);

    });

    this.companyNames.forEach((company,index)=>console.log(`Position: ${index} Company Name: ${company}`));
    //this.companyNames.unshift('JP Morgan');
    //this.companyNames.splice(1,1,'CTS');
    this.companyNames.forEach((company,index)=>console.log(`Position: ${index} Company Name: ${company}`));

    this.cloneCompanyNames = [... this.companyNames,'AJ Skills'];
    console.log(this.cloneCompanyNames);
    console.log(this.companyNames);
    this.companyNames.unshift('JP Morgan');
    console.log('After Inserting');
    console.log('Copy Array '+this.cloneCompanyNames);
    console.log(this.companyNames);*/

    this.employess.map((e)=>console.log(e.Title));

    var emp = this.employess.find((employee)=>employee.age>20);
    console.log(emp);

}

changeHandler(event){
    console.log(event.target.checked);
    this.flag=event.target.checked;
}

}