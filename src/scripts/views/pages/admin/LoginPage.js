import { async } from "regenerator-runtime";
import AdminSource from "../../../data/admin-source";
import Swal from "sweetalert2";

const LoginPage = {
  async render() {
    return `
      <div
        class="d-flex align-items-center justify-content-center w-100"
        style="min-height:100vh; margin:90px 0"
      >
        <div class="card shadow" style="min-width:60%">
          <div
            class="m-0 row align-items-center justify-content-center"
          >
            <div
              class="col-12 col-sm-6 d-flex flex-column align-items-center justify-content-center rounded"
              style="min-height:600px; max-height:100%"
              id="sideContentLogin"
            >
              <div id="textAsideLogin" class="text-center text-light">
                <h1>Jelajah Jogjakarta</h1>
                <p>Jelajahi Jogja, Pesona setiap sudut</p>
              </div>
            </div>
            <div class="col-12 col-sm-6 p-5">
              <h3 class="text-center">Login</h3>
              <form class="loginform">
                <div class="mb-3">
                  <label for="inputEmail" class="form-label">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail"
                    name="email"
                  />
                </div>
                <div class="mb-3">
                  <label for="inputPassword" class="form-label">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                    name="password"
                  />
                </div>
                <div
                  class="gap-3 d-flex flex-wrap align-items-center justify-content-between"
                >
                  <button type="submit" class="w-100 mt-3 btn btn-primary px-4">
                    Login
                  </button>
                  <p class="">
                    Anda belum mempunyai akun?
                    <a href="#/register"> klik disini </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;
  },
  async afterRender() {
    // hapus footer
    const footer = document.querySelector("footer-element");
    footer.style.display = "none";

    // mengaktifkan navbar
    const navbar = document.querySelector("navbar-element");
    navbar.style.display = "block";

    const form = document.querySelector(".loginform");
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);

      try {
        const response = await AdminSource.login(data);
        if (response.length !== 0) {
          if (response.data) {
            const id = response.data.id;
            const myObj = {
              id: id
            };
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Berhasil Login!",
              showConfirmButton: false,
              timer: 1500
            });

            const myObj_string = JSON.stringify(myObj);
            localStorage.setItem("id", myObj_string);
            window.location.replace("#/dashboard");
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
export default LoginPage;
