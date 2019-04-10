import {Component, OnInit} from '@angular/core';
import {RedirectService} from "../../service/redirect.service";
import {ProductEnum} from "../../../core/Enum/product-enum.enum";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css'],
  providers: [RedirectService]
})
export class BoutiqueComponent implements OnInit {

  //private redirectService: RedirectService;
  private test:ProductEnum;

  constructor(private redirectService: RedirectService,
              private router: Router) {
    //this.redirectService = redirectService;
  }


  ngOnInit() {
    this.test = this.redirectService.getEnum();
    if(this.test === ProductEnum.HOME) {
      this.router.navigate(['home']);
    } else if (this.test === ProductEnum.FORM){
      this.router.navigate(['formulaire']);
    } else if (this.test === ProductEnum.REACT){
      this.router.navigate(['signup']);
    }
  }

}
