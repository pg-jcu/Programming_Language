fn main() {
    println!("Practice 6.1");
    practice_6_1();
    println!("---------------------------");

    println!("Practice 6.2");
    practice_6_2();
    println!("---------------------------");

    println!("Practice 6.3");
    practice_6_3();
    println!("---------------------------");
}

fn practice_6_1() {
    #[derive(Debug)]
    enum IpAddrKind {
        V4, 
        V6,
    }

    struct IpAddr {
        kind: IpAddrKind,
        address: String,
    }

    let home = IpAddr {
        kind: IpAddrKind::V4,
        address: String::from("127.0.0.1"),
    };

    let loopback = IpAddr {
        kind: IpAddrKind::V6,
        address: String::from("::1"),
    };

    println!("home: {:?}, {}", home.kind, home.address);
    println!("loopback: {:?}, {}", loopback.kind, loopback.address);

    #[derive(Debug)]
    enum IpAddr2 {
        V4(u8, u8, u8, u8),
        V6(String),
    }

    impl IpAddr2 {
        fn call(&self) {
            println!("{:?}", &self);
        }
    }

    let home2 = IpAddr2::V4(127, 0, 0, 1);
    let loopback2 = IpAddr2::V6(String::from("::1"));

    home2.call();
    loopback2.call();

    let some_number = Some(5);
    let absent_number: Option<i32> = None;

    println!("some number: {:?}", some_number);
    println!("absent number: {:?}", absent_number);

    // let x: i8 = 5;
    // let y: Option<i8> = Some(5);

    // let sum = x + y; // error
}

fn practice_6_2() {
    enum Coin {
        Penny,
        Nickel,
        Dime,
        Quarter(String),
    }

    fn value_in_cents(coin: Coin) -> u32 {
        match coin {
            Coin::Penny => {
                println!("Lucky penny!");
                1
            }
            Coin::Nickel => 5,
            Coin::Dime => 10,
            Coin::Quarter(state) => {
                println!("State quarter from {:?}!", state);
                25
            },
        }
    }

    value_in_cents(Coin::Penny);
    println!("Nickel: {}", value_in_cents(Coin::Nickel));
    println!("Dime: {}", value_in_cents(Coin::Dime));
    value_in_cents(Coin::Quarter(String::from("Alaska")));

    fn plus_one(x: Option<i32>) -> Option<i32> {
        match x {
            None => None,
            Some(i) => Some(i + 1),
        }
    }

    let five = Some(5);
    let six = plus_one(five);
    let none = plus_one(None);

    println!("five: {:?}", five);
    println!("six: {:?}", six);
    println!("none: {:?}", none);

    let some_u8_value = 9;

    match some_u8_value {
        1 => println!("one"),
        3 => println!("three"),
        5 => println!("five"),
        7 => println!("seven"),
        _ => (),
    }
}

fn practice_6_3() {
    let is_three = Some(3);

    println!("Is three? {:?}", is_three);

    if let Some(3) = is_three {
        println!("YES");
    } else {
        println!("NO");
    }
}