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
