# 🏎️ 미션 - 자동차 경주

## 🏁 이번주 미션 목표

- 함수를 분리하여 사용하자.
- 함수별로 테스트 코드를 작성해 보자.

## ✅ 잘 체크하면서 진행하자!

- JavaScript 코드 컨벤션을 지키면서 프로그래밍 하자.
- 커밋 단위를 `README.md` 에 정리한 기능 목록 단위로 추가한다.
  - git 커밋 컨벤션에 맞게 커밋을 진행하자.
- indent depth가 3이 넘지 않도록 주의하자.
- 프로그램 종료 시 `process.exit()`을 호출하면 안된다.
- `ApplicationTest`의 모든 테스트를 통과해야 한다.
- 패키지 이름을 수정하거나 이동하지 말자.

## 📝 커밋 메시지 컨벤션

- feat: 새로운 기능 추가
- fix: 버그 수정
- docs: 문서 작성
- style: 코드 포멧 변경, 세미콜론 누락
- refactor: 코드 리펙토링
- test: 테스트 코드, 리펙토링 테스트 코드 추가
- chore: 빌드 수정, 패키지 매니저 수정

## 💡 기능 목록

### 0. 경기 기록 세팅

- 자동차의 이름, 경기 진행 결과를 기록할 `carRecordBoard` 를 생성한다.
- 우승자를 기록할 `winner` 배열을 생성한다.

### 1. 사용자의 입력 값 받아오기

`async getUserInput(purpose)`

현재 상태에 맞는 질문을 던지고 맞는 값을 입력 받는다.

#### 자동차 이름이 필요한 경우

- 사용자가 자동차의 이름을 입력한다.
  - 문자열로 입력 받는다.
  - 자동차의 이름은 5자 이내로 제한한다.
  - 이름은 컴마(,)로 구분한다.

#### 몇번의 이동을 진행할지 묻는 경우.

- 몇번의 이동을 시도할지 입력한다.
  - 숫자를 입력 받는다.

### 2. 무작위 수 뽑기

`getRandomNumber`

- `MissionUtils.Random.pickNumberInRange()`를 사용하여 숫자를 뽑는다.
- 범위는 0 ~ 9 사이의 숫자.

### 3. 자동차의 이동

- 각각의 자동차는 차수 별로 무작위의 수를 뽑는다.

#### 자동차가 이동 가능한지 확인

`checkCanMove(randomNumber)`

- 뽑은 수가 4 이상이라면 true 4 미만이라면 false 를 `return` 한다.

#### 이동이 가능하면 이동한다.

`moveCar(car, carsRecordBoard, flag)`

- 이동이 가능하면 자동차의 이동을 `carsRecordBoard` 에 기록한다.

### 4. 차수별 결과의 출력

`printCurrentResult(car, carsRecordBoard)`

한 차수가 진행되면 현재 결과를 출력한다.

```
예시
pobi : --
woni : ----
jun : ---
```

### 5. 최종 결과 출력

#### 우승자를 확인한다.

`findWinner(cars, carsRecordBoard, winner)`

- `carsRecordBoard` 를 참조하여 우승자가 누구인지 확인하고 `winner` 배열에 담아준다.

#### 우승자를 출력한다.

`printFinalResult(winner)`

- `winner` 배열을 참조하여 우승자를 출력한다.

- 단독 우승시

```
최종 우승자 : pobi
```

- 공동 우승시
  - 우승자가 여러명이라면 콤마(,)로 구분하여 출력한다.

```
최종 우승자 : pobi, jun
```

### 6. 유효성 검사

`validation(mode, input)`

사용자가 입력을 완료하면 해당 값이 유효한 값인지 검사한다.

#### 자동차의 이름을 입력할 때

`carNameCheck(carNameInput)`

- 컴마로 구분되어 있는지 확인한다.
- 길이가 5 이하인지 확인한다.
- 공백이 포함되어 있는지 확인한다.
- 컴마가 연속으로 입력됬는지 확인한다.

#### 이동할 횟수를 정할 때

`lapTimeCheck(lapInput)`

- 숫자인지 확인한다.
- 공백이 포함되어 있는지 확인한다.
- .이 포함되어 있는지 확인한다.
- 1 이상의 수 인지 확인한다.

## 🧑‍🔧 테스트 코드 작성하기

내가 작성한 기능들이 제대로 동작하는지 테스트 코드를 직접 작성하고 확인한다.

- Jest를 이용하여 구현한다.
- 사용법이 익숙하지 않다면 `__tests__/StringTest.js`를 참고한다.
