import WisataSource from '../../../data/wisata-source';
import { async } from 'regenerator-runtime';

const AddWisataPage = {
  async render () {
    return `
    <navbar-admin></navbar-admin>
    <div class="container-fluid">
      <div class="row">
        <sidebar-element></sidebar-element>
        <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4 d-flex align-items-center justify-content-center">
        <div class="mt-4 card shadow p-4" style="width: 70%;">
            <h3 class="text-center">Tambah Wisata</h3>
            <form class="addWisataForm">
                <div class="mb-3">
                    <label for="inputNama" class="form-label">Nama</label>
                    <input type="text" class="form-control" id="inputNama" name="nama">
                </div>
                <div class="mb-3">
                    <label for="inputKategori" class="form-label">Kategori</label>
                    <input type="text" class="form-control" id="inputKategori" name="kategori">
                </div>
                <div class="mb-3">
                    <label for="inputLokasi" class="form-label">Lokasi</label>
                    <input type="text" class="form-control" id="inputLokasi" name="lokasi">
                </div>
                <div class="form-floating mb-3">
                    <textarea class="form-control" placeholder="Deskripsi wisata" id="inputDeskripsi" style="height: 100px" name="deskripsi"></textarea>
                    <label for="inputDeskripsi">Deskripsi</label>
                </div>
                <div class="mb-3">
                    <label for="formFile" class="form-label">Masukan foto utama</label>
                    <input class="form-control" type="file" id="formFile" name="file">
                </div>
                <button type="submit" class="btn btn-primary px-4 my-3">Simpan</button>
            </form>
        </div>
        </div>
      </div>
    </div>
    `;
  },
  async afterRender () {
    // menonaktifkan navbar user
    const navbar = document.querySelector('navbar-element');
    navbar.style.display = 'none';

    // eksekusi logout
    document.getElementById('btnLogout').addEventListener('click', async () => {
      localStorage.removeItem('id');
      window.location.replace('#/login');
    });

    //   active side bar
    const navLink = document.getElementById('wisata-link');
    navLink.classList.add('active');

    // eksekusi tambah wisata
    const form = document.querySelector('.addWisataForm');
    form.addEventListener('submit', async event => {
      event.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      const response = await WisataSource.addWisata(data);
      window.location.replace('#/wisata');
    });
  }
};
export default AddWisataPage;
