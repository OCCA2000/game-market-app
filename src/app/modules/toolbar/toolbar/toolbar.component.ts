import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
selector: 'toolbar-component',
templateUrl: './toolbar.component.html',
styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  items: MenuItem[] | undefined;
constructor() {
}

ngOnInit() {
  this.items = [
      {
          label: 'Update',
          icon: 'pi pi-refresh'
      },
      {
          label: 'Delete',
          icon: 'pi pi-times'
      }
  ];
}
}
