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
> - 부모 컴포넌트가 자식 컴포넌트에게 넘겨주는 값.
> - 자식 컴포넌트에서는 props를 받아오기만 하고, 받아온 props를 다시 수정할 수 없다.

> #### 3-2. state
> - 컴포넌트 내부에서 선언하며, 그 컴포넌트 내부에선 값을 변경할 수 있다.
> - state를 사용하기 위해 함수 컴포넌트를 클래스 컴포넌트로 변환한다.
> - 클래스 안에 constructor(props)를 선언한 후, this.state = {} 를 지정하여 state 값을 지정할 수 있다.
> - state를 수정하기 위해서는 반드시 setState()를 사용한다.



### 4. 이벤트 처리

React 엘리먼트에서 이벤트를 처리하는 방식은 기존의 DOM 엘리먼트에서 이벤트를 처리하는 방식과 매우 유사하지만, 몇가지 문법 상 차이가 있다.
- React의 이벤트는 소문자 대신 캐멀 케이스(camelCase)를 사용. --> onClick(소문자와 대문자의 조합)
- JSX를 사용하여 문자열이 아닌 함수로 이벤트 핸들러를 전달.   --> onClick={handleClick 함수}



### 5. Component의 생명주기 메서드

> #### 5-1. render()
> - 클래스 컴포넌트에 반드시 구현되어야 하는 유일한 메서드이다. 
> - [React 엘리먼트, 배열과 fragment, Portal(별도의 DOM 하위 트리에 자식 엘리먼트), 문자열과 숫자, boolean 혹은 null] 등의 값들 중 반드시 하나를 반환한다.
> - render() 메서드는 가능하면 순수해야 하므로 컴포넌트의 state를 변경하지 않고, 호출될 때마다 동일한 결과를 반환해야 하며, 브라우저와 직접적으로 상호작용을 하지 않아야 한다.

> #### 5-2. constructor(props)
> - 리액트 컴포넌트의 생성자. 해당 컴포넌트가 마운트되기 전에 호출된다.
> - 컴포넌트에 메서드를 바인딩하거나 state를 초기화하는 작업이 없다면, 해당 컴포넌트에는 생성자를 구현하지 않아도 된다.
> - 다른 구문에 앞서 super(props)를 호출하여 먼저 this.props가 생성자 내에서 정의될 수 있도록 한다.
> - 주의할 점으로 this.state를 통해 state를 초기화 할 때, 파라미터의 props를 통해 state를 정의하지 않도록 한다. this.props를 사용하는 것이 바른 방법.

> #### 5-3. componentDidMount()
> - componentDidMount()는 컴포넌트가 마운트된 직후, 즉 트리에 삽입된 직후에 호출된다.
> - DOM 노드가 필요로 하는 초기화 작업들은 이 메서드에서 구현한다. 
> - 외부에서 데이터를 불러와야 한다면, 네트워크 요청을 보내기 적절한 위치이며 데이터 구독을 설정하기 좋은 위치이기도 하다.
> - 단, 데이터 구독을 설정했다면 componentWillUnmount()에서 반드시 데이터 구독 해제 작업이 필요하다.

> #### 5-4. componentDidUpdate()
> - componentDidUpdate() 메서드는 갱신이 일어난 직후에 호출된다. 단, 최초 렌더링에서는 호출되지 않는다.
> - 컴포넌트가 갱신되었을 때 DOM을 조작하려면 이 메서드를 활용하면 좋다. 또한, 이전과 현재의 props를 비교하여 네트워크 요청을 보내는 작업도 이 메서드에서 구현할 수 있다.

> #### 5-5. componentWillUnmount()
> - 컴포넌트가 마운트 해제되어 제거되기 직전에 호출된다. 
> - 이 메서드 내에서는 타이머 제거, 네트워크 요청 취소, componentDidMount() 내에서 생성된 구독 해제 등 필요한 모든 정리 작업을 수행한다.
> - 이제 컴포넌트가 다시 렌더링되지 않으므로, componentWillUnmount() 내에서 setState()를 호출해선 안됨.

> #### 5-6. shouldComponentUpdate()
> - https://ko.reactjs.org/docs/react-component.html#shouldcomponentupdate
> - shouldComponentReact() 메서드는 컴포넌트의 현재 state 혹은 props가 새로운 값으로 갱신되어 렌더링이 발생하기 직전에 호출되는 메서드이다.
즉, 현재 state 또는 props의 변화가 컴포넌트의 출력 결과에 영향을 미치는지 여부를 React가 알 수 있다.
> - 기본값은 true이며, false를 반환하면 해당 컴포넌트의 갱신 작업을 건너뛸 수 있게 된다. 그리고 이 함수는 초기 렌더링에는 호출되지 않는다.
> - 이 메서드는 오직 성능 최적화를 위한 것으로, 가능하면 직접 작성하는 대신 props와 state에 대한 얕은 비교를 통해 false를 반환하는 정도의 얕은 비교가 적당하다.



### 6. 리스트와 Key

리액트의 jsx에서 ```<li></li>```, 즉 리스트를 사용하기 위해서는 배열 내부 엘리먼트에 Key를 지정해줘야 한다. Key는 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕는다. 대부분 데이터의 id값을 많이 Key값으로 사용하며 id가 없을 경우, 인덱스 값을 사용하기도 하지만 권장하지는 않는 방법이다. Key는 같은 배열 안의 형제 사이에서만 고유한 값이면 된다.



### 7. state 끌어올리기

서로 다른 컴포넌트들 간에 state를 공유하는 일이 필요할 때, 그 값을 필요로 하는 컴포넌트들의 가장 가까운 공통 조상 컴포넌트로 해당 state를 끌어올림으로 이룰 수 있다. 공통 조상의 컴포넌트에 state를 두고, 그 값을 필요로 하는 컴포넌트들에게 함수의 형태로 props를 전달하여 해당 state를 제어할 수 있도록 매개변수를 취한다. 즉, 다른 컴포넌트 간에 존재하는 state를 동기화시키려고 노력하는 대신 하향식 데이터 흐름에 기대어 해결할 수 있게 된다.



### 8. 합성 vs 상속
React에서는 Java 등에서 사용되던 상속보다는 합성(Composition)을 통해 코드를 재사용하는 것을 권장한다. 

> #### 8-1. 컴포넌트에서 다른 컴포넌트를 담기
> 범용적인 박스와 같은 역할을 하는 컴포넌트들은 어떤 자식 컴포넌트가 들어올지 미리 예상할 수 없는 경우가 있다. 이런 경우 children prop을 사용하여 부모 역할의 컴포넌트 아래에 있는 자식 엘리먼트를 그대로 전달하는 것이 좋다.

```javascript
function Board(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}
```

```javascript
function WelcomeDialog() {
  return (
    <Board color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </Board>
  );
}
```
> 위의 예시에서 Board 태그 안에 있는 내용들이 Board 컴포넌트의 children prop으로 전달된다. 즉, Board 컴포넌트의 <div> 안에서 모든 children prop들을 랜더링한다.