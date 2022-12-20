fn main() {
    practice3_1();
    practice3_2();
}

fn practice3_1() {
    println!("Practice 3.1");

    let mut x = 5;
    println!("The value of x is: {}", x);
    x = 6;
    println!("The value of x is: {}", x);

    const MAX_POINTS: u32 = 100_000;
    println!("Max points is: {}", MAX_POINTS);

    let y = 5;
    let y = y + 1;
    let y = y * 2;
    println!("The value of y is: {}", y);

    println!("---------------------------");
}

fn practice3_2() {
    println!("Practice 3.2");

    let x = 2.0;
    let y: f32 = 3.0;
    let f: bool = false;
    let z = 'z';
    println!("x y f z: {} {} {} {}", x, y, f, z);

    let tup: (i32, f64, u8) = (500, 6.4, 1);
    let (i, j, k) = tup;
    println!("i j k: {} {} {}", i, j, k);
    println!("tup.0 tup.1 tup.2: {} {} {}", tup.0, tup.1, tup.2);

    let a = [1, 2, 3];
    println!("a[0] a[1] a[2]: {} {} {}", a[0], a[1], a[2]);

    println!("---------------------------");
}
