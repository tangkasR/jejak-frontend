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
        class="navbar navbar-dark sticky-top flex-md-nowrap py-3 pe-4 shadow"
        style="background-color:#3F4E4F;"
      >
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#/dashboard" style="background-color:#3F4E4F;box-shadow:none"
          >JElajah jogJAKarta</a
        >

        <div class="navbar-nav">
          <div class="nav-item text-nowrap">
            <button id="btnLogout" class="px-3 btn text-light">Logout</button>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("navbar-admin", NavbarAdmin);
