import { Injectable } from '@angular/core';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Scene, PerspectiveCamera, WebGLRenderer, AmbientLight } from 'three';

@Injectable({
  providedIn: 'root' // This ensures it is available for dependency injection
})
export class ThreeLoaderService {
  private scene!: Scene;
  private camera!: PerspectiveCamera;
  private renderer!: WebGLRenderer;

  constructor() {}

  init3DScene(container: HTMLElement) {
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 5;

    this.renderer = new WebGLRenderer({ alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(this.renderer.domElement);

    const light = new AmbientLight(0xffffff, 1);
    this.scene.add(light);

    this.animate();
  }

  loadGLBModel(filePath: string) {
    const loader = new GLTFLoader();
    loader.load(
      filePath,
      (gltf: GLTF) => {
        this.scene.add(gltf.scene);
      },
      undefined,
      (error: any) => {
        console.error('Error loading GLB file:', error);
      }
      
    );
  }

  private animate = () => {
    requestAnimationFrame(this.animate);
    this.renderer.render(this.scene, this.camera);
  };
}
