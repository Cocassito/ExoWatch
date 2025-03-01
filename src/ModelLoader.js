import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import Materials from "./Materials.js";

class ModelLoader {
  constructor(scene) {
    this.scene = scene;
    this.loader = new GLTFLoader();
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
    this.watch = model.children;
    this.platine = model.children[0];
    this.cacheMain = [
      model.children[1],
      model.children[2],
      model.children[3],
      model.children[4],
      model.children[5],
      model.children[12],
      model.children[13],
      model.children[14],
      model.children[15],
      model.children[16],
      model.children[17],
      model.children[18],
      model.children[19],
      model.children[20],
      model.children[21],
      model.children[22],
      model.children[23],
    ];
    this.caches = [model.children[1], model.children[2]];
    this.wheelsCache = [
      model.children[3],
      model.children[4],
      model.children[5],
    ];
    this.wheels = [
      model.children[6],
      model.children[7],
      model.children[8],
      model.children[9],
    ];
    this.barrels = [model.children[10], model.children[11]];
    this.vis = [
      model.children[12],
      model.children[13],
      model.children[14],
      model.children[15],
      model.children[16],
      model.children[17],
      model.children[18],
      model.children[19],
    ];
    this.pink = [
      model.children[20],
      model.children[21],
      model.children[22],
      model.children[23],
    ];
  }

  applyMaterials() {
    if (this.platine) this.platine.material = Materials.platine;
    this.caches.forEach((cache) => (cache.material = Materials.cache));
    this.wheels.forEach((wheel) => (wheel.material = Materials.wheels));
    this.wheelsCache.forEach((wheel) => (wheel.material = Materials.wheels));
    this.barrels.forEach((barrel) => (barrel.material = Materials.barrels));
    this.vis.forEach((vis) => (vis.material = Materials.vis));
    this.pink.forEach((pink) => (pink.material = Materials.pink));
  }
  
}

export default ModelLoader;
