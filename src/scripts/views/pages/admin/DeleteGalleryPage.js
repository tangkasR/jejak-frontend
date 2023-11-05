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
      <div class="container-fluid">
        <div class="row" id="content_container">
          <sidebar-element></sidebar-element>
          <div class="col-md-9 ms-sm-auto col-lg-10 p-0" id="container-right">
            <navbar-admin-element></navbar-admin-element>
          </div>
        </div>
      </div>
    `;
  },
  async afterRender() {
    // get id
    const url = UrlParser.parseActiveUrlWithoutCombiner();

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
        confirmButtonText: "Ya, Hapus!",
        cancelButtonText: "Batal",
        reverseButtons: true,
        allowOutsideClick: false
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Dihapus!",
            "Foto berhasil dihapus!",
            "success"
          );
          await GallerySource.deleteGallery(url.id);
          window.location.replace(`#/gallerywisataadmin/${data.wisatumId}`);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Batal!",
            "Foto tidak dihapus!",
            "error"
          );
          window.location.replace(`#/gallerywisataadmin/${data.wisatumId}`);
        }
      });
  }
};
export default DeleteGalleryPage;
