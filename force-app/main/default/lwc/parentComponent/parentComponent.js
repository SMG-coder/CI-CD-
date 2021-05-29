import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {

    employees= [
            {code:101,name:'Charlotte',age:52 , image:'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/amy_taylor.jpg'},
            {code:102,name:'Xavier',age:48, image:'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/victor_ochoa.jpg'},
            {code:103,name:'Carlos',age:42, image:'https://s3-us-west-1.amazonaws.com/sfdc-demo/people/miriam_aupont.jpg'}
    ];

    messageFromParent = "Hi , I am Parent testing 123";

    employeeHandler(event){
        //console.log("message from Parent Handler:"+JSON.stringify(event.detail));
        //console.log("message from Parent Handler:"+(event.detail.name));
        //console.log("message from Parent Handler:"+(event.detail.age));
        //console.log("message from Parent Handler:"+(event.detail));

        var empCode = this.employees.find((e)=>e.code==event.detail);
        console.log('Selected Employee= '+empCode.name);
    }

}