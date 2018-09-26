/**
 * App Module
 * Author - Shan Dhiviyarajan <prashasoft@gmail.com>
 */

import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";  //used to build forms



/*
 Application modules */
import {AppRouterModule, PageComponents} from "./app.router";
/*
 Application Components */
import {AppComponent} from "./app.component";

//Bootstrap your application
@NgModule({

    //Your imported modules
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRouterModule //Your AppRouterModule
    ],
    //Your app components
    declarations: [
        AppComponent,
        PageComponents
    ],
    //Your app component to start
    bootstrap: [AppComponent]
})
export class AppModule {
}
