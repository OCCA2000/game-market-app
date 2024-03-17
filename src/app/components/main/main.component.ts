import { Component, OnInit } from '@angular/core';

@Component({
selector: 'main-component',
templateUrl: './main.component.html',
styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  title: string = "Tienda de juegos";
  welcome_message: string = "Bienvenidos a la tienda.";
  image_path: string = "assets/image.jpg"
  name: string = "Cristian Orellana";

constructor() {
}

onClick(): void
{
  alert("Se ha presionado el botón.");
}

changeText(): void
{
  console.log(this.name);
}

setText(event: any): void
{
  console.log(event.target.value);
}

ngOnInit(){

}
}
