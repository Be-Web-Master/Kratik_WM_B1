


// let form= document.getElementsByTagName('form')[0];
// const submitBtn = document.getElementById('submit_1')
// console.log({form, submitBtn});
// form.addEventListener('submit', event =>{
//     event.preventDefault();
//     console.log({event});
//     submitBtn.innerText='Submitted'
// })


let firstname = document.getElementById('firstname');

let lastname = document.getElementById('lastname');

let age = document.getElementById('age');

let email = document.getElementById('email');

let phone = document.getElementById('phone');

let errorMessage = document.getElementById('error_msg');

let butn= document.getElementById('submit_1')


// butn.addEventListener('click',()=>{
//     butn.innerText ="Submitted"
// });

let form1= document.getElementsByTagName("form")[0];
form1.addEventListener('submit',()=>{
    butn.innerText= "Submitted"
});


function validations(input){
    // console.log(input)

    if ( input === 'firstname' && firstname.value.length< 5){
        errorMessage.innerText= "invalid firstname"
    }
    
    else if( input === 'lastname' && lastname.value.length< 5){
            errorMessage.innerText= "invalid lastname"
        }
    else if(input ==='age' && age.value < 18) {
        errorMessage.innerText = "You should be 18 or above";
    }
    else if (input === 'phone' && phone.value.length !== 10) {
        errorMessage.innerText = 'incorrect phone no.';
    }

    else {
        errorMessage.innerText = '';
    }

};


const eventhandel =(event) => {
    event.preventDefault();
    console.log({
        firstname: firstname.value,
        lastname: lastname.value,
        age: age.value,
        email:email.value,
        phone:phone.value,
        gender: male.checked ? "male": "female"
    })
};


