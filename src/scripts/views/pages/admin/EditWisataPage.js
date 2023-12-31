import WisataSource from "../../../data/wisata-source";
import { async } from "regenerator-runtime";
import UrlParser from "../../../routes/url-parser";
import Swal from "sweetalert2";

const EditWisataPage = {
  async render() {
    return `
      <div class="container-fluid">
        <div class="row">
          <sidebar-element></sidebar-element>
          <div
            class="col-md-9 ms-sm-auto col-lg-10 p-0"
            id="container-right"
          >
            <navbar-admin-element></navbar-admin-element>
            <div
              class="px-md-3 mt-md-3 d-flex align-items-center justify-content-center"
              id="content_container"
            >
              <div class="my-4 card shadow p-4" style="min-width: 70%;">
                <h3 class="title_items_sidebar text-center">Ubah Wisata</h3>
                <form class="editWisataForm"></form>
                <button
                  id="btnDel"
                  class="btn btn-danger px-4 my-3 ms-auto"
                  style="width:120px;"
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },
  async afterRender() {
    const form = document.querySelector(".editWisataForm");
    // get id
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    //   active side bar
    const navLink = document.getElementById("wisata-link");
    navLink.classList.add("active");

    // render value data
    const response = await WisataSource.getWisataById(url.id);
    const data = response.data;
    form.innerHTML = `
      <div class="mb-3">
        <label for="inputNama" class="form-label">Nama</label>
        <input
          type="text"
          class="form-control"
          id="inputNama"
          value="${data.nama}"
          name="nama"
        />
      </div>
      <div class="mb-3">
        <label for="inputKategori" class="form-label">Kategori</label>
        <input
          type="text"
          class="form-control"
          id="inputKategori"
          value="${data.kategori}"
          name="kategori"
        />
      </div>
      <div class="mb-3">
        <label for="inputLokasi" class="form-label">Lokasi</label>
        <input
          type="text"
          class="form-control"
          id="inputLokasi"
          value="${data.lokasi}"
          name="lokasi"
        />
      </div>
      <div class="form-floating mb-3">
        <textarea
          class="form-control"
          placeholder="Deskripsi wisata"
          id="inputDeskripsi"
          style="height: 100px"
          value="${data.lokasi}"
          name="deskripsi"
        ></textarea>
        <label for="inputDeskripsi">Deskripsi wisata</label>
      </div>
      <div class="mb-3">
        <label for="formFile" class="form-label">Masukan foto utama</label>
        <input class="form-control" type="file" id="formFile" name="file" />
      </div>
      <div class="mb-3" id="map" style="height: 60vh;z-index:0"></div>
      <div
        id="latLong"
        class="row align-items-center justify-content-center"
      >
        <div class="mb-3 col-6">
          <label for="inputLatitude" class="form-label">Latitude</label>
          <input
            type="text"
            class="form-control"
            id="inputLatitude"
            name="latitude"
            value="${data.latitude}"
          />
        </div>
        <div class="mb-3 col-6">
          <label for="inputLongitude" class="form-label">Longitude</label>
          <input
            type="text"
            class="form-control"
            id="inputLongitude"
            name="longitude"
            value="${data.longitude}"
          />
        </div>
      </div>
      <button
        type="submit"
        class="btn btn-primary px-4 mt-3"
        style="width:120px;"
      >
        Simpan
      </button>
    `;
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
        console.log(data);
        try {
          const response = await WisataSource.editWisata(url.id, data);
          if (response.length !== 0) {
            if (response.data) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Berhasil Mengubah Wisata!",
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

    // eksekusi delete wisata
    document.getElementById("btnDel").addEventListener("click", async () => {
      Swal.fire({
        title: "Apakah anda yakin?",
        text: `Data ${data.nama} akan dihapus!"`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Hapus!",
        cancelButtonText: "Batal"
      }).then(async (result) => {
        if (result.isConfirmed) {
          Swal.fire("Terhapus!", "Data berhasil dihapus.", "success");
          await WisataSource.deleteWisata(url.id);
          window.location.replace("#/wisata");
        }
      });
    });
  }
};
export default EditWisataPage;
