import HotelSource from "../../../data/hotel-source";
import WisataSource from "../../../data/wisata-source";
import Swal from "sweetalert2";
import { async } from "regenerator-runtime";

const AddHotelPage = {
  async render() {
    return `
      <navbar-admin></navbar-admin>
      <div class="container-fluid">
        <div class="row">
          <sidebar-element></sidebar-element>
          <div
            class="col-md-9 ms-sm-auto col-lg-10 px-md-4 d-flex align-items-center justify-content-center"
          >
            <div class="mt-4 card shadow p-4" style="min-width: 70%;">
              <h3 class="text-center">Tambah Hotel</h3>
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
    const navLink = document.getElementById("wisata-link");
    navLink.classList.add("active");

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
