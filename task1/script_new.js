const columnbutton = document.getElementById("columnbutton");
const rowbutton = document.getElementById("rowbutton");
const mainTable = document.getElementById("mainTable");
const tableHead = document.getElementById("tableHead");
const tableBody = document.getElementById("tableBody");
const clearButton = document.getElementById("clearButton");
// const sortButton = document.getElementById('sortButton');
const ascending = document.getElementById("ascending");
const descending = document.getElementById("descending");
const dropDown = document.getElementById("dropDown");
const sortForm = document.getElementById("sortForm");

const key = "tableState";
const tableState = JSON.parse(localStorage.getItem(key)) ?? {
  header: [],
  body: [],
};

console.log({ tableState });

const createTableUI = (tableData) => {
  const { header, body = [] } = tableData;
  tableHead.innerHTML = "";
  tableBody.innerHTML = "";

  //   For creating table column
  for (let i = 0; i < header.length; i++) {
    const thElement = document.createElement(header[i].elementType);
    const inputElement = createInputElement(
      "headCell",
      header[i],
      header[i].columnNumber
    );
    thElement.append(inputElement);
    tableHead.append(thElement);
  }

  //   Creating table body
  body.forEach((tableRow) => {
    const { elementType, columnDetails, rowNumber } = tableRow;
    const trElement = document.createElement(elementType);

    columnDetails.forEach((cellElement, idx) => {
      const tdElement = document.createElement(cellElement.elementType);
      const inputElement = createInputElement(
        "bodyCell",
        cellElement,
        `${rowNumber}-${cellElement.columnNumber}`
      );
      tdElement.append(inputElement);
      trElement.append(tdElement);
    });

    tableBody.append(trElement);
  });

  localStorage.setItem(key, JSON.stringify(tableState));
};

const createInputElement = (cellType, cellElement, idx) => {
  const elementType = cellType == "headCell" ? "input" : "textarea";
  // console.log({ cellType });
  const inputElement = document.createElement(elementType);
  // inputElement.value = value;
  inputElement.setAttribute("id", idx);
  // console.log({
  //     cellElement, idx
  // });

  if (cellType === "headCell") {
    inputElement.value = cellElement.cellValue;
    inputElement.setAttribute("placeholder", "Column Name");
  } else if (cellType === "bodyCell") {
    inputElement.value = cellElement.cellValue;
    inputElement.setAttribute("placeholder", "Row Data");
  }

  inputElement.setAttribute("type", "text");
  return inputElement;
};

createTableUI(tableState);

// // ---------------------
function addColumn(rowData) {
  tableState.header.push(rowData);
  tableState.body.forEach((columnData, idx) => {
    columnData.columnDetails.push({
      cellValue: "",
      elementType: "td",
      columnNumber: rowData.columnNumber,
      rowNumber: idx,
    });
  });
  createTableUI(tableState);
}
columnbutton.addEventListener("click", () => {
  addColumn({
    elementType: "th",
    columnNumber: tableState.header.length,
    sort: "",
    columnName: "",
  });
});

function addRows() {
  const rowObj = {
    elementType: "tr",
    columnDetails: [],
    rowNumber: tableState.body.length,
  };
  // console.log('hello');

  tableState.body.push(rowObj);

  tableState.header.forEach((headData, idx) => {
    rowObj.columnDetails.push({
      cellValue: "",
      elementType: "td",
      columnNumber: idx,
      rowNumber: tableState.body.length,
    });
  });

  createTableUI(tableState);
}

rowbutton.addEventListener("click", () => {
  addRows();
});

clearButton.addEventListener("click", () => {
  localStorage.clear();
});

tableBody.addEventListener("keyup", (event) => {
  const [rowIndex, columnIndex] = event.target.id.split("-");

  tableState.body[rowIndex].columnDetails[columnIndex].cellValue =
    event.target.value;
  localStorage.setItem(key, JSON.stringify(tableState)); // this code saved data to localStorage
});

tableHead.addEventListener("keyup", (event) => {
  // console.log(event.target.id)
  const [columIndex] = event.target.id;
  tableState.header[columIndex].cellValue = event.target.value;
  localStorage.setItem(key, JSON.stringify(tableState));
});

// ------------------------saturday-end-monday-start--------------------------

function headerValues() {
  for (let i = 0; i < tableState.header.length; i++) {
    const columnValue = tableState.header[i].cellValue;
    // console.log(columnValue);
    const optionTag = document.createElement("option");
    optionTag.innerText = columnValue;
    dropDown.append(optionTag);

    // return columnValue;
  }
}
headerValues();

sortForm.addEventListener("submit", (event) => {
//   event.preventDefault();

  const selectedcolumnName = event.target.dropDown.value;
  const selectingOrder = event.target.sort.value;
  const sortColumnNumber = tableState.header.find(
    (headerObj) => headerObj.cellValue === selectedcolumnName
  ).columnNumber;

  console.log(selectedcolumnName);
  console.log(selectingOrder);
  console.log(sortColumnNumber);

  if (selectingOrder == "ascending") {
    tableState.body.sort((Obj1, Obj2) => {
      if (
        Obj1.columnDetails[sortColumnNumber].cellValue >
        Obj2.columnDetails[sortColumnNumber].cellValue
      )
        return 1;
      else return -1;
    });
  } else {
    tableState.body.sort((Obj1, Obj2) => {
      if (
        Obj1.columnDetails[sortColumnNumber].cellValue >
        Obj2.columnDetails[sortColumnNumber].cellValue
      )
        return -1;
      else return 1;
    });
  }

  localStorage.setItem(key, JSON.stringify(tableState));
});

// const sortOrder = event.target.sort.value
// const columnName = event.target.dropDown.value
// const columnNumber = tableState.header.find(headerObj => headerObj.columnName === columnName).columnNumber
// if (sortOrder == "ascending") {
//     tableState.body.sort((obj1, obj2) => {
//         if (obj1.columnDetails[columnNumber].cellvalue > obj2.cellDetails[columnNumber])
//             return 1;
//         else return -1;

//     })
// }
// else {
//     tableState.body.sort((obj1, obj2) => {
//         if (obj1.columnDetails[columnNumber].cellvalue > obj2.cellDetails[columnNumber])
//             return -1;
//         else return 1;

//     })
// }

//----------------------------------old waste-----------------

// ({
//     elementType: "th",
//     columnNumber: tablestate.header.length,
//     sort: undefined,
//     columnName:"",
//   }

// const addrows = () => {
//     const tablerows = document.createElement('tr');
//     tableBody.append(tablerows);

//     for (let i = 0; i < tableHead.children.length; i++) {
//         const tableData = document.createElement('td');
//         tableData.append(createrows());
//         tablerows.append(tableData);
//     }

// }

// const createcolumns =()=>{
//     const columnInput = document.createElement('input');
//     columnInput.setAttribute('type',"search");
//     columnInput.setAttribute('placeholder', "Enter Column")
//     return columnInput;
// }

// const createrows =()=>{
//     const rowsInput = document.createElement('textarea');
//     rowsInput.setAttribute('placeholder', "Enter rows")
//     return rowsInput;=>
// }
