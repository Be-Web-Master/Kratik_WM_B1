// 19. Write a program to check if a given year is a leap year or not.


let yearIs = "2005";

function checkLeapYear(year){
    if ( year % 4 ==0 || year % 400 == 0){
        console.log(`This year is The leap year`)
    }
    else{
        console.log(`This year is not a leap year `)
    }
}

checkLeapYear(yearIs);