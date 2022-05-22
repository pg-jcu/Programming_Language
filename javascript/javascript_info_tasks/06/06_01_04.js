// Output a single-linked list

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

function printList(list) {
    for (let v of Object.values(list)) {
        if (v === null) break;

        if (isFinite(v)) {
            console.log(v);
        } else {
            printList(v);
        }
    }
}

// Loop-based solution
// function printList(list) {
//     let temp = list;

//     while (temp) {
//         console.log(temp.value);
//         temp = temp.next;
//     }
// }

// Recursive solution
// function printList(list) {
//     console.log(list.value);

//     if (list.next) {
//         printList(list.next);
//     }
// }

printList(list);