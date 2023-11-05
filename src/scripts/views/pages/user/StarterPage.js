const StarterPage = {
  async render() {
    return `
      <div class="container-fluid startpage">
        <div class="row justify-content-center align-items-center vh-100 text-center">
          <div class="col-12">
            <img src="./images/LogoStart.png" class="w-25"/>
            <h5 class="text-white mt-4 mb-5">Jelajahi Jogja, Pesona Setiap Sudut</h5>
            <a href="#/home" class="btn btn-primary btn-start rounded-pill px-5 py-2"><i class='bx bx-play bx-lg ms-2'></i></a>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const footer = document.querySelector("footer-element");
    footer.style.display = "none";

    const navbar = document.querySelector("navbar-element");
    navbar.style.display = "none";
  }
};

export default StarterPage;
