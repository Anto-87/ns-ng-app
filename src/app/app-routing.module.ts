import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

const routes: Routes = [
    
    {path: "", redirectTo: "/login", pathMatch: "full" },
    {path:"login", component:LoginComponent},
    { path: "home", component:HomeComponent }
   //{ path: "", redirectTo: "/items", pathMatch: "full" },
   // { path: "items", component: ItemsComponent },
   // { path: "item/:id", component: ItemDetailComponent }
   
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes,{
        enableTracing:true
    })],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
