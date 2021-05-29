import { api, LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {

    @api employee;
    employeeSelected(){

        //console.log(this.employee.name); 
        var e = CustomEvent('empselected',{detail:this.employee.code});
        this.dispatchEvent(e);
    }
}