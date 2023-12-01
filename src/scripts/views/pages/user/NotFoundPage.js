const NotFoundPage = {
  async render() {
    return `
      <div
        class="d-flex align-items-center flex-column justify-content-center"
        style="height:100vh;"
      >
        <h1 style="font-size:40px; font-weight:800">404</h1>
        <p style="font-size:20px; font-weight:600">Not Found</p>
      </div>
    `;
  },
  async afterRender() {}
};

export default NotFoundPage;
