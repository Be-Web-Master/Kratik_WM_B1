const studentsMarks = [
    [80, 70, 55],
    [45, 90, 75],
    [70, 60, 65]
];


// console.log(studentsMarks);




const calculateQuizResults =(std_Marks)=>{
    let arr_main=[];
    std_Marks.map((elem) => {
        let total=0;
        elem.map((elem1)=>{
            total=total+elem1
            
        })
        // let arr=[];
        if (total<200){
            arr_main.push([total, 'fail'])

        }
        else{
            arr_main.push([total,"pass"])
        }
        // arr_main.push(total,arr)
    })
    console.log(arr_main)
}

calculateQuizResults(studentsMarks);

