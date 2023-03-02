import { View } from "./view.js";

export class SummaryView extends View {
  _parentElement = document.querySelector(".summary-view");

  _generateMarkup() {
    const data = this._data;
    return `<section id="summary">
      <h2>Summary</h2>
      <summary>
        <p>${data.join("<br>")}</p>
      </summary>
    </section>`;
  }
}

export default new SummaryView();
