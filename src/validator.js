import {
  MIN_CAR_NAME_LENGTH,
  MAX_CAR_NAME_LENGTH,
  MIN_CAR_COUNT,
  MAX_CAR_COUNT,
  MIN_RACE_COUNT,
  MAX_RACE_COUNT,
  ENGLISH_REGEX,
  ERROR_MESSAGES,
} from './constants.js';

const isValidCarName = (carName) => {
  if (!ENGLISH_REGEX.test(carName)) {
    throw new Error(ERROR_MESSAGES.carNameFormat);
  }
  if (
    carName.length < MIN_CAR_NAME_LENGTH ||
    carName.length > MAX_CAR_NAME_LENGTH
  ) {
    throw new Error(ERROR_MESSAGES.carNameLength);
  }
};

export const validateCarNames = (carNames) => {
  if (carNames.length < MIN_CAR_COUNT || carNames.length > MAX_CAR_COUNT) {
    throw new Error(ERROR_MESSAGES.carNameCount);
  }

  carNames.forEach(isValidCarName);

  if (carNames.length !== new Set(carNames).size) {
    throw new Error(ERROR_MESSAGES.carNameDuplicate);
  }
};

export const validateRaceCount = (raceCount) => {
  if (
    raceCount < MIN_RACE_COUNT ||
    isNaN(raceCount) ||
    raceCount > MAX_RACE_COUNT
  ) {
    throw new Error(ERROR_MESSAGES.raceCount);
  }
};
