import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  AxesHelper,
  GridHelper,
} from "three";
import LightManager from "./LightManager.js";
import ModelLoader from "./ModelLoader.js";
import { OrbitControls } from "three/examples/jsm/Addons.js";

class SceneManager {
  constructor() {
    this.initScene();
    this.initCamera();
    this.initRenderer();
    this.initControls(); // Ajout du contrôle de la caméra

    this.lightManager = new LightManager(this.scene);
    this.modelLoader = new ModelLoader(this.scene);
    this.animate();

    window.addEventListener("resize", () => this.onWindowResize());
  }

  initScene() {
    this.scene = new Scene();
  }

  initCamera() {
    this.camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 5;
  }
  

  initControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = false; 
    this.controls.enabled = false ; 

  }

  initRenderer() {
    this.renderer = new WebGLRenderer({ antialias: true }); 
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
  }

 

  animate() {
    requestAnimationFrame(() => this.animate());
    this.controls.update(); 

    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
  }
}

export default SceneManager;
