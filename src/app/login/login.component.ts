import { User } from './../shared/user.model';
import { NgModule, OnInit } from "@angular/core"
import { Component} from "@angular/core"
import { RouterExtensions } from '@nativescript/angular'

@Component({
    selector: 'ns-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    moduleId: module.id
})


export class LoginComponent{
    
    user: User;
    
    constructor(private routerExtensions: RouterExtensions){
        this.user = new User();        
    }
    
    /*constructor(){
        this.user = new User();        
    }*/

    navigateToPage(){

    }
    
    submit(){
        
        if(this.user.username == 'admin' &&
        this.user.password == 'admin'){                
            this.routerExtensions.navigate(["./home"]).then(() => console.log("navigated to /home"))
            .catch(err => console.log("error navigating to /home: " + err));
        }else{
            var dialogs = require("tns-core-modules/ui/dialogs");
            dialogs.alert({
                title: "Login",
                message: "InValid User",
                okButtonText: "OK"
            }).then(function () {
                console.log("Dialog closed!");
            });
        }
       


    }


}