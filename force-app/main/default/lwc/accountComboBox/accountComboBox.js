import { LightningElement, wire } from 'lwc';
import retrieveAccountRecord  from '@salesforce/apex/listAccounts.retrieveAccountRecord';

export default class AccountComboBox extends LightningElement {

    @wire(retrieveAccountRecord)
lists({ error, data }) {
    if (data) {
        for(const list of data){
            const option = {
                label: list.Name,
                value: list.id
            };
            // this.selectOptions.push(option);
            this.selectOptions = [ ...this.selectOptions, option ];
        }
    } else if (error) {
        console.error(error);
    }
}


}