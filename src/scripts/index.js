import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../styles/style-navbar.css";
import "../styles/dashboard.css";
import "../styles/navbar.css";
import "../scripts/views/pages/user/HomePage";
import "../styles/home.css";
import "../styles/gallery-admin.css";
import "./views/templates/NavbarElement.js";
import "./views/templates/NavbarAdminElement.js";
import "./views/templates/SideBarElement.js";
import "./views/templates/Footer.js";
import App from "./views/app";

const app = new App({
  content: document.querySelector("#main-content")
});
window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
});
