import {Directive, OnInit, ElementRef} from '@angular/core';

@Directive({
    selector: '[focus]'
})
export class FocusDirective implements OnInit {

    constructor(private markup: ElementRef) { }

    ngOnInit(){
        this.markup.nativeElement.focus();
    }
}
