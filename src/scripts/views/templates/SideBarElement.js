class SideBarAdmin extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav
        id="sidebarMenu"
        class="col-md-3 col-lg-2 d-md-block sidebar shadow"
        style="background-color:#3F4E4F; z-index:100;"
      >
        <div class="sidebar_img p-4">
          <img src='./images/Logonavbar.png'/>
        </div>
        <div class="position-sticky pt-3">
          <ul class="nav flex-column">
            <li class="nav-item mb-3">
            <a
            class="nav-link linkSidebar"
            id="dashboard-link"
            aria-current="page"
            href="#/dashboard"
            >
                <i class='bx bxs-dashboard' ></i>
                Dashboard
              </a>
            </li>
            <li class="nav-item mb-3">
              <a class="nav-link linkSidebar" id="wisata-link" href="#/wisata">
                <i class='bx bx-map'></i>
                Wisata
              </a>
            </li>
            <li class="nav-item mb-3">
              <a class="nav-link linkSidebar" id="hotel-link" href="#/hotel">
                <i class='bx bx-hotel' ></i>
                Hotel
              </a>
            </li>
            <li class="nav-item mb-3">
              <a
                class="nav-link linkSidebar"
                id="gallery-link"
                href="#/galleryadmin"
              >
                <i class='bx bx-photo-album' ></i>
                Gallery
              </a>
            </li>
            <li class="nav-item mb-3">
              <a class="nav-link linkSidebar" id="profil-link" href="#/profil">
                <i class='bx bx-user'></i>
                Profil
              </a>
            </li>
          </ul>
        </div>
      </nav>
    `;
  }
}

customElements.define("sidebar-element", SideBarAdmin);
