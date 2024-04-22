import { Observable } from "rxjs";
import { Game } from "../../shared/model";

export interface StoreServiceInterface{
  getGame(param: any):Observable<Game | undefined>;
}
