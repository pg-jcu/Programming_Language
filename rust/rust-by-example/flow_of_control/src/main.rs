fn main() {
    println!("if/else");
    if_else();
    println!("-------------------------");

    println!("loop");
    loop_keyword();
    println!("-------------------------");

    println!("while");
    while_keyword();
    println!("-------------------------");

    println!("for and range");
    for_and_range();
    println!("-------------------------");

    println!("match");
    match_keyword();
    println!("-------------------------");
}

fn if_else() {
    let n = 5;

    if n < 0 {
        print!("{} is negative", n);
    } else if n > 0 {
        print!("{} is positive", n);
    } else {
        print!("{} is zero", n);
    }

    let big_n = 
        if n < 10 && n > -10 {
            println!(", and is a small number, increase ten-fold");
            10 * n
        } else {
            println!(", and is a big number, halve the number");
            n / 2
        };

    println!("{} -> {}", n, big_n);
}

fn loop_keyword() {
    let mut count = 0u32;

    println!("Let's count until infinity!");

    loop {
        count += 1;

        if count == 3 {
            println!("three");

            continue;
        }

        println!("{}", count);

        if count == 5 {
            println!("OK, that's enough");

            break;
        }
    }

    println!("nesting and labels");

    #[allow(unused_labels, unreachable_code)]
    'outer: loop {
        println!("Entered the outer loop");

        'inner: loop {
            println!("Entered the inner loop");

            break 'outer;
        }

        println!("This point will never be reached");
    }

    println!("Exited the outer loop");

    println!("returning from loops");

    let mut count = 0;

    let result = loop {
        count += 1;

        if count == 10 {
            break count * 2;
        }
    };

    println!("result: {}", result);
}

fn while_keyword() {
    let mut n = 1;

    while n < 101 {
        if n % 15 == 0 {
            println!("fizzbuzz");
        } else if n % 3 == 0 {
            println!("fizz");
        } else if n % 5 == 0 {
            println!("buzz");
        } else {
            println!("{}", n);
        }

        n += 1;
    }
}

fn for_and_range() {
    fn fizzbuzz(num: i32) {
        if num % 15 == 0 {
            println!("fizzbuzz");
        } else if num % 3 == 0 {
            println!("fizz");
        } else if num % 5 == 0 {
            println!("buzz");
        } else {
            println!("{}", num);
        }
    }

    for n in 1..51 {
        fizzbuzz(n);
    }

    for n in 51..=100 {
        fizzbuzz(n);
    }

    let names = vec!["Bob", "Frank", "Ferris"];

    for name in names.iter() {
        match name {
            &"Ferris" => println!("There is a rustacean among us!"),
            _ => println!("Hello {}", name),
        }
    }

    println!("names: {:?}", names);

    for name in names.into_iter() { // names.into_iter() ≓ names
        match name {
            "Ferris" => println!("There is a rustacean among us!"),
            _ => println!("Hello {}", name),
        }
    }

    let mut names = vec!["Bob", "Frank", "Ferris"];

    for name in names.iter_mut() {
        *name = match name {
            &mut "Ferris" => "There is a rustacean among us!",
            _ => "Hello",
        }
    }

    println!("names: {:?}", names);
}

fn match_keyword() {
    let number = 13;

    println!("Tell me about {}", number);
    match number {
        1 => println!("One!"),
        2 | 3 | 5 | 7 | 11 => println!("This is a prime"),
        13..=19 => println!("A teen"),
        _ => println!("Ain't special"),
    }

    let boolean = true;
    let binary = match boolean {
        false => 0,
        true => 1,
    };

    println!("{} -> {}", boolean, binary);

    let triple = (0, -2, 3);

    println!("Tell me about {:?}", triple);

    match triple {
        (0, y, z) => println!("First is `0`, `y` is {:?}, and `z` is {:?}", y, z),
        (1, ..) => println!("First is `1` and the rest doesn't matter"),
        (.., 2) => println!("last is `2` and the rest doesn't matter"),
        (3, .., 4) => println!("First is `3`, last is `4`, and the rest doesn't matter"),
        _  => println!("It doesn't matter what they are"),
    }

    let array = [1, -2, 6];

    match array {
        [0, second, third] => println!(
            "array[0] = 0, array[1] = {}, array[2] = {}", 
            second, third
        ),
        [1, _, third] => println!(
            "array[0] = 1, array[2] = {} and array[1] was ignored",
            third
        ),
        [-1, second, ..] => println!(
            "array[0] = -1, array[1] = {} and all the other ones were ignored",
            second
        ),
        [3, second, tail @ ..] => println!(
            "array[0] = 3, array[1] = {} and the other elements were {:?}",
            second, tail
        ),
        [first, middle @ .., last] => println!(
            "array[0] = {}, middle = {:?}, array[2] = {}",
            first, middle, last
        ),
    }

    #[allow(dead_code)]
    enum Color {
        Red,
        Blue,
        Green,
        RGB(u32, u32, u32),
        HSV(u32, u32, u32),
        HSL(u32, u32, u32),
        CMY(u32, u32, u32),
        CMYK(u32, u32, u32, u32),
    }

    let color = Color::RGB(122, 17, 40);

    println!("What color is it?");
    match color {
        Color::Red   => println!("The color is Red!"),
        Color::Blue  => println!("The color is Blue!"),
        Color::Green => println!("The color is Green!"),
        Color::RGB(r, g, b) =>
            println!("Red: {}, green: {}, and blue: {}!", r, g, b),
        Color::HSV(h, s, v) =>
            println!("Hue: {}, saturation: {}, value: {}!", h, s, v),
        Color::HSL(h, s, l) =>
            println!("Hue: {}, saturation: {}, lightness: {}!", h, s, l),
        Color::CMY(c, m, y) =>
            println!("Cyan: {}, magenta: {}, yellow: {}!", c, m, y),
        Color::CMYK(c, m, y, k) =>
            println!("Cyan: {}, magenta: {}, yellow: {}, key (black): {}!",
                c, m, y, k),
    }

    let reference = &4;

    match reference {
        &val => println!("Got a value vai destructuring: {}", val),
    }

    match *reference {
        val => println!("Got a value via dereferencing: {}", val),
    }

    let _not_a_reference = 3;
    let ref _is_a_reference = 3;

    let value = 5;
    let mut mut_value = 6;

    match value {
        ref r => println!("Got a reference to a value: {:?}", r),
    }

    match mut_value {
        ref mut m => {
            *m += 10;
            println!("We added 10. `mut_value`: {:?}", m);
        },
    }

    struct Foo {
        x: (u32, u32),
        y: u32,
    }

    let foo = Foo { x: (1, 2), y: 3 };

    match foo {
        Foo { x: (1, b), y } => println!("First of x is 1, b = {},  y = {} ", b, y),
        Foo { y: 2, x: i } => println!("y is 2, i = {:?}", i),
        Foo { y, .. } => println!("y = {}, we don't care about x", y),
    }
}
