import WisataSource from "../../../data/wisata-source";
import HotelSource from "../../../data/hotel-source";

const wisataAlamPage = {
    async render() {
        return `
        <section class="alamItemCard">
            <div class="container">
                <div class="row gy-5">
                    <div class="col-md-8" id="wisata-content">
                        
                    </div>
                    <div class="col-md-4 d-none d-md-block">
                        <div class="wisata-card m-auto rounded-3 p-1">
                            <div class="card-header text-center pt-4">
                                <h4 class="fw-bold">Penginapan</h4>
                            </div>
                                <div class="wisata-card mb-3 px-3 py-2 rounded-3" style="max-width: 540px;" id="hotel-content">
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
                `;
    },

    async afterRender() {
        // get data wisata
        const wisata = await WisataSource.getWisata();
        const datasWisata = wisata.data;
        const wisataContent = document.getElementById("wisata-content");

        datasWisata.forEach((data) => {
            if (data.kategori === "Alam") {
                wisataContent.innerHTML += `
                <div class="wisata-card border-0 mb-5 rounded-bottom-5 position-relative">
                    <img src="${data.url}" class="card-img-top" alt="${data.nama}" style="height: 400px; object-fit: cover">
                    <div class="boxTopSaran position-absolute  translate-middle-x"
                        style="background-color: #A27B5C;">
                        <h3 class="px-5 py-2 rounded fw-bold">TOP <br>Saran</h3>
                    </div>

                    <div class="p-4" style ='text-align: justify;'>
                        <h2 class="card-title fw-bold"><a href="/#/detail/${data.id}">${data.nama}</a></h2>
                        <p class="location-text d-flex align-items-center gap-2 mt-3"><i class='bx bxs-map bx-sm'></i></i> ${data.lokasi}</p>
                        <p class="card-text opacity-75 my-3">${data.deskripsi}</p>
                    </div>
                </div>
            `;
            }
        });

        const hotel = await HotelSource.getAllHotel();
        const dataHotel = hotel.data;
        const hotelContent = document.getElementById("hotel-content");
        let indexDatasHotel = 0;
        dataHotel.forEach((data) => {
            indexDatasHotel++
            if (indexDatasHotel >= 5 && indexDatasHotel <= 10) {
                hotelContent.innerHTML += ` 
                <div class="row g-0 my-3 align-items-center justify-content-center">
                    <div class="col-md-4">
                        <img src="${data.url}" class="img-fluid rounded-2" alt="${data.nama}" style="height: 100px">
                    </div>
                    <div class = "col-md-8 text-start gx-3">
                        <h6 class="card-title">${data.nama}</h6>
                        <p><i class='bx bxs-map'></i> ${data.lokasi}</p>
                    </div>
                </div>
                `
            }
        });
    },
};

export default wisataAlamPage;