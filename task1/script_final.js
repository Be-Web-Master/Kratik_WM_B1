const idInput = document.getElementById('idInput');
const idSubmit = document.getElementById('idSubmit');
const todolist = document.getElementById('todolist');

const todoLiData= [];

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



const handleSearchInput =(event) => {
    console.log(event.target.value)
}


