/**
 * Home Component
 * Author - Shan Dhiviyarajan <prashasoft@gmail.com>
 */

import {Component, OnInit} from "@angular/core";


@Component({
    selector: 'app-404',
    templateUrl: './404.component.html',

})

export class PageNotFoundComponent implements OnInit {

    ngOnInit() {
        console.log("404 page not found !");
    }
}