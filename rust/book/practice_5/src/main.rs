fn main() {
    println!("Practice 5.1");
    practice_5_1();
    println!("---------------------------");

    println!("Practice 5.2");
    practice_5_2();
    println!("---------------------------");

    println!("Practice 5.3");
    practice_5_3();
    println!("---------------------------");
}

fn practice_5_1() {
    struct User {
        username: String,
        email: String, 
        sign_in_count: u64,
        active: bool,
    }

    let mut user1 = User {
        email: String::from("user1@test.com"),
        username: String::from("user1"),
        active: true,
        sign_in_count: 1,
    };

    println!("user1 username: {}", user1.username);
    println!("user1 email: {}", user1.email);
    println!("user1 sign_in_count: {}", user1.sign_in_count);
    println!("user1 active: {}", user1.active);

    user1.email = String::from("user1@example.com");

    println!("change user1 email: {}", user1.email);

    fn build_user(email: String, username: String) -> User {
        User {
            email,
            username,
            active: true,
            sign_in_count: 1,
        }
    }

    let user2 = build_user(String::from("user2@test.com"), String::from("user2"));

    println!("user2 username: {}", user2.username);
    println!("user2 email: {}", user2.email);
    println!("user2 sign_in_count: {}", user2.sign_in_count);
    println!("user2 active: {}", user2.active);

    let user3 = User {
        email: String::from("user3@test.com"),
        username: String::from("user3"),
        ..user2
    };

    println!("user3 username: {}", user3.username);
    println!("user3 email: {}", user3.email);
    println!("user3 sign_in_count: {}", user3.sign_in_count);
    println!("user3 active: {}", user3.active);

    struct Color(i32, i32, i32);
    struct Point(i32, i32, i32);

    let black = Color(0, 0, 0);
    let origin = Point(0, 0, 0);

    println!("black: {} {} {}", black.0, black.1, black.2);
    println!("origin: {} {} {}", origin.0, origin.1, origin.2);
}

fn practice_5_2() {
    #[derive(Debug)]
    struct Rectangle {
        length: u32,
        width: u32,
    }

    let rect1 = Rectangle { length: 50, width: 30 };

    println!(
        "The area of the rectangle is {} square pixels.",
        area(&rect1)
    );

    fn area(rectangle: &Rectangle) -> u32 {
        rectangle.length * rectangle.width
    }

    println!("rect1 is {:?}", rect1);
}

fn practice_5_3() {
    #[derive(Debug)]
    struct Rectangle {
        length: u32,
        width: u32,
    }

    impl Rectangle {
        fn area(&self) -> u32 {
            self.length * self.width
        }

        fn can_hold(&self, other: &Rectangle) -> bool {
            self.length > other.length && self.width > other.width
        }

        fn square(size: u32) -> Rectangle {
            Rectangle { length: size, width: size }
        }
    }

    let rect1 = Rectangle { length: 50, width: 30 };

    println!(
        "The area of the rectangle is {} square pixels.",
        rect1.area()
    );

    let rect2 = Rectangle { length: 40, width: 10 };
    let rect3 = Rectangle { length: 45, width: 60 };

    println!("Can rect1 hold rect2? {}", rect1.can_hold(&rect2));
    println!("Can rect1 hold rect3? {}", rect1.can_hold(&rect3));

    let rect4 = Rectangle::square(10);

    println!("rect4: {:?}", rect4);
}