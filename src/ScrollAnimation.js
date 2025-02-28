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
        pin: document.body,
      },
    });

    //ANIMAION DE LA SCENE 
    timeline.to(this.scene.rotation, { x: -Math.PI / 2.5 }, 0);
    timeline.to(this.scene.position, { y: -2 }, 0);

    //ANIMATION DU CACHE
    this.cacheMain.reverse().forEach((item, index) => {
      timeline.to(item.position, { y: -4, duration: 3 }, 0.5);
    });
    
    //ORIGINE DE LA POSITION DE WHEELS3 + ANIMATION
    this.originalRotation = { ...this.wheels[3].rotation };
    this.originalPosition = { ...this.wheels[3].position };
    const pointLight = this.lightManager.pointLight;
    pointLight.position.set(0, 3, 0);
    this.wheels[3].add(pointLight);

    timeline.to(this.wheels[3].position, { z: 3, duration: 3 }, 2);
    timeline.to(
      this.wheels[3].rotation,
      { y: 3.5, x: 6, z: 3.25, duration: 5 },
      2
    );

    timeline.to(
      this.wheels[3].position,
      { y: -3.5, x: 0.1, z: 3.25, duration: 7 },
      6
    );
    timeline.to(
      this.wheels[3].rotation,
      { y: 6.5, x: 6, z: 3.25, duration: 7 },
      6
    );

    timeline.fromTo(
      "#textWheelEscape",
      { opacity: 0 },
      { opacity: 1, duration: 2 },
      8
    );

    timeline.to(pointLight, { intensity: 0.6, duration: 8 }, 9);

    timeline.fromTo(
      "#textWheelEscape",
      { opacity: 1 },
      { opacity: 0, duration: 2 },
      18
    );

    timeline.to(pointLight, { intensity: 0, duration: 8 }, 18);


    timeline.to(
      this.wheels[3].position,
      { ...this.originalPosition, duration: 10 },
      18
    );
    timeline.to(
      this.wheels[3].rotation,
      { ...this.originalRotation, duration: 10 },
      18
    );

    //ORIGINE DE LA POSITION DE WHEELS1 + ANIMATION
    this.originalRotation = { ...this.wheels[1].rotation };
    this.originalPosition = { ...this.wheels[1].position };
    const pointLight2 = this.lightManager.pointLight2;
    pointLight2.position.set(0, 3, 0);
    this.wheels[1].add(pointLight2);


    timeline.to(this.wheels[1].position, { z: 3, duration: 3 }, 20);
    timeline.to(
      this.wheels[1].rotation,
      { y: 3.5, x: 6, z: 3.25, duration: 5 },
      20
    );

    timeline.to(
      this.wheels[1].position,
      { y: -3.5, x: 0.1, z: 3.25, duration: 7 },
      24
    );
    timeline.to(
      this.wheels[1].rotation,
      { y: 6.5, x: 6, z: 3.25, duration: 7 },
      24
    );

    timeline.fromTo(
      "#textWheelEscape2",
      { opacity: 0 },
      { opacity: 1, duration: 2 },
      26
    );

    timeline.to(pointLight2, { intensity: 0.6, duration: 8 }, 27);

    timeline.fromTo(
      "#textWheelEscape2",
      { opacity: 1 },
      { opacity: 0, duration: 2 },
      48
    );

    timeline.to(pointLight2, { intensity: 0, duration: 8 }, 37);


    timeline.to(
      this.wheels[1].position,
      { ...this.originalPosition, duration: 10 },
      37
    );
    timeline.to(
      this.wheels[1].rotation,
      { ...this.originalRotation, duration: 10 },
      37
    );

  }
}

export default ScrollAnimation;
