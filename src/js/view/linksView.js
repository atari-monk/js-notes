import { View } from "./view.js";

export class LinksView extends View {
  _parentElement = document.querySelector(".links-view");

  _generateMarkup() {
    return this._data
      .map(
        (section) => `<article id="${section.text.toLowerCase()}">
        <h2>${section.text}</h2>
        <section class="list-point">
          <ol>
            <ul>
              ${section.links
            .map(
              (link) =>
                `<li class="list-point">
                  <a href="${link.link}">${link.text}</a>
                 </li>`
            )
            .join("")}
            </ul>
          </ol>
        </section>
        </article>`
      )
      .join("");
  }
}

export default new LinksView();
