import { Injectable } from '@angular/core';
import { Game } from '../../shared/model';
import { Observable, Subject, catchError, filter, map, of, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  // SUBJECT TO RAISE EVENTS
  private store_subject: Subject<Game> = new Subject<Game>();

  // CREATE OBSERVABLE FROM SUBJECT
  public data$: Observable<Game> = this.store_subject.asObservable();

  constructor() { }

  // SEND DATA PUBLIC METHOD
  public sendData(data: any): void
  {
    console.log("Ejecutando la lógica del observable.")
    this.store_subject.next(data);
  }

  // RXJS OPERATORS

  public observable_error$: Observable<string> = throwError('Este es un error');
  public observable_number$: Observable<number> = of(1, 2, 3, 4, 5, 6);

  public newObservableError$ = this.observable_error$.pipe(
    catchError((error:any)=>{
      console.error("Error capturado: ", error);
      return of("Se manejó el error devolviendo un valor alternativo.");
    }),
  );

  public newObservable$ = this.observable_number$.pipe(
    filter((num: number)=>num%2===0),
    map((num:number)=>num*2)
  );
}