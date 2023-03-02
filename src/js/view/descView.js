import { View } from "./view.js";

export class DescView extends View {
  _parentElement = "";

  _generateMarkup() {
    const desc = this._data;
    return `<section id="${desc.text.toLowerCase()}">
        <h2>${desc.text}</h2>
        <p>${desc.desc.join("<br>")}</p>
      </section><hr>`;
  }
}

export default new DescView();
