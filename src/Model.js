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
