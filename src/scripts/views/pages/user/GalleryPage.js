const GalleryPage = {
  async render () {
    return `
          <h1>Ini galeri page</h1>
          `;
  },
  async afterRender () {
    const footer = document.querySelector("footer-element");
    footer.style.display = "block";
  }
};
export default GalleryPage;
