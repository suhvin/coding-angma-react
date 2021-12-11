import './App.css';
import Hello from './component/Hello'
import styles from "./App.module.css"


// class는 자바스크립트 예약어이기 때문에 className으로 써줘야 함
// style은 객체로 전달해야 함
// background-color X / backgroundColor O
// JSX에서 텍스트를 쓸 때 중괄호 안에 쓰면 변수나 계산식을 삽입할 수 있다(문자, 숫자만 됨)

function App() {
  return (
    <div className="App">
      <Hello/> 
      <div className={styles.box}>app</div>
    </div>
    );
}

export default App;
