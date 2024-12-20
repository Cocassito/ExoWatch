import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MeshStandardMaterial, PerspectiveCamera, Scene, WebGLRenderer, Color, PointLight, DirectionalLight, AmbientLight, DirectionalLightHelper, PointLightHelper } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

gsap.registerPlugin(ScrollTrigger);


class Main {
  constructor() {
    this.initScene();
    this.initCamera();
    this.initRenderer();

    this.initLight();
    this.initLoader();
    this.addMaterial();

    this.timings = [0, 0.10, 0.15, 0.25, 0.25, 0.25, 0.25, 0.3, 0.3]
    this.height = [0, 4, 4, 2.5, 2, 1.5, 1, 0.3, 0.3]

    //Init Scrolltrigger 
    //definir portion départ et arriver de chq pièce
    // ""     matériaux pr chaque pièce 
  }
  initScene() {
    this.scene = new Scene();
    console.log(this)
  }

  initCamera() {
    this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 5;
  }
  initRenderer() {
    this.renderer = new WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
    this.renderer.setAnimationLoop(this.animate.bind(this));
  }

  initLight() {
    // Lumière directionnelle principale
    const directionalLight1 = new DirectionalLight(0xffffff, 1);
    const directionalLight2 = new DirectionalLight(0xffffff, 1);
    const directionalLight3 = new DirectionalLight(0xffffff, 6);
    directionalLight1.position.set(7, 6, 7); // Position de la lumière
    directionalLight3.position.set(5, 5, 5); // Position de la lumière
    this.scene.add(directionalLight1);
    this.scene.add(directionalLight2);

    const light = new AmbientLight( 0x404040 ); // soft white light
    this.scene.add( light )

    // Lumière ponctuelle pour éclairer une zone spécifique
    const pointLight = new PointLight(0xffffff, 1, 100);
    pointLight.position.set(10, -10, 10); // Position de la lumière
    this.scene.add(pointLight);

    const pointLightHelper = new PointLightHelper(pointLight, 1);
    this.scene.add(pointLightHelper);

    const directionalLightHelper1 = new DirectionalLightHelper(directionalLight1, 3);
    this.scene.add(directionalLightHelper1);

    const directionalLightHelper2 = new DirectionalLightHelper(directionalLight2, 3);
    this.scene.add(directionalLightHelper2);

    
  }


  initLoader() {
    this.loader = new GLTFLoader();
    this.loader.load('models/ExoWatch14.glb', this.loadReturn.bind(this))
  }

  loadReturn(gltf) {
    this.gltfScene = gltf.scene;
    this.watch = this.gltfScene.children;
    this.cache1 = this.gltfScene.children[1];
    this.cache2 = this.gltfScene.children[2];
    this.caches = [this.cache1, this.cache2];
    this.barrel1 = this.gltfScene.children[7];
    this.barrel2 = this.gltfScene.children[8];
    this.barrels = [this.barrel1, this.barrel2];
    this.centerWheel = this.gltfScene.children[3];
    this.secondWheel = this.gltfScene.children[4];
    this.thirdWheel = this.gltfScene.children[5];
    this.wheels = this.gltfScene.children[this.centerWheel, this.secondWheel, this.thirdWheel];
    this.scene.add(this.gltfScene);
    this.addMaterialOnPlatine();
    this.addMaterialOnCache();
    this.setupScrollTrigger();

  }

  addMaterial() {
    this.materials = {
      materialPlatine: new MeshStandardMaterial({
        color: 0x808080,
        emissive: 0x000000,
        metalness: 1,
        roughness: 0.351,
      }),
      materialCache: new MeshStandardMaterial({
        color: 0x262626,
        emissive: 0x000000,
        metalness: 1,
        roughness: 0.351,
      })
    }
  }

  addMaterialOnPlatine() {
    this.platine = this.gltfScene.children[0];
    this.platine.material = this.materials.materialPlatine;
  }

  addMaterialOnCache() {
    this.caches.forEach((index) => {
      index.material = this.materials.materialCache;
    });
  };



  setupScrollTrigger() {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.body, 
        start: "top top", 
        end: "bottom bottom", // Fin de la timeline
        scrub: 1, // Synchronisation avec le scroll
        markers: true, // Repères visuels
        pin: document.body,
      },
    });

    timeline.to(this.gltfScene.rotation, {
      x: -Math.PI / 2.5,
    }, 0);
    timeline.to(this.gltfScene.position, {
      y: -2
    }, 0);

    this.watch.forEach((watch, index) => {
      if (index === 0) {
        return;
      }
      timeline.to(watch.position, {
        z: 2 + this.height[index] * 0.5,
      }, 0.2 + this.timings[index]);
    });
  }

  animate() {
    this.renderer.render(this.scene, this.camera);
  }
}

const main = new Main();