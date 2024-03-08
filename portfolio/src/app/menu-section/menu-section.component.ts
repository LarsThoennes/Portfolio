import { Component } from '@angular/core';
import { SayHiMenuSectionComponent } from '../say-hi-menu-section/say-hi-menu-section.component';

@Component({
  selector: 'app-menu-section',
  standalone: true,
  imports: [SayHiMenuSectionComponent],
  templateUrl: './menu-section.component.html',
  styleUrl: './menu-section.component.scss'
})
export class MenuSectionComponent {

}
