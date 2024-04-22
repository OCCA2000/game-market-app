import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../../../../services/store/store.service';
import { Game } from '../../../../shared/model';

@Component({
selector: 'game-component',
templateUrl: './game.component.html',
styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  id: number = 0;
  game: Game | undefined;
  constructor(private activated_route: ActivatedRoute, private store_service: StoreService) {
  }

  ngOnInit(){
    this.id = this.activated_route.snapshot.params['id'];
    console.log(this.activated_route.snapshot.params);
    console.log(this.id);

    this.store_service.getGame(this.id).subscribe((data)=>{
      console.log(data);
      this.game=data;
    },
    (error)=>{
      console.error("Error al obtener el juego: "+this.id, error)
    }
    );
  }
}
