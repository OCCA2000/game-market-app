import { Injectable } from '@angular/core';
import { Game } from '../../shared/model';
import { Observable, Subject, catchError, filter, map, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private uri = 'assets/data.json';

  constructor(private http: HttpClient) { }

  public getGameById(id:number):Observable<Game | undefined>
  {
    return this.http.get<Game[]>(this.uri).pipe(
      map(data=> data.find(item=>item.id==id))
    );
  }

  public getGameByName(name:string):Observable<Game | undefined>
  {
    return this.http.get<Game[]>(this.uri).pipe(
      map(data=>data.find(item=>item.name==name))
    );
  }

  public getGames():Observable<Game[] | undefined>
  {
    return this.http.get<Game[]>(this.uri);
  }
}
