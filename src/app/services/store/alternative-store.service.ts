
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Game } from '../../shared/model';
import { HttpClient } from '@angular/common/http';
import { StoreServiceInterface } from './store.service.interface';

@Injectable({
  providedIn: 'root',
  useClass: AlternativeStoreService
})
export class AlternativeStoreService implements StoreServiceInterface{

  private uri = 'assets/data.json';

  constructor(private http: HttpClient) { }

  public getGame(name:string):Observable<Game | undefined>
  {
    return this.http.get<Game[]>(this.uri).pipe(
      map(data=>data.find(item=>item.name==name))
    );
  }
}
