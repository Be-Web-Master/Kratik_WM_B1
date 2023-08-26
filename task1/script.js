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


const table_1 = {
    header: [{
        element:'th',
        columneName: 'a',
        order:1,
        sort: null
        
    }],
    body:[{
        element:'th',
        rowName: 'a',
        order:1,
        sort: null
    }
    ]
};

const populateUi = () =>{
    for(let i = 0; i< )
}




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
    // console.log(createInputBox)
    return createInputBox;

}


const createcolumns = () => {
    const createserach= document.createElement('input');
    createserach.setAttribute('type','search')
    return createserach ;
}