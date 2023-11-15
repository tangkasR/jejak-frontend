import Swal from 'sweetalert2';
const ContactPage = {
  async render () {
    return `
          <section section class = "contactCard d-flex align-items-center justify-content-center" style="min-height:100vh">
              <div class = "contact-container container rounded-5">
                  <div class="row g-0" style="color: #dcd7c9;">
                      <div class="contactTitle col-md-6 px-5 d-flex align-items-start justify-content-center flex-column";>
                        <h1><strong>Beri Kami Tahu Kebutuhan Anda</strong></h1>
                        <h4>Kontak kami melalui email untuk memberi tahu kami tentang kebutuhan perjalanan Anda atau untuk mendapatkan informasi lebih lanjut</h4>
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
                            <button type="submit" class="btn-submitContact"><span class="loader-button"></span><p class="m-0 submit-contact">Submit</button>
                          </form>
                        </div>
                      </div>
                  </div>
              </div>
          </section>
          `;
  },
  async afterRender () {
    const loaderButton = document.querySelector ('.loader-button');
    const submitContact = document.querySelector ('.submit-contact');
    loaderButton.style.display = 'none';
    submitContact.style.display = 'block';
    const forms = document.querySelector ('.form-contact');
    forms.addEventListener ('submit', event => {
      loaderButton.style.display = 'block';
      submitContact.style.display = 'none';
      event.preventDefault ();
      const nama = document.getElementById ('inputNama').value;
      const email = document.getElementById ('inputEmail').value;
      const nomorHp = document.getElementById ('inputNomorHp').value;
      const msg = document.getElementById ('inputPesan').value;

      var datas = {
        from_name: nama,
        from_email: email,
        from_nohp: nomorHp,
        message: msg,
      };
      console.log (datas);

      emailjs.send ('service_rccxvbo', 'template_5vde6ur', datas).then (
        function (response) {
          if (response.length !== 0) {
            loaderButton.style.display = 'none';
            submitContact.style.display = 'block';
            Swal.fire ({
              position: 'center',
              icon: 'success',
              title: 'Pesan Terkirim!',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        },
        function (err) {
          loaderButton.style.display = 'none';
          submitContact.style.display = 'block';
          Swal.fire ({
            icon: 'error',
            title: `Pesan Tidak Terkirim!`,
            text: `Tolong ulangi!`,
            showConfirmButton: false,
          });
        }
      );
    });
  },
};
export default ContactPage;
