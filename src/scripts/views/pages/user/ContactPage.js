const ContactPage = {
  async render() {
    return `
          <h1>Ini kontak page</h1>
          `;
  },
  async afterRender() {
    // mengaktifkan footer
    const footer = document.querySelector("footer-element");
    footer.style.display = "block";

    //   nonaktif side bar
    const navLink = document.querySelector(".link-home");
    navLink.classList.remove("active");
  }
};
export default ContactPage;
