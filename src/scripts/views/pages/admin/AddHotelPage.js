import HotelSource from "../../../data/hotel-source";
import WisataSource from "../../../data/wisata-source";
import Swal from "sweetalert2";
import { async } from "regenerator-runtime";

const AddHotelPage = {
  async render() {
    return `
      <div class="container-fluid">
        <div class="row">
          <sidebar-element></sidebar-element>
          <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4 p-0">
            <navbar-admin-element></navbar-admin-element>
            <div
              class="mt-md-3 mb-5 d-flex align-items-center justify-content-center"
              id="content_container"
            >
              <div class="mt-4 card shadow p-4" style="min-width: 70%;">
                <h3 class="text-center title_items_sidebar">Tambah Hotel</h3>
                <form class="addHotelForm">
                  <div class="mb-3">
                    <label for="inputNama" class="form-label">Nama</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputNama"
                      name="nama"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="inputLokasi" class="form-label">Lokasi</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputLokasi"
                      name="lokasi"
                    />
                  </div>
                  <div class="form-floating mb-3">
                    <textarea
                      class="form-control"
                      placeholder="Deskripsi wisata"
                      id="inputDeskripsi"
                      style="height: 100px"
                      name="deskripsi"
                    ></textarea>
                    <label for="inputDeskripsi">Deskripsi</label>
                  </div>
                  <div class="mb-3">
                    <label for="formFile" class="form-label"
                      >Masukan foto utama</label
                    >
                    <input
                      class="form-control"
                      type="file"
                      id="formFile"
                      name="file"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="inputWisata" class="form-label"
                      >Wisata terdekat</label
                    >
                    <select
                      class="form-select"
                      id="inputWisata"
                      name="wisatumId"
                    ></select>
                  </div>
                  <button type="submit" class="btn btn-primary px-4 my-3">
                    Simpan
                  </button>
                </form>
              </div>
            </div>
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
    const navLink = document.getElementById("hotel-link");
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

    // render select wisata
    const datasWisata = await WisataSource.getWisata();
    const dataWisata = datasWisata.data;
    console.log(dataWisata);
    const selectContainer = document.getElementById("inputWisata");
    dataWisata.forEach((data) => {
      selectContainer.innerHTML += `
        <option value="${data.id}">${data.nama}</option>
        `;
    });

    // eksekusi tambah wisata
    const form = document.querySelector(".addHotelForm");
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      console.log(data);
      const response = await HotelSource.addHotel(data);
      if (response.length !== 0) {
        if (response.data) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Berhasil Menambah Hotel!",
            showConfirmButton: false,
            timer: 1500
          });
          window.location.replace("#/hotel");
          return;
        }
        Swal.fire({
          icon: "error",
          title: `${response.response.data.msg}!`,
          text: `Tolong ulangi!`,
          showConfirmButton: false
        });
      }
    });
  }
};
export default AddHotelPage;
