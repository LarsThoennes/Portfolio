import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboveTheFoldSectionComponent } from './above-the-fold-section/above-the-fold-section.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { NextSectionArrowRightComponent } from './next-section-arrow-right/next-section-arrow-right.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AboveTheFoldSectionComponent, AboutMeSectionComponent,NextSectionArrowRightComponent, MySkillsComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
