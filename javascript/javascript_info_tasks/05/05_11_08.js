// Format the relative date

function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;

    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    if (diffSec < 1) {
        return 'right now';
      } else if (diffMin < 1) {
        return `${diffSec} sec. ago`
      } else if (diffHour < 1) {
        return `${diffMin} min. ago`
      } else {
        return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
      }
}

// function formatDate(date) {
//     let diff = new Date() - date;
  
//     if (diff < 1000) {
//       return 'right now';
//     }
  
//     let sec = Math.floor(diff / 1000);
  
//     if (sec < 60) {
//       return sec + ' sec. ago';
//     }
  
//     let min = Math.floor(diff / 60000);
//     if (min < 60) {
//       return min + ' min. ago';
//     }
  
//     let d = date;
//     d = [
//       '0' + d.getDate(),
//       '0' + (d.getMonth() + 1),
//       '' + d.getFullYear(),
//       '0' + d.getHours(),
//       '0' + d.getMinutes()
//     ].map(component => component.slice(-2));
  
//     return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
// }