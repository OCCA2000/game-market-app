import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Game Market';
  description:string = 'Página para comprar juegos de video.';
  input_text:string = 'Texto de entrada';
  show_description:boolean = true;
  game_names: string[] = ['Mario Kart', 'Minecraft', 'GTA V', 'FIFA 23']

  public Clicking() : void
  {
    alert("Has hecho clic en el botón.")
  }

  public Writing(event :any) : void
  {
    console.log("Escribiste: ", event.target.value)
  }

  public MousePassing() : void
  {
    console.log("Puntero pasando.")
  }

  public MouseExiting() : void
  {
    console.log("Puntero saliendo.")
  }
}
