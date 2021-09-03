class Header {
  constructor($target) {
    const $header = document.createElement('header');
    $target.appendChild($header);
    this.$header = $header;

    this.render();
  }

  render() {
    this.$header.innerHTML = `
      <h1>Music Player</h1>
    `;
  }
}

export default Header;
