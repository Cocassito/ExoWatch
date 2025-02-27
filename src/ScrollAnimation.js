import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

class ScrollAnimation {
  constructor(sceneManager) {
    this.scene = sceneManager.scene;
    this.lightManager = sceneManager.lightManager;

    sceneManager.modelLoader
      .loadModel()
      .then(() => {
        this.watch = sceneManager.modelLoader.watch;
        this.platine = sceneManager.modelLoader.platine;
        this.cacheMain = sceneManager.modelLoader.cacheMain;
        console.log(this.cacheMain);
        this.caches = sceneManager.modelLoader.caches;
        this.wheelsCache = sceneManager.modelLoader.wheelsCache;
        this.wheels = sceneManager.modelLoader.wheels;
        this.vis = sceneManager.modelLoader.vis;
        this.pink = sceneManager.modelLoader.pink;
        this.initScrollAnimation();
      })
      .catch((error) => {
        console.error("Erreur de chargement du modèle:", error);
      });
  }

  initScrollAnimation() {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "+=300%",
        scrub: 2,
        markers: true,
        pin: document.body,
      },
    });

    this.originalPosition = { ...this.wheels[3].position }; 
this.originalRotation = { ...this.wheels[3].rotation };


    timeline.to(this.scene.rotation, { x: -Math.PI / 2.5 }, 0);
    timeline.to(this.scene.position, { y: -2 }, 0);

    this.cacheMain.reverse().forEach((item, index) => {
      timeline.to(item.position, { y: -4, duration: 3 }, 0.5);
    });

   
      timeline.to(this.wheels[3].position, { z: 3, duration: 3 }, 2);
      timeline.to(this.wheels[3].rotation, { y: 3.5, x: 6,z: 3.25, duration: 5 }, 2);

    const pointLight = this.lightManager.pointLight;
    pointLight.position.set(0, 3, 0); 
    this.wheels[3].add(pointLight);

    timeline.to(
      this.wheels[3].position,
      { y: -3.5, x: 0.1, z: 3.25, duration: 7 },
      6
    );
    timeline.to(
      this.wheels[3].rotation,
      { y: 6.5, x: 6,z: 3.25,  duration: 7 },
      6
    );

   

    timeline.fromTo(
      "#textWheelEscape",
      { opacity: 0 },
      { opacity: 1, duration: 2 }
    );

    timeline.to(pointLight, { intensity: 0.6, duration: 2 }, 16);
console.log('Original Position:', this.originalPosition);
console.log('Original Rotation:', this.originalRotation);

timeline.to(this.wheels[3].position, { ...this.originalPosition, duration: 2 }, 16);
timeline.to(this.wheels[3].rotation, { ...this.originalRotation, duration: 2 }, 16);
  }
}

export default ScrollAnimation;
