import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { ThreeLoaderService } from './three-loader.service'; // Correct import path

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';

  @ViewChild('threeContainer', { static: true }) threeContainer!: ElementRef;

  constructor(private threeLoader: ThreeLoaderService) {}

  ngAfterViewInit() {
    this.threeLoader.init3DScene(this.threeContainer.nativeElement);
    this.threeLoader.loadGLBModel('assets/3D/lunagaron_monster_hunter.glb');
  }
}
