const wisataBudayaPage = {
    async render() {
        return `
        <section class="alamItemCard">
            <div class="container">
                <div class="row gy-5">
                    <div class="col-md-8">
                        <div class="wisata-card border-0 rounded-bottom-5 position-relative">
                            <img src="./images/Beach.png" class="card-img-top" alt="beach">
                            <div class="position-absolute  translate-middle-x"
                                style="top: 20%; left:5%; background-color: #A27B5C;">
                                <h3 class="px-5 py-2 rounded fw-bold">TOP <br>Saran</h3>
                            </div>
                            <div class="p-4">
                                <h2 class="card-title fw-bold">Pantai Marina</h2>
                                <p class="card-text opacity-75 my-3">Lorem ipsum, dolor sit amet consectetur adipisicing
                                    elit. In
                                    nesciunt
                                    saepe commodi ducimus id a voluptates
                                    facere quisquam cumque veniam voluptatem, dolorum mollitia vitae doloribus explicabo
                                    impedit? Maxime, dignissimos officiis!</p>
                                <p class="location-text d-flex align-items-center gap-2"><i class='bx bxs-map bx-sm'></i></i> Cilacap, Indonesia</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 d-none d-md-block">
                        <div class="wisata-card m-auto rounded-3 p-1">
                            <div class="card-header text-center pt-4">
                                <h4 class="fw-bold">Penginapan Terdekat</h4>
                            </div>
                                <div class="wisata-card mb-3 px-3 py-2 rounded-3" style="max-width: 540px;">
                                    <div class="row g-0 my-3 align-items-center justify-content-center">
                                        <div class="col-md-4">
                                            <img src="./images/Beach.png" class="img-fluid rounded-2" alt="...">
                                        </div>
                                        <div class = "col-md-8 text-start gx-3">
                                            <h6 class="card-title">Hotel Pantai</h6>
                                            <p>Lokasi hotel yang strategis</p>
                                        </div>
                                    </div>
                                    <div class="row g-0 my-3 align-items-center justify-content-center">
                                        <div class="col-md-4">
                                            <img src="./images/Beach.png" class="img-fluid rounded-2" alt="...">
                                        </div>
                                        <div class = "col-md-8 text-start gx-3">
                                            <h6 class="card-title">Hotel Pantai</h6>
                                            <p>Lokasi hotel yang strategis</p>
                                        </div>
                                    </div>
                                    <div class="row g-0 my-3 align-items-center justify-content-center">
                                        <div class="col-md-4">
                                            <img src="./images/Beach.png" class="img-fluid rounded-2" alt="...">
                                        </div>
                                        <div class = "col-md-8 text-start gx-3">
                                            <h6 class="card-title">Hotel Pantai</h6>
                                            <p>Lokasi hotel yang strategis</p>
                                        </div>
                                    </div>
                                    <div class="row g-0 my-3 align-items-center justify-content-center">
                                        <div class="col-md-4">
                                            <img src="./images/Beach.png" class="img-fluid rounded-2" alt="...">
                                        </div>
                                        <div class = "col-md-8 text-start gx-3">
                                            <h6 class="card-title">Hotel Pantai</h6>
                                            <p>Lokasi hotel yang strategis</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
                `;

    },

    async afterRender() {
     

    }
};


export default wisataBudayaPage;