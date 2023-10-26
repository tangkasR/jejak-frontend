const HomePage = {
  async render () {
    return `
        <h1>Ini home page</h1>
        `;
  },
  async afterRender () {
    console.log('hola');
  }
};
export default HomePage;
