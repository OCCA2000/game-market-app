
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Game } from '../../shared/model';
import { HttpClient } from '@angular/common/http';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AdminService
{
  constructor(private http: HttpClient) { }

  getGamesHttp(): Observable<Game[]>
  {
    return this.http.get<Game[]>('assets/data.json')
  }

  public getErrors(control: AbstractControl, control_name: string):string[]
  {
    const errors: string[] = [];

    if(control.touched && control.invalid!=null)
    {
      for(const auxiliar_error in control.errors)
      {
        if(control.errors[auxiliar_error])
        {
          switch (auxiliar_error)
          {
            case 'required':
            {
              errors.push(control_name + ' es obligatorio.');
              break;
            }
            case 'pattern':
            {
              errors.push(control_name + ' no cumple con el patrón establecido.');
              break;
            }
            case 'email':
            {
              errors.push('Ingrese un correo electrónico válido.');
              break;
            }
            case 'minLenght':
            {
              errors.push(control_name + ' no cumple con la longitud mínima.');
              break;
            }
            case 'maxLenght':
            {
              errors.push(control_name + ' no cumple con la longitud máxima.');
              break;
            }
            case 'min':
            {
              errors.push(control_name + ' no cumple con el valor mínimo.');
              break;
            }
            case 'max':
            {
              errors.push(control_name + ' no cumple con el valor máximo.');
              break;
            }
            default:
            {
              errors.push(control_name + ' contiene un error desconocido.');
              break;
            }
          }
        }
      }
    }
    return errors;
  }

}
