import WisataSource from "../../../data/wisata-source";

const MapPage = {
  async render() {
    return `
      <div class="overlay"></div>
      <div class="guide_map">
        <button class="btn-lacak">Panduan Fitur Lacak</button>
        <button class="btn-destinasi">Tampilkan Semua Destinasi</button>
        <button class="btn-reset">Reset Map</button>
      </div>

      <div class="panduanLacakContainer">
        <div class="panduanLacak">
          <div class="row">
            <div class="col-lg-4 mb-4 mb-lg-0">
              <h4>Panduan Fitur Lacak</h4>
              <p>1. Tentukan titik lokasi awal Anda (Gambar 1)</p>
              <p>2. Tentukan titik lokasi tujuan Anda (Gambar 2)</p>
              <p>3. Rute jalan akan muncul (Gambar 2)</p>
              <p>
                4. Scroll zoom untuk menampilkan destinasi terdekat dari rute
                jalan (Gambar 3)
              </p>
              <p>
                5. Klik Marker untuk menampilkan informasi tentang destinasi
                wisata (Gambar 4)
              </p>
              <hr />
              <p>
                - Destinasi yang tertampil akan menyesuaikan dengan range kurang
                lebih 10km dari titik lokasi tujuan
              </p>
              <p>- Titik tujuan lokasi bisa diubah</p>
              <p>
                - Titik awal lokasi tidak bisa diubah untuk mengubah titik awal
                silahkan refresh website
              </p>
              <p>
                - Untuk memunculkan semua destinasi klik tombol "semua
                destinasi"
              </p>
              <button class="btn_fav">Saya Mengerti</button>
            </div>
            <div class="col-lg-4 col-sm-6 img_wrapper_1">
              <div class="img_content_wrapper">
                <div class="caption_image"><p>Gambar 1</p></div>
                <img src="./images/titikawal_map.png" alt"">
              </div>
              <div class="img_content_wrapper">
                <div class="caption_image"><p>Gambar 3</p></div>
                <img src="./images/scroll_map.png" alt"">
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="img_content_wrapper">
                <div class="caption_image"><p>Gambar 2</p></div>
                <img src="./images/titiktujuan_map.png" alt"">
              </div>
              <div class="img_content_wrapper">
                <div class="caption_image"><p>Gambar 4</p></div>
                <img src="./images/detail_map.png" alt"">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="map" class="vh-100" style="margin-bottom: -50px;"></div>
    `;
  },
  async afterRender() {
    // hapus footer
    const footer = document.querySelector("footer-element");
    footer.style.display = "none";

    // get datas wisata
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
          waypoints: [L.latLng(arrayTitik[0]), L.latLng(arrayTitik[1])],
          routeWhileDragging: true,
          lineOptions: {
            styles: [{ color: "#3f4e4f", opacity: 1, weight: 5 }]
          },
          createMarker: function (i = number, waypoint = any, n = number) {
            const marker = L.marker(waypoint.latLng, {
              draggable: false,
              bounceOnAdd: false,
              bounceOnAddOptions: {
                duration: 1000,
                height: 800,
                function() {
                  bindPopup(myPopup).openOn(map);
                }
              },
              icon: L.icon({
                iconUrl: "./icons/wayang.png",
                iconSize: [100, 100],
                iconAnchor: [50, 94],
                popupAnchor: [-3, -76],
                // shadowUrl: "./icons/wayang.png",
                shadowSize: [68, 95],
                shadowAnchor: [22, 94]
              })
            });
            return marker;
          }
        }).addTo(map);
      }

      if (arrayTitik[1] !== undefined) {
        latitude_1 = arrayTitik[1].lat + 0.05;
        latitude_2 = arrayTitik[1].lat - 0.05;
        longitude_1 = arrayTitik[1].lng + 0.05;
        longitude_2 = arrayTitik[1].lng - 0.05;

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
              lokasi: data.lokasi,
              id: data.id
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
                  <h5 class="mb-3" style="font-weight:800"><a href="#/detail/${data.id}">Wisata ${data.nama}</a></h5>
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
    document.querySelector(".btn-destinasi").addEventListener("click", () => {
      dataWisata.forEach((data) => {
        let pointer = L.marker([data.latitude, data.longitude], {
          title: `${data.nama}`,
          alt: `Nama wisata`
        })
          .addTo(map)
          .bindPopup(
            `<div class="text-center card-map h-100">
                  <h5 class="mb-3" style="font-weight:800"><a href="#/detail/${data.id}">Wisata ${data.nama}</a></h5>
                  <img src="${data.url}"/>
                  <p><i class='bx bxs-map'></i> ${data.lokasi}</p>
                </div>`
          );
      });
    });
    document.querySelector(".btn-lacak").addEventListener("click", () => {
      const panduanLacak = document.querySelector(".panduanLacakContainer");
      panduanLacak.style.display = "block";
      const overlay = document.querySelector(".overlay");
      overlay.style.display = "block";
    });
    document.querySelector(".btn-reset").addEventListener("click", () => {
      location.reload();
    });

    if (document.querySelector(".btn_fav")) {
      document.querySelector(".btn_fav").addEventListener("click", () => {
        const panduanLacak = document.querySelector(".panduanLacakContainer");
        panduanLacak.style.display = "none";
        const overlay = document.querySelector(".overlay");
        overlay.style.display = "none";
      });
    }
  }
};
export default MapPage;
