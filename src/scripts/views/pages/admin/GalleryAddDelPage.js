import WisataSource from "../../../data/wisata-source";
import ReviewSource from "../../../data/review-source";
import HotelSource from "../../../data/hotel-source";
import GallerySource from "../../../data/gallery-source";
import { async } from "regenerator-runtime";
import UrlParser from "../../../routes/url-parser";
import Swal from "sweetalert2";

const GalleryAddDelPage = {
  async render() {
    return `
      <navbar-admin></navbar-admin>
      <div class="container-fluid">
        <div class="row">
          <sidebar-element></sidebar-element>
          <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="w-100 d-flex align-items-center justify-content-center">
              <div
                class="p-4 card  shadow mt-4"
                style="width:100%; max-width:800px"
              >
                <div id="content-title" class="w-100 text-center my-3"></div>
                <form class="addFotoForm">
                  <div
                    class="d-flex gap-2 align-items-center justify-content-center"
                  >
                    <div>
                      <input
                        class="form-control"
                        type="file"
                        id="formFile"
                        name="file"
                      />
                    </div>
                    <div>
                      <button class="btn btn-primary" type="submit">
                        Tambah Foto
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div
              id="container-gallery"
              class="mt-3 d-flex align-items-center justify-content-center flex-wrap gap-3"
            ></div>
          </div>
        </div>
      </div>
    `;
  },
  async afterRender() {
    // get id
    const url = UrlParser.parseActiveUrlWithoutCombiner();

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

    // active side bar
    const navLink = document.getElementById("gallery-link");
    navLink.classList.add("active");

    // get data wisata
    const response = await WisataSource.getWisataById(url.id);
    const data = response.data;
    console.log(data);

    // render page
    const titleContainer = document.getElementById("content-title");
    titleContainer.innerHTML += `<h1 style="font-size:30px">Gallery Wisata ${data.nama}</h1>`;

    // render card gallery
    const gallery = await GallerySource.getGalleryByWisataId(url.id);
    const dataGellery = gallery.data;
    console.log(gallery);
    const container = document.getElementById("container-gallery");
    dataGellery.forEach((data) => {
      container.innerHTML += `
        <div class="card shadow" style="width:fit-content; height:fit-content">
          <img
            src="${data.url}"
            alt="foto gallery"
            style="width:200px; height:200px; object-fit:cover"
          />
          <div id="delFotoGallery">
            <a href="#/galleryadminbyid/${data.id}" class="btn btn-danger"style="text-decoration:none">
              Hapus
            </a>
          </div>
        </div>
      `;
    });

    // Eksekusi add foto
    const form = document.querySelector(".addFotoForm");
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const dataObjek = Object.fromEntries(formData);
      const gallery = await GallerySource.addGallery(url.id, dataObjek);
      console.log(gallery);
      if (gallery.length !== 0) {
        if (gallery.data) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Berhasil Menambah Foto!",
            showConfirmButton: false,
            timer: 1500
          });
          window.location.reload();
          return;
        }
        Swal.fire({
          icon: "error",
          title: `${gallery.response.data.msg}!`,
          text: `Tolong ulangi!`,
          showConfirmButton: false
        });
      }
    });
  }
};
export default GalleryAddDelPage;
