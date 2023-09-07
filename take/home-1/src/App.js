// import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  function deleteid(id){
    setData((data)=>{
      return data.filter((i)=>{
        return i !== id;
      });
    });
  }

  return (
    <div className='mainDiv' >

   
    <form onSubmit ={ (e)=> e.preventDefault()}>
      <input type ="text" id="search" onChange={(e)=> {setInput (e.target.value)
      }} value ={input}/>

      <button onClick={()=>{
        const newData= [...data, input];
        setInput("")
        setData(newData);
        console.log(newData)
        // console.log(data)
      }}>Submit</button>
    </form>
    <div className='card'>
    {data.map((obj,id)=>{
       return(
       <div>{id+1}.{obj}<span onClick={()=> deleteid(id)}>❌</span>
      </div>);
      })};

    </div>

    </div>



  );
}

export default App;