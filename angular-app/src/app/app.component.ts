import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/AuthService";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers: [AuthService]
})
export class AppComponent implements OnInit {

    constructor(private AuthService: AuthService) {

    }

    ngOnInit() {

    }

    ngOnChanges(){

    }


}
