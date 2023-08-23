let mybutn= document.getElementById('mybutton')

// mybutn.addEventListener('click', ()=>
//     {funtodo('https://jsonplaceholder.typicode.com/todos')}
// );

const funtodo = async (url)=>{
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
};



// mybutn.addEventListener('click', ()=>{
//     fetch("https://jsonplaceholder.typicode.com/todos");
//     .then((response) => response.json())
//     .then((data)=> console.log(data) )

// })

// comapleit 
