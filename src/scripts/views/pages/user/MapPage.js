import WisataSource from "../../../data/wisata-source";

const MapPage = {
  async render() {
    return `
      <h1>Ini peta page</h1>
      <div id="map" style="height: 80vh;"></div>
    `;
  },
  async afterRender() {
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
        alt: `${data.nama}`
      })
        .addTo(map)
        .bindPopup(`<b>Wisata ${data.nama}</b><br>${data.deskripsi}`);
      L.Control.geocoder().addTo(map);
    });
  }
};
export default MapPage;
