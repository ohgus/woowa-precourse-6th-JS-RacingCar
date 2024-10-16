import { Random } from '@woowacourse/mission-utils';
import { RANDOM_NUMBER_RANGE, MOVE_THRESHOLD } from './constants.js';

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const randomNumber = Random.pickNumberInRange(
      RANDOM_NUMBER_RANGE.min,
      RANDOM_NUMBER_RANGE.max
    );

    if (randomNumber >= MOVE_THRESHOLD) {
      this.position += 1;
    }
  }

  getPosition() {
    return '-'.repeat(this.position);
  }
}

class RacingGameModel {
  constructor(carNames) {
    this.cars = carNames.map((name) => new Car(name));
  }

  raceOnce() {
    this.cars.forEach((car) => car.move());
    return this.getResults();
  }

  getResults() {
    return this.cars.map((car) => ({
      name: car.name,
      position: car.getPosition(),
    }));
  }

  getWinner() {
    const maxPosition = Math.max(...this.cars.map((car) => car.position));

    return this.cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);
  }
}

export default RacingGameModel;
