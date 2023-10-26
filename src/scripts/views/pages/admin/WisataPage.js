import AdminSource from '../../../data/admin-source';
import { async } from 'regenerator-runtime';

const WisataPage = {
  async render () {
    return `
    <navbar-admin></navbar-admin>
    <div class="container-fluid">
      <div class="row">
        <sidebar-element></sidebar-element>
        <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4">

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
    const navLink = document.getElementById('wisata-link');
    navLink.classList.add('active');
  }
};
export default WisataPage;
