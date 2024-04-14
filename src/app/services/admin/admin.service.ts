
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { videogames } from '../../shared/data';
import { Game } from '../../shared/model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

    constructor(private http: HttpClient) { }

    getGamesFile(): Observable<Game[]>
    {
      return of(videogames);
    }

    getGamesHttp(): Observable<Game[]>
    {
      return this.http.get<Game[]>('assets/data.json')
    }

}
