import { Component } from '@angular/core';
import { PageTitleComponent } from '../../components/page-title/page-title.component';

@Component({
  selector: 'app-participants',
  standalone: true,
  imports: [PageTitleComponent],
  templateUrl: './participants.component.html',
  styleUrl: './participants.component.css'
})
export class ParticipantsComponent {

}
