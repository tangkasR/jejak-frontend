import WisataSource from "../../../data/wisata-source";

const MapPage = {
  async render() {
    return `
        <div id="map" class="vh-100" style="margin-bottom: -50px;"></div>
    `;
  },
  async afterRender() {
    // get data wisata
    const wisata = await WisataSource.getWisata();
    const dataWisata = wisata.data;

    // fitur map
    let map = L.map("map").setView([-7.797068, 110.370529], 12);
    // L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    //   maxZoom: 19,
    //   attribution: '&copy; <a href="">JelajahJogja</a>'
    // }).addTo(map);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="">JelajahJogja</a>'
    }).addTo(map);

    let arrayTitik = [];
    let area = [];
    let routing;
    let latitude_1;
    let latitude_2;
    let longitude_1;
    let longitude_2;
    let marker;
    let markers = L.markerClusterGroup({
      iconCreateFunction: function (cluster) {
        var markers = cluster.getAllChildMarkers();
        var html = '<div class="circle">' + markers.length + "</div>";
        return L.divIcon({
          html: html,
          className: "mycluster",
          iconSize: L.point(32, 32)
        });
      },
      spiderfyOnMaxZoom: false,
      showCoverageOnHover: true,
      zoomToBoundsOnClick: false
    });

    map.on("click", function (e) {
      if (arrayTitik.length > 1) {
        arrayTitik.pop();
        arrayTitik.push(e.latlng);

        routing.spliceWaypoints(0, 2);
        markers.clearLayers();
      } else {
        arrayTitik.push(e.latlng);
      }

      if (arrayTitik.length <= 2) {
        routing = L.Routing.control({
          waypoints: [L.latLng(arrayTitik[0]), L.latLng(arrayTitik[1])]
        }).addTo(map);
      }

      if (arrayTitik[1] !== undefined) {
        latitude_1 = arrayTitik[1].lat + 0.08;
        latitude_2 = arrayTitik[1].lat - 0.08;
        longitude_1 = arrayTitik[1].lng + 0.08;
        longitude_2 = arrayTitik[1].lng - 0.08;

        dataWisata.forEach((data) => {
          if (
            data.latitude >= latitude_2 &&
            data.latitude <= latitude_1 &&
            data.longitude >= longitude_2 &&
            data.longitude <= longitude_1
          ) {
            area.push({
              latitude: data.latitude,
              longitude: data.longitude,
              nama: data.nama,
              url: data.url,
              lokasi: data.lokasi
            });
          }
        });
        if (area.length !== 0) {
          console.log(area);
          area.forEach((data) => {
            marker = L.marker([data.latitude, data.longitude], {
              title: `${data.nama}`,
              alt: `Nama wisata`
            }).bindPopup(
              `<div class="text-center card-map h-100">
                  <h5 class="mb-3" style="font-weight:800">Wisata ${data.nama}</h5>
                  <img src="${data.url}"/>
                  <p><i class='bx bxs-map'></i> ${data.lokasi}</p>
                </div>`
            );
            markers.addLayer(marker);
          });
          area = [];
          map.addLayer(markers);
          console.log(markers);
        }
      }
    });
  }
};
export default MapPage;
