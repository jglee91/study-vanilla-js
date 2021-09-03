import Header from './components/Header';
import MusicContainer from './components/MusicContainer';

class App {
  constructor($target) {
    const header = new Header($target);
    const musicContainer = new MusicContainer($target);
  }
}

export default App;
