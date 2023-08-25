//// in class in complete


const idInput= document.getElementById('idInput');
const todolist =document.getElementById('todolist')
const idSubmit = document.getElementById('idSubmit')
const idSearch = document.getElementById("idSearch")


const GET_URL= (idInputVal)=> `https://jsonplaceholder.typicode.com/todos/${idInputVal}`;

const todoLiData= [];


const addLiElement = (liText) => {

    const liElement= document.createElement('li');
    // liElement.innerText = liText
    todoLiData.push( liElement.innerHTML)
    todolist.append(liElement);
    

}


const getApidata = async (URL) => {
    const todoDataResponse = await fetch(URL)
    const todoData = await todoDataResponse.json();
    return todoData;
    // console.log(idInputVal, todoData);
}





const handelAddTaskSubmit = async (event)=>{
    event.preventDefault();
    console.log(idInput.value);
    console.log(idInputVal);
    const idInputVal= idInput.value;
    if ( idInputVal === '' ||  idInputVal <= 0 || idInputVal > 200 ){
        alert(" Enter a valid Id!")
        return;
    }
    idSubmit.innerText = 'Adding'

    console.log( GET_URL(idInput.value));

    const data= await getApidata(GET_URL(idInputVal));
console.log(data);

    if(!data.title){
        alert('failto featch data')
        // return;
    }

    addLiElement(data.title)
    
    idInput.value ='';
    idSubmit.innerText = 'Add'
    console.log(liElement);

};


// const handleSearchInput =(event) => {
//     console.log(event.target.value)
// }


// console.log(todoLiData);


