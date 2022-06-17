// Output a single-linked list in the reverse order
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

// Using a loop
function printReverseList(list) {
    let temp = list;
    let arr = [];

    while (temp) {
        arr.push(temp.value)
        temp = temp.next;
    }

    for (let i = arr.length - 1; 0 <= i; i--) {
        console.log(arr[i]);
    }
}

// Using a recursion
// function printReverseList(list) {

//     if (list.next) {
//         printReverseList(list.next);
//     }

//     console.log(list.value);
// }

printReverseList(list);