import { View } from "./view.js";
import sourceView from "./sourceView.js";
import descView from "./descView.js";
import preconditionView from "./preconditionView.js";

export class MetaView extends View {
  _parentElement = document.querySelector(".meta-view");

  _generateMarkup() {
    const data = this._data;
    const sections = [
      sourceView.render(data.source, false),
      descView.render(data.desc, false),
      preconditionView.render(data.precondition, false),
    ];
    return sections.join('');
  }
}

export default new MetaView();
