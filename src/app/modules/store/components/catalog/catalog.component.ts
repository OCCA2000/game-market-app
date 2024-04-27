import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Game } from '../../../../shared/model';
import { StoreService } from '../../../../services/store/store.service';

@Component({
selector: 'catalog-component',
templateUrl: './catalog.component.html',
styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  public games: Game[] | undefined;
  public selected_game!: Game;
  public show_detail=false;

  constructor(private observable_service: StoreService, private change_detector_ref: ChangeDetectorRef)
  {

  }

  showDetail(game: Game){
    this.selected_game=game;
    this.show_detail=true;
  }

  ngAfterViewInit(): void
  {
    this.observable_service.getGames().subscribe(
    (data)=>{
      this.games = data;
      this.change_detector_ref.detectChanges();
    },
    (error)=>{
      console.error('Error al obtener los juegos mediante HTTP: ', error)
    }
  )
  }

  ngOnInit(){
    this.change_detector_ref.detectChanges();
  }
}
