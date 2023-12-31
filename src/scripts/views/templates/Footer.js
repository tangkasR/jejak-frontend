class Footer extends HTMLElement {
  constructor () {
    super ();
  }

  connectedCallback () {
    this.render ();
  }

  render () {
    this.innerHTML = `
      <div class="container-fluid mt-5" style="background-color:#3F4E4F">
        <div class="row align-items-center justify-content-between py-4">

          <div class="col-md-3 col-6 d-flex align-items-center justify-content-center order-lg-1 order-1">
            <img src="./icons/logo_footer.png" style="width:150px" />
          </div>

          <div
            class="col-md-3 d-flex flex-column gap-3 align-items-center justify-content-center order-lg-2 order-3"
          >
            <div
              class="mt-4 d-flex align-items-center justify-content-center gap-4"
            >
              
            </div>
            <div>
              <p class="text-center" style="font-size:15px; color:#DCD7C9">
                &copy 2023 | Projek Capstone
              </p>
            </div>
          </div>


          <div class="col-md-3 col-6 d-flex align-items-center justify-content-center order-lg-3 order-2">
            <p
              style="font-weight:600; font-size:20px; font-weight:600; color:#DCD7C9"
            >
              Jelajahi Jogja,<br />Pesona Setiap Sudut
            </p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define ('footer-element', Footer);
