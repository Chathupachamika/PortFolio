import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import AOS from 'aos'; 

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  // AOS initialization in ngOnInit lifecycle hook
  ngOnInit() {
    AOS.init({
      duration: 1200, // Adjust duration as needed
      once: true      // Ensures animations happen only once
    });
  }

}
