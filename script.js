
// // // Use getElementById to target the element with the ID "main-heading" and print it to the console. (getElementById)

// // const main_heading = document.getElementById("main-heading")

// // console.log(main_heading);


// // // Utilize elem.type to target the input element with the ID "name" and print its type to the console. (elem.type)


// // const text_name = document.getElementById("name");
// // console.log(text_name.type);

// //  //Make use of elem.name to target the input element with the ID "name" and print its name attribute to the 
// //  // console. (elem.name)

// // let elm_name= document.getElementById("name");

// // console.log(elm_name.name);


// // //Using elem.id, target the input element with the ID "name" and print its ID attribute to the console. (elem.id)

// // let elm_id= document.getElementById("name");

// // console.log(elm_name.id);

// // // With the help of elem.value, target the input element with the ID "name" and print its value to the console. (elem.value)
// // let elm_value= document.getElementById("name");

// // console.log(elm_value.value)

// // // Using querySelectorAll, target all <li> elements within the <ul> with class "list" and print them to the console. (querySelectorAll)

// // let query_selector_all= document.querySelectorAll(".list")[0].innerHTML;

// // console.log(query_selector_all);

// // // Leveraging querySelector, target the <p> element within the <div> with class "content" and print it to the console. (querySelector)

// // let query_selector= document.querySelector("#container").children[0];

// // console.log(query_selector);

// // // Utilizing document.body.children, target all child elements of the <body> element and print them to the console. 
// // // (document.body.children)

// // let body_elem= document.body.children;

// // console.log(body_elem);


// // // Using getElementsByTagName, target the first <li> element within the <ul> with class "list" and print it to the 
// // // console. (getElementsByTagName)

// // let tag_name= document.getElementsByTagName("li")[0];

// // // console.log(tag_name);


// // Make use of getElementsByClassName, target all elements with the class "content" and print them to the
// // console. (getElementsByClassName)

// let class_name= document.getElementsByClassName("content")[0];
// // console.log(class_name);


// // Using getElementsByName, target the input element with the name "fullName" and print it to the 
// // console. (getElementsByName)

// let by_name= document.getElementsByName("fullName");
// // console.log(by_name);


// // What classes are present in the classList of the element with the ID "main-heading"? (classList)

// let class_list = document.getElementById('main-heading').classList;

// // console.log(class_list);

// // Add the class "highlight" to the element with the ID "main-heading".
// // What classes are present now? (classList.add)

// let class_list_add = document.getElementById('main-heading')
// class_list_add.classList.add("highlight");

// // console.log(class_list_add);


// // console.log(document.getElementById("main-heading").classList);

// // 14. Remove the class "highlight" from the element with the ID "main-heading"
// // What classes are present now? (**`classList.remove`**)

// let class_remove = document.getElementById('main-heading');
// class_remove.classList.remove("highlight");


// // console.log(document.getElementById("main-heading").classList);


// // Toggle the class "active" on the element with the class "inner-box" inside the element with the ID "container". 
// // What classes are present on the "inner-box" element? (classList.toggle)

// let Tgl= document.getElementById("container").classList.toggle("active");

// // console.log(Tgl);

// // console.log(document.getElementById("container").classList);


// // Does the element with the ID "name" have the class "input-field"? Print true or false. (classList.contains)

// let id_name= document.getElementById("name").classList.contains("input-field");

// // console.log(id_name);


// // What is the background color of the element with the ID "main-heading"? (style.background-color)


// // console.log(document.getElementById("main-heading").style.backgroundColor);

// // 18. Does the element with the class "list" contain an **`<li>`** element with the text "Item 2"? 
// // Print **`true`** or **`false`**. (**`matches`**)

// //skip

// // Does the element with the class "content" match a <div> tag? Print true or false. (matches)


// // console.log((document.getElementsByClassName("content")[0]).matches('div'));

// // let contains= documen



// // What is the nearest ancestor of the element with the class "inner-box" that has the ID "container"? (closest)

// // console.log((document.getElementsByClassName('inner-box')[0]).closest('#container'));

// // Print the first child element of the <body> element. (document.body)



// // console.log(document.body.firstElementChild);

// // Print the number of child elements within the <body> element. (document.body.children)

// // console.log(document.body.childeren);

// // What is the tag name of the first child element of the <body> element? (document.body.firstChild.tagName)

// let tag_name= document.body.firstElementChild.tagName;

// // console.log(tag_name);

// //25. Print the **`innerHTML`** of the element with the class "content". (**`innerHTML`**)

// let innHTML= document.getElementsByClassName("content")[0].innerHTML;

// // console.log(innHTML);

// //26. Print the **`innerText`** of the element with the class "content". (**`innerText`**)

// let innText= document.getElementsByClassName('content')[0].innerText;

// // console.log(innText);

// //27. Get the value of the "type" attribute of the input element with the ID "name". (**`getAttribute()`**)

// let get_elem= document.getElementById("name").getAttribute('type');

// // console.log(get_elem);

// //28. Set the "placeholder" attribute of the input element with the ID "name" to "Enter your full name". (**`setAttribute()`**)

// let place_holder = document.getElementById('name').setAttribute('placeholder',"Enter your full name");



// //29. Does the input element with the ID "name" have the "placeholder" attribute? Print **`true`** or **`false`**. (**`hasAttribute()`**)

// let check_ph = document.getElementById('name').hasAttribute('placeholder');

// // console.log(check_ph);

// //30. Remove the "value" attribute from the input element with the ID "name". (**`removeAttribute()`**)

// let remove_value= document.getElementById('name').removeAttribute("value");


// // 31. Print the total number of attributes present in the element with the ID "main-heading". (**`attributes()`**)

// let checkElm= document.getElementById('main-heading').attributes;

// // console.log(checkElm);


// // 32. Create a new **`<div>`** element using the **`document.createElement`** method. Print the created element. 
// // (**`document.createElement`**)


// let creatediv= document.createElement('div');
// console.log(creatediv);
// // document.body.append(creatediv)


// // 33. Create a new text node with the content "This is a new text node.
// // " using the **`document.createTextNode`** method. Print the created text node. (**`document.createTextNode`**)

//  let text_node= document.createTextNode("this is a new text");
//  creatediv.append(text_node)

// // console.log(text_node, creatediv);

// // 34. Append the created text node to the element with the ID "main-heading". Print the updated element. (**`append`**)

// // let append_node= document.getElementById("main-heading")
// // // console.log(append_node)
// // let apend_2=append_node.append(text_node);
// // // console.log(append_node);

// // 35. Prepend the created **`<div>`** element to the element with the class "content". Print the updated element. (**`prepend`**)



// // 36. Replace the element with the ID "main-heading" with the created text node. Print the updated element. (**`replaceWith`**)

// // let rep_elem= document.getElementById("main_heading");

// // let elem1= rep_elem.replaceWith(text_node);

// // console.log(elem1);


// // 37. Insert the created **`<div>`** element before the element with the class "inner-box". 
// // Print the updated parent element. (**`before`**)

// // const before1= document.getElementsByClassName("inner_box")[0];
// // const insert1= before1.before(creatediv, "hello..." );

// // console.log(insert1);



// // 38. Insert the created **`<div>`** element after the element with the class "inner-box". Print the updated parent element. (**`after`**)


// // 39. Print the **`offsetHeight`** and **`offsetWidth`** of the element with the class "content". 
//(**`offsetHeight`** / **`offsetWidth`**)

// let hei_width= document.getElementsByClassName('content')[0];

// let result_h= hei_width.offsetHeight;
// let result_w= hei_width.offsetWidth;

// console.log(result_h);
// console.log(result_w);




// // 40. Print the **`clientHeight`** and **`clientWidth`** of the element with the class "content". 
// //(**`clientHeight`** / **`clientWidth`**)



// let hei_width= document.getElementsByClassName('content')[0];

// let result_h= hei_width.clientHeight;
// let result_w= hei_width.clientWidth;

// console.log(result_h);
// console.log(result_w);


// // 41. Print the **`scrollHeight`** and **`scrollWidth`** of the element with the class "content". 
// //(**`scrollHeight`** / **`scrollWidth`**)

// let hei_width= document.getElementsByClassName('content')[0];

// let result_h= hei_width.scrollHeight;
// let result_w= hei_width.scrollWidth;

// console.log(result_h);
// console.log(result_w);


// // 42. Print the **`innerHeight`** and **`innerWidth`** of the window. (**`innerHeight`** / **`innerWidth`**)

// let hei_width= document.getElementsByClassName('content')[0];

// let result_h= window.innerHeight;
// let result_w= window.innerWidth;

// console.log(result_h);
// console.log(result_w);


// // 43. Print the **`outerHeight`** and **`outerWidth`** of the window. (**`outerHeight`** / **`outerWidth`**)

// let result_h= window.outerHeight;
// let result_w= window.outerWidth;

// console.log(result_h);
// console.log(result_w);



// // 44. Change the text content of the **`<h1>`** element with the ID "main-heading" to "Hello, DOM!".


// let change1= document.getElementById('main-heading')
// let text_change= change1.innerHTML= "hello, dom"

// console.log(text_change);


// // 45. Change the value of the input element with the ID "name" to "Jane Smith".



// // 46. Add a new **`<li>`** element to the **`<ul>`** element with class "list" containing the text "Item 4".
// // 47. Change the text content of the **`<p>`** element within the **`<div>`** with class "content" to "Updated paragraph text".
// // 48. Change the background color of the **`<div>`** element with ID "container" to blue.
// // 49. Remove the class "inner-box" from the **`<div>`** element with class "inner-box".
// // 50. Clone the **`<div>`** element with ID "container" and append it to the body.
// // 51. Wrap the contents of the **`<div>`** with ID "container" in a new **`<div>`** with class "wrapper".
// // 52. Remove the first **`<li>`** element from the **`<ul>`** with class "list".
// // 53. Add the class "highlight" to the **`<p>`** element within the **`<div>`** with class "content".
// // 54. Change the type of the input element with ID "name" to "email".
// // 55. Replace the text content of the **`<li>`** element with "Item 2" to "Updated Item 2".
// // 56. Change the value of the input element with ID "name" to an empty string.
// // 57. Remove the entire **`<form>`** element from the DOM.
// // 58. Add an event listener to the **`<h1>`** element with ID "main-heading" that logs a message when clicked.

// function popupmsg(){
//     aletr("hello!");
// }

// let elem= document.getElementById("main-heading").addEventListener('click', popupmsg);

// console.log(elem);

// // 59. Change the font size of the **`<p>`** element within the **`<div>`** with class "content" to 18px.

// let change_element= document.getElementsByClassName('content')[0].getElementsByTagName('p')[0].style.fontSize="18px"


// // 60. Remove the **`<ul>`** element with class "list" from the DOM.

// let rem= document.getElementsByClassName('list')[0].remove()




// // 61. Create a new **`<div>`** element, give it a class of "new-div", and append it to the body.

// let new_div1= document.createElement('div')

// new_div1.className='new_div1'

// document.body.append(new_div1, "hiiiii");


// // 62. Append a new **`<p>`** element with the text "New paragraph" to the **`<div>`** with class "inner-box".


let aad_P= document.getElementsByClassName('inner-box')[0];
let p_tag= document.createElement('p');
p_tag.textContent = "New paragraph";

aad_P.appendChild(p_tag);

console.log(p_tag);






