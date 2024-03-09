import { SayHiMenuSectionComponent } from '../say-hi-menu-section/say-hi-menu-section.component';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-section',
  standalone: true,
  imports: [SayHiMenuSectionComponent, RouterModule],
  templateUrl: './menu-section.component.html',
  styleUrl: './menu-section.component.scss'
})
export class MenuSectionComponent {
  @Input() linkTarget: string = '';
}
