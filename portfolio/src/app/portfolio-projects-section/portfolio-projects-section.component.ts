import { Component } from '@angular/core';
import { PortfolioProject1Component } from '../portfolio-project-1/portfolio-project-1.component';

@Component({
  selector: 'app-portfolio-projects-section',
  standalone: true,
  imports: [PortfolioProject1Component],
  templateUrl: './portfolio-projects-section.component.html',
  styleUrl: './portfolio-projects-section.component.scss'
})
export class PortfolioProjectsSectionComponent {

}
