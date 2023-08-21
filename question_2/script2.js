let my_btn = document.getElementById("main-form")

my_btn.addEventListener('submit', (event)=>{
    event.preventDefault()
    console.log(event.target.name.value)
    alert(event.target.name.value)
});




// function abc(){
//     alert("submit")
// }


// let my_btn = document.getElementById("main-form")

// my_btn.addEventListener('submit', abc);








// let my_btn = document.getElementsByTagName("button").addEventListener('click', abc);