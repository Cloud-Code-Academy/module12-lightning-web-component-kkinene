import { LightningElement } from 'lwc';

export default class Hwk12 extends LightningElement {
    greeting ='World!';

    changeHandler(event){
        console.log(event.target.value);
        this.greeting = event.target.value;
    }
}