const OfflinePage = {
  async render() {
    return `
    <div class="p-2 px-md-0 offline_container d-flex align-items-center justify-content-center flex-column" style="width: 100%; min-height: 100vh">
        <div class="eye_container">
            <span class="offline-eye"></span>
            <hr class="mulut">
            <hr class="lidah">
        </div>
        <h5>OFFLINE</h5>
        <p>Silahkan cek koneksi internet anda!</p>
        <hr>
    </div>
    `;
  },
  async afterRender() {}
};
export default OfflinePage;
