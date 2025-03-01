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
        this.barrels = sceneManager.modelLoader.barrels;
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
        end: "+=400%",
        scrub: 3,
        pin: document.body,
      },
    });

    //ANIMAION DE LA SCENE
    this.originalRotation = { ...this.scene.rotation };
    this.originalPosition = { ...this.scene.position };
    timeline.to(this.scene.rotation, { x: -Math.PI / 2.5, duration: 10 }, 0);
    timeline.to(this.scene.position, { y: -2, duration: 10 }, 0);

    //ANIMATION DU CACHE
    this.cacheMain.reverse().forEach((item, index) => {
      timeline.to(item.position, { y: -4, duration: 10 }, 1 + index * 0.5);
    });

    //ORIGINE DE LA POSITION DE WHEELS3 + ANIMATION
    this.originalRotation = { ...this.wheels[3].rotation };
    this.originalPosition = { ...this.wheels[3].position };
    const pointLight = this.lightManager.pointLight;
    pointLight.position.set(0, 3, 0);
    this.wheels[3].add(pointLight);

    timeline.to(this.wheels[3].position, { z: 3, duration: 6 }, 2 + 0.5);
    timeline.to(
      this.wheels[3].rotation,
      { y: 3.5, x: 6, z: 3.25, duration: 6 },
      4
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
      37
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

    //ORIGINE DE LA POSITION DE WHEELS2 + ANIMATION
    this.originalRotation = { ...this.wheels[2].rotation };
    this.originalPosition = { ...this.wheels[2].position };
    const pointLight3 = this.lightManager.pointLight3;
    pointLight3.position.set(0, 3, 0);
    this.wheels[2].add(pointLight3);

    timeline.to(this.wheels[2].position, { z: 3, duration: 3 }, 39);
    timeline.to(
      this.wheels[2].rotation,
      { y: 3.5, x: 6, z: 3.25, duration: 5 },
      39
    );

    timeline.to(
      this.wheels[2].position,
      { y: -3.3, x: 0.1, z: 3.25, duration: 7 },
      43
    );
    timeline.to(
      this.wheels[2].rotation,
      { y: 6.5, x: 6, z: 3.25, duration: 7 },
      43
    );

    timeline.fromTo(
      "#textWheelEscape3",
      { opacity: 0 },
      { opacity: 1, duration: 2 },
      45
    );

    timeline.to(pointLight3, { intensity: 0.6, duration: 8 }, 46);

    timeline.fromTo(
      "#textWheelEscape3",
      { opacity: 1 },
      { opacity: 0, duration: 2 },
      56
    );

    timeline.to(pointLight3, { intensity: 0, duration: 8 }, 56);

    timeline.to(
      this.wheels[2].position,
      { ...this.originalPosition, duration: 10 },
      56
    );
    timeline.to(
      this.wheels[2].rotation,
      { ...this.originalRotation, duration: 10 },
      56
    );

    //ORIGINE DE LA POSITION DE WHEELS0 + ANIMATION
    this.originalRotation = { ...this.wheels[0].rotation };
    this.originalPosition = { ...this.wheels[0].position };
    const pointLight4 = this.lightManager.pointLight4;
    pointLight4.position.set(0, 3, 0);
    this.wheels[0].add(pointLight4);

    timeline.to(this.wheels[0].position, { z: 3, duration: 3 }, 58);
    timeline.to(
      this.wheels[0].rotation,
      { y: 3.5, x: 6, z: 3.25, duration: 5 },
      58
    );

    timeline.to(
      this.wheels[0].position,
      { y: -2.7, x: 0.1, z: 3.25, duration: 7 },
      62
    );
    timeline.to(
      this.wheels[0].rotation,
      { y: 6.5, x: 6, z: 3.25, duration: 7 },
      62
    );

    timeline.fromTo(
      "#textWheelEscape4",
      { opacity: 0 },
      { opacity: 1, duration: 2 },
      64
    );

    timeline.to(pointLight4, { intensity: 0.6, duration: 8 }, 65);

    timeline.fromTo(
      "#textWheelEscape4",
      { opacity: 1 },
      { opacity: 0, duration: 2 },
      75
    );

    timeline.to(pointLight4, { intensity: 0, duration: 8 }, 75);

    timeline.to(
      this.wheels[0].position,
      { ...this.originalPosition, duration: 10 },
      75
    );
    timeline.to(
      this.wheels[0].rotation,
      { ...this.originalRotation, duration: 10 },
      75
    );

    //ORIGINE DE LA POSITION DE BARRELS + ANIMATION
    this.originalPositions = this.barrels.map((item) => ({ ...item.position }));
    this.originalRotations = this.barrels.map((item) => ({ ...item.rotation }));

    this.barrels.forEach((item, index) => {
      timeline.to(item.position, { z: 3, duration: 3 }, 77);
      timeline.to(item.rotation, { y: 3.5, x: 6, z: 3.25, duration: 5 }, 77);

      timeline.to(item.position, { y: -2.5, x: 0.1, z: 3.25, duration: 7 }, 81);
      timeline.to(item.rotation, { y: 6.5, x: 8.3, z: 3.25, duration: 7 }, 81);

      const offset = (index % 2 === 0 ? 1 : -1) * 0.8;

      timeline.to(item.position, { x: offset, duration: 7 }, 86);

      timeline.fromTo(
        "#textMainspringBarrel",
        { opacity: 0 },
        { opacity: 1, duration: 2 },
        88
      );

      timeline.fromTo(
        "#textMainspringBarrel",
        { opacity: 1 },
        { opacity: 0, duration: 2 },
        98
      );

      timeline.to(
        item.position,
        { ...this.originalPositions[index], duration: 10 },
        98
      );
      timeline.to(
        item.rotation,
        { ...this.originalRotations[index], duration: 10 },
        98
      );
    });

    timeline.to(this.scene.rotation, { z: 6.2, duration: 20 }, 110);
    timeline.to(
      this.scene.rotation,
      { x: 0, y: 0, z: this.scene.rotation.z, duration: 10 },
      135
    );
    timeline.to(
      this.scene.position,
      { x: 0, y: 0, z: this.scene.position.z, duration: 10 },
      135
    );

    //ORIGINE DE LA POSITION DU CACHE + ANIMATION
    this.originalPositions = this.caches.map((item) => ({ ...item.position }));
    this.originalRotations = this.caches.map((item) => ({ ...item.rotation }));

    this.caches.forEach((item, index) => {
      timeline.to(
        item.position,
        { ...this.originalPositions[index], duration: 10 },
        140 + index * 0.5 // Décalage progressif pour éviter les conflits
      );
      timeline.to(
        item.rotation,
        { ...this.originalRotations[index], duration: 10 },
        140 + index * 0.5
      );
    });
  }
}

export default ScrollAnimation;
