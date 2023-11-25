import UrlParser from '../../../routes/url-parser';
import WisataSource from '../../../data/wisata-source';
import LikeButtonInitiator from '../../../utils/favorit-wisata-button-initiator';
import { createDetailWisataTemplate } from '../../templates/FavoritTemplate';

const Detail = {
    async render() {
        return `
        <div class="container">
            <h1 class="text-center mt-5">Tes Page</h1>
            <div id="posts" class="detail_posts"
            ></div>
            <div id="likeButtonContainer"></div>
        </div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const wisata = await WisataSource.getWisataById(url.id);
        console.log(wisata);
        const detailContainer = document.querySelector('#posts');
        detailContainer.innerHTML = createDetailWisataTemplate(
          wisata.data,
        );
    
        LikeButtonInitiator.init({
          likeButtonContainer: document.querySelector('#likeButtonContainer'),
          wisata: {
            id: wisata.data.id,
            nama: wisata.data.nama,
            kategori: wisata.data.kategori,
            lokasi: wisata.data.lokasi,
            deskripsi: wisata.data.deskripsi,
            url: wisata.data.url,
            image: wisata.data.image,
            img_name: wisata.data.img_name,
            latitude: wisata.data.latitude,
            longitude: wisata.data.longitude,
            total_rating: wisata.data.total_rating,
            total_viewers: wisata.data.total_viewers,
            created_at: wisata.data.created_at,
            updated_at: wisata.data.updated_at,
          },
        });
    }
}
    
    export default Detail;
