import { useState } from "react"; 
import UserName from "./UserName";

export default function Hello({age}){
    const [name, setName] = useState('suhvin');
    const msg = age > 19 ? "성인입니다" : "미성년자 입니다";

    return (
        <div> 
            <h2 id="name">
                {name}({age}) : {msg}
            </h2>
            <UserName name={name}/>
            {/* 이 name은 Hello에서는 state 이지만
            userName에서는 props이다*/}
            <button onClick={() => {
                setName(name === "suhvin" ? "kevin" : "suhvin");
            }}>Change</button>
        </div>
    );
}