import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

class ScrollAnimation {
  constructor(sceneManager) {
    this.scene = sceneManager.scene;
    
    sceneManager.modelLoader.loadModel().then(() => {
      this.platine = sceneManager.modelLoader.platine;
      this.initScrollAnimation();
    }).catch((error) => {
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

    timeline.to(this.platine.position, { y: Math.PI / 2 }, 0.5);
  }
}
export default ScrollAnimation;