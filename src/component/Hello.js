import styles from "./Hello.module.css"

// 함수 선언문
// function Hello(){
//     return <p>Hello</p>;
// }

// 함수 표현식
// const Hello = function(){
//     return <p>Hello</p>;
// };

// 화살표 함수
// const Hello = () => {
//     return <p>Hello</p>;
// };

// 화살표 함수2
// const Hello = () => {
//     <p>Hello</p>;
// };

// 화살표 함수3
// const Hello = () => <h1>Hello</h1>;


// export default Hello;

export default function Hello(){
    return (
        <div> {/*반드시 div 혹은 빈태그<> 필요
                JSX는 무조건 하나의 태그만 들어가야 한다*/}
            <h1 style={{
                    color : 'red',
                    borderRight : '5px solid #000',
                    marginBottom : '30px',
                    opacity : 0.5
                }}>
                Hello
            </h1>
            {/* 인라인 css 방식 / 무조건 객체 / 속성에 - 안씀 */}
            <div className={styles.box}>hello</div>
        </div>
    );
}