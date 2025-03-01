  import {
    AmbientLight,
    DirectionalLight,
    PointLight,
    DirectionalLightHelper,
    PointLightHelper,
  } from "three";

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
        const directionalLight3 = new DirectionalLight(0xffffff, 0.5);
        const pointLight = new PointLight(0xffffff, 0, 10, 2); 
        const pointLight2 = new PointLight(0xffffff, 0, 10, 2); 
        const pointLight3 = new PointLight(0xffffff, 0, 10, 2); 
        const pointLight4 = new PointLight(0xffffff, 0, 10, 2); 
    
        directionalLight1.position.set(7, 6, 7);
        directionalLight2.position.set(-7, -6, -7);
        directionalLight3.position.set(-7, 5, 8);
        this.scene.add(directionalLight1);
        this.scene.add(directionalLight2);
        this.scene.add(directionalLight3);
        this.scene.add(pointLight);
        this.scene.add(pointLight2);
        this.scene.add(pointLight3);
        this.scene.add(pointLight4);
    
        this.pointLight = pointLight;
        this.pointLight2 = pointLight2;
        this.pointLight3 = pointLight3;
        this.pointLight4 = pointLight3;
    
        const dirLightHelper1 = new DirectionalLightHelper(directionalLight1, 1);
        const dirLightHelper2 = new DirectionalLightHelper(directionalLight2, 1);
        const dirLightHelper3 = new DirectionalLightHelper(directionalLight3, 1);
        const pointLightHelper = new PointLightHelper(pointLight, 1);
        const pointLightHelper2 = new PointLightHelper(pointLight2, 1);
        const pointLightHelper3 = new PointLightHelper(pointLight3, 1);
        const pointLightHelper4 = new PointLightHelper(pointLight4, 1);
    
        const showLightHelpers = false;
    
        if (showLightHelpers) {
          this.scene.add(dirLightHelper1);
          this.scene.add(dirLightHelper2);
          this.scene.add(dirLightHelper3);
          this.scene.add(pointLightHelper);
          this.scene.add(pointLightHelper2);
          this.scene.add(pointLightHelper3);
          this.scene.add(pointLightHelper4);
        }
      }
    }
    
  export default LightManager;


