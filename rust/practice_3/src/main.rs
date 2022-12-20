fn main() {
    println!("Practice 3.1");
    practice3_1();
    println!("---------------------------");

    println!("Practice 3.2");
    practice3_2();
    println!("---------------------------");

    println!("Practice 3.3");
    println!("practice3_3 return: {}", practice3_3(3));
    println!("---------------------------");

    println!("Practice 3.5");
    practice3_5(5);
    println!("---------------------------");
}

fn practice3_1() {
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
}

fn practice3_2() {
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
}

fn practice3_3(x: i32) -> i32 {
    println!("Param x: {}", x);

    let y = {
        let z = 3;
        z + 1
    };

    println!("The value of y is: {}", y);

    5
}

fn practice3_5(number: i32) {
    if number > 0 {
        println!("number > 0");
    } else if number < 0 {
        println!("number < 0");
    } else {
        println!("number == 0");
    }

    let even_or_odd = if number % 2 == 0 {
        "even"
    } else {
        "odd"
    };

    println!("number is {}", even_or_odd);

    loop {
        println!("loop");
        break;
    }

    let mut tmp = number;
    while tmp < 10 {
        println!("while number count: {}", tmp);

        tmp += 1;
    }

    for num in (1..4).rev() {
        println!("for range reverse: {}", num);
    }
}