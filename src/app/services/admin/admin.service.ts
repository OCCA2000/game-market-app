
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { videogames } from '../../shared/data';
import { Game } from '../../shared/model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

    constructor() { }

    getGamesFile(): Observable<Game[]>{
      return of(videogames);
    }

}
