import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'progress-bar',
    template: `<div class="mt-3"><div class="progress">
            <div class="progress-bar" [ngClass]="color" role="progressbar" [ngStyle]="{width: progress}"></div>
        </div></div>`
})
export class ProgressBarComponent implements OnInit {

    @Input() progress = null;
    @Input() color = null;

    constructor() {
    }

    ngOnInit() {
    }

}
