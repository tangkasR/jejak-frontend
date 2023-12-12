import { async } from "regenerator-runtime";
import AdminSource from "../../../data/admin-source";
import Swal from "sweetalert2";

const EditProfilPage = {
  async render() {
    return `
      <div class="container-fluid">
        <div class="row">
          <sidebar-element></sidebar-element>
          <div class="col-md-9 ms-sm-auto col-lg-10 p-0"
          id="container-right">
            <navbar-admin-element></navbar-admin-element>
            <div
              class="px-md-3 mt-md-3 d-flex align-items-center justify-content-center"
              id="content_container"
            >
              <div class="my-4 card shadow p-4" style="min-width: 70%;">
                <h3 class="title_items_sidebar text-center">Edit Profil</h3>
                <form class="editForm"></form>
                <div class="d-flex align-items-center justify-content-between">
                  <button
                    class="mt-2 btn btn-danger px-4"
                    style="width:150px; max-width:100%"
                    id="btnDelete"
                  >
                    Hapus Akun
                  </button>
                  <a
                    class="mt-2 btn btn-dark px-4"
                    style="width:150px; max-width:100%"
                    id="btnDelete"
                    href="#/profil"
                  >
                    Batal
                  </a>
                </div>
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

    const form = document.querySelector(".editForm");

    //   active side bar
    const navLink = document.getElementById("profil-link");
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

    // render data dengan value
    const token = localStorage.getItem("token");
    const profil = await AdminSource.getData(token);
    const dataProfil = profil.data;
    form.innerHTML = `
      <div class="row">
        <div class="col-6 mb-3">
          <label for="inputName" class="form-label">Nama</label>
          <input
            type="text"
            class="form-control"
            id="inputName"
            name="name"
            placeholder="Nama lengkap"
            value="${dataProfil.name}"
          />
        </div>
        <div class="col-6 mb-3">
          <label for="inputJenisKelamin" class="form-label"
            >Jenis Kelamin</label
          >
          <select
            class="form-select"
            id="inputJenisKelamin"
            name="jenis_kelamin"
          >
            <option value="laki-laki">Laki-Laki</option>
            <option value="perempuan">Perempuan</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-6 mb-3">
          <label for="inputEmail" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail"
            placeholder="example@gmail.com"
            name="email"
            value="${dataProfil.email}"
          />
        </div>
        <div class="col-6 mb-3">
          <label for="inputRole" class="form-label">Role</label>
          <input
            type="text"
            class="form-control"
            id="inputRole"
            value="admin"
            disabled
          />
        </div>
      </div>
      <div class="row">
        <div class="col-6 mb-3">
          <label for="inputPassword" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword"
            placeholder="****"
            name="password"
          />
        </div>
        <div class="col-6 mb-3">
          <label for="inputConfirmPassword" class="form-label"
            >Konfirmasi Password</label
          >
          <input
            type="password"
            class="form-control"
            id="inputConfirmPassword"
            placeholder="****"
            name="confirmPassword"
          />
        </div>
      </div>
      <div class="mb-3">
        <label for="formFile" class="form-label">Masukan foto profil</label>
        <input class="form-control" type="file" id="formFile" name="file" />
      </div>
      <div
        class="d-flex flex-wrap gap-3 align-items-center justify-content-between"
      >
        <button type="submit" class="btn-logres w-100 mt-3 btn ">
          Simpan
        </button>
        <p class="anchor-logres p-0 m-0">
          Anda ingin menghapus akun?
        </p>
      </div>
    `;

    // eksekusi edit profil
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

      const setData = async (img) => {
        const data = {
          name: document.querySelector("#inputName").value,
          email: document.querySelector("#inputEmail").value,
          password: document.querySelector("#inputPassword").value,
          confirmPassword: document.querySelector("#inputConfirmPassword")
            .value,
          jenis_kelamin: document.querySelector("#inputJenisKelamin").value,
          file: img
        };

        try {
          const response = await AdminSource.editData(data, token);
          if (response.length !== 0) {
            if (response.data) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Berhasil  Mengubah Profil!",
                showConfirmButton: false,
                timer: 1500
              });
              window.location.replace("#/profil");
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

      reader.onloadend = () => {
        setData(reader.result);
      };
    });

    // eksekusi delete akun
    document.getElementById("btnDelete").addEventListener("click", async () => {
      Swal.fire({
        title: "Apakah anda yakin?",
        text: `Data ${dataProfil.name} akan dihapus!"`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Hapus!",
        cancelButtonText: "Batal"
      }).then(async (result) => {
        if (result.isConfirmed) {
          Swal.fire("Terhapus!", "Data berhasil dihapus.", "success");
          const delData = await AdminSource.deleteData(token);
          localStorage.removeItem("token");
          window.location.replace("#/login");
        }
      });
    });
  }
};
export default EditProfilPage;
