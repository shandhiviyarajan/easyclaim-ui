/**
 * Home Component
 * Author - Shan Dhiviyarajan <prashasoft@gmail.com>
 */

import {Component, AfterViewInit, ElementRef, ViewChild} from "@angular/core";


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',


})

export class HomeComponent implements AfterViewInit {

    public numbers: Array<number>;
    public left_panel_width = 580;


    constructor(private elementRef: ElementRef) {
        this.numbers = Array(50).fill(1);
    }

    //Get the right side panel
    @ViewChild("right_side_panel", {read: ElementRef}) right_side_panel: ElementRef;


    //window resizing function
    public resizeRightPanel() {
        this.right_side_panel.nativeElement.style.width = (window.outerWidth - this.left_panel_width) + "px";
    }

    ngAfterViewInit() {

        this.resizeRightPanel();
        window.addEventListener('resize',function(){
            this.resizeRightPanel();
        }.bind(this));


    }


}