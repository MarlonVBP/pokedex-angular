import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/public/header/header.component';
import { FooterComponent } from '../../shared/components/public/footer/footer.component';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-pokedex',
  imports: [HeaderComponent, FooterComponent],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '0.5s ease-in',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss',
})
export class PokedexComponent {}
