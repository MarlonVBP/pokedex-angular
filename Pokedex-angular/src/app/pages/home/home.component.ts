import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/public/header/header.component';
import { FooterComponent } from '../../shared/components/public/footer/footer.component';
import { animate, style, transition, trigger } from '@angular/animations';
import { BobBurgersService } from '../../services/get-personagens.service';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent, CommonModule],
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
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  personagens: any = [];
  page: number = 1;
  isLoadding: boolean = false;

  constructor(private getPersonagens: BobBurgersService) {
    this.load();
  }

  load() {
    this.isLoadding = true;
    this.getPersonagens.getAllCharacters(this.page).subscribe((response: any) => {
      console.log(response);
      this.personagens = this.personagens.length > 1 ? [...this.personagens,...response.results] : response.results;
      this.page++;
      this.isLoadding = false;
    });
  }
}
