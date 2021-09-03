import MusicInfo from './MusicInfo';
import Audio from './Audio';
import ImageContainer from './ImageContainer';
import AudioController from './AudioController';

class MusicContainer {
  constructor($target) {
    const $musicContainer = document.createElement('section');
    $musicContainer.classList.add('music-container');
    $target.appendChild($musicContainer);
    this.$musicContainer = $musicContainer;

    this.state = {
      // Song titles
      songs: ['hey', 'summer', 'ukulele'],

      // Keep track of songs
      songIndex: 2,

      isPlaying: false,
    };

    this.render();
  }

  setState(nextState) {
    this.state = nextState;
    // this.render();
  }

  render() {
    this.musicInfo = new MusicInfo(this.$musicContainer, {
      setMusicProgress: (e, $progressContainer) => {
        const clickX = e.offsetX;
        const width = $progressContainer.clientWidth;
        const duration = this.audio.getDuration();

        this.audio.setCurrentTime((clickX / width) * duration);
      },
    });
    this.musicInfo.setMusicTitle(this.getMusicTitle());

    this.audio = new Audio(this.$musicContainer, {
      onTimeUpdate: (e) => {
        const { currentTime, duration } = e.srcElement;
        const progress = (currentTime / duration) * 100;
        this.musicInfo.setMusicProgress(progress);
      },
      onEnded: () => this.playNextMusic(),
    });
    this.audio.setMusicTitle(this.getMusicTitle());

    this.imageContainer = new ImageContainer(this.$musicContainer);
    this.imageContainer.setMusicTitle(this.getMusicTitle());

    this.audioController = new AudioController(this.$musicContainer, {
      onPlay: () => {
        if (this.state.isPlaying) {
          this.$musicContainer.classList.remove('play');

          this.audio.pauseMusic();
          this.audioController.pauseMusic();

          this.setState({ ...this.state, isPlaying: false });
        } else {
          this.$musicContainer.classList.add('play');

          this.audio.playMusic();
          this.audioController.playMusic();

          this.setState({ ...this.state, isPlaying: true });
        }
      },
      onPrev: () => this.playPrevMusic(),
      onNext: () => this.playNextMusic(),
    });
  }

  getMusicTitle() {
    return this.state.songs[this.state.songIndex];
  }

  playPrevMusic() {
    let songIndex = this.state.songIndex;

    songIndex--;

    if (songIndex < 0) {
      songIndex = this.state.songs.length - 1;
    }

    this.setState({ ...this.state, songIndex });

    this.musicInfo.setMusicTitle(this.getMusicTitle());
    this.audio.setMusicTitle(this.getMusicTitle());
    this.audio.playMusic();
    this.imageContainer.setMusicTitle(this.getMusicTitle());
  }

  playNextMusic() {
    let songIndex = this.state.songIndex;

    songIndex++;

    if (songIndex > this.state.songs.length - 1) {
      songIndex = 0;
    }

    this.setState({ ...this.state, songIndex });

    this.musicInfo.setMusicTitle(this.getMusicTitle());
    this.audio.setMusicTitle(this.getMusicTitle());
    this.audio.playMusic();
    this.imageContainer.setMusicTitle(this.getMusicTitle());
  }
}

export default MusicContainer;
