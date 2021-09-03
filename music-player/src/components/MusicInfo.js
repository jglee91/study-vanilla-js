class MusicInfo {
  constructor($target, props) {
    const $musicInfo = document.createElement('div');
    $musicInfo.classList.add('music-info');
    $target.appendChild($musicInfo);

    this.$musicInfo = $musicInfo;
    this.props = props;

    this.render();
    this.bindEvent();
  }

  render() {
    this.$musicInfo.innerHTML = `
      <h4 id="title"></h4>
      <div class="progress-container">
        <div class="progress"></div>
      </div>
    `;
  }

  bindEvent() {
    const $progressContainer = this.$musicInfo.querySelector('.progress-container');
    $progressContainer.addEventListener('click', (e) => {
      this.props.setMusicProgress(e, $progressContainer);
    });
  }

  setMusicTitle(title) {
    const $title = this.$musicInfo.querySelector('#title');
    $title.innerText = title;
  }

  setMusicProgress(progress) {
    const $progress = this.$musicInfo.querySelector('.progress');
    $progress.style.width = `${progress}%`;
  }
}

export default MusicInfo;
