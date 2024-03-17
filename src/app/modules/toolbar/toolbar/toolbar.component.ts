import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
selector: 'toolbar-component',
templateUrl: './toolbar.component.html',
styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

constructor(private router:Router) {
}

loadHome(): void
{
  this.router.navigateByUrl('/main')
}

loadCatalog(): void
{
  this.router.navigateByUrl('/store/catalog')
}

ngOnInit() {
}
}
