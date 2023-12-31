import WisataSource from "../../../data/wisata-source";
import { async } from "regenerator-runtime";
import Swal from "sweetalert2";

const AddWisataPage = {
  async render() {
    return `
      <div class="container-fluid">
        <div class="row">
          <sidebar-element></sidebar-element>
          <div class="col-md-9 ms-sm-auto col-lg-10 p-0"
          id="container-right">
            <navbar-admin-element></navbar-admin-element>
            <div
              class="px-md-3 mt-md-3 mb-5 d-flex align-items-center justify-content-center"
              id="content_container"
            >
              <div class="mt-4 card shadow p-4" style="min-width: 70%;">
                <h3 class="text-center title_items_sidebar">Tambah Wisata</h3>
                <form class="addWisataForm">
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
                    <label for="inputKategori" class="form-label"
                      >Kategori</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="inputKategori"
                      name="kategori"
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
                  <div class="mb-3" id="map" style="height: 60vh; z-index:0"></div>
                  <div
                    id="latLong"
                    class="row align-items-center justify-content-center"
                  ></div>
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
    //   active side bar
    const navLink = document.getElementById("wisata-link");
    navLink.classList.add("active");

    // fitur map
    var map = L.map("map").setView([-7.797068, 110.370529], 12);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    L.Control.geocoder().addTo(map);

    map.on("click", (e) => {
      // get lat dan lng dari map
      const containerMap = document.getElementById("latLong");
      containerMap.innerHTML = `
      <div class="mb-3 col-6">
        <label for="inputLatitude" class="form-label">Latitude</label>
        <input
          type="text"
          class="form-control"
          id="inputLatitude"
          name="latitude"
          value="${e.latlng.lat}"
        />
      </div>
      <div class="mb-3 col-6">
        <label for="inputLongitude" class="form-label">Longitude</label>
        <input
          type="text"
          class="form-control"
          id="inputLongitude"
          name="longitude"
          value="${e.latlng.lng}"
        />
      </div>
    `;
    });

    // eksekusi tambah wisata
    const form = document.querySelector(".addWisataForm");
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const f = document.querySelector("#formFile");
      const img = f.files[0];
      if (img === undefined) {
        Swal.fire({
          icon: "error",
          title: `Masukan file image!`,
          text: `Tolong ulangi!`,
          showConfirmButton: false
        });
        return;
      }
      const reader = new FileReader();

      reader.readAsDataURL(img);
      reader.onloadend = async () => {
        const data = {
          nama: document.querySelector("#inputNama").value,
          kategori: document.querySelector("#inputKategori").value,
          lokasi: document.querySelector("#inputLokasi").value,
          deskripsi: document.querySelector("#inputDeskripsi").value,
          latitude: document.querySelector("#inputLatitude").value,
          longitude: document.querySelector("#inputLongitude").value,
          file: reader.result
        };
        try {
          const response = await WisataSource.addWisata(data);
          if (response.length !== 0) {
            if (response.data) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Berhasil Menambah Wisata!",
                showConfirmButton: false,
                timer: 1500
              });
              window.location.replace("#/wisata");
              return;
            }
            Swal.fire({
              icon: "error",
              title: `${response.response.data.msg}!`,
              text: `Tolong ulangi!`,
              showConfirmButton: false
            });
          }
        } catch (error) {
          console.log(error);
        }
      };
    });
  }
};
export default AddWisataPage;
