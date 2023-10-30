import { async } from "regenerator-runtime";
import AdminSource from "../../../data/admin-source";
import Swal from "sweetalert2";

const RegistrasiPage = {
  async render() {
    return `
      <div
        class=" d-flex flex-column align-items-center justify-content-center w-100 mb-5"
        style="min-height: 60vh; margin-top:80px"
      >
        <div class="mt-3 card shadow p-4" style="width: 50%;">
          <h3 class="text-center">Registrasi</h3>
          <form class="registrasiform">
            <div class="mb-3">
              <label for="inputName" class="form-label">Nama</label>
              <input
                type="text"
                class="form-control"
                id="inputName"
                name="name"
              />
            </div>
            <div class="mb-3">
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
            <div class="mb-3">
              <label for="inputRole" class="form-label">Role</label>
              <input
                type="text"
                class="form-control"
                id="inputRole"
                value="admin"
                disabled
              />
            </div>
            <div class="mb-3">
              <label for="inputEmail" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="inputEmail"
                placeholder="example@gmail.com"
                name="email"
              />
            </div>
            <div class="mb-3">
              <label for="inputPassword" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="inputPassword"
                placeholder="****"
                name="password"
              />
            </div>
            <div class="mb-3">
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
            <div class="mb-3">
              <label for="formFile" class="form-label"
                >Masukan foto profil</label
              >
              <input
                class="form-control"
                type="file"
                id="formFile"
                name="file"
              />
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <button type="submit" class="btn btn-primary px-4">
                Registrasi
              </button>
              <p class="mt-4">
                Anda sudah mempunyai akun? <a href="#/login"> klik disini </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    `;
  },
  async afterRender() {
    // hapus footer
    const footer = document.querySelector("footer-element");
    footer.style.display = "none";

    const form = document.querySelector(".registrasiform");
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);

      try {
        const response = await AdminSource.registrasi(data);
        if (response.length !== 0) {
          if (response.data) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Berhasil Registrasi!",
              showConfirmButton: false,
              timer: 1500
            });
            window.location.replace("#/login");
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
    });
  }
};
export default RegistrasiPage;
