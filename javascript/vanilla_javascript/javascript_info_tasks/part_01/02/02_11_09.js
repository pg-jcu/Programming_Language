// Check the login

let loginId = prompt("Who's there?", '');

if (loginId === 'Admin') {
    let loginPassword = prompt("Password?", '');

    if (loginPassword === 'TheMaster') {
        alert('Welcome!');
    } else if (loginPassword === null || loginPassword === '') {
        alert('Canceled');
    } else {
        alert('Wrong password');
    }
} else if (loginId === null || loginId === '') {
    alert('Canceled');
} else {
    alert("I don't know you");
}