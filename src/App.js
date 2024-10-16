import RacingGameController from './Controller.js';

class App {
  constructor() {
    this.controller = new RacingGameController();
  }

  async play() {
    await this.controller.raceStart();
  }
}

export default App;
