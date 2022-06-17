// Show a weekday

function getWeekDay(date) {
    const weekday = {
        0: 'SU',
        1: 'MO', 
        2: 'TU',
        3: 'WE', 
        4: 'TH',
        5: 'FR',
        6: 'SA',
    }

    return weekday[date.getDay()];
}