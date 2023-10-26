import AdminSource from '../../../data/admin-source';

const ProfilPage = {
  async render () {
    return `
    <navbar-admin></navbar-admin>
    <div class="container-fluid">
      <div class="row">
        <sidebar-element></sidebar-element>
        <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="my-5 w-100 d-flex align-items-center justify-content-center">
                <div class="card shadow  text-left p-3" style="width:fit-content" id="card-container">
                </div>
            </div>
        </div>
      </div>
    </div>
    `;
  },
  async afterRender () {
    // menonaktifkan navbar user
    const navbar = document.querySelector('navbar-element');
    navbar.style.display = 'none';

    // eksekusi logout
    document.getElementById('btnLogout').addEventListener('click', async () => {
      localStorage.removeItem('id');
      window.location.replace('#/login');
    });

    //   active side bar
    const navLink = document.getElementById('profil-link');
    navLink.classList.add('active');

    // menampilkan data
    const id = JSON.parse(localStorage.id);
    const container = document.getElementById('card-container');
    const data = await AdminSource.getData(id.id);
    console.log(data);
    container.innerHTML = `
        <h2 class="mb-3 text-center">Nama: ${data.data.name}</h2>
        <img class="mb-3" src="${data.data
          .url}" alt="" style="width:300px; border-radius:10px;"></img>
        <h5 class="mb-3">Email: ${data.data.email}</h5>
        <h5 class="mb-3">Role: ${data.data.role}</h5>
        <h5 class="mb-3">Jenis Kelamin: ${data.data.jenis_kelamin}</h5>
        <a href="#/editprofil" class="btn btn-info text-white fw-bold">Edit</a>
    `;
  }
};
export default ProfilPage;
