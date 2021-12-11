export default function Hello(){
    function showName() {
        console.log("suhvin");
    }

    function showAge(age) {
        console.log(age);
    }

    function showText(txt) {
        console.log(txt);
    }

    return (
        <div> 
            <h1>Hello</h1>
            <button onClick={showName}>Show name</button>
            <button 
                onClick={() => {
                    showAge(24);
                }}
            >Show age</button>
            <input type="text" onChange={e => {
                const txt = e.target.value;
                // e는 발생한 이벤트, e.target은 이벤트가 발생한 태그 
                // e.target.value는 이벤트가 발생한 태그의 값
                showText(txt);
            }}/>
        </div>
    );
}