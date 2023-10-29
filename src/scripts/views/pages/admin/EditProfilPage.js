import { async } from "regenerator-runtime";
import AdminSource from "../../../data/admin-source";

const EditProfilPage = {
  async render() {
    return `
      <navbar-admin></navbar-admin>
      <div class="container-fluid">
        <div class="row">
          <sidebar-element></sidebar-element>
          <div
            class="col-md-9 ms-sm-auto col-lg-10 px-md-4 d-flex flex-column align-items-center justify-content-center"
          >
            <div class="my-4 card shadow p-4" style="width: 50%;">
              <h3 class="text-center">Edit Profil</h3>
              <form class="editForm"></form>
              <button
                class="mt-2 btn btn-dark px-4"
                style="width:150px; max-width:100%"
                id="btnDelete"
              >
                Hapus Akun
              </button>
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

    const id = JSON.parse(localStorage.id);
    const form = document.querySelector(".editForm");

    // render data dengan value
    const data = await AdminSource.getData(id.id);
    form.innerHTML = `
     <div class="mb-3">
         <label for="inputName" class="form-label">Nama</label>
         <input type="text" class="form-control" id="inputName" name="name" value="${data.data.name}">
     </div>
     <div class="mb-3">
         <label for="inputJenisKelamin" class="form-label">Jenis Kelamin</label>
         <select class="form-select" id="inputJenisKelamin" name="jenis_kelamin">
             <option value="laki-laki">Laki-Laki</option>
             <option value="perempuan">Perempuan</option>
         </select>
     </div>
     <div class="mb-3">
         <label for="inputRole" class="form-label">Role</label>
         <input type="text" class="form-control" id="inputRole" value="admin" disabled>
     </div>
     <div class="mb-3">
         <label for="inputEmail" class="form-label">Email</label>
         <input type="email" class="form-control" id="inputEmail" placeholder="example@gmail.com" name="email" value="${data.data.email}">
     </div>
     <div class="mb-3">
         <label for="inputPassword" class="form-label">Password</label>
         <input type="password" class="form-control" id="inputPassword" placeholder="****" name="password">
     </div>
     <div class="mb-3">
         <label for="inputConfirmPassword" class="form-label">Konfirmasi Password</label>
         <input type="password" class="form-control" id="inputConfirmPassword" placeholder="****" name="confirmPassword">
     </div>
     <div class="mb-3">
         <label for="formFile" class="form-label">Masukan foto profil</label>
         <input class="form-control" type="file" id="formFile" name="file">
     </div>
    <button type="submit" class="btn btn-primary px-4" style="width:150px; max-width:100%">Simpan</button>
        
     `;

    // eksekusi edit profil
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      try {
        const response = await AdminSource.editData(id.id, data);
        if (response.length !== 0) {
          if (response.data) {
            window.location.replace("#/profil");
            return;
          }
          alert(response.response.data.msg);
        }
      } catch (error) {
        console.log(error);
      }
    });

    // eksekusi delete akun
    document.getElementById("btnDelete").addEventListener("click", async () => {
      const delData = await AdminSource.deleteData(id.id);
      window.location.replace("#/login");
    });
  }
};
export default EditProfilPage;
