import { PROD_MODE, LOCAL, PROD } from "./config.js";

class Model {
  #host;

  constructor() {
    this.#host = PROD_MODE ? PROD : LOCAL;
  }

  async getPage(page) {
    return await this.loadJson(page);
  }

  async loadJson(page) {
    return await fetch(`${this.#host}${page}.json`)
      .then((res) => res.json());
  }
}

export default new Model();