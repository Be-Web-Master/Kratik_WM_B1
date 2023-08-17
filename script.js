const arr=[8, 15, 30, 65];


function calculateTotalTicketPrice(ages) {
    let total= 0;
    let price =0;
    for( const age of ages){
        if( age <= 12){
            price = 5;
            total=total+price
        }
        else if(age>=12 && age<=17){
            price=10;
            total=total+price
        }
        else if( age>=18 && age<=59){
            price=15;
            total=total+price
        }
        else{price =8
            total=total+price
        }

    }

    console.log(total)

}


calculateTotalTicketPrice(arr);