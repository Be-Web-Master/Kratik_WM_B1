let mybutton = document.getElementById('mybutton');
let inputBox = document.getElementById("inputBox");
let form = document.getElementById('form');
let listcard= document.getElementById('listcard')

const fun1 = (event) => {
    event.preventDefault()
    if ( inputBox.value > 200 || inputBox.value< 1 ){
        alert( "invalide value")
    }
    fetchTodo(`https://jsonplaceholder.typicode.com/todos/${inputBox.value}`)

}


async function fetchTodo(url) {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    listcard.innerHTML = `<p><strong>${ data.id}</strong> ${data.title}</p>`
};

