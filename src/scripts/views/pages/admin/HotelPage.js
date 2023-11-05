import HotelSource from "../../../data/hotel-source";
import { async } from "regenerator-runtime";
import Swal from "sweetalert2";
import DataTable from "datatables.net-dt";
import "datatables.net-responsive-dt";

const HotelPage = {
  async render() {
    return `
      <div class="container-fluid">
        <div class="row">
          <sidebar-element></sidebar-element>
          <div class="col-md-9 ms-sm-auto col-lg-10 p-0" id="container-right">
            <navbar-admin-element></navbar-admin-element>
            <div
              class="mt-md-3 d-flex align-items-center justify-content-between px-5"
              id="content_container"
            >
              <h1 class="my-3 title_items_sidebar">Data Hotel</h1>
              <a href="#/addhotel" class="btn btn-success">Tambah</a>
            </div>
            <div class="table-wraper px-md-5">
              <table
                class="table table-hover text-center"
                style="font-size: 15px"
                id="tableDatas"
              >
                <thead class="table-dark">
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Lokasi</th>
                    <th scope="col">Deskripsi</th>
                    <th scope="col">Image</th>
                    <th scope="col">Rating</th>
                    <th scope="col">Aksi</th>
                  </tr>
                </thead>
                <tbody class="item-container"></tbody>
              </table>
            </div>
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
      itemContainer.innerHTML += `
        <tr class="hotelTr">
        <th scope="row">${data.id}</th>
        <td>${data.nama}</td>
        <td>${data.lokasi}</td>
        <td>${data.deskripsi}</td>
        <td><img src="${data.url}" style="width:100px; height:100px; object-fit-:cover" /></td>
        <td id="ratingHotel">${data.rating}</td>
        <td><a href="#/edithotel/${data.id}" class="btn btn-info px-4" style="font-weight:400;">Ubah</a></td>
        </tr>
      `;
    });
    let table = new DataTable("#tableDatas", {
      responsive: true
    });
  }
};
export default HotelPage;
