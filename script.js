
// Use getElementById to target the element with the ID "main-heading" and print it to the console. (getElementById)

const main_heading = document.getElementById("main-heading")

console.log(main_heading);


// Utilize elem.type to target the input element with the ID "name" and print its type to the console. (elem.type)


const text_name = document.getElementById("name");
console.log(text_name.type);

 //Make use of elem.name to target the input element with the ID "name" and print its name attribute to the 
 // console. (elem.name)

let elm_name= document.getElementById("name");

console.log(elm_name.name);


//Using elem.id, target the input element with the ID "name" and print its ID attribute to the console. (elem.id)

let elm_id= document.getElementById("name");

console.log(elm_name.id);

// With the help of elem.value, target the input element with the ID "name" and print its value to the console. (elem.value)
let elm_value= document.getElementById("name");

console.log(elm_value.value)

// Using querySelectorAll, target all <li> elements within the <ul> with class "list" and print them to the console. (querySelectorAll)

let query_selector_all= document.querySelectorAll(".list")[0].innerHTML;

console.log(query_selector_all);

// Leveraging querySelector, target the <p> element within the <div> with class "content" and print it to the console. (querySelector)

let query_selector= document.querySelector("#container").children[0];

console.log(query_selector);

// Utilizing document.body.children, target all child elements of the <body> element and print them to the console. 
// (document.body.children)

let body_elem= document.body.children;

console.log(body_elem);


// Using getElementsByTagName, target the first <li> element within the <ul> with class "list" and print it to the 
// console. (getElementsByTagName)

let tag_name= document.getElementsByTagName("li")[0];

console.log(tag_name);


// Make use of getElementsByClassName, target all elements with the class "content" and print them to the
// console. (getElementsByClassName)

let class_name= document.getElementsByClassName("content")[0];
console.log(class_name);


// Using getElementsByName, target the input element with the name "fullName" and print it to the 
// console. (getElementsByName)

let by_name= document.getElementsByName("fullName");
console.log(by_name);


// What classes are present in the classList of the element with the ID "main-heading"? (classList)

let class_list = document.getElementById('main-heading').classList;

console.log(class_list);

// Add the class "highlight" to the element with the ID "main-heading".
// What classes are present now? (classList.add)

let class_list_add = document.getElementById('main-heading')
class_list_add.classList.add("highlight");

console.log(class_list_add);


console.log(document.getElementById("main-heading").classList);

// 14. Remove the class "highlight" from the element with the ID "main-heading"
// What classes are present now? (**`classList.remove`**)

let class_remove = document.getElementById('main-heading');
class_remove.classList.remove("highlight");


console.log(document.getElementById("main-heading").classList);


// 15. Toggle the class "active" on the element with the class "inner-box" inside the element with the ID "container". 
// What classes are present on the "inner-box" element? (classList.toggle)

let Tgl= document.getElementById("container").classList.toggle("active");

console.log(Tgl);

console.log(document.getElementById("container").classList);




