import AdminSource from "../../../data/admin-source";
import Swal from "sweetalert2";

const ProfilPage = {
  async render() {
    return `
      <div class="container-fluid">
        <div class="row">
          <sidebar-element></sidebar-element>
          <div class="col-md-9 ms-sm-auto col-lg-10 p-0">
            <navbar-admin-element></navbar-admin-element>
            <div id="content_container" class="px-5 mt-3 d-flex align-items-center justify-content-center" style="min-height: 90vh;">
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
    // menonaktifkan navbar user
    const navbar = document.querySelector("navbar-element");
    navbar.style.display = "none";

    // hapus footer
    const footer = document.querySelector("footer-element");
    footer.style.display = "none";

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

    // menampilkan data
    const id = JSON.parse(localStorage.id);
    const container = document.getElementById("container-profil");
    const profil = await AdminSource.getData(id.id);
    const dataProfil = profil.data;
    container.innerHTML = `
      <div class="row align-items-center justify-content-center">
        <div class=" col-sm-4 p-0">
          <div class="left">
            <div class="img-profil">
              <img src="${dataProfil.url}" alt="" />
            </div>
          </div>
        </div>
        <div class=" col-sm-8 p-0">
          <div class="row right-container">
            <div class="col-md-3 p-0"></div>
            <div class="col-md-9 p-0">
              <div class="right p-0">
                <h1>Nama: ${dataProfil.name}</h1>
                <p>Email: ${dataProfil.email}</p>
                <p>Jenis Kelamin: ${dataProfil.jenis_kelamin}</p>
                <div class="btn-edit-profil">
                  <a href="#/editprofil" class="btn" style="text-decoration:none; color:black; font-size:14px;">Ubah</a>
                </div>
                <div class="btn-logout">
                  <button id="btnLogout" class="px-3 btn">Logout</button>
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
      const logout = await AdminSource.logout(id.id);
      if (logout.length !== 0) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Berhasil Logout!",
          showConfirmButton: false,
          timer: 1500
        });
        localStorage.removeItem("id");
        window.location.replace("#/login");
      }
    });
  }
};
export default ProfilPage;
