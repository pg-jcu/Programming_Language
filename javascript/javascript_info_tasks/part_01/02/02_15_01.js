// Is "else" required?

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Did parent allow you?');
    }
}

function checkAge(age) {
    if (age > 18) {
        return true;
    }

    return confirm('Did parent allow you?');
}

// No difference