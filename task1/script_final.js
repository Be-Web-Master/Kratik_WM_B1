const idInput = document.getElementById('idInput');
const idSubmit = document.getElementById('idSubmit');
const todolist = document.getElementById('todolist');
const search =document.getElementById('search')

let todoLiData= [];



const GET_URL = (idInputVal) =>{ return `https://jsonplaceholder.typicode.com/todos/${idInputVal}`};

const getApiData = async (url) => {
    const todoDataResponse = await fetch(url);
    const todoData = await todoDataResponse.json();
    return todoData;
}

const addLiElement = (liText) => {
    const liElement = document.createElement('li');
    liElement.innerText = liText.title;
    todolist.append(liElement);
    idSubmit.innerText = "ADD"

}


const clearUi = () => {
    todolist.innerHTML = '';
}


const updateUi = () => {
    clearUi();
    for( const el of todoLiData){
        addLiElement(el)
    }
}





const handelAddTaskSubmit = async (event) => {
    event.preventDefault();
    const idInputVal = idInput.value;

    if (idInputVal === '' || idInputVal < 0 || idInputVal > 200) {
        alert("Enter a valid Id")
        return;
    }

    idSubmit.innerText = "Adding";

    const data = await getApiData(GET_URL(idInputVal));

    if (!data.title) {
        alert("fail to featch data")
        return;
    }

    // addLiElement(data);
    todoLiData.push(data);

    updateUi();
    
    idInput.value = '';

    console.log(todoLiData);


    

};

const addUi =() =>{
    clearUi();
    for( const el of SearchingArr ){
        addLiElement(el)
    }
}



const handleSearchInput =(event) => {
    const value= event.target.value
    console.log(value);
    let result = todoLiData.filter((val)=> val.title.includes(value)
    )
   

     if(result.length > 0){
        clearUi();
        result.map((li)=>{
            addLiElement(li)
        })
     }
    
    // addUi();
    console.log(result)
}




