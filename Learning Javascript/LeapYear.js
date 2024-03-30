function isLeapYear(year){
    if((year % 400===0)|| ((year% 4 ===0) && (year%100 !==0))){
        console.log("This year is a Leap Year");
    }
    else{
        console.log("This year is not a Leap Year")
    };
};

isLeapYear(2016);