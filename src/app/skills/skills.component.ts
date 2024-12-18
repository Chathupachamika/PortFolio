import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import AOS from 'aos'; // Import AOS for animations

interface Skill {
  name: string;
  icon: string;
  category: string;
  description: string;
  level: number; // percentage level for skill proficiency
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule], // Add CommonModule for built-in Angular directives like *ngFor
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'] // Corrected the file name from styleUrl to styleUrls
})
export class SkillsComponent implements OnInit {
  ngOnInit(): void {
    AOS.init(); // Initialize AOS for animations
  }
}
