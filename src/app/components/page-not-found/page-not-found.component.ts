import { Component, OnInit } from '@angular/core';

@Component({
selector: 'page-not-found-component',
templateUrl: './page-not-found.component.html',
styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  home_link: string = "/main";

constructor() {
}

ngOnInit(){

}
}
