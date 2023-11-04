const ContactPage = {
  async render() {
    return `
          <h1>Ini kontak page</h1>
          `;
  },
  async afterRender() {
    // mengaktifkan link home
    const link = document.getElementById("link-contact");
    link.classList.toggle("active");
    link.setAttribute("aria-current", "page");
  }
};
export default ContactPage;
