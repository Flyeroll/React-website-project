
let daysArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35]

weeksDayArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

monthArray= [
    {name:2022,
    monthInfo: [
        {monthName:"January", firstDay:weeksDayArray[5], lastDay:'', amountOfDays:31},
        {monthName:"February", firstDay:"", lastDay:'', amountOfDays:28},
        {monthName:"March", firstDay:"", lastDay:'', amountOfDays:31},
        {monthName:"April", firstDay:"", lastDay:'', amountOfDays:30},
        {monthName:"May", firstDay:"", lastDay:'', amountOfDays:31},
        {monthName:"June", firstDay:"", lastDay:'', amountOfDays:30},
        {monthName:"July", firstDay:"", lastDay:'', amountOfDays:31},
        {monthName:"August", firstDay:"", lastDay:'', amountOfDays:31},
        {monthName:"September", firstDay:"", lastDay:'', amountOfDays:30},
        {monthName:"October", firstDay:"", lastDay:'', amountOfDays:31},
        {monthName:"November", firstDay:"", lastDay:'', amountOfDays:30},
        {monthName:"December", firstDay:"", lastDay:'', amountOfDays:31},
    ]},
    {name:2023,
        monthInfo: [
            {monthName:"January", firstDay:weeksDayArray[6], lastDay:'', amountOfDays:31},
            {monthName:"February", firstDay:"", lastDay:'', amountOfDays:28},
            {monthName:"March", firstDay:"", lastDay:'', amountOfDays:31},
            {monthName:"April", firstDay:"", lastDay:'', amountOfDays:30},
            {monthName:"May", firstDay:"", lastDay:'', amountOfDays:31},
            {monthName:"June", firstDay:"", lastDay:'', amountOfDays:30},
            {monthName:"July", firstDay:"", lastDay:'', amountOfDays:31},
            {monthName:"August", firstDay:"", lastDay:'', amountOfDays:31},
            {monthName:"September", firstDay:"", lastDay:'', amountOfDays:30},
            {monthName:"October", firstDay:"", lastDay:'', amountOfDays:31},
            {monthName:"November", firstDay:"", lastDay:'', amountOfDays:30},
            {monthName:"December", firstDay:"", lastDay:'', amountOfDays:31},
        ]},
        {name:2024,
            monthInfo: [
                {monthName:"January", firstDay:weeksDayArray[0], lastDay:'', amountOfDays:31},
                {monthName:"February", firstDay:"", lastDay:'', amountOfDays:29},
                {monthName:"March", firstDay:"", lastDay:'', amountOfDays:31},
                {monthName:"April", firstDay:"", lastDay:'', amountOfDays:30},
                {monthName:"May", firstDay:"", lastDay:'', amountOfDays:31},
                {monthName:"June", firstDay:"", lastDay:'', amountOfDays:30},
                {monthName:"July", firstDay:"", lastDay:'', amountOfDays:31},
                {monthName:"August", firstDay:"", lastDay:'', amountOfDays:31},
                {monthName:"September", firstDay:"", lastDay:'', amountOfDays:30},
                {monthName:"October", firstDay:"", lastDay:'', amountOfDays:31},
                {monthName:"November", firstDay:"", lastDay:'', amountOfDays:30},
                {monthName:"December", firstDay:"", lastDay:'', amountOfDays:31},
            ]},
]



monthArray.map((year) => {

    //Функция переходных значений для дней недели (аргументы: текущий индекс + необходимая величина изменения)
    function refreshWeeksDay(index, increment) {
        let newWeekdDay = index
        if(index === 0 & increment < 0) {
            console.log("1 path");
            newWeekdDay = 6
        } else if (index === 6 & increment === 1) {
            console.log("2 path");
            newWeekdDay = 0
        } else if (index === 6 & increment === 2) {
            console.log("3 path");
            newWeekdDay = 1
        } else {
            console.log("3 path");
            newWeekdDay += increment
            if(newWeekdDay === 7){
                newWeekdDay = 0
            } else if (newWeekdDay === 8) {
                newWeekdDay = 1
            }
        }
        return newWeekdDay
    }
    
    let newYear = year

    for(let i = 0; i < 12; i++) {
        let newMonthInfo
        let increment

        if(i === 0) {
            if(year.monthInfo[i].amountOfDays === 28){
                newYear.monthInfo[i].lastDay = weeksDayArray[refreshWeeksDay(weeksDayArray.indexOf(year.monthInfo[i].firstDay), -1)]
            } else if(year.monthInfo[i].amountOfDays === 29){
                newYear.monthInfo[i].lastDay = weeksDayArray[refreshWeeksDay(weeksDayArray.indexOf(year.monthInfo[i].firstDay), 0)]
            } else if(year.monthInfo[i].amountOfDays === 30) {
                newYear.monthInfo[i].lastDay = weeksDayArray[refreshWeeksDay(weeksDayArray.indexOf(year.monthInfo[i].firstDay), 1)]
            } else if(year.monthInfo[i].amountOfDays === 31) {
                newYear.monthInfo[i].lastDay = weeksDayArray[refreshWeeksDay(weeksDayArray.indexOf(year.monthInfo[i].firstDay), 2)]
            }
        } else {
            //calc first day for current month
            if(year.monthInfo[i].amountOfDays === 28){
                newYear.monthInfo[i].firstDay = weeksDayArray[refreshWeeksDay(weeksDayArray.indexOf(year.monthInfo[i - 1].lastDay), 1)]
                newYear.monthInfo[i].lastDay = weeksDayArray[refreshWeeksDay(weeksDayArray.indexOf(year.monthInfo[i].firstDay), -1)]
            } else if(year.monthInfo[i].amountOfDays === 29){
                newYear.monthInfo[i].firstDay = weeksDayArray[refreshWeeksDay(weeksDayArray.indexOf(year.monthInfo[i - 1].lastDay), 1)]
                newYear.monthInfo[i].lastDay = weeksDayArray[refreshWeeksDay(weeksDayArray.indexOf(year.monthInfo[i].firstDay), 0)]
            } else if(year.monthInfo[i].amountOfDays === 30) {
                newYear.monthInfo[i].firstDay = weeksDayArray[refreshWeeksDay(weeksDayArray.indexOf(year.monthInfo[i - 1].lastDay), 1)]
                newYear.monthInfo[i].lastDay = weeksDayArray[refreshWeeksDay(weeksDayArray.indexOf(year.monthInfo[i].firstDay), 1)]
            } else if(year.monthInfo[i].amountOfDays === 31) {
                newYear.monthInfo[i].firstDay = weeksDayArray[refreshWeeksDay(weeksDayArray.indexOf(year.monthInfo[i - 1].lastDay), 1)]
                newYear.monthInfo[i].lastDay = weeksDayArray[refreshWeeksDay(weeksDayArray.indexOf(year.monthInfo[i].firstDay), 2)]
            }

            //calc last day for current month

        }
    }
    

    return newYear
})


// console.log(weeksDayArray[refreshWeeksDay(weeksDayArray.indexOf(monthArray[0].monthInfo[0].firstDay), -1)]);
// console.log(monthArray);

daysArray.map((elem) => {

})


