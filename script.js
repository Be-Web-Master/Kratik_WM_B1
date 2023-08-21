let firstname= document.getElementById('firstname');
let lastname= document.getElementById('lastname');
let age= document.getElementById('age');
let email=document.getElementById('email');
let phone= document.getElementById('phone');
let male= document.getElementById('male');
let female= document.getElementById('female');
let errorMessage= document.getElementsByClassName('error_msg')[0];




const validateinput = (input) => {
// console.log(input);
    // console.log(input)
    // console.log(age.value)
    if( input === 'age' && age.value < 18 ){
        errorMessage.innerText = 'Age should be more then 18';
    }

  
    else if ( input === 'phone' && phone.value.length !== 10 ){
        errorMessage.innerText = 'phone number should have 10 digits';
    }
    else {
        errorMessage.innerText= ''
    }

};


const handelEvent =(event) => {
    event.preventDefault();
    console.log({
        firstname: firstname.value,
        lastname: lastname.value,
        age: age.value,
        email:email.value,
        phone:phone.value,
        gender: male.checked ? "male" : "female"
    })
};