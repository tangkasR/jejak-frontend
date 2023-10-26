// USER
import HomePage from '../views/pages/user/HomePage';
import GalleryPage from '../views/pages/user/GalleryPage';
import ContactPage from '../views/pages/user/ContactPage';
import MapPage from '../views/pages/user/MapPage';

// ADMIN
import LoginPage from '../views/pages/admin/LoginPage';
import DashboardPage from '../views/pages/admin/DashboardPage';
import RegistrasiPage from '../views/pages/admin/RegistrasiPage';
import ProfilPage from '../views/pages/admin/ProfilPage';
import WisataPage from '../views/pages/admin/WisataPage';
import EditProfilPage from '../views/pages/admin/EditProfilPage';
const routes = {
  // USER
  '/': HomePage,
  '/gallery': GalleryPage,
  '/contact': ContactPage,
  '/map': MapPage,

  //   ADMIN
  '/login': LoginPage,
  '/register': RegistrasiPage,
  '/dashboard': DashboardPage,
  '/profil': ProfilPage,
  '/wisata': WisataPage,
  '/editprofil': EditProfilPage
};
export default routes;
