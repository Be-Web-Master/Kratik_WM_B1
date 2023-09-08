import {useState, useContext, createContext} from "react"; 
import { Comp1 } from "./contextFiles/comp1";
// const CountCtx = useContext();
// import {Comp5} from './comp5'

export const CountContext= createContext(0);


export const UseContextDemo = () =>{
    const[count , setCount] =useState(0);
    // console.log({count});

    

    return (
        <CountContext.Provider value={{count}} >
        <div id ="main_div">
            <div>{count}</div>
            <button onClick={()=> setCount(count+1)}> Main  hu button</button>
        
        <Comp1/>
        
        </div>
        </CountContext.Provider>
    );
};





