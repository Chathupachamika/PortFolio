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
  ngOnInit() {
    AOS.init({
      duration: 1200, 
      once: true      
    });
  }
  downloadCV(): void {
    const cvPath = 'C:/ICD110/web%20developing/PortFolio-main/PortFolio-main/src/assets/cv/ATS%20CV%20Resume.pdf'; 
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'ATS CV Resume.pdf';
    document.body.appendChild(link); 
    link.click(); 
    document.body.removeChild(link); 
  }
}
