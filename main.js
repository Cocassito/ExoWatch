import SceneManager from "./src/SceneManager.js";
import ScrollAnimation from "./src/ScrollAnimation.js";

class Main {
  constructor() {
    this.sceneManager = new SceneManager();
    this.scrollAnimation = new ScrollAnimation(this.sceneManager);
  }
}

new Main();
