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

    if (urlTo === "") {
      this._content.innerHTML += `
        <div
          class="d-flex align-items-center flex-column justify-content-center"
          style="height:100vh;"
        >
          <h1 style="font-size:40px; font-weight:800">404</h1>
          <p style="font-size:20px; font-weight:600">Not Found</p>
        </div>
      `;
      return;
    }

    const page = routes[urlTo];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    if (urlTo === "/dashboard") {
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
