import { AmbientLight, DirectionalLight, PointLight } from "three";

class LightManager {
  constructor(scene) {
    this.scene = scene;
    this.initLights();
  }

  initLights() {
    const ambientLight = new AmbientLight(0x404040);
    this.scene.add(ambientLight);

    const directionalLight1 = new DirectionalLight(0xffffff, 1);
    const directionalLight2 = new DirectionalLight(0xffffff, 1);
    directionalLight1.position.set(7, 6, 7);
    directionalLight2.position.set(-7, -6, -7);
    this.scene.add(directionalLight1);
    this.scene.add(directionalLight2);

    const pointLight = new PointLight(0xffffff, 1, 100);
    pointLight.position.set(10, -10, 10);
    this.scene.add(pointLight);
  }
}

export default LightManager;