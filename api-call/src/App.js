import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";
import { Card } from './card';

function App() {

  const[data, setData]= useState([]);
  const[search, setSearch] = useState({value:""});




  const url = 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free';

const options = {
	method: 'GET',	headers: {
		'X-RapidAPI-Key': '439ccbe914msh6a4d549c34d084fp17d96ajsn1d9b29169354',
		'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
	}
};

const callApi = async() =>{

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
  setData(result.hints);
} catch (error) {
	console.error(error);
}
};

useEffect(()=>{
  callApi();
},[])

console.log(data);

  return (
    <div className="App">
      
      <input onChange={(e)=> setSearch((search)=>{
        search.value= e.target.value
        return {...search};
      })} />

      <div id='containerDiv'>
        {data.filter((obj)=>{
            return(
              obj.food.label.toLowerCase().includes((search.value).toLowerCase())
            )})
          .map((obj,idx )=>{
            return(
              <Card key={idx} obj={obj} idx={idx}/>
            )
            
          })
        }

      </div>

    </div>
  );
}





export default App;
