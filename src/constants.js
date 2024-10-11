export const MIN_CAR_NAME_LENGTH = 2;
export const MAX_CAR_NAME_LENGTH = 5;
export const MIN_CAR_COUNT = 2;
export const MAX_CAR_COUNT = 5;
export const MIN_RACE_COUNT = 1;
export const MAX_RACE_COUNT = 10;
export const ENGLISH_REGEX = /^[a-zA-Z]+$/;

export const ERROR_MESSAGES = {
  carNameCount: `[ERROR] 차 이름은 ${MIN_CAR_COUNT}개 이상 ${MAX_CAR_COUNT}개 이하로 입력해주세요.`,
  carNameFormat:
    '[ERROR] 차 이름은 영어로만 입력해주세요. 공백과 특수문자도 포함할 수 없습니다.',
  carNameLength: `[ERROR] 차 이름은 ${MIN_CAR_NAME_LENGTH}자 이상 ${MAX_CAR_NAME_LENGTH}자 이하로 입력해주세요.`,
  carNameDuplicate: '[ERROR] 차 이름은 중복될 수 없습니다.',
  raceCount: `[ERROR] 시도할 횟수는 ${MIN_RACE_COUNT}회 이상 ${MAX_RACE_COUNT}회 이하의 숫자만 입력할 수 있습니다.`,
};

export const MESSAGES = {
  inputCarNames:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  inputRaceCount: '시도할 횟수는 몇 회인가요?\n',
  resultMessage: '\n실행 결과',
  winnersMessage: '최종 우승자 : ',
};

export const RANDOM_NUMBER_RANGE = { min: 0, max: 9 };
export const MOVE_THRESHOLD = 4;
