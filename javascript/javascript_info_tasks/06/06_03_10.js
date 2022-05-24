// Army of functions

function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
        let j = i;
        let shooter = function () {
        console.log(j);
        };
        shooters.push(shooter);
        i++;
    }

    // for (let i = 0; i < 10; i++) {
    //     let shooter = function () {
    //         console.log(i);
    //     };
    //     shooters.push(shooter);
    // }
  
    return shooters;
}
  
let army = makeArmy();

army[0]();
army[1]();
army[2]();