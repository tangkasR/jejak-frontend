import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../styles/dashboard.css";
import "../styles/navbar.css";
import "../styles/sidebar.css";
import "../styles/login-register.css";
import "../styles/profil.css";
import "../styles/table.css";
import "../styles/contact.css";
import "../styles/favorit.css";
import "../scripts/views/pages/user/HomePage";
import "../styles/home.css";
import "../styles/gallery-admin.css";
import "../styles/gallery.css";
import "./views/templates/NavbarElement.js";
import "./views/templates/NavbarAdminElement.js";
import "./views/templates/SideBarElement.js";
import "./views/templates/Footer.js";
import "./views/templates/FavoritTemplate.js";
import App from "./views/app";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const app = new App({
  content: document.querySelector("#main-content")
});
window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
});
