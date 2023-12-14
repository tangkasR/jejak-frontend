import Swal from "sweetalert2";

export const checkUrl = (url, isLogin) => {
  if (navigator.onLine === false) {
    return (url = "offline");
  }
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
      return url;
    } else {
      Swal.fire({
        imageUrl: `./icons/icon-bingung.png`,
        imageWidth: 200,
        imageAlt: "Custom image",
        title: `<h5 style="font-weight:800;color:red;font-size:30px">ANDA BELUM LOGIN!</h5>`,
        text: `Login terlebih dahulu!`,
        showConfirmButton: false
      });
      return (url = "/login");
    }
  }
  if (
    url === "/" ||
    url === "/home" ||
    url === "/gallery" ||
    url === "/editprofil" ||
    url === "/contact" ||
    url === "/map" ||
    url === "/kategorialam" ||
    url === "/kategoribudaya" ||
    url === "/login" ||
    url === "/register" ||
    url === "/favoritwisata" ||
    url === "/detail/:id" ||
    url === "/favorithotel" ||
    url === "/detailhotel/:id" ||
    url === "/detailgallery/:id" ||
    url === "/hotellandingpage"
  ) {
    if (isLogin === true) {
      return (url = "/dashboard");
    } else {
      //nonactive navbar
      const navLinkAll = document.querySelectorAll(".link-navbar-user");
      navLinkAll.forEach((link) => {
        link.classList.remove("active");
      });
      const dropdownAll = document.querySelectorAll(".dropdown-item");
      dropdownAll.forEach((link) => {
        link.classList.remove("active");
      });

      //end nonactive navbar

      // mengaktifkan navbar
      const navbar = document.querySelector("navbar-element");
      navbar.style.display = "block";

      // mengaktifkan footer
      const footer = document.querySelector("footer-element");
      footer.style.display = "block";

      //active navbar
      const navLink = document.querySelectorAll(".nav-link");
      navLink.forEach((link) => {
        link.addEventListener("click", function () {
          navLink.forEach((link) => {
            link.classList.remove("active");
          });
          this.classList.add("active");
        });
      });
      //end active navbar

      if (url === "/") {
        // nonaktifkan navbar
        const navbar = document.querySelector("navbar-element");
        navbar.style.display = "none";

        // nonaktifkan footer
        const footer = document.querySelector("footer-element");
        footer.style.display = "none";
      }
      return url;
    }
  }
  return (url = "notfound");
};
