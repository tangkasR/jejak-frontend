const ContactPage = {
  async render () {
    return `
    <section section class = "contactCard d-flex align-items-center min-vh-100">
        <div class = "contact-container container rounded-5">
            <div class="row g-0" style="color: #dcd7c9;">
                <div class="contactTitle col-md-6 px-5 d-flex align-items-start justify-content-center flex-column";>
                  <h1><strong>Beri Kami Tahu Kebutuhan Anda</strong></h1>
                  <h5 class="lh-base mt-2">Kontak kami melalui email untuk memberi tahu kami tentang kebutuhan perjalanan Anda atau untuk mendapatkan informasi lebih lanjut</h5>
                </div>

                <div class="col-md-6">
                  <div class= "card-form-container d-flex justify-content-center align-items-center flex-column">
                    <form class="form-contact w-100 px-4">
                      <div class="mb-3">
                        <label for="labelEmail" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail">
                      </div>
                      <div class="mb-3">
                        <label for="labelNama" class="form-label">Nama</label>
                        <input type="text" class="form-control" id="inputNama">
                      </div>
                      <div class="mb-3">
                        <label for="labelNomorHp" class="form-label">Nomor Handphone</label>
                        <input type="text" class="form-control" id="inputNomorHp">
                      </div>
                      <div class="mb-3">
                        <label for="labelPesan" class="form-label">Pesan</label>
                        <textarea type="text" class="form-control" id="inputPesan"></textarea>
                      </div>
                      <div class="d-flex justify-content-end">
                        <button type="submit" class="btn-submitContact border-0 mt-2">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
            </div>
        </div>
    </section>
          <div class="contact-container">
          </div>
          `;
  },
  async afterRender () {
    const forms = document.querySelector ('.form-contact');
    forms.addEventListener ('submit', () => {
      const email = document.getElementById ('inputEmail').value;
      const nama = document.getElementById ('inputNama').value;
      const nomorHp = document.getElementById ('inputNomorHp').value;
      const msg = document.getElementById ('inputPesan').value;
    });
  },
};
export default ContactPage;
