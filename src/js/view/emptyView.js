import { DEBUG } from './../config.js'

export class EmptyView {

  constructor() {
    this.addHandlerRender(this.#controlStyle.bind(this));
  }

  addHandlerRender(handler) {
    ["load"].forEach((ev) => window.addEventListener(ev, handler));
  }

  #controlStyle() {
    try {
      this.enableStyle("desktop");
      const none = document.getElementById("style-none");
      const desktop = document.getElementById("style-desktop");
      const mobile = document.getElementById("style-mobile");
      none.addEventListener("click", () => this.enableStyle("none"));
      desktop.addEventListener("click", () => this.enableStyle("desktop"));
      mobile.addEventListener("click", () => this.enableStyle("mobile"));
    } catch (err) { }
  }

  enableStyle(name) {
    for (let i = 0; i < document.styleSheets.length; i++) {
      let file = document.styleSheets.item(i);
      file.href.includes(name)
        ? (file.disabled = false)
        : (file.disabled = true);
      DEBUG && console.log(file.href, "enabled =", file.disabled === false);
    }
  }
}

export default new EmptyView();
