import WisataSource from "../../../data/wisata-source";
import { async } from "regenerator-runtime";
import Swal from "sweetalert2";

const DashboardPage = {
  async render() {
    return `
      <div class="container-fluid">
        <div class="row">
          <sidebar-element></sidebar-element>
          <div class="col-md-9 ms-sm-auto col-lg-10 p-0 px-md-4">
            <navbar-admin-element></navbar-admin-element>
            <div
              id="content_container"
              class="mt-md-3 p-5 d-flex flex-wrap align-items-center justify-content-center gap-2 text-center"
            ></div>
          </div>
        </div>
      </div>
    `;
  },
  async afterRender() {
    //   active side bar
    const navLink = document.getElementById("dashboard-link");
    navLink.classList.add("active");

    // render item wisata
    const itemContainer = document.getElementById("content_container");
    const response = await WisataSource.getWisata();
    const datas = response.data;
    datas.forEach((data) => {
      itemContainer.innerHTML += `
      <div class="card shadow p-3">
        <img src="${data.url}" style="max-width: 200px; min-height: 200px; object-fit:cover">
        <a href="#/cobareview/${data.id}" style="text-decoration: none"><h5 class="text-dark mt-3 mb-3">${data.nama}</h5></a>
        <p>${data.kategori}</p>
        <p>${data.lokasi}</p>
        <p>${data.deskripsi}</p>
      </div>
      `;
    });
  }
};
export default DashboardPage;
