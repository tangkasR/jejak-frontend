import Swal from 'sweetalert2';
const ContactPage = {
  async render () {
    return `
          <section section class = "contactCard d-flex align-items-center justify-content-center" style="min-height:100vh">
              <div class = "contact-container container rounded-4">
                  <div class="row g-0" style="color: #dcd7c9;">
                      <div class="contactTitle mt-5 col-md-6 px-5 d-flex align-items-center justify-content-center flex-column";>
                        <h1><medium>CONTACT US</medium></h1>
                        <img class="Contact-Illustration" src='./icons/Contact-Illustration.svg' width="400" height="400"/>

                      </div>

                      <div class="col-md-6">
                        <div class= "card-form-container d-flex justify-content-center align-items-center flex-column">
                          <form class="form-contact w-100 px-4">
                          <div class="mb-3">
                            <label for="labelNama" class="form-label">Nama</label>
                            <input type="text" class="form-control" id="inputNama">
                          </div>
                          <div class="mb-3">
                            <label for="labelEmail" class="form-label">E-mail</label>
                            <input type="email" class="form-control" id="inputEmail">
                          </div>
                            <div class="mb-3">
                              <label for="labelNomorHp" class="form-label">Nomor Handphone</label>
                              <input type="text" class="form-control" id="inputNomorHp">
                            </div>
                            <div class="mb-3">
                              <label for="labelPesan" class="form-label">Pesan</label>
                              <textarea type="text" class="form-control" id="inputPesan"></textarea>
                            </div>
                            <button type="submit" class="mt-3 btn-submitContact"><span class="loader-button"></span><p class="m-0 submit-contact">Kirim</button>
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
      event.preventDefault ();
      loaderButton.style.display = 'block';
      submitContact.style.display = 'none';

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
