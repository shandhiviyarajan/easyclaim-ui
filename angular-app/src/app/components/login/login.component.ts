/**
 * Side nav Component
 * Author - Shan Dhiviyarajan <prashasoft@gmail.com>
 */

import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    constructor(public router: Router) {

    }

    ngOnInit() {

    }

    submitForm() {
        this.router.navigate(['/home']);
    }


}