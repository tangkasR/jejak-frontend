import UrlParser from "../routes/url-parser";
import routes from "../routes/routes";
import { middleware } from "../middleware/middleware";
import Swal from "sweetalert2";
class App {
  constructor({ content }) {
    this._content = content;
  }
  async renderPage() {
    let url = UrlParser.parseActiveUrlWithCombiner();
    const isLogin = await middleware();
    if (
      url === "/dashboard" ||
      url === "/profil" ||
      url === "/wisata" ||
      url === "/editprofil" ||
      url === "/addwisata" ||
      url === "/editwisata/:id" ||
      url === "/hotel" ||
      url === "/addhotel" ||
      url === "/edithotel/:id" ||
      url === "/galleryadminbyid/:id" ||
      url === "/galleryadmin" ||
      url === "/gallerywisataadmin/:id"
    ) {
      if (isLogin === true) {
        console.log(isLogin);
        const page = routes[url];
        this._content.innerHTML = await page.render();
        await page.afterRender();
      } else {
        Swal.fire({
          imageUrl: `./icons/icon-bingung.png`,
          imageWidth: 200,
          imageAlt: "Custom image",
          title: `<h5 style="font-weight:800;color:red;font-size:30px">ANDA BELUM LOGIN!</h5>`,
          text: `Login terlebih dahulu!`,
          showConfirmButton: false
        });
        if (
          url === "/dashboard" ||
          url === "/profil" ||
          url === "/wisata" ||
          url === "/editprofil" ||
          url === "/addwisata" ||
          url === "/editwisata/:id" ||
          url === "/hotel" ||
          url === "/addhotel" ||
          url === "/edithotel/:id" ||
          url === "/galleryadminbyid/:id" ||
          url === "/galleryadmin" ||
          url === "/gallerywisataadmin/:id"
        ) {
          window.location.replace("#/login");
        }
        url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._content.innerHTML = await page.render();
        await page.afterRender();
      }
    } else {
      const page = routes[url];
      if (page !== undefined) {
        this._content.innerHTML = await page.render();
        await page.afterRender();
        return;
      }
      this._content.innerHTML += `
        <div
          class="d-flex align-items-center flex-column justify-content-center"
          style="height:100vh;"
        >
          <h1 style="font-size:40px; font-weight:800">404</h1>
          <p style="font-size:20px; font-weight:600">Not Found</p>
        </div>
      `;
    }
  }
}

export default App;
