import { DEBUG } from "../config.js";

export class Controller {
  _page;
  _type;

  constructor() {
    this._addHandlerLoad(this.#controlStyle.bind(this));
  }

  _addHandlerLoad(handler) {
    ["load"].forEach((ev) => window.addEventListener(ev, handler));
  }

  #controlStyle() {
    try {
      this._enableStyle("desktop");
      const none = document.getElementById("style-none");
      const desktop = document.getElementById("style-desktop");
      const mobile = document.getElementById("style-mobile");
      none.addEventListener("click", () => this._enableStyle("none"));
      desktop.addEventListener("click", () => this._enableStyle("desktop"));
      mobile.addEventListener("click", () => this._enableStyle("mobile"));
    } catch (err) {}
  }

  _enableStyle(name) {
    for (let i = 0; i < document.styleSheets.length; i++) {
      let file = document.styleSheets.item(i);
      file.href.includes(name)
        ? (file.disabled = false)
        : (file.disabled = true);
      DEBUG && console.log(file.href, "enabled =", file.disabled === false);
    }
  }

  _setPage() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    this._page = urlParams.get("page");
    this._type = urlParams.get("type");
    DEBUG && console.log(this._page);
  }
}
