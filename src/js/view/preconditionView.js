import { View } from "./view.js";

export class PreconditionView extends View {
  _parentElement = "";

  _generateMarkup() {
    const item = this._data;
    return `<section id="${item.text.toLowerCase()}">
        <h2>${item.text}</h2>
        <ul class='preconditions'>
        ${item.list
        .map(
          (point) => `<li>
            <p>${point}</p>
          </li>`
        )
        .join("")}
        </ul>
      </section><hr>`;
  }
}

export default new PreconditionView();
