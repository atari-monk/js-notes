import { View } from "./view.js";

export class PreconditionView extends View {
  _parentElement = "";

  _generateMarkup() {
    const item = this._data;
    return `<section id="${item.text.toLowerCase()}">
        <h2>${item.text}</h2>
        <ol>
        ${item.list
          .map(
            (point) => `<li>
            ${point}
          </li>`
          )
          .join("<br>")}
        </ol>
      </section>`;
  }
}

export default new PreconditionView();
