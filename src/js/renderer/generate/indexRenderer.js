import navView from "../../view/generate/navView.js";
import linksList from "../../view/generate/linksView.js";

class IndexRenderer {

  render(data) {
    navView.render(data.nav);
    linksList.render(data.sections);
  }
}

export default new IndexRenderer();