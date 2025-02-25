import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import Materials from "./Materials.js";

class ModelLoader {
  constructor(scene) {
    this.scene = scene;
    this.loader = new GLTFLoader();
    this.wheels = [];
  }

  loadModel() {
    return new Promise((resolve, reject) => {
      this.loader.load(
        "models/ExoWatchFINAL.glb", 
        (gltf) => {
          this.scene.add(gltf.scene);
          this.extractParts(gltf.scene);
          this.applyMaterials();
          resolve(); 
        },
        undefined, 
        (error) => {
          reject(error); 
        }
      );
    });
  }

  extractParts(model) {
    this.platine = model.children[0];
    this.pink = model.children[6];
    this.caches = [model.children[1], model.children[2]];
    this.wheels = [model.children[3], model.children[4], model.children[5]];
    this.barrels = [model.children[7], model.children[8]];
  }
  

  applyMaterials() {
    if (this.platine) this.platine.material = Materials.platine;
    this.caches.forEach((cache) => (cache.material = Materials.cache));
    this.wheels.forEach((wheel) => (wheel.material = Materials.wheels));
    this.barrels.forEach((barrel) => (barrel.material = Materials.barrels));
  }
}

export default ModelLoader;
