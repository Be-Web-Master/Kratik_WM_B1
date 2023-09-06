// import logo from './logo.svg';
// import './App.css';
import { InputForm } from './InputForm';
import { DataList, dataArray } from './DataList';

// function App() {
//   return (
//     <div className="App">
//      <InputForm/>
//     </div>
//   );
// }

// export default App;
import { useState } from "react";

export default function ReactComp() {
  const [count, setCount] = useState(0);



  const increaseCount = (e) => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <button onClick={increaseCount}>+</button>
      <span>Count: {count}</span>
      <button onClick={() => setCount(count - 1)}>-</button>
      <InputForm rcCount = {count}>
        {count > 5 ? (<Comp1 compCount={count* 3000}/>) : (<Comp1 compCount={count* 1000}/>)}  

      {count > 5 && <div>Hello from Div</div>}
      </InputForm>
      
    {dataArray.map((obj,idx,arr)=>{
      const {a, b} = obj
      return <DataList order={idx+1} a={a} b={b} />
    })}
    </div>
  );
}

const Comp1 = (props) =>{
  const {compCount} = props;
  return <div> From Comp1: {compCount}</div>
}
