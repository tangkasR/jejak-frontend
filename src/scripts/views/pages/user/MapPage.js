import WisataSource from '../../../data/wisata-source';

const MapPage = {
  async render () {
    return `
        <div class="guide_map">
          <button class="btn-lacak">Panduan fitur lacak</button>
            <button class="btn-destinasi">Semua Destinasi</button>
        </div>
        <div class="panduanLacak">
          <div class="row">
            <div class="col-4">
              <h4>Panduan Fitur Lacak</h4>
              <p>1. Tentukan titik lokasi awal Anda</p>
              <p>2. Tentukan titik lokasi tujuan Anda</p>
              <p>3. Rute jalan akan muncul</p>
              <p>4. Scroll zoom untuk menampilkan destinasi terdekat dari rute jalan</p>
              <p>5. Klik Marker untuk menampilkan informasi tentang destinasi wisata</p>
              <hr>
              <p>- Destinasi yang tertampil akan menyesuaikan dengan range kurang lebih 10km dari titik lokasi tujuan</p>
              <p>- Titik tujuan lokasi bisa diubah</p>
              <p>- Titik awal lokasi tidak bisa diubah untuk mengubah titik awal silahkan refresh website</p>
              <p>- Untuk memunculkan semua destinasi klik tombol "semua destinasi"</p>
              <button class="btn_fav">Saya Mengerti</button>
            </div>
            <div class="col-4">
              <img src="./images/titikawal_map.jpg" alt"">
              <img src="./images/destinasi_map.jpg" alt"">
              </div>
              <div class="col-4">
              <img src="./images/titiktujuan_map.jpg" alt"">
              <img src="./images/informasiDestinasi_map.jpg" alt"">
            </div>
          </div>
            
        </div>

        <div id="map" class="vh-100" style="margin-bottom: -50px;"></div>
    `;
  },
  async afterRender () {
    // get data wisata
    const wisata = await WisataSource.getWisata ();
    const dataWisata = wisata.data;

    // fitur map
    let map = L.map ('map').setView ([-7.797068, 110.370529], 12);
    // L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    //   maxZoom: 19,
    //   attribution: '&copy; <a href="">JelajahJogja</a>'
    // }).addTo(map);
    L.tileLayer ('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="">JelajahJogja</a>',
    }).addTo (map);

    let arrayTitik = [];
    let area = [];
    let routing;
    let latitude_1;
    let latitude_2;
    let longitude_1;
    let longitude_2;
    let marker;
    let markers = L.markerClusterGroup ({
      iconCreateFunction: function (cluster) {
        var markers = cluster.getAllChildMarkers ();
        var html = '<div class="circle">' + markers.length + '</div>';
        return L.divIcon ({
          html: html,
          className: 'mycluster',
          iconSize: L.point (32, 32),
        });
      },
      spiderfyOnMaxZoom: false,
      showCoverageOnHover: true,
      zoomToBoundsOnClick: false,
    });

    map.on ('click', function (e) {
      if (arrayTitik.length > 1) {
        arrayTitik.pop ();
        arrayTitik.push (e.latlng);

        routing.spliceWaypoints (0, 2);
        markers.clearLayers ();
      } else {
        arrayTitik.push (e.latlng);
      }

      if (arrayTitik.length <= 2) {
        routing = L.Routing
          .control ({
            waypoints: [L.latLng (arrayTitik[0]), L.latLng (arrayTitik[1])],
            routeWhileDragging: true,
            lineOptions: {
              styles: [{color: '#3f4e4f', opacity: 1, weight: 5}],
            },
            createMarker: function (i = number, waypoint = any, n = number) {
              const marker = L.marker (waypoint.latLng, {
                draggable: false,
                bounceOnAdd: false,
                bounceOnAddOptions: {
                  duration: 1000,
                  height: 800,
                  function () {
                    bindPopup (myPopup).openOn (map);
                  },
                },
                icon: L.icon ({
                  iconUrl: './icons/wayang.png',
                  iconSize: [100, 100],
                  iconAnchor: [50, 94],
                  popupAnchor: [-3, -76],
                  // shadowUrl: "./icons/wayang.png",
                  shadowSize: [68, 95],
                  shadowAnchor: [22, 94],
                }),
              });
              return marker;
            },
          })
          .addTo (map);
      }

      if (arrayTitik[1] !== undefined) {
        latitude_1 = arrayTitik[1].lat + 0.05;
        latitude_2 = arrayTitik[1].lat - 0.05;
        longitude_1 = arrayTitik[1].lng + 0.05;
        longitude_2 = arrayTitik[1].lng - 0.05;

        dataWisata.forEach (data => {
          if (
            data.latitude >= latitude_2 &&
            data.latitude <= latitude_1 &&
            data.longitude >= longitude_2 &&
            data.longitude <= longitude_1
          ) {
            area.push ({
              latitude: data.latitude,
              longitude: data.longitude,
              nama: data.nama,
              url: data.url,
              lokasi: data.lokasi,
              id: data.id,
            });
          }
        });
        if (area.length !== 0) {
          console.log (area);
          area.forEach (data => {
            marker = L.marker ([data.latitude, data.longitude], {
              title: `${data.nama}`,
              alt: `Nama wisata`,
            }).bindPopup (
              `<div class="text-center card-map h-100">
                  <h5 class="mb-3" style="font-weight:800"><a href="#/detail/${data.id}">Wisata ${data.nama}</a></h5>
                  <img src="${data.url}"/>
                  <p><i class='bx bxs-map'></i> ${data.lokasi}</p>
                </div>`
            );
            markers.addLayer (marker);
          });
          area = [];
          map.addLayer (markers);
          console.log (markers);
        }
      }
    });
    document.querySelector ('.btn-destinasi').addEventListener ('click', () => {
      dataWisata.forEach (data => {
        let pointer = L.marker ([data.latitude, data.longitude], {
          title: `${data.nama}`,
          alt: `Nama wisata`,
        })
          .addTo (map)
          .bindPopup (
            `<div class="text-center card-map h-100">
                  <h5 class="mb-3" style="font-weight:800"><a href="#/detail/${data.id}">Wisata ${data.nama}</a></h5>
                  <img src="${data.url}"/>
                  <p><i class='bx bxs-map'></i> ${data.lokasi}</p>
                </div>`
          );
      });
    });
    document.querySelector ('.btn-lacak').addEventListener ('click', () => {
      const panduanLacak = document.querySelector ('.panduanLacak');
      panduanLacak.style.display = 'block';
    });

    if(document.querySelector ('.btn_fav')) {
      document.querySelector ('.btn_fav').addEventListener ('click', () => {
        const panduanLacak = document.querySelector ('.panduanLacak');
        panduanLacak.style.display = 'none';

        location.reload();
      });
    }
  },
};
export default MapPage;
