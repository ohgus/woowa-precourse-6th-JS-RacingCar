import { Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const randomNumber = Random.pickNumberInRange(0, 9);

    if (randomNumber >= 4) {
      this.position += 1;
    }
  }

  getPosition() {
    return '-'.repeat(this.position);
  }
}

class RacingGameModel {
  constructor(carNames, raceCount) {
    this.cars = carNames.map((name) => new Car(name));
    this.raceCount = raceCount;
  }

  raceOnce() {
    this.cars.forEach((car) => car.move());
  }
}

export default RacingGameModel;
