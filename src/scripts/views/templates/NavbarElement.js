class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav
        class="navbar navbar-expand-lg fixed-top p-3"
        style="background-color: #3F4E4F;"
      >
        <div class="container">
          <a class="logo" href="#"
            ><img style="width:140px;" src="./images/Logonavbar.png"
          /></a>
          <button
            class="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i class="bx bx-menu-alt-right bx-md text-white"></i>
            </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mt-3 mt-lg-0 mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link link-home" href="#/home">Home</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Kategori
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Alam</a></li>
                  <li><a class="dropdown-item" href="#">Budaya</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/map">Peta</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/gallery">Galeri</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/contact">Kontak</a>
              </li>
              <li class="nav-item">
                <a class="ms-3 btn btn-primary" href="#/login">Login Admin</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define("navbar-element", Navbar);
