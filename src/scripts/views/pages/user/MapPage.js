import WisataSource from '../../../data/wisata-source';

const MapPage = {
  async render () {
    return `
        <div id="map" class="vh-100" style="margin-bottom: -50px;"></div>
    `;
  },
  async afterRender () {
    // get data wisata
    const wisata = await WisataSource.getWisata ();
    const dataWisata = wisata.data;

    // fitur map
    let map = L.map ('map').setView ([-7.797068, 110.370529], 12);
    L.tileLayer ('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="">JelajahJogja</a>',
    }).addTo (map);
    dataWisata.forEach (data => {
      let marker = L.marker ([data.latitude, data.longitude], {
        title: `${data.nama}`,
        alt: `Nama wisata`,
      })
        .addTo (map)
        .bindPopup (
          `<div class="text-center card-map h-100">
            <h5 class="mb-3" style="font-weight:800">Wisata ${data.nama}</h5>
            <img src="${data.url}"/>
            <p><i class='bx bxs-map'></i> ${data.lokasi}</p>
          </div>`
        );
    });
  },
};
export default MapPage;
