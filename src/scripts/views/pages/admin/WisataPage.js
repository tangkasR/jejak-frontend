import WisataSource from "../../../data/wisata-source";
import { async } from "regenerator-runtime";
import Swal from "sweetalert2";

const WisataPage = {
  async render() {
    return `
      <div class="container-fluid">
        <div class="row">
          <sidebar-element></sidebar-element>
          <div
            class="col-md-9 ms-sm-auto col-lg-10 px-md-4"
            id="container-right"
          >
            <navbar-admin-element></navbar-admin-element>
            <div class="mt-md-3 d-flex align-items-center justify-content-between px-5" id="content_container">
              <h1 class="title_items_sidebar my-3">Data Wisata</h1>
              <a href="#/addwisata" class="btn btn-success">Tambah</a>
            </div>
            <table
              class="table table-hover text-center px-5"
              style="font-size: 15px"
            >
              <thead class="table-dark">
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Nama</th>
                  <th scope="col">Kategori</th>
                  <th scope="col">Lokasi</th>
                  <th scope="col">Deskripsi</th>
                  <th scope="col">Rating</th>
                  <th scope="col">Image</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody class="item-container"></tbody>
            </table>
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
    const navLink = document.getElementById("wisata-link");
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

    // get data wisata
    const response = await WisataSource.getWisata();
    const datas = response.data;
    const itemContainer = document.querySelector(".item-container");
    datas.forEach((data) => {
      itemContainer.innerHTML += `
        <tr>
          <th scope="row">${data.id}</th>
          <td>${data.nama}</td>
          <td>${data.kategori}</td>
          <td>${data.lokasi}</td>
          <td>${data.deskripsi}</td>
          <td>${data.rating}</td>
          <td><img src="${data.url}" style="width:100px; height:100px; object-fit-:cover" /></td>
          <td><a href="#/editwisata/${data.id}" class="btn btn-info px-4" style="font-weight:400;">Ubah</a></td>
        </tr>
      `;
    });
  }
};
export default WisataPage;
