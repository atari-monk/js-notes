import { DEBUG } from "../config.js";

export class Controller {
  _page;

  constructor() {
    this._addHandlerLoad(this.#controlStyle.bind(this));
  }

  _addHandlerLoad(handler) {
    ["load"].forEach((ev) => window.addEventListener(ev, handler));
  }

  #controlStyle() {
    try {
      this.#disableCss("mobile");
      const main = document.getElementById("main-css");
      const mobile = document.getElementById("mobile-css");
      main.addEventListener("click", () => this.#disableCss("mobile"));
      mobile.addEventListener("click", () => this.#disableCss("main"));
    } catch (err) {}
  }

  #disableCss(name) {
    for (let i = 0; i < document.styleSheets.length; i++) {
      let file = document.styleSheets.item(i);
      file.href.includes(name)
        ? (file.disabled = true)
        : (file.disabled = false);
      DEBUG && console.log(file.href, "disabled =", file.disabled);
    }
  }

  _setPage() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    this._page = urlParams.get("page");
    DEBUG && console.log(this._page);
  }
}
