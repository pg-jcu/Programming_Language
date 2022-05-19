// How many seconds have passed today?

function getSecondsToday() {
    let now = new Date();
    let today = new Date();

    return Math.round((now - today.setHours(0, 0, 0, 0)) / 1000);
}

// function getSecondsToday() {
//     let now = new Date();
  
//     let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
//     let diff = now - today;
//     return Math.round(diff / 1000);
// }