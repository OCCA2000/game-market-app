import { Component, OnInit } from '@angular/core';
import { Game } from '../../../../shared/model';
import { types, platforms } from '../../../../shared/catalogs';
import { AdminService } from '../../../../services/admin/admin.service';
import { MessageService } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
selector: 'crud-component',
templateUrl: './crud.component.html',
styleUrls: ['./crud.component.scss'],
providers: [MessageService]
})
export class CrudComponent implements OnInit {

  games_catalog: Game[] = [];
  game_form!: FormGroup;
  game_dialog: boolean = false;
  crud_type: string = '';
  types_catalog = types;
  platforms_catalog = platforms;
  selected_platforms: string[] = [];
  selected_types: string[] = [];

  constructor(public admin_service: AdminService, private message_service: MessageService) {
  }

  ngOnInit(){
//    this.getGamesFile();
    this.getGamesRest();
    this.buildGameForm();
  }

  buildGameForm(): void {
    this.game_form = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    developer: new FormControl(''),
    year: new FormControl(0, [Validators.required, Validators.min(1960), Validators.max(2024)]),
    price: new FormControl(0, [Validators.required]),
    type: new FormControl([], [Validators.required]),
    platform: new FormControl([], [Validators.required]),
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
  }

  deleteGame(game:Game)
  {
    throw new Error('Method not implemented.');
  }

  createGame()
  {
    this.game_dialog = true;
    this.crud_type = 'C';
  }

  changeTypes(type:any)
  {
    console.log(type);
    //this.types.push(type);
  }


  saveGame()
  {
    const id=this.games_catalog.length+1;
    const auxiliar_game: Game ={
      id: id,
      name: this.game_form.controls['name'].value,
      year: this.game_form.controls['year'].value,
      price: this.game_form.controls['price'].value,
      developer: this.game_form.controls['developer'].value,
      type: this.selected_types,
      platforms: this.selected_platforms
    }

    console.log(auxiliar_game);

    this.games_catalog.push(auxiliar_game);
    this.games_catalog=[...this.games_catalog];

    this.message_service.add({
      severity: 'success',
      summary: 'Creación',
      detail: 'El registro se ha creado exitosamente',
      id: 1
    })

    this.game_dialog=false;
  }
}
