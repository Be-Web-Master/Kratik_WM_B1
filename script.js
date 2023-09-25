// 1. Use **`getElementById`** to target the element with the ID "main-heading" and print it to
// the console. (**`getElementById`**)

// let get_id= document.getElementById("main-heading");
// console.log(get_id);


// 2. Utilize **`elem.type`** to target the input element with the ID "name" and 
//print its type to the console. (**`elem.type`**)

// let get_id= document.getElementById("name").type;
// console.log(get_id);

// 3. Make use of **`elem.name`** to target the input element with the ID "name" and 
// print its name attribute to the console. (**`elem.name`**)

// let get_id= document.getElementById("name").name;
// console.log(get_id);    

// 4. Using **`elem.id`**, target the input element with the ID "name" and print its ID attribute to the console. (**`elem.id`**)


// let get_id= document.getElementById("name").id;
// console.log(get_id);   

// 5. With the help of **`elem.value`**, target the input element with the ID "name" and print its value to the console. (**`elem.value`**)

// let get_id= document.getElementById("name").value;
// console.log(get_id);

// 6. Using **`querySelectorAll`**, target all **`<li>`** elements within the **`<ul>`** with class "list" and print them to the console.
// (**`querySelectorAll`**)

// let querySelector= document.querySelectorAll(".list")[0];
// let elem= querySelector.innerHTML
// console.log(elem);  



// 7. Leveraging **`querySelector`**, target the **`<p>`** element within the **`<div>`** with class "content" and 
//print it to the console. (**`querySelector`**)

// let querySelector= document.querySelector('.content').children[0];
// // let elem= querySelector.children[0]
// console.log(querySelector);

// let querySelector1 = document.querySelector(".content").children[0];

// console.log(querySelector1.children[0]);

// 8. Utilizing **`document.body.children`**, target all child elements of the **`<body>`** element and 
// print them to the console. (**`document.body.children`**)

// let allChildrens = document.body.children;
// console.log(allChildrens);


// console.log(document.body.children);


// 9. Using **`getElementsByTagName`**, target the first **`<li>`** element within the **`<ul>`** with class "list" and 
// print it to the console. (**`getElementsByTagName`**)

// let nameTag= document.getElementsByTagName('li')[0];

// console.log(nameTag);

// 10. Make use of **`getElementsByClassName`**, target all elements with the class "content" and 
// print them to the console. (**`getElementsByClassName`**)

// let className= document.getElementsByClassName("content")[0].innerHTML
// console.log(className);

// let cn= document.getElementsByClassName("content");

// console.log(cn[0].innerHTML);



// 11. Using **`getElementsByName`**, target the input element with the name "fullName" and print it to the console.
// (**`getElementsByName`**)

// let elementName= document.getElementsByName('fullName');
// console.log(elementName);

// console.log(document.getElementsByName("fullName")[0].value);



// 12. What classes are present in the **`classList`** of the element with the ID "main-heading"? (**`classList`**)

// let classList1= document.getElementById('main-heading').classList;
// console.log(classList1);

// console.log(document.getElementById("main-heading").classList);

// 13. Add the class "highlight" to the element with the ID "main-heading". What classes are present now? (**`classList.add`**)

// let addClass= document.getElementById('main-heading').classList.add("highlight");
// console.log(addClass);

// let addclass= document.getElementById('main-heading').classList.add("heighlight");

// 14. Remove the class "highlight" from the element with the ID "main-heading". What classes are present now? (**`classList.remove`**)

// let remove_Class= document.getElementById('main-heading').classList.remove('highlight');

// let remove_class = document.getElementById("main-heading").classList.remove()



// 15. Toggle the class "active" on the element with the class "inner-box" inside the element with the ID "container". 
// What classes are present on the "inner-box" element? (**`classList.toggle`**)

// let togl= document.getElementsByClassName('inner-box')[0];
// let togl1=togl.classList.toggle('active');

// console.log(togl.classList);

// 16. Does the element with the ID "name" have the class "input-field"? Print **`true`** or **`false`**. 
// (**`classList.contains`**)

// let contain= document.getElementById('name').classList.contains('input-field');

// console.log(contain);


// 17. What is the background color of the element with the ID "main-heading"? (**`style.background-color`**)

// let checkBgColor= document.getElementById('main-heading').style.backgroundColor;

// console.log(checkBgColor);

// 18. Does the element with the class "list" contain an **`<li>`** element with the id "item2"? 
//Print **`true`** or **`false`**. (**`matches`**)

//skip for now

// 19. Does the element with the class "content" match a **`<div>`** tag? Print **`true`** or **`false`**. (**`matches`**)

// let mat= document.getElementsByClassName('content')[0].matches('div');

// console.log(mat);

// 20. What is the nearest ancestor of the element with the class "inner-box" that has the ID "container"? (**`closest`**)

// let ancestor1= document.getElementsByClassName('inner-box')[0].closest('#container');

// console.log(ancestor1);


// 21. Print the first child element of the **`<body>`** element. (**`document.body`**)
// let firstChild1= document.body.firstChild
// console.log(firstChild1);

// 22. Print the number of child elements within the **`<body>`** element. (**`document.body.children`**)

// let firstChild1= document.body.children
// console.log(firstChild1);

// 23. What is the tag name of the first child element of the **`<body>`** element? (**`document.body.firstChild.tagName`**)

// let firstChildTag =document.body.firstChild.tagName;
// console.log(document.body.firstChild.tagName);

// 24. What is the class name of the first child element of the **`<body>`** element? (**`document.body.firstChild.className`**)
// console.log(document.body.firstChild.className);

// 25. Print the **`innerHTML`** of the element with the class "content". (**`innerHTML`**)

// let innhtml= document.getElementsByClassName("content")[0].innerHTML;

// console.log(innhtml);

// 26. Print the **`innerText`** of the element with the class "content". (**`innerText`**)

// let innhtml= document.getElementsByClassName("content")[0].innerText;
// console.log(innhtml);

// 27. Get the value of the "type" attribute of the input element with the ID "name". (**`getAttribute()`**)
// let type= document.getElementById('name').getAttribute('type');

// console.log(type);

// 28. Set the "placeholder" attribute of the input element with the ID "name" to "Enter your full name". (**`setAttribute()`**)
// let placeholder= document.getElementById('name').setAttribute('placeholder', "fullname");
// console.log(placeholder);

// 29. Does the input element with the ID "name" have the "placeholder" attribute? Print **`true`** or **`false`**. (**`hasAttribute()`**)

// let checkPlaceholder= document.getElementById('name').hasAttribute('placeholder');
// console.log(checkPlaceholder);

// 30. Remove the "value" attribute from the input element with the ID "name". (**`removeAttribute()`**)

// let removeValue= document.getElementById('name').removeAttribute('value');
// console.log(removeValue);

// 31. Print the total number of attributes present in the element with the ID "main-heading". (**`attributes()`**)

// let att= document.getElementById('main-heading').attributes;
// console.log(att);

// 32. Create a new **`<div>`** element using the **`document.createElement`** method. Print the created element. 
// (**`document.createElement`**)

// let create_div = document.createElement('div');
// console.log(create_div);

// 33. Create a new text node with the content "This is a new text node." using the **`document.createTextNode`** method. 
// Print the created text node. (**`document.createTextNode`**)


// let create_node= document.createTextNode(' "This is a new text node." ')

// console.log(create_node);

// 34. Append the created text node to the element with the ID "main-heading". 
// Print the updated element. (**`append`**)

// let append1= (document.getElementById("main-heading")).append(create_node);


// 35. Prepend the created **`<div>`** element to the element with the class "content". 
// Print the updated element. (**`prepend`**)

// let addelement= create_div.textContent = "i am the creted div";

// let pre= document.getElementsByClassName('content')[0].prepend(create_div);


// 36. Replace the element with the ID "main-heading" with the created text node.
// Print the updated element. (**`replaceWith`**)

// let Text1 = document.getElementById("main-heading");
// let replaceWith = Text1.replaceWith(create_node);

// 37. Insert the created **`<div>`** element before the element with the class "inner-box". 
// Print the updated parent element. (**`before`**)

// let addelement= create_div.textContent = "'i am the creted div'";

// let insert_div= document.getElementsByClassName("inner-box")[0].before(create_div)


// 38. Insert the created **`<div>`** element after the element with the class "inner-box".
// Print the updated parent element. (**`after`**)

// let create_div = document.createElement('div');
// let addelement= create_div.textContent = "'i am the creted div'";

// let afterClassInsert= document.getElementsByClassName("inner-box")[0].after(create_div);;


// 39. Print the **`offsetHeight`** and **`offsetWidth`** of the element with the class "content". 
//(**`offsetHeight`** / **`offsetWidth`**)


// let content1= document.getElementsByClassName('content')[0];
// console.log(content1.offsetHeight);
// console.log(content1.offsetWidth);


// 40. Print the **`clientHeight`** and **`clientWidth`** of the element with the class "content". 
//(**`clientHeight`** / **`clientWidth`**)

// let content1= document.getElementsByClassName('content')[0];
// console.log(content1.clientHeight);
// console.log(content1.clientWidth);

// 41. Print the **`scrollHeight`** and **`scrollWidth`** of the element with the class "content".
// (**`scrollHeight`** / **`scrollWidth`**)


// let content1= document.getElementsByClassName('content')[0];
// console.log(content1.scrollHeight);
// console.log(content1.scrollWidth);

// 42. Print the **`innerHeight`** and **`innerWidth`** of the window.
// (**`innerHeight`** / **`innerWidth`**)


// let content1= window
// console.log(content1.innerHeight);
// console.log(content1.innerWidth);

// 43. Print the **`outerHeight`** and **`outerWidth`** of the window.
//(**`outerHeight`** / **`outerWidth`**)

//  let content1= window
// console.log(content1.outerHeight);
// console.log(content1.outerWidth);


// 44. Change the text content of the **`<h1>`** element with the ID "main-heading" to "Hello, DOM!".

// let changeHadline= document.getElementById('main-heading').innerHTML = 'Hello, Dom!';


// 45. Change the value of the input element with the ID "name" to "Jane Smith".

// let changeValue = document.getElementById('name').setAttribute('value', 'Jane Smith')


// 46. Add a new **`<li>`** element to the **`<ul>`** element with class "list" containing the text "Item 4".

// let targerElement= document.getElementsByClassName('list')[0];
// let createElem= document.createElement('li')
// let appendLi= targerElement.append(createElem);  
// let addText= document.querySelector('.list').children[3].innerText= 'Item 4'


// 47. Change the text content of the **`<p>`** element within the **`<div>`** 
//with class "content" to "Updated paragraph text".


// let updatedText= document.querySelector('.content').children[0];
// let change= updatedText.innerText= "Update paragraph text";



// 48. Change the background color of the **`<div>`** element with ID "container" to blue.

// let changeBG= document.getElementById("container").style.backgroundColor ='blue'


// 49. Remove the class "inner-box" from the **`<div>`** element with class "inner-box".

//  let remove_Class = document.getElementsByClassName('inner-box')[0].removeAttribute('class')


// 50. Clone the **`<div>`** element with ID "container" and append it to the body.

// let elementExtract =document.getElementById('container');
// let getClone = elementExtract.cloneNode(true);
// let bdy = document.body.appendChild(getClone);
// console.log(bdy);


// 51. Wrap the contents of the **`<div>`** with ID "container" in a new **`<div>`** with class "wrapper".

// let createDiv= document.createElement('div');
// let add_class= createDiv.classList.add("wrapper")
// let append_div = document.body.appendChild(createDiv);
// console.log(createDiv);
// let target_container= document.getElementById('container')

// let target_div= document.getElementsByClassName('wrapper')[0].appendChild(target_container);


// 52. Remove the first **`<li>`** element from the **`<ul>`** with class "list".

// let targetList= document.getElementsByClassName('list')[0];
// let targetElement= document.getElementsByClassName('list')[0].children[0]
// let deleteElement= targetList.removeChild(targetElement);

// 53. Add the class "highlight" to the **`<p>`** element within the **`<div>`** with class "content".

// let targetElement= document.getElementsByClassName('content')[0].children[0]

// let addClass= targetElement.classList.add("Highlight")

// console.log(targetElement.classList);

// 54. Change the type of the input element with ID "name" to "email".

// let targerElement = document.getElementById('name').setAttribute('type', 'email');


// 55. Replace the text content of the **`<li>`** element with "Item 2" to "Updated Item 2".

// let targetElement = document.querySelector('.list').children[1]

// let updateText= targetElement.innerText = "Updated Item 2";


// 56. Change the value of the input element with ID "name" to an empty string.

// let changeToEmply= document.getElementById('name').setAttribute('value', '');


// 57. Remove the entire **`<form>`** element from the DOM.

// let targetForm= document.body.children[1];

// let removeForm=  document.body.removeChild(targetForm);


// 58. Add an event listener to the **`<h1>`** element with ID "main-heading" that logs a message when clicked.

// let targetH1= document.getElementById('main-heading');

// function whenClick(){
//     console.log('Message when Clicked')
// }

// targetH1.addEventListener('click',whenClick);


// 59. Change the font size of the **`<p>`** element within the **`<div>`** with class "content" to 18px.

// let changeFont= (document.getElementsByClassName('content')[0].children[0]).style.fontSize ='18px'


// 60. Remove the **`<ul>`** element with class "list" from the DOM.

// document.body.removeChild(document.getElementsByClassName('list')[0]);

// 61. Create a new **`<div>`** element, give it a class of "new-div", and append it to the body.


// const createDiv= document.createElement('div');
// let addClass= createDiv.classList.add('new-div')
// let addText = createDiv.innerText = "hi I'm that New-Div";
// document.body.append(createDiv);



// 62. Append a new **`<p>`** element with the text "New paragraph" to the **`<div>`** with class "inner-box".


// let createPElement= document.createElement('p')
// let addtext= createPElement.innerText ="New paragraph"
// let appendPTag= document.getElementsByClassName('inner-box')[0].append(createPElement);


let btn = document.querySelector('.save');

// console.log(btn)

btn.addEventListener("click", () => {
    
    if(btn.innerHTML === "save") {
        btn.innerHTML = "hello"
    }
    else{
        btn.innerHTML = "save"
    }
    
});