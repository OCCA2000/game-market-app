import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Game } from '../../../../shared/model';
import { TestServiceService } from '../../../../services/admin/test-service.service';

@Component({
selector: 'catalog-component',
templateUrl: './catalog.component.html',
styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  public games: Game[]=[];

constructor(private observable_service: TestServiceService, private change_detector_ref: ChangeDetectorRef)
{

}

ngAfterViewInit(): void
{
  this.observable_service.games$.subscribe((data)=>{
    this.games = data;
    this.change_detector_ref.detectChanges();
  })
}

ngOnInit(){
  this.observable_service.getGamesRest();
  this.change_detector_ref.detectChanges();
}
}
