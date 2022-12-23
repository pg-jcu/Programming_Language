fn main() {
    println!("Practice 5.1");
    practice_5_1();
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