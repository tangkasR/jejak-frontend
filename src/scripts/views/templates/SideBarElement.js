class SideBarAdmin extends HTMLElement {
  constructor () {
    super();
  }

  connectedCallback () {
    this.render();
  }

  render () {
    this.innerHTML = `
      <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
          <div class="position-sticky pt-3">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link" id="dashboard-link" aria-current="page" href="#/dashboard">
                  <span data-feather="home"></span>
                  Dashboard
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="wisata-link" href="#/wisata">
                  <span data-feather="file"></span>
                  Wisata
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="hotel-link" href="#/hotel">
                  <span data-feather="file"></span>
                  Hotel
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="profil-link" href="#/profil">
                  <span data-feather="shopping-cart"></span>
                  Profil
                </a>
              </li>
            </ul>
          </div>
        </nav>
      `;
  }
}

customElements.define('sidebar-element', SideBarAdmin);
