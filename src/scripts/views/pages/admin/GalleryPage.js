import WisataSource from "../../../data/wisata-source";
import { async } from "regenerator-runtime";
import Swal from "sweetalert2";

const GalleryPage = {
  async render() {
    return `
      <div class="container-fluid">
        <div class="row">
          <sidebar-element></sidebar-element>
          <div class="col-md-9 ms-sm-auto col-lg-10 p-0 px-md-4">
            <navbar-admin-element></navbar-admin-element>
            <h1 class="mt-md-5 my-3 title_items_sidebar w-100 text-center" id="content_container">
              Data Gallery
            </h1>
            <div
              id="card-container"
              class="d-flex flex-wrap align-items-center justify-content-center gap-4"
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

    //   active side bar
    const navLink = document.getElementById("gallery-link");
    navLink.classList.add("active");

    // akses side bar
    const btnSidebar = document.querySelector(".btn-sidebar");
    const sidebar = document.querySelector(".sidebar");
    btnSidebar.addEventListener("click", () => {
      sidebar.classList.add("active");
    });
    document
      .getElementById("content_container")
      .addEventListener("click", () => {
        sidebar.classList.remove("active");
      });

    // render item wisata
    const itemContainer = document.getElementById("card-container");
    const response = await WisataSource.getWisata();
    const datas = response.data;
    datas.forEach((data) => {
      itemContainer.innerHTML += `
      <div class="text-center card shadow" style="min-width:300px; height:100%">
        <a href="#/gallerywisataadmin/${data.id}" id="nama-wisata" style="text-decoration: none">
          <img src="${data.url}" style="width: 100%; height: 250px; object-fit:cover">
          <div class="card-body">
            <h5 class=mt-3 mb-3">${data.nama}</h5>
          </div>
        </a>
      </div>
      `;
    });
  }
};
export default GalleryPage;
