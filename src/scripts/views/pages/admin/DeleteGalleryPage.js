import WisataSource from "../../../data/wisata-source";
import ReviewSource from "../../../data/review-source";
import HotelSource from "../../../data/hotel-source";
import GallerySource from "../../../data/gallery-source";
import { async } from "regenerator-runtime";
import UrlParser from "../../../routes/url-parser";
import Swal from "sweetalert2";

const DeleteGalleryPage = {
  async render() {
    return `
      <navbar-admin></navbar-admin>
      <div class="container-fluid">
        <div class="row">
          <sidebar-element></sidebar-element>
          <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4"></div>
        </div>
        <div id="overlay"></div>
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

    // eksekusi delete
    const foto = await GallerySource.getGalleryById(url.id);
    const data = foto.data;
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "mx-2 btn btn-success",
        cancelButton: "mx-2 btn btn-danger"
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons
      .fire({
        title: `Apakah anda yakin?`,
        text: "Foto akan dihapus!",
        imageUrl: `${data.url}`,
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: "Custom image",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Foto berhasil dihapus!",
            "success"
          );
          await GallerySource.deleteGallery(url.id);
          window.location.replace(`#/gallerywisataadmin/${data.wisatumId}`);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Foto tidak dihapus!",
            "error"
          );
          window.location.replace(`#/gallerywisataadmin/${data.wisatumId}`);
        }
      });

    const overlay = document.getElementById("overlay");
    overlay.addEventListener("click", () => {
      window.location.replace(`#/gallerywisataadmin/${data.wisatumId}`);
    });
  }
};
export default DeleteGalleryPage;
