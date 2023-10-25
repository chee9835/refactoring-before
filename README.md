# refactoring-before

## 6장 기본적인 리팩토링

### 6-1 : 함수 추출하기

- 지역변수는 사용하는 곳과 최대한 가까운 곳에서 작성한다.
- 함수의 리턴값에 대해선 result 로 변수 선언한다.
- 객체를 직접적으로 변환하지 말자.
- 한눈에 파악할 수 있는 함수로 만든다.

### 6-2 : 함수 인라인하기

- 너무 지나치게 뽑아낸 경우, 인라인한다.
- 인라인하면 함수 안에서 매개변수를 제대로 받는지 확인한다.

### 6-3 : 변수 추출하기

- 주석을 사용해 코드를 설명한다면 주석을 삭제할 수 없는지 생각해본다.
- 긴 표현식에 이름을 붙여 가독성을 높인다.
- 부가적인 정보가 필요하다면 변수에 포함하지만, 짧은 버전도 충분히 이해가 된다면 간략히 작성한다.
- private 필드는 \_ 대신 # 으로 선언한다.

### 6-4 : 변수 인라인하기

- 직관적으로 봤을 때 불필요한 경우 인라인한다.

### 6-7 : 변수 이름 바꾸기

- 유추를 해야한다면 나쁜 이름이다. 지나친 축약 표현을 사용하지 않는다.

### 6-5 : 함수 선언 바꾸기

- 함수 이름 축약하지 말기.
- flag 에 따라 다른 동작을 하는 함수를 만드는 것은 좋지 않다.
- 함수 내부에서 필요한 테이터만 전달한다. 그러면 외부 다른 객체에 대한 의존도가 낮춰 재사용성을 높일 수 있다.

### 6-8 : 매개변수 객체 만들기

- 이미 범위가 정의되어 있는 경우, 풀어서 전달하기 보다는 범위 자체를 전달해 사용한다.
- 매개변수가 여러 개라면 묶을 수 있는 객체가 있는 지 확인한다. 그리고 객체 안에서 유용함 함수로 만들 수 있는 지 확인한다.
  \*\* 데이터를 담고 있는 객체와 그 데이터를 처리하는 로직을 같이 class 안에서 정의해서 사용할 수 있다.

### 6-6 : 변수 캡슐화하기

- 객체를 할당한 변수는 메모리 주소를 가지고 있어, 객체를 수정할 경우 메모리 주소에 있는 객체 자체가 변경된다.
- 불변성을 유지하기 위해서는 객체의 메모리 주소를 반환하지 않고, 새로운 객체를 생성해 반환해준다.
  \*\* Object.assign(), {...obj} - 얇은 복사를 사용하기 때문에 중복 객체라면 복사되지 않을 수 있다.
  \*\* class - 다른 프로그래밍 언어도 class 선언 후 사용한다. class 선언할 때 get, set 메세드를 같이 선언함에 따라 어떤 메서드가 사용가능한지 의도를 보여줄 수 있다.

### 6-9 : 여러 함수를 클래스로 묶기

- 데이터와 데이터를 사용하는 곳이 여기저기 흩어져있어서 명확한 책임이 없는 코드이다.
- 하나의 책임을 가진 class를 선언하고 캡슐화를 해보자.

### 6-10 : 여러 함수를 변환 함수로 묶기

- 요즘 사용하는 방식은 아니지만, 필요한 순간이 있을 수 있으니 공부해보자.
- class 사용을 더 권장한다.
  \*\* 데이터가 변경되어도 get 호출 시점의 데이터를 사용할 수 있다.

### 6-11 : 단계 쪼개기

- 코드를 읽으면서 비슷한 일을 하거나 연관된 일을 하는 코드끼리 함수로 나눈다.
- 스크립팅 관련 코드는 두 가지 단계로 나눌 수 있다.
  - 1. 사용자에게 입력을 받아 유효성 검사
    2. 필요한 로직 처리
- node.process 에 직접적으로 접근하면 테스트 코드 작성이 어렵기 때문에 외부의 인자로 수행하는 함수로 작성한다.

## 7장 캡슐화

### 7-1 : 레코드 캡슐화하기

- 레코드는 key 와 value 로 구성된 데이터 구조를 말한다.
- 클래스 안에 정의된 데이터를 get 혹은 set 할 건지에 따라 청사진이 달라진다.
- constructor 의 매개변수는 fe 에서만 정의해서 사용하는 클래스인 경우 개별적으로 받고, be 와 통신하는 데이터로 정의하는 클래스인 경우엔 레코드 형태로 받는다.

### 7-2 : 컬렉션 캡슐화하기

- 컬렉션은 복합적인 데이터를 가진 구조를 말한다.
- 클래스 내부 데이터로 컬렉션을 사용할 경우 그 컬렉션을 직접적으로 수정 가능하게 외부에 노출하는 것은 위험하다.
  \*\* set 으로 전달받은 배열을 직접적으로 수정 가능하게 해서는 안된다.
- 컬렉션을 get 할 때는 읽기전용 새로운 컬렉션을 만들어서 전달한다. (slice 또는 스프레드 연산자 사용)
- 그리고 컬렉션을 수정할 때는 메서드를 사용하도록 청사진을 보여준다.

### 7-3 : 기본형을 객체로 바꾸기

- 데이터에 대한 로직이 외부에 있는 것보다 클래스 내부 안에 있는 것이 맞다.
- 우선순위에 대한 클래스를 작성해 활용한다.

### 7-4 : 임시 변수를 질의 함수로 바꾸기

- 내부에 선언된 변수들을 질의 함수로 바꿔면 좀 더 사용성을 높일 수 있다.

### 7-5 : 클래스 추출하기

- 클래스 하나 당 하나의 역할, 하나의 책임을 가지는 것이 좋다.

### 7-6 : 클래스 인라인하기

- 클래스를 만들 때 응집도에 대해서 생각한다.
- 밀접한 데이터와 행동을 같이 두고, 너무 많다면 분리해준다.
- 정해진 답은 없으나, 너무 미래지향적으로 클래스를 구성하지 않아야 한다.

### 7-7 : 위임 숨기기

- 내부에서 사용하는 정보를 외부에 지나치게 공개하고 있다.
- 내부에서 다른 클래스에 위임하고 있다면, 다른 클래스에 직접적으로 접근하기 보다는 내부 함수로 사용하게 한다.

### 7-8 : 중개자 제거하기

- 중개자, 위임 = 컴포지션 = A에서 B를 가지고 있다.
- B 가 단순히 데이터만 주고 받는 클래스라면, 하나로 통합하는 것이 나을 수 있다.
- 별도의 클래스로 분리했을 때의 이점을 생각하면서 코드를 작성하면 된다.

### 7-9 : 알고리즘 교체하기

## 8장 기능 이동 = 응집도 높이기

### 8-1 : 함수 옮기기

- 옛날에는 함수 안 중첩 함수를 이용해서 모듈화와 캡슐화를 구현했다.
- 응집도가 있다는 말은 행동이 내부 데이터를 사용, 접근하고 있다는 말이다.
  \*\* 내부 데이터를 사용하지 않아 내부에 있지 않아도 되는 함수는 외부로 옮겨, 필요한 것들만 남겨 응집도를 높인다.
- 정의된 메서드 중 어느 class에 있는게 더 응집도를 높일 수 있는 지 고민해본다.
- 중첩된 if문은 최대한 줄여본다.

### 8-2 : 필드 옮기기

- 필드 또한 함수와 마찬가지로 응집도를 높일 수 있는 곳으로 이동한다.

### 8-3 : 문장을 함수로 옮기기

- 정보를 출력하는 함수가 있다면 그 곳으로 옮겨 응집도를 높인다.

### 8-4 : 문장을 호출한 곳으로 옮기기

- 공통적으로 사용하는 부분에서 상황에 따라 수정이 될 부분이 있다면,
  해당 문장을 필요한 곳으로 옮기거나, 콜백 함수로 전달할 수도 있다.

### 8-5 : 인라인 코드를 함수 호출로 바꾸기

- 유능한 개발자는 사용하는 툴과 플랫폼을 익숙하게 쓰는 사람이다.

### 8-6 : 문장 슬라이드하기

- 관련있거나 비슷한 코드 묶어두기.

### 8-7 : 반복문 쪼개기

- 반복문을 돌 때 모든 것을 다 처리하려고 하면, 코드를 이해하기도 힘들고, 재사용성도 떨어진다.

### 8-8 : 반복문을 파이프라인으로 바꾸기

### 8-9 : 죽은 코드 제거하기

- 요즘엔 git과 같이 소스코드를 버전관리하기 떄문에, 주석처리하기보다는 깔끔하게 삭제하자.

## 9장 데이터 조직화 Organizing Data

### 9-1 : 변수 쪼개기

- 임시 변수를 사용하지 않고 *의미 있는 이름*을 사용하자.
- 반환값이나 mutable한 값이면 `let` 으로 선언하고, 아니라면 `const` 으로 선언하자.

### 9-2 : 필드 이름 바꾸기

- 클래스, 객체 내의 필드 이름은 값이나 의도를 나타내는 것이 좋다.

### 9-3 : 파생 변수를 질의 함수로 바꾸기

- 어떤 값에 영향을 받는 필드라면 그 값을 질의 함수로 만들어주자.

### 9-4 : 참조를 값으로 바꾸기

- 값(value) 은 불변성을 가진 원시 타입을 생각하면 되고, 참조(reference) 는 가변성을 지닌 객체 타입을 떠올리자.
- 위임한 값에 직접적인 접근으로 값의 변경이 가능하므로, 값을 업데이트할 경우 새로운 클래스를 생성한다.

### 9-5 : 값을 참조로 바꾸기

- 고객 정보와 같이 변경된 값을 참조해야 한다면 값이 아닌 참조를 사용하자.
- 고객 당 하나의 인스턴스를 가지기 위해서 레파지토리 패턴을 사용할 수 있다.

### 9-6 : 매직 리터럴 바꾸기

## 10장 조건부 로직 간소화

### 10-1 : 조건문 분해하기

### 10-2 : 조건식 통합하기

- 동일한 동작을 수행하는 다양한 조건들이 있다면 그 조건들을 하나의 조건문으로 만들고 알맞는 이름을 만들어준다.
