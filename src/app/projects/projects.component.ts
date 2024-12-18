import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']  // Corrected to styleUrls (plural)
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Portfolio Website',
      description: 'A personal portfolio built with Angular and Tailwind.',
      url: 'https://github.com/Chathupachamika/Portfolio',
    },
    {
      name: 'E-commerce Platform',
      description: 'An e-commerce web app built with Spring Boot and Angular.',
      url: 'https://github.com/Chathupachamika/E-commerce',
    },
  ];
}
