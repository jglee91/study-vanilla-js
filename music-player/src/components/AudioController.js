class AudioController {
  constructor($target, props) {
    const $audioController = document.createElement('div');
    $audioController.classList.add('navigation');
    $target.appendChild($audioController);

    this.$audioController = $audioController;
    this.props = props;

    this.render();
    this.bindEvent();
  }

  render() {
    this.$audioController.innerHTML = `
      <button id="prev" class="action-btn">
        <i class="fas fa-backward"></i>
      </button>
      <button id="play" class="action-btn action-btn-big">
        <i class="fas fa-play"></i>
      </button>
      <button id="next" class="action-btn">
        <i class="fas fa-forward"></i>
      </button>
    `;
  }

  bindEvent() {
    const $btnPlay = this.$audioController.querySelector('#play');
    const $btnPrev = this.$audioController.querySelector('#prev');
    const $btnNext = this.$audioController.querySelector('#next');

    $btnPlay.addEventListener('click', this.props.onPlay);
    $btnPrev.addEventListener('click', this.props.onPrev);
    $btnNext.addEventListener('click', this.props.onNext);
  }

  playMusic() {
    const $btnPlay = this.$audioController.querySelector('#play');
    $btnPlay.querySelector('i.fas').classList.remove('fa-play');
    $btnPlay.querySelector('i.fas').classList.add('fa-pause');
  }

  pauseMusic() {
    const $btnPlay = this.$audioController.querySelector('#play');
    $btnPlay.querySelector('i.fas').classList.remove('fa-pause');
    $btnPlay.querySelector('i.fas').classList.add('fa-play');
  }
}

export default AudioController;
