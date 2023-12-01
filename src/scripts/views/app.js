import UrlParser from "../routes/url-parser";
import routes from "../routes/routes";
import { middleware } from "../middleware/middleware";
import { checkUrl } from "../utils/url-checking-inititator";
import SidebarInitiator from "../utils/sidebar-initiator";

class App {
  constructor({ content }) {
    this._content = content;
  }
  async renderPage() {
    let url = UrlParser.parseActiveUrlWithCombiner();
    const isLogin = await middleware();
    const urlTo = checkUrl(url, isLogin);

    const page = routes[urlTo];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    if (isLogin === true) {
      // akses side bar
      SidebarInitiator.init({
        button: document.querySelector(".btn-sidebar"),
        drawer: document.querySelector(".sidebar"),
        content: document.getElementById("content_container")
      });
    }
  }
}

export default App;
