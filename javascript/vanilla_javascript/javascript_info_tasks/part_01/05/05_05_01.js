// Translate border-left-width to borderLeftWidth

function camelize(str) {
    return str
        .split('-')
        .map((word, index, array) =>
            index === 0 || (index === array.length - 1 && word === '') ? 
            word : word[0].toUpperCase() + word.slice(1)
            )
        .join('');
}