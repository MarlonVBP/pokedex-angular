import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/components/public/header/header.component";
import { FooterComponent } from "../../shared/components/public/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
