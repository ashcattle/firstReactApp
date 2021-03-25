# React 학습 프로젝트

생활코딩님의 강좌를 통해 React 학습

## 1. Component

컴포넌트는 함수 혹은 클래스의 형태로 정의할 수 있다.
개념적으로 컴포넌트는 JavaScript 함수와 유사하다. “props”라고 하는 임의의 입력을 받은 후, 화면에 어떻게 표시되는지를 기술하는 React 엘리먼트를 반환한다.

https://ko.reactjs.org/docs/components-and-props.html

## 2. props와 state

> ### 2-1. props
>   > - 부모 컴포넌트가 자식 컴포넌트에게 넘겨주는 값.
>   > - 자식 컴포넌트에서는 props를 받아오기만 하고, 받아온 props를 다시 수정할 수 없다.

> ### 2-2. state
>   > - 컴포넌트 내부에서 선언하며, 그 컴포넌트 내부에선 값을 변경할 수 있다.
