// European weekday

function getLocalDay(date) {
    return date.getDay() !== 0 ? date.getDay() : date.getDay() + 7;
}