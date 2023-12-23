import { Component } from '@angular/core';
import { CharacterCardsComponent } from '../../components/character-cards/character-cards.component';
import { PageTitleComponent } from '../../components/page-title/page-title.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PageTitleComponent, CharacterCardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
