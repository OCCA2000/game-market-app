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

  getGamesFile(): void
  {
    this.admin_service.getGamesFile().subscribe((data)=>{
      console.log("Datos del archivo", data);
      this.games_catalog = data;
    })
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
    this.message_service.add({
      severity: 'error',
      summary: 'Modificación',
      detail: 'El registro no fue modificado',
      id: 2
    })
    this.message_service.add({
      severity: 'warn',
      summary: 'Modificación',
      detail: 'El registro se modificó con alertas',
      id: 3
    })
  }

  deleteGame(game:Game)
  {
    throw new Error('Method not implemented.');
  }
}
