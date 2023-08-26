
for (let i = 0; i< headers.length; i++){
    const thElement= document.createElement(header[i].element);
    thElement.innerText =header[i].columnName;
    tableHead.append(thElement);
}

// cretae table body
tableBody.foreach((tableRow)=>{
    const {elem, columnElems} = tableRow;
    const trElement = document.createElement(elem);
    columnElems.forEach((cellElement)=>{
        const tdElement = document.createElement(cellElement.elemType);

        tdElement.innerText=cellElement.value;
        trElement.append(tdElement)


    })
    tableBody.append(tr);
})