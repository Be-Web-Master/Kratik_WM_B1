//long 

const idInput= document.getElementById('idInput');
const idSubmit= document.getElementById('idSubmit');
const todolist= document.getElementById('todolist');





const handelAddTaskSubmit= async (event) =>{
    event.preventDefault();
    // console.log(idInput.value);
    const idInputVal = idInput.value;

    if(idInputVal === ''|| idInputVal < 0 || idInputVal > 200 ){
        alert("Enter a valid Id")
        return;
    }

    idSubmit.innerText ="Adding"

    const todoDataResponse = await fetch(`https://jsonplaceholder.typicode.com/todos/${idInputVal}`);
    const todoData= await todoDataResponse.json();
    console.log(todoData.title);

    if (!todoData.title){
        alert("fail to featch data")
        return;
    }

    const liElement = document.createElement('li');
    liElement.innerText = todoData.title;
    todolist.append(liElement);
    idSubmit.innerText ="ADD"

}