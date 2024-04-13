import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../../services/store/store.service';

@Component({
selector: 'cart-component',
templateUrl: './cart.component.html',
styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private store_service: StoreService) {
  }

  ngOnInit(){

    this.store_service.data$.subscribe((data)=>{
      console.log("Entrando en la subscripción del componente.");
      console.log("Datos recibidos: ", data)
    })

    // HANDLING ERRORS

    this.store_service.newObservableError$.subscribe((data)=>{
      console.log("Entrando a la función de manejo de errores del carrito.");
      console.info(data);
    });

    // SUSCRIPTION OPERATORS

    this.store_service.newObservable$.subscribe((data)=>{
      console.log("Entrando a la suscripción del carrito para los operadores de los observables.")
      console.log("Se han recibido: ", data);
    })
  }

  sendData()
  {
    let today = new Date();
    console.log(today);
    const data = {message: 'Te saludo desde el carrito'};
    this.store_service.sendData(data);
  }
}
