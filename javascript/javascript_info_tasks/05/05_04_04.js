// Sum input numbers

function sumInput() {
    let valueArray = [];
    let sum = 0;

    while (true) {
        let value = prompt("A number please?", 0);
        
        if (value === '' || value === null || !isFinite(value)) {
            for (let i of valueArray) {
                sum += i;
            }
            return alert(sum);
        }
        else {
            valueArray.push(+value);
        }  
    } 
}

sumInput();