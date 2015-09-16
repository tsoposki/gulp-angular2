import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'my-app'
})
@View({
    template: `
    <h1>Hello {{ name }}
    `
})
class MyAppComponent {
    name:String;

    constructor() {
        this.name = 'Kokice';
    }
}

bootstrap(MyAppComponent);