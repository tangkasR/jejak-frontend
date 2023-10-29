import HotelSource from "../../../data/hotel-source";
import WisataSource from "../../../data/wisata-source";
import { async } from "regenerator-runtime";
import UrlParser from "../../../routes/url-parser";

const EditHotelPage = {
  async render() {
    return `
      <navbar-admin></navbar-admin>
      <div class="container-fluid">
        <div class="row">
          <sidebar-element></sidebar-element>
          <div
            class="col-md-9 ms-sm-auto col-lg-10 px-md-4 d-flex align-items-center justify-content-center"
          >
            <div class="my-4 card shadow p-4" style="width: 70%;">
              <h3 class="text-center">Ubah Hotel</h3>
              <form class="editHotelForm">
                <div id="item-edit"></div>
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
                <button
                  type="submit"
                  class="btn btn-primary px-4 mt-3"
                  style="width:120px;"
                >
                  Simpan
                </button>
              </form>
              <button
                id="btnDel"
                class="btn btn-danger px-4 my-3"
                style="width:120px;"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  },
  async afterRender() {
    const form = document.querySelector(".editHotelForm");
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
      localStorage.removeItem("id");
      window.location.replace("#/login");
    });

    //   active side bar
    const navLink = document.getElementById("hotel-link");
    navLink.classList.add("active");

    // render value data
    const response = await HotelSource.getHotelById(url.id);
    const data = response.data;
    const containerDataItem = document.getElementById("item-edit");
    containerDataItem.innerHTML = `
    <div class="mb-3">
        <label for="inputNama" class="form-label">Nama</label>
        <input type="text" class="form-control" id="inputNama" value="${data.nama}" name="nama">
    </div>
    <div class="mb-3">
        <label for="inputLokasi" class="form-label">Lokasi</label>
        <input type="text" class="form-control" id="inputLokasi" value="${data.lokasi}" name="lokasi">
    </div>
    `;
    const datasWisata = await WisataSource.getWisata();
    const dataWisata = datasWisata.data;
    const selectContainer = document.getElementById("inputWisata");
    dataWisata.forEach((data) => {
      selectContainer.innerHTML += `
        <option value="${data.id}">${data.nama}</option>
        `;
    });

    // eksekusi tambah wisata
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      const response = await HotelSource.editHotel(url.id, data);
      if (response.length !== 0) {
        if (response.data) {
          window.location.replace("#/hotel");
          return;
        }
        alert(response.response.data.msg);
      }
    });

    // eksekusi delete wisata
    document.getElementById("btnDel").addEventListener("click", async () => {
      await HotelSource.deleteHotel(url.id);
      window.location.replace("#/hotel");
    });
  }
};
export default EditHotelPage;
