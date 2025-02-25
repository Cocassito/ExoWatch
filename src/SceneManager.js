import { Scene, PerspectiveCamera, WebGLRenderer } from "three";
import LightManager from "./LightManager.js";
import ModelLoader from "./ModelLoader.js";

class SceneManager {
  constructor() {
    this.initScene();
    this.initCamera();
    this.initRenderer();
    this.lightManager = new LightManager(this.scene);
    this.modelLoader = new ModelLoader(this.scene);
    this.animate();
  }

  initScene() {
    this.scene = new Scene();
  }

  initCamera() {
    this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 5;
  }

  initRenderer() {
    this.renderer = new WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    this.renderer.render(this.scene, this.camera);
  }
}

export default SceneManager;