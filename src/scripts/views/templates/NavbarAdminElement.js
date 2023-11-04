class NavbarAdmin extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div
        class="navbar-admin p-3 d-flex align-items-center justify-content-start" style="z-index:100"
      >
        <div class="navbar_admin_item">
          <div class="navbar_admin_img">
            <img src="./images/Logonavbar.png" />
          </div>
          <button class="btn-sidebar"><i class='bx bxs-chevrons-right'></i></button>
        </div>
      </div>
    `;
  }
}

customElements.define("navbar-admin-element", NavbarAdmin);
