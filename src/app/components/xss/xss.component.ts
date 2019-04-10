import {Component, OnInit} from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'app-xss',
    templateUrl: './xss.component.html',
    styleUrls: ['./xss.component.css']
})
export class XssComponent implements OnInit {

    dangerousHtml = 'Template <script>alert("Danger !")</script><b>Bold</b>';
    safeHtml: SafeHtml;

    dangerousUrl: string;
    safeUrl: SafeUrl;

    dangerousResourceUrl: string;
    safeResourceUrl: SafeResourceUrl;

    constructor(private sanitizer: DomSanitizer) { }

    ngOnInit() {

        this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(this.dangerousHtml);

        this.dangerousUrl = 'javascript:alert("Danger !")';
        this.safeUrl = this.sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);

        this.dangerousResourceUrl = 'https://www.youtube.com/embed/d2_KJTVjK2w';
        this.safeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousResourceUrl)


    }



}
