import AdminSource from "../../../data/admin-source";
import Swal from "sweetalert2";

const ProfilPage = {
  async render() {
    return `
      <div class="container-fluid">
        <div class="row">
          <sidebar-element></sidebar-element>
          <div class="col-md-9 ms-sm-auto col-lg-10 p-0"
          id="container-right">
            <navbar-admin-element></navbar-admin-element>
            <div id="content_container" class="mb-5 px-5 mt-3 d-flex align-items-center justify-content-center" style="min-height: 90vh;">
              <div
                class="card shadow"
                style="min-width:90%;"
                id="container-profil"
              ></div>
            </div>
          </div>
        </div>
      </div>
    `;
  },
  async afterRender() {
    //   active side bar
    const navLink = document.getElementById("profil-link");
    navLink.classList.add("active");

    // menampilkan data
    const container = document.getElementById("container-profil");
    const token = localStorage.getItem("token");
    const profil = await AdminSource.getData(token);
    console.log(profil);
    const dataProfil = profil.data;
    container.innerHTML = `
      <div class="row align-items-center justify-content-center">
        <div class=" col-sm-5 col-md-4 p-0">
          <div class="left">
            <div class="img-profil">
              <img src="${dataProfil.url}" alt="" />
            </div>
          </div>
        </div>
        <div class=" col-sm-7 col-md-8 p-0">
          <div class="row right-container">
            <div class="col-md-3 p-0"></div>
            <div class="col-md-9 p-0">
              <div class="right p-0">
                <h1 class="py-3">Profile Page</h1>
                <h2 class="fw-semibold py-1">Nama<br/><span class="fw-normal ">${dataProfil.name}</span></h2>
                <h2 class="fw-semibold py-1">Email <br/><span class="fw-normal ">${dataProfil.email}</span></h2>
                 <h2 class="fw-semibold py-1">Jenis Kelamin <br/><span class="fw-normal ">${dataProfil.jenis_kelamin}</span></h2>
                <div class="d-flex align-items-center justify-content-center gap-3 mt-3 pb-3">

                  <div class="btn-edit-profil">
                    <a
                      href="#/editprofil"
                      class="btn"
                      style="text-decoration:none; color:black; font-size:14px;"
                      >Ubah</a
                    >
                  </div>
                  <div class="btn-logout">
                    <button id="btnLogout" class="px-3 btn">Logout</button>
                  </div>
                </div>
                <div class="role-admin">
                  <h5>Admin</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // eksekusi logout
    document.getElementById("btnLogout").addEventListener("click", async () => {
      const logout = await AdminSource.logout(token);
      if (logout.length !== 0) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Berhasil Logout!",
          showConfirmButton: false,
          timer: 1500
        });
        localStorage.removeItem("token");
        window.location.replace("#/login");
      }
    });
  }
};
export default ProfilPage;
