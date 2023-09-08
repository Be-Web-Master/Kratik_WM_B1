// import { useState } from "react";

import { useReducer } from "react";

const actionObj = {
    type: "plusOne"

}

const reducer = (state, action) => {

    console.log({ state, action });

    /// 
    switch (action) {
        case "plusOne":
            return state +=1;
        case "plusHundred":
            return state += 100;
        case "intoTen":
            return state *= 10;
        case "divideTwo":
            return state /= 2;
            default:
                return state;
    }

}


const initialState = 0;



export const UseReducerDemo = () => {
    // const [count, setCount] = useState(0);

    const [state, dispatch] = useReducer(reducer, initialState);


    // const increaseByOne = () => {
    //     // setCount(state+1);
    // };
    // const increaseByHundred = () => {
    //     // setCount(state+100);
    // };
    // const multiplyBy10 = () => {
    //     // setCount(state*10);
    // };
    // const dividedBy2 = () => {
    //     // setCount(state/2);
    // };




    return (
        <div id="main">
            <h1>{state}</h1>
            <button onClick={() => dispatch('plusOne')}>inc+1</button>
            <p></p>
            <button onClick={() => dispatch("plusHundred")}>inc+100</button> <br></br>
            <p></p>
            <button onClick={() => dispatch("intoTen")}>Mul by 10</button> <br></br>
            <p></p>
            <button onClick={() => dispatch("divideTwo")}>divide by 2</button>
        </div>
    );
};