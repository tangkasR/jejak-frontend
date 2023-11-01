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
              <div
                class="card shadow  text-left p-5"
                style="width:50%"
                id="card-container"
              >
                <h2 class="mb-5 text-center">Profil Admin</h2>
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
    const container = document.getElementById("card-container");
    const data = await AdminSource.getData(id.id);
    console.log(data);
    container.innerHTML += `
        <div class="d-flex w-100 align-items-center justify-content-center">
          <img class="mb-3" src="${data.data.url}" alt="" style="width:300px; height:300px; border-radius:50%; object-fit: cover;"></img>
        </div>
        <h4 class="mb-3">Nama: ${data.data.name}</h4>
        <h5 class="mb-3">Email: ${data.data.email}</h5>
        <h5 class="mb-3">Role: ${data.data.role}</h5>
        <h5 class="mb-3">Jenis Kelamin: ${data.data.jenis_kelamin}</h5>
        <a href="#/editprofil" class="btn btn-info text-white fw-bold">Edit</a>
    `;
  }
};
export default ProfilPage;
