import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // AOS initialization in ngOnInit lifecycle hook
  ngOnInit() {
    AOS.init({
      duration: 1200, // Adjust duration as needed
      once: true      // Ensures animations happen only once
    });
  }
  downloadCV(): void {
    const cvPath = '/assets/cv/ATS CV Resume.pdf'; // Ensure this path is correct for your assets
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'ATS CV Resume.pdf';
    document.body.appendChild(link); // Temporarily add the link to the DOM
    link.click(); // Trigger download
    document.body.removeChild(link); // Remove the link to clean up
  }
}
