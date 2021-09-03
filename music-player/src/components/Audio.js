class Audio {
  constructor($target, props) {
    const $audio = document.createElement('audio');
    $target.appendChild($audio);

    this.$audio = $audio;
    this.props = props;

    // this.render();
    this.bindEvent();
  }

  // render() {
  //   this.$audio.src = `./dist/music/${this.props.title}.mp3`;

  //   this.bindEvent();
  // }

  bindEvent() {
    this.$audio.addEventListener('timeupdate', this.props.onTimeUpdate);
    this.$audio.addEventListener('ended', this.props.onEnded);
  }

  setMusicTitle(title) {
    this.$audio.src = `./dist/music/${title}.mp3`;
  }

  playMusic() {
    this.$audio.play();
  }

  pauseMusic() {
    this.$audio.pause();
  }

  getDuration() {
    return this.$audio.duration;
  }

  setCurrentTime(currentTime) {
    this.$audio.currentTime = currentTime;
  }
}

export default Audio;
