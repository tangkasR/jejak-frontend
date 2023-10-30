import WisataSource from "../../../data/wisata-source";
import { async } from "regenerator-runtime";
import Swal from "sweetalert2";

const GalleryPage = {
  async render() {
    return `
      <navbar-admin></navbar-admin>
      <div class="container-fluid">
        <div class="row">
          <sidebar-element></sidebar-element>
          <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div
              id="card-container"
              class="p-5 d-flex flex-wrap align-items-center justify-content-center gap-2"
            ></div>
          </div>
        </div>
      </div>
    `;
  },
  async afterRender() {
    // menonaktifkan navbar user
    const navbar = document.querySelector("navbar-element");
    navbar.style.display = "none";

    // hapus footer
    const footer = document.querySelector("footer-element");
    footer.style.display = "none";

    // eksekusi logout
    document.getElementById("btnLogout").addEventListener("click", async () => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Berhasil Logout!",
        showConfirmButton: false,
        timer: 1500
      });
      localStorage.removeItem("id");
      window.location.replace("#/login");
    });

    //   active side bar
    const navLink = document.getElementById("gallery-link");
    navLink.classList.add("active");

    // render item wisata
    const itemContainer = document.getElementById("card-container");
    const response = await WisataSource.getWisata();
    const datas = response.data;
    datas.forEach((data) => {
      itemContainer.innerHTML += `
      <div class="card shadow p-3" style="min-width:300px; height:100%">
        <img src="${data.url}" style="width: 100%; height: 200px; object-fit:cover">
        <a href="#/gallerywisataadmin/${data.id}" style="text-decoration: none"><h5 class="text-dark mt-3 mb-3">${data.nama}</h5></a>
        <p>${data.kategori}</p>
        <p>${data.lokasi}</p>
        <p>${data.deskripsi}</p>
      </div>
      `;
    });
  }
};
export default GalleryPage;
