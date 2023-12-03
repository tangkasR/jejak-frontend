import { async } from "regenerator-runtime";
import AdminSource from "../../../data/admin-source";
import Swal from "sweetalert2";

const LoginPage = {
  async render() {
    return `
      <div
        class="d-flex align-items-center justify-content-center w-100"
        style="min-height:90vh; margin:90px 0"
      >
        <div
          class="card shadow"
          style="min-width:70%"
          id="content-logres"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div class="m-0 row align-items-center justify-content-center">
            <div
              class="col-12 col-sm-6 d-flex flex-column align-items-center justify-content-center rounded"
              style="min-height:500px; max-height:100%"
              id="sideContentLogin"
            >
              <div id="textAsideLogin" class="text-center text-light">
                <h1>Jelajah Jogjakarta</h1>
                <p>Jelajahi Jogja, Pesona setiap sudut</p>
              </div>
            </div>
            <div class="col-12 col-sm-6 p-5">
              <h3 class="text-center title-logres">Login</h3>
              <form class="loginform">
                <div class="mb-3">
                  <label for="inputEmail" class="form-label">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail"
                    name="email"
                    placeholder="example@gmail.com"
                  />
                </div>
                <div class="mb-3">
                  <label for="inputPassword" class="form-label">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                    name="password"
                    placeholder="******"
                  />
                </div>
                <div
                  class="gap-3 d-flex flex-wrap align-items-center justify-content-between"
                >
                  <button
                    type="submit"
                    class="btn-logres w-100 mt-3 btn"
                  >
                    Login
                  </button>
                  <p class="anchor-logres">
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
    const form = document.querySelector(".loginform");
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      try {
        const response = await AdminSource.login(data);
        if (response.length !== 0) {
          if (response.data) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Berhasil Login!",
              showConfirmButton: false,
              timer: 1500
            });
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
