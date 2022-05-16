// Last day of month?

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1);
    date.setDate(0);
    // let date = new Date(year, month + 1, 0);

    return date.getDate();
}   

console.log(getLastDayOfMonth(2012, 1));