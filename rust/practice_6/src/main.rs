fn main() {
    println!("Practice 6.1");
    practice_6_1();
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