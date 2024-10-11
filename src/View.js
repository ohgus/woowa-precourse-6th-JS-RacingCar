import { Console } from '@woowacourse/mission-utils';
import { validateCarNames, validateRaceCount } from './validator.js';

class RacingGameView {
  async inputCarNames() {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );

    const carNames = input.split(',').map((name) => name.trim());

    validateCarNames(carNames);

    const cars = {};
    carNames.forEach((name) => {
      cars[name] = '';
    });

    return cars;
  }

  async inputRaceCount() {
    const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    const raceCount = parseInt(input);

    validateRaceCount(raceCount);

    return raceCount;
  }
}

export default RacingGameView;
