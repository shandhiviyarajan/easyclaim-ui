/**
 * Side nav Component
 * Author - Shan Dhiviyarajan <prashasoft@gmail.com>
 */

import {Component, OnInit} from "@angular/core";
import {AuthService} from "../../services/AuthService";


@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    providers: [AuthService]
})

export class SidenavComponent implements OnInit {

    constructor(private AuthService: AuthService) {

    }



    ngOnInit() {



    }

    signOut() {

     this.AuthService.signOut();

    }


}