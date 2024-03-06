import { Routes } from '@angular/router';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { SayHiSectionComponent } from './say-hi-section/say-hi-section.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';

export const routes: Routes = [
  { path: 'skills', component: MySkillsComponent },
  { path: 'say-hi', component: SayHiSectionComponent },
  { path: 'portfolio', component: PortfolioSectionComponent },
];
