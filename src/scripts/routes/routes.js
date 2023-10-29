// USER
import HomePage from "../views/pages/user/HomePage";
import GalleryPage from "../views/pages/user/GalleryPage";
import ContactPage from "../views/pages/user/ContactPage";
import MapPage from "../views/pages/user/MapPage";

// ADMIN
import LoginPage from "../views/pages/admin/LoginPage";
import DashboardPage from "../views/pages/admin/DashboardPage";
import RegistrasiPage from "../views/pages/admin/RegistrasiPage";
import ProfilPage from "../views/pages/admin/ProfilPage";
import WisataPage from "../views/pages/admin/WisataPage";
import EditProfilPage from "../views/pages/admin/EditProfilPage";
import AddWisataPage from "../views/pages/admin/AddWisataPage";
import EditWisataPage from "../views/pages/admin/EditWisataPage";
import HotelPage from "../views/pages/admin/HotelPage";
import AddHotelPage from "../views/pages/admin/AddHotelPage";
import EditHotelPage from "../views/pages/admin/EditHotelPage";
// view sementara untuk mencoba backend review
import CobaReviewPage from "../views/pages/admin/COBA_REVIEW";
import CobaReviewHotelPage from "../views/pages/admin/COBA_REVIEW_HOTEL";
import GalleryPageAdmin from "../views/pages/admin/GalleryPage";
import GalleryAddDelPage from "../views/pages/admin/GalleryAddDelPage";
import DeleteGalleryPage from "../views/pages/admin/DeleteGalleryPage";

const routes = {
  // USER
  "/": HomePage,
  "/gallery": GalleryPage,
  "/contact": ContactPage,
  "/map": MapPage,

  //   ADMIN
  "/login": LoginPage,
  "/register": RegistrasiPage,
  "/dashboard": DashboardPage,
  "/profil": ProfilPage,

  // WISATA
  "/wisata": WisataPage,
  "/editprofil": EditProfilPage,
  "/addwisata": AddWisataPage,
  "/editwisata/:id": EditWisataPage,

  // REVIEW WISATA
  "/cobareview/:id": CobaReviewPage,

  // HOTEL
  "/hotel": HotelPage,
  "/addhotel": AddHotelPage,
  "/edithotel/:id": EditHotelPage,
  "/cobareviewhotel/:id": CobaReviewHotelPage,

  // GALLERY
  "/galleryadminbyid/:id": DeleteGalleryPage,
  "/galleryadmin": GalleryPageAdmin,
  "/gallerywisataadmin/:id": GalleryAddDelPage
};
export default routes;
