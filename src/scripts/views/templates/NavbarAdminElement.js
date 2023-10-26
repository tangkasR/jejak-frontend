class NavbarAdmin extends HTMLElement {
  constructor () {
    super();
  }

  connectedCallback () {
    this.render();
  }

  render () {
    this.innerHTML = `
    <div class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap py-1 pe-4 shadow">
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="">JElajah jogJAKarta</a>
        
        <div class="navbar-nav">
            <div class="nav-item text-nowrap">
            <button id="btnLogout" class="px-3 btn text-light">Logout</button>
            </div>
        </div>
    </div>
      `;
  }
}

customElements.define('navbar-admin', NavbarAdmin);
