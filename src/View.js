import { Console } from '@woowacourse/mission-utils';
import { validateCarNames, validateRaceCount } from './validator.js';
import { MESSAGES } from './constants.js';

class RacingGameView {
  async inputCarNames() {
    const input = await Console.readLineAsync(MESSAGES.inputCarNames);
    const carNames = input.split(',').map((name) => name.trim());

    validateCarNames(carNames);

    return carNames;
  }

  async inputRaceCount() {
    const input = await Console.readLineAsync(MESSAGES.inputRaceCount);
    const raceCount = parseInt(input);

    validateRaceCount(raceCount);

    return raceCount;
  }

  printResultMessage() {
    Console.print(MESSAGES.resultMessage);
  }

  printRaceResults(results) {
    const resultString = results.map(
      ({ name, position }) => `${name} : ${position}`
    );
    Console.print(resultString.join('\n') + '\n');
  }

  printWinners(winners) {
    Console.print(`${MESSAGES.winnersMessage}${winners.join(', ')}`);
  }
}

export default RacingGameView;
