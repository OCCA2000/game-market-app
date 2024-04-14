import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Game } from '../../shared/model';

@Injectable()
export class TestServiceService {
    private games: Game[] =
    [
      {
        id: 1,
        name: "GTA V",
        description: "Juego de aventura al estilo criminal.",
        developer: "Rockstar Games",
        year: 2013,
        price: 60,
        type: ["Digital", "Físico"],
        "platforms": ["PC", "PlayStation", "Xbox"]
      },
      {
        id: 2,
        name: "Minecraft",
        description: "Juego de aventura y exploración.",
        developer: "Microsoft",
        year: 2010,
        price: 20,
        type: ["Digital"],
        "platforms": ["PC", "PlayStation", "Xbox"]
      }
    ]

    // SUBJECT TO RAISE EVENTS
    private game_subject = new BehaviorSubject(this.games);

    // CREATE OBSERVABLE FROM SUBJECT
    public games$ = this.game_subject.asObservable();

    // SEND DATA PRIVATE METHOD
    private sendGames(games: Game[]): void
    {
      this.game_subject.next(games);
    }

    constructor() { }

    public getGamesRest(): void
    {
      this.sendGames(this.games);
    }
}
