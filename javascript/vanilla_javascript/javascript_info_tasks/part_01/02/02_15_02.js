// Rewrite the function using '?' or '||'

// Using a question mark operator 
function checkAge(age) {
    return age > 18 ? true : confirm('Did parents allow you?');
}

// Using OR
function checkAge(age) {
    return age > 18 || confirm('Did parents allow you?');
}