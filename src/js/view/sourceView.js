import { View } from "./view.js";

export class SourceView extends View {
  _parentElement = '';

  _generateMarkup() {
    const source = this._data;
    return `<section id="${source.text.toLowerCase()}">
        <h2>${source.text}</h2>
        ${source.links.map(
      (link) => `<a href="${link.link}">${link.text}</a><br>`
    ).join("")}
      </section><hr>`;
  }
}

export default new SourceView();
