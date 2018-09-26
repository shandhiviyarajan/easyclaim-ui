/**
 * Side nav Component
 * Author - Shan Dhiviyarajan <prashasoft@gmail.com>
 */

import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "../../services/AuthService";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    providers:[AuthService]


})

export class LoginComponent implements OnInit {
    constructor(public router: Router, private AuthService:AuthService) {

    }

    ngOnInit() {

    }

    submitForm() {
        this.AuthService.signIn();
        console.log(this.AuthService.signIn());
        this.router.navigate(['/home']);

    }


}