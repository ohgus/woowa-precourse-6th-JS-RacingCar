import RacingGameView from './View.js';
import RacingGameModel from './Model.js';

class RacingGameController {
  constructor() {
    this.view = new RacingGameView();
  }

  async raceStart() {
    const carNames = await this.view.inputCarNames();
    const raceCount = await this.view.inputRaceCount();

    const model = new RacingGameModel(carNames);

    this.view.printResultMessage();

    for (let i = 0; i < raceCount; i++) {
      const results = model.raceOnce();
      this.view.printRaceResults(results);
    }

    const winners = model.getWinner();
    this.view.printWinners(winners);
  }
}

export default RacingGameController;
