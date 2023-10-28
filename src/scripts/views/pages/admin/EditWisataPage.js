import WisataSource from "../../../data/wisata-source";
import { async } from "regenerator-runtime";
import UrlParser from "../../../routes/url-parser";

const EditWisataPage = {
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
              <h3 class="text-center">Ubah Wisata</h3>
              <form class="editWisataForm"></form>
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
    const form = document.querySelector(".editWisataForm");
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
    const navLink = document.getElementById("wisata-link");
    navLink.classList.add("active");

    // render value data
    const response = await WisataSource.getWisataById(url.id);
    const data = response.data;
    form.innerHTML = `
        <div class="mb-3">
            <label for="inputNama" class="form-label">Nama</label>
            <input type="text" class="form-control" id="inputNama" value='${data.nama}' name="nama">
        </div>
        <div class="mb-3">
            <label for="inputKategori" class="form-label">Kategori</label>
            <input type="text" class="form-control" id="inputKategori" value='${data.kategori}' name="kategori">
        </div>
        <div class="mb-3">
            <label for="inputLokasi" class="form-label">Lokasi</label>
            <input type="text" class="form-control" id="inputLokasi" value='${data.lokasi}' name="lokasi">
        </div>
        <div class="form-floating mb-3">
            <textarea class="form-control" placeholder="Deskripsi wisata" id="inputDeskripsi" style="height: 100px" value='${data.lokasi}'  name="deskripsi"></textarea>
            <label for="inputDeskripsi">Deskripsi wisata</label>
        </div>
        <div class="mb-3">
            <label for="formFile" class="form-label">Masukan foto utama</label>
            <input class="form-control" type="file" id="formFile" name="file">
        </div>
        <button type="submit" class="btn btn-primary px-4 mt-3" style="width:120px;">Simpan</button>
    `;

    // eksekusi tambah wisata
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      const response = await WisataSource.editWisata(url.id, data);
      window.location.replace("#/wisata");
    });

    // eksekusi delete wisata
    document.getElementById("btnDel").addEventListener("click", async () => {
      await WisataSource.deleteWisata(url.id);
      window.location.replace("#/wisata");
    });
  }
};
export default EditWisataPage;
