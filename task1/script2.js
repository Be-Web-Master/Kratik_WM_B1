const table = document.getElementById('mainTable');
const tableHead = document.getElementById('tableHead');
const tableBody = document.getElementById('tableBody');
const columnbutton = document.getElementById('columnbutton');
const rowbutton = document.getElementById('rowbutton');
const tablecolumn = document.getElementById("tablecolumn")
// const tablerow = document.getElementById('tablerow');

// createColum.addEventListener('click' ,()=>{
//     const aa = document.createElement('th')
//     aa.innerText='hh'
//     createColum.append(aa)
// })


const tableState = {
    header:[],
    body:[]
};

// const hearedObj={
//     elmentType:'th',
//     couumnName:'',
//     columnSeq: 0,
//     sort:'',
// };

// {
//     elementType: '';
//     rwNumbe 
// }



// create function addNewClm 
// create object  { 
//     elmentType:'th',
//     couumnName:'',
//     columnSeq: 0,
//     sort:'',
//  }


// tableState.header.push(object)
// populateUi()

// end function 




// const populateUi = () =>{
//     table.header.map((data)=>{
//         const th =document.createElement(data.elementType);
//         th.innerText = data.columnName;
//         tableHead.appendChild(th);
//         console.log(data.columnName);
//     })

//     table.body.map((data)=>{
//         const th =document.createElement(data.elementType);
//         td.innerText = data.rowName;
//         tableHead.appendChild(td);
//         console.log(data.rowName);
//     })
// };











const addColumn = () => {
    const newColumnHead = document.createElement('th');
    // newColumnHead.innerText = 'Column'
    newColumnHead.append(createcolumns())
    tableHead.append(newColumnHead);
    console.log(table);
    // createhead.innerText = 'col'
    if (tableBody.childElementCount) {

        //let i = 0; i < tableBody.children.length; i++
        for (const elem of tableBody.children) {
            const columnData = document.createElement('td')
            // columnData.innerText = 'add by col'
            // columnData.append(createcolumns())
            elem.appendChild(columnData)

        }
    }
}


const addrows = () => {
    const createrow = document.createElement('tr');
    tableBody.append(createrow);
    // console.log(createrow);
    console.log(tableHead.children.length);


    for (let i = 0; i < tableHead.children.length; i++) {

        const td = document.createElement('td');
        td.appendChild(createrows());
        createrow.appendChild(td);
        // td.innerText = 'row';
       
    }

}


const createrows= () =>{
    const createInputBox= document.createElement('input');
    createInputBox.setAttribute('type', 'text')
    createInputBox.setAttribute('placeholder', "rows")
    // console.log(createInputBox)
    return createInputBox;

}


const createcolumns = () => {
    const createserach= document.createElement('input');
    createserach.setAttribute('type','search')
    createserach.setAttribute('placeholder','columns')
    return createserach ;
}