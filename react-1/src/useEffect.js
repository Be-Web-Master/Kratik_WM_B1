import {useEffect, useState} from "react";

export const UseEffectComp = () =>{

    const [count, setCount] = useState(0);
    const [countX, setCountX] =useState(0);

    useEffect(()=>{
        console.log("called form effect")
    } ,[count])
    console.log({count});

    return(
        <div>
        <div onClick={()=> setCount(count+1)}>{count}</div>
        <button onClick={(e)=>{
            e.stopPropagation();
            setCountX(countX+1)


            }}>X {countX}</button>

        </div>
    )
};