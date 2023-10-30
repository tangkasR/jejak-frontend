const ContactPage = {
  async render() {
    return `
          <h1>Ini kontak page</h1>
          `;
  },
  async afterRender() {
    // hapus footer
    const footer = document.querySelector("footer-element");
    footer.style.display = "block";
  }
};
export default ContactPage;
