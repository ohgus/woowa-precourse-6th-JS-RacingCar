export const validateCarNames = (carNames) => {
  const englishRegex = /^[a-zA-Z]+$/;

  if (carNames.length < 2 || carNames.length > 5) {
    throw new Error('[ERROR] 차 이름은 2개 이상 5개 이하로 입력해주세요.');
  }

  for (const carName of carNames) {
    if (!englishRegex.test(carName)) {
      throw new Error(
        '[ERROR] 차 이름은 영어로만 입력해주세요. 공백과 특수문자도 포함할 수 없습니다.'
      );
    }

    if (carName.length < 2 || carName.length > 10) {
      throw new Error('[ERROR] 차 이름은 2자 이상 10자 이하로 입력해주세요.');
    }
  }

  if (carNames.length !== new Set(carNames).size) {
    throw new Error('[ERROR] 차 이름은 중복될 수 없습니다.');
  }
};
