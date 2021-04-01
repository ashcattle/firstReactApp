## React 학습 프로젝트

생활코딩님의 강의와 React 공식 문서를 통한 학습

https://ko.reactjs.org/docs/getting-started.html


### 1. JSX

JSX란 React에서 이벤트가 처리되는 방식, 시간에 따라 state가 변하는 방식, 화면에 표시하기 위해 데이터가 준비되는 방식 등 UI(HTML 등) 로직과 연결하는 랜더링 로직을 구현하기 위해 JavaScript를 확장한 문법. 별도의 파일에 마크업과 로직을 넣어 기술을 인위적으로 분리하는 대신, 둘 다 포함하는 "Component"라고 부르는 느슨하게 연결된 유닛으로 관심사를 분리한다.


### 2. Component

개념적으로 컴포넌트는 JavaScript 함수와 유사하다. “props”라고 하는 임의의 입력을 받은 후, 화면에 어떻게 표시되는지를 기술하는 React 엘리먼트를 반환한다.
컴포넌트는 함수 혹은 클래스의 형태로 정의할 수 있다.


### 3. props와 state

> #### 3-1. props
>   > - 부모 컴포넌트가 자식 컴포넌트에게 넘겨주는 값.
>   > - 자식 컴포넌트에서는 props를 받아오기만 하고, 받아온 props를 다시 수정할 수 없다.

> #### 3-2. state
>   > - 컴포넌트 내부에서 선언하며, 그 컴포넌트 내부에선 값을 변경할 수 있다.
>   > - state를 사용하기 위해 함수 컴포넌트를 클래스 컴포넌트로 변환한다.
>   > - 클래스 안에 constructor(props)를 선언한 후, this.state = {} 를 지정하여 state 값을 지정할 수 있다.
>   > - state를 수정하기 위해서는 반드시 setState()를 사용한다.


### 4. 이벤트 처리

React 엘리먼트에서 이벤트를 처리하는 방식은 기존의 DOM 엘리먼트에서 이벤트를 처리하는 방식과 매우 유사하지만, 몇가지 문법 상 차이가 있다.
- React의 이벤트는 소문자 대신 캐멀 케이스(camelCase)를 사용. --> onClick(소문자와 대문자의 조합)
- JSX를 사용하여 문자열이 아닌 함수로 이벤트 핸들러를 전달.   --> onClick={handleClick 함수}


### 5. Component의 생명주기 메서드

> #### 5-1. render()
> - 클래스 컴포넌트에 반드시 구현되어야 하는 유일한 메서드이다. 
> - [React 엘리먼트, 배열과 fragment, Portal(별도의 DOM 하위 트리에 자식 엘리먼트), 문자열과 숫자, boolean 혹은 null] 등의 값들 중 반드시 하나를 반환한다.
> - render() 메서드는 가능하면 순수해야 하므로 컴포넌트의 state를 변경하지 않고, 호출될 때마다 동일한 결과를 반환해야 하며, 브라우저와 직접적으로 상호작용을 하지 않아야 한다.

> #### 5-2. constructor()

> #### 5-3. componentDidMount()

> #### 5-4. componentDidUpdate()

> #### 5-5. componentWillUnmount()

> #### 5-. shouldComponentUpdate()
- https://ko.reactjs.org/docs/react-component.html#shouldcomponentupdate
- shouldComponentReact() 메서드는 컴포넌트의 현재 state 혹은 props가 새로운 값으로 갱신되어 렌더링이 발생하기 직전에 호출되는 메서드이다.
즉, 현재 state 또는 props의 변화가 컴포넌트의 출력 결과에 영향을 미치는지 여부를 React가 알 수 있다.
- 기본값은 true이며, false를 반환하면 해당 컴포넌트의 갱신 작업을 건너뛸 수 있게 된다. 그리고 이 함수는 초기 렌더링에는 호출되지 않는다.
- 이 메서드는 오직 성능 최적화를 위한 것으로, 가능하면 직접 작성하는 대신 props와 state에 대한 얕은 비교를 통해 false를 반환하는 정도의 얕은 비교가 적당하다.