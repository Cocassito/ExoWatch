import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

class ScrollAnimation {
  constructor(sceneManager) {
    
    this.scene = sceneManager.scene;
 
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
        end: "bottom top",
        scrub: 1,
        markers: true,
        pin: document.body,
      },
    });

    timeline.to(this.scene.rotation, { x: -Math.PI / 2.5 }, 0);
    timeline.to(this.scene.position, { y: -2 }, 0);

    this.cacheMain.reverse().forEach((item, index) => {
      timeline.to(item.position, { y: -4 }, index * 0.01); 
    });
    
    ;
  }
}
export default ScrollAnimation;
