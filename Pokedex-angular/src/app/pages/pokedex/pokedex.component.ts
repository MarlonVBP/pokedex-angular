import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/components/public/header/header.component";

@Component({
  selector: 'app-pokedex',
  imports: [HeaderComponent],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss'
})
export class PokedexComponent {

}
