import { Component, OnInit } from '@angular/core';
import { Game } from '../../../../shared/model';
import { AdminService } from '../../../../services/admin/admin.service';

@Component({
selector: 'crud-component',
templateUrl: './crud.component.html',
styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  games_catalog: Game[] = [];

  constructor(private admin_service: AdminService) {
  }

  ngOnInit(){
    this.getGamesFile();
  }

  getGamesFile(): void
  {
    this.admin_service.getGamesFile().subscribe((data)=>{
      console.log("Datos del archivo", data);
      this.games_catalog = data;
    })
  }
}
