import HotelSource from "../../../data/hotel-source";
import WisataSource from "../../../data/wisata-source";
import { async } from "regenerator-runtime";
import Swal from "sweetalert2";

const HotelPage = {
  async render() {
    return `
      <div class="container-fluid">
        <div class="row">
          <sidebar-element></sidebar-element>
          <div class="col-md-9 ms-sm-auto col-lg-10 p-0 px-md-4">
            <navbar-admin-element></navbar-admin-element>
            <div class="mt-md-3 d-flex align-items-center justify-content-between px-5" id="content_container">
              <h1 class="my-3 title_items_sidebar">
                Data Hotel
              </h1>
              <a href="#/addhotel" class="btn btn-success">Tambah</a>
            </div>
            <table
              class="table table-hover text-center"
              style="font-size: 15px"
            >
              <thead class="table-dark">
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Nama</th>
                  <th scope="col">Lokasi</th>
                  <th scope="col">Deskripsi</th>
                  <th scope="col">Image</th>
                  <th scope="col">Rating</th>
                  <th scope="col">Wisata Terdekat</th>
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


    //   active side bar
    const navLink = document.getElementById("hotel-link");
    navLink.classList.add("active");

    // get data hotel
    const response = await HotelSource.getAllHotel();
    const datas = response.data;
    const itemContainer = document.querySelector(".item-container");
    datas.forEach(async (data) => {
      const wisata = await WisataSource.getWisataById(data.wisatumId);
      itemContainer.innerHTML += `
        <tr>
        <th scope="row">${data.id}</th>
        <td>${data.nama}</td>
        <td>${data.lokasi}</td>
        <td>${data.deskripsi}</td>
        <td><img src="${data.url}" style="width:100px; height:100px; object-fit-:cover" /></td>
        <td id="ratingHotel">${data.rating}</td>
        <td scope="row">${wisata.data.nama}</td>
          <td><a href="#/edithotel/${data.id}" class="btn btn-info px-4" style="font-weight:400;">Ubah</a></td>
        </tr>
      `;
    });
  }
};
export default HotelPage;
