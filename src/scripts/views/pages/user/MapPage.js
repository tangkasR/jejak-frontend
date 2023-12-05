import WisataSource from "../../../data/wisata-source";

const MapPage = {
  async render() {
    return `
      <div class="overlay"></div>
      <div class="arrow">
        <i class='bx bx-chevrons-right' id="arrow_icon" ></i>
      </div>
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
              <p>1. Tentukan titik lokasi awal Anda dengan menggunakan fitur search pada pojok kanan atas (Gambar 1).</p>
              <p>2. Klik Map sesuai titik lokasi awal yang diinginkan (Gambar 1).</p>
              <p>3. Tentukan titik lokasi tujuan Anda dengan menggunakan fitur search pada pojok kanan atas (Gambar 2).</p>
              <p>4. Klik Map sesuai titik lokasi tujuan yang diinginkan (Gambar 2).</p>
              <p>5. Rute jalan akan muncul (Gambar 2).</p>
              <p>
                6. Scroll zoom untuk menampilkan destinasi terdekat dari rute
                jalan (Gambar 3).
              </p>
              <p>
                7. Klik Marker untuk menampilkan informasi tentang destinasi
                wisata (Gambar 4).
              </p>
              <hr />
              <p>
                - Destinasi yang tertampil akan menyesuaikan dengan range kurang
                lebih 10km dari titik lokasi tujuan.
              </p>
              <p>- Titik tujuan lokasi bisa diubah.</p>
              <p>
                - Titik awal lokasi tidak bisa diubah untuk mengubah titik awal
                silahkan klik tombol "reset map".
              </p>
              <p>
                - Untuk memunculkan semua destinasi klik tombol "tampilkan semua
                destinasi".
              </p>
              <button class="btn_fav">Saya Mengerti</button>
            </div>
            <div class="col-lg-4 col-sm-6 img_wrapper_1">
              <div class="img_content_wrapper">
                <div class="caption_image"><p>Gambar 1</p></div>
                <img src="./images/titik_awal_map.png" alt"">
              </div>
              <div class="img_content_wrapper">
                <div class="caption_image"><p>Gambar 3</p></div>
                <img src="./images/scroll_lokasi_map.png" alt"">
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="img_content_wrapper">
                <div class="caption_image"><p>Gambar 2</p></div>
                <img src="./images/titik_tujuan_map.png" alt"">
              </div>
              <div class="img_content_wrapper">
                <div class="caption_image"><p>Gambar 4</p></div>
                <img src="./images/detail_wisata_map.png" alt"">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style="margin-bottom: -50px; min-height:100vh" id="userMap"></div>
    `;
  },
  async afterRender() {
    // hapus footer
    const footer = document.querySelector("footer-element");
    footer.style.display = "none";

    // active navbar
    const mapLink = document.getElementById("link-map");
    mapLink.classList.add("active");
    // end active navbar

    // get datas wisata
    const wisata = await WisataSource.getWisata();
    const dataWisata = wisata.data;

    // fitur map
    let map = L.map("userMap").setView([-7.797068, 110.370529], 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="">JelajahJogja</a>'
    }).addTo(map);
    L.Control.geocoder().addTo(map);

    let area = [];
    let routing;
    let latitude_1;
    let latitude_2;
    let longitude_1;
    let longitude_2;
    let marker;
    let titikAwal = "";
    let titikAkhir = "";
    let titikTemp;

    const iconWayang = L.icon({
      iconUrl: "./icons/wayang.png",
      iconSize: [100, 100],
      iconAnchor: [50, 94]
    });
    const iconBecak = L.icon({
      iconUrl: "./icons/becak_1.png",
      iconSize: [55, 55],
      iconAnchor: [25, 50]
    });
    const iconWisata = L.icon({
      iconUrl: "./icons/icon_wisata_2.png",
      iconSize: [50, 50],
      iconAnchor: [25, 2]
    });

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

    const makeRouting = (titik_awal, titik_akhir) => {
      routing = L.Routing.control({
        waypoints: [L.latLng(titik_awal), L.latLng(titik_akhir)],
        routeWhileDragging: false,
        lineOptions: {
          styles: [{ color: "#3f4e4f", opacity: 1, weight: 5 }]
        },
        createMarker: function (i = number, waypoint = any, n = number) {
          if (waypoint.latLng === titik_awal) {
            marker = L.marker(waypoint.latLng, {
              draggable: false,
              icon: iconWayang
            });
          } else {
            marker = L.marker(waypoint.latLng, {
              draggable: false,
              icon: iconBecak
            });
          }
          return marker;
        }
      }).addTo(map);

      if (titik_akhir !== null) {
        routing.on("routesfound", function (e) {
          e.routes[0].coordinates.forEach(function (coord, index) {
            setTimeout(() => {
              marker.setLatLng([coord.lat, coord.lng]);
            }, 5 * index);
          });
        });
      }
    };

    const dataWisataPopUp = (data) => {
      return `
        <div class="text-center card-map h-100">
          <h5 class="mb-3" style="font-weight:800">
            <a href="#/detail/${data.id}">Wisata ${data.nama}</a>
          </h5>
          <img src="${data.url}" />
          <p><i class="bx bxs-map"></i> ${data.lokasi}</p>
        </div>
      `;
    };

    map.on("click", function (e) {
      if (titikAwal !== "" && titikAkhir === "") {
        titikAkhir = e.latlng;
        titikTemp = titikAkhir;
        map.removeLayer(marker);
        makeRouting(titikAwal, titikAkhir);
      }

      if (titikAwal === "") {
        titikAwal = e.latlng;
        makeRouting(titikAwal, null);
      }

      titikTemp = e.latlng;
      if (titikAkhir !== titikTemp && titikAkhir !== "") {
        titikAkhir = titikTemp;
        routing.spliceWaypoints(0, 2);
        markers.clearLayers();
        map.removeLayer(marker);
        makeRouting(titikAwal, titikAkhir);
      }

      if (titikAkhir !== "") {
        latitude_1 = titikAkhir.lat + 0.05;
        latitude_2 = titikAkhir.lat - 0.05;
        longitude_1 = titikAkhir.lng + 0.05;
        longitude_2 = titikAkhir.lng - 0.05;

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
          area.forEach((data) => {
            let markerWisata = L.marker([data.latitude, data.longitude], {
              title: `${data.nama}`,
              alt: `Nama wisata`,
              icon: iconWisata
            }).bindPopup(dataWisataPopUp(data));
            markers.addLayer(markerWisata);
          });
          area = [];
          map.addLayer(markers);
        }
      }
    });

    document.querySelector(".btn-destinasi").addEventListener("click", () => {
      dataWisata.forEach((data) => {
        let pointer = L.marker([data.latitude, data.longitude], {
          title: `${data.nama}`,
          alt: `Nama wisata`,
          icon: iconWisata
        })
          .addTo(map)
          .bindPopup(dataWisataPopUp(data));
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

    if (document.getElementById("arrow_icon")) {
      document.getElementById("arrow_icon").addEventListener("click", () => {
        const sidebar = document.querySelector(".guide_map");
        sidebar.classList.toggle("active");
      });
    }
  }
};
export default MapPage;
