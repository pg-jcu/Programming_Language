// Finally or just the code?

function f() {
    try {
        console.log('start f()');
        return "result";
    } catch (err) {
        console.log(err);
    } finally {
        console.log('cleanup! f()');
    }

    console.log('cleanup here! f()');
}

f();

function g() {
    try {
        console.log('start g()');
        throw new Error("an error g()");
    } catch (err) {
        throw err;
    } finally {
        console.log('cleanup! g()');
    }

    console.log('cleanup here! g()');
}

g();

// The behavior is different if there's a "jump out" of try...catch.