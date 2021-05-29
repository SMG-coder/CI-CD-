import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';

export default class DataDemo1 extends LightningElement {

    objectApiName=ACCOUNT_OBJECT;
    fields=[NAME_FIELD];

}