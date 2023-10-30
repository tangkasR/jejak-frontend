import WisataSource from "../../../data/wisata-source";

const MapPage = {
  async render() {
    return `
      <div id="map" style="height:100vh;"></div>
    `;
  },
  async afterRender() {
    //   nonaktif side bar
    const navLink = document.querySelector(".link-home");
    navLink.classList.remove("active");

    // Mengaktifkan footer
    const footer = document.querySelector("footer-element");
    footer.style.display = "block";

    // get data wisata
    const wisata = await WisataSource.getWisata();
    const dataWisata = wisata.data;
    console.log(dataWisata);

    // fitur map
    let map = L.map("map").setView([-7.797068, 110.370529], 12);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    dataWisata.forEach((data) => {
      let marker = L.marker([data.latitude, data.longitude], {
        title: `tes123`,
        alt: `${data.nama}`
      })
        .addTo(map)
        .bindPopup(
          `<div class="text-center">
            <h5>Wisata ${data.nama}</h5>
            <img src="${data.url}" style="width:200px;"/>
            <p>${data.deskripsi}</p>
          </div>`
        );
    });
  }
};
export default MapPage;
