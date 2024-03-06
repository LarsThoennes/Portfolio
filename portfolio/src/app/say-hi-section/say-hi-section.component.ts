import { Component } from '@angular/core';
import { EmailSectionComponent } from '../email-section/email-section.component';

@Component({
  selector: 'app-say-hi-section',
  standalone: true,
  imports: [EmailSectionComponent],
  templateUrl: './say-hi-section.component.html',
  styleUrl: './say-hi-section.component.scss'
})
export class SayHiSectionComponent {

}
