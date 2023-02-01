fn main() {
    println!("Practice 18.1");
    practice_18_1();
    println!("---------------------------");

    println!("Practice 18.2");
    practice_18_2();
    println!("---------------------------");
}

fn practice_18_1() {
    let favorite_color: Option<&str> = None;
    let is_tuesday = false;
    let age: Result<u8, _> = "34".parse();

    if let Some(color) = favorite_color {
        println!("Using your favorite color, {}, as the background", color);
    } else if is_tuesday {
        println!("Tuesday is green day!");
    } else if let Ok(age) = age {
        if age > 30 {
            println!("Using purple as the background color");
        } else {
            println!("Using orange as the background color");
        }
    } else {
        println!("Using blue as the background color");
    }

    let mut stack = Vec::new();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    while let Some(top) = stack.pop() {
        println!("stack: {}", top);
    }

    let v = vec!['a', 'b', 'c'];

    for (index, value) in v.iter().enumerate() {
        println!("{} is at index {}", value, index);
    }

    fn print_coordinates(&(x, y): &(i32, i32)) {
        println!("Current location: ({}, {})", x, y);
    }

    let point = (3, 5);
    print_coordinates(&point);
}

fn practice_18_2() {
    let some_option_value: Option<i32> = Some(5);

    // error: refutable pattern in local binding: `None` not covered
    // let Some(x) = some_option_value;

    if let Some(x) = some_option_value {
        println!("{}", x);
    }

    // irrefutable `if let` pattern
    // if let x = 5 {
    //     println!("{}", x);
    // }
}
