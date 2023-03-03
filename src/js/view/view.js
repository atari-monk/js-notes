import { DEBUG } from "../config.js";

export class View {
  _data;

  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0)) {
      DEBUG && console.log("error");
      //todo: this.renderError();
      return;
    }
    this._data = data;
    const markup = this._generateMarkup();
    if (!render) return markup;
    this._clear();
    DEBUG && console.log(markup);
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
    this._parentElement.classList.remove("hide");
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  _scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
    console.log("scrolling to bottom!");
  }
}
