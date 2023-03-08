import { DEBUG } from "../config.js";
import { Controller } from "./controller.js";
import model from "../model.js";
import emptyView from "../view/emptyView.js";
import generateRenderer from "../renderer/generate/noteRenderer.js";
import templateRenderer from "../renderer/template/noteRenderer.js";

class NotesController extends Controller {

  constructor() {
    super();
    emptyView.addHandlerRender(this.#controlNotes.bind(this));
  }

  async #controlNotes() {
    try {
      this._setPage();
      const data = await model.getPage(this._page);
      DEBUG && console.log(data);
      if (!this._type)
        generateRenderer.render(data);
      else
        templateRenderer.render(data, emptyView);
    } catch (err) { }
  }
}

new NotesController();
