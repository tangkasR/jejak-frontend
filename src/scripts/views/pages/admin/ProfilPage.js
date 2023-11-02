import AdminSource from "../../../data/admin-source";
import Swal from "sweetalert2";

const ProfilPage = {
  async render() {
    return `
      <navbar-admin></navbar-admin>
      <div class="container-fluid">
        <div class="row">
          <sidebar-element></sidebar-element>
          <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div
              class="my-5 w-100 d-flex align-items-center justify-content-center"
            >
              <div class="card shadow" style="min-width:90%;" id="container-profil">
                
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

    // eksekusi logout
    document.getElementById("btnLogout").addEventListener("click", async () => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Berhasil Logout!",
        showConfirmButton: false,
        timer: 1500
      });
      localStorage.removeItem("id");
      window.location.replace("#/login");
    });

    //   active side bar
    const navLink = document.getElementById("profil-link");
    navLink.classList.add("active");

    // menampilkan data
    const id = JSON.parse(localStorage.id);
    const container = document.getElementById("container-profil");
    const profil = await AdminSource.getData(id.id);
    const dataProfil = profil.data;
    container.innerHTML = `
      <div class="row align-items-center justify-content-center">
        <div class="col-6 col-sm-4 pe-0">
          <div class="left">
            <div class="img-profil">
              <img src="${dataProfil.url}" alt="" />
            </div>
          </div>
        </div>
        <div class="col-6 col-sm-8 ps-0">
          <div class="row right-container">
            <div class="col-md-3"></div>
            <div class="col-md-9">
              <div class="right">
                <h1>Nama: ${dataProfil.name}</h1>
                <p>Email: ${dataProfil.email}</p>
                <p>Jenis Kelamin: ${dataProfil.jenis_kelamin}</p>
                <div class="btn-edit-profil">
                  <a href="#/editprofil" class="btn" style="text-decoration:none; color:black; font-size:14px;">Ubah</a>
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
  }
};
export default ProfilPage;
