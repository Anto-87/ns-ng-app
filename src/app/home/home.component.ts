
import { Component} from "@angular/core"
import { RouterExtensions } from '@nativescript/angular'

@Component({
    selector: 'ns-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    moduleId: module.id
})


export class HomeComponent{
    
    android: any;

    constructor(private routerExtension: RouterExtensions) { };
    
    }