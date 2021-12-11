import { useState } from "react"; 

export default function Hello(){
    // let name = "suhvin";
    const [name, setName] = useState('suhvin');
    // useState()는 배열을 반환한다
    // 배열의 구조분해

    function changeName() {
        const newName = name === "suhvin" ? "kevin" : "suhvin";
        setName(newName);
        // setName(name === "suhvin" ? "kevin" : "suhvin");
    }

    return (
        <div> 
            <h2 id="name">{name}</h2>
            <button onClick={changeName}>Change</button>
        </div>
    );
}