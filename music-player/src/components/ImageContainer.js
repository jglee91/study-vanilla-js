class ImageContainer {
  constructor($target) {
    const $imageController = document.createElement('div');
    $imageController.classList.add('img-container');
    $target.appendChild($imageController);

    this.$imageController = $imageController;

    this.render();
  }

  render() {
    this.$imageController.innerHTML = `
      <img src="" alt="music-cover" id="cover" />
    `;
  }

  setMusicTitle(title) {
    const $cover = this.$imageController.querySelector('#cover');
    $cover.src = `./dist/images/${title}.jpg`;
  }
}

export default ImageContainer;
