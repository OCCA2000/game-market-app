import { Component, OnInit } from '@angular/core';
import { Game } from '../../../../shared/model';
import { AdminService } from '../../../../services/admin/admin.service';
import { MessageService } from 'primeng/api';

@Component({
selector: 'crud-component',
templateUrl: './crud.component.html',
styleUrls: ['./crud.component.scss'],
providers: [MessageService]
})
export class CrudComponent implements OnInit {

  games_catalog: Game[] = [];

  constructor(private admin_service: AdminService, private message_service: MessageService) {
  }

  ngOnInit(){
//    this.getGamesFile();
    this.getGamesRest();
  }

  getGamesRest():void
  {
    this.admin_service.getGamesHttp().subscribe(
      (data)=>{
        console.log("Datos obtenidos desde HTTP.", data);
        this.games_catalog=data;
      },
      (error)=>{
        console.error("Error al cargar los datos.", error)
      }
    );
  }

  updateGame(game:Game)
  {
    this.message_service.add({
      severity: 'success',
      summary: 'Modificación',
      detail: 'El registro se ha modificado exitosamente',
      id: 1
    })
  }

  deleteGame(game:Game)
  {
    throw new Error('Method not implemented.');
  }

  createGame()
  {
    this.message_service.add({
      severity: 'success',
      summary: 'Creación',
      detail: 'El registro se ha creado exitosamente',
      id: 1
    })
  }
}
