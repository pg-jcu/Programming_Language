fn main() {
    println!("Practice 4.1");
    practice_4_1();
    println!("---------------------------");

}

fn practice_4_1() {
    string_type();
    move_practice();
    copy_practice();
    owner_practice();
    move_reuse();

    fn string_type() {
        let mut s = String::from("hello");
    
        s.push_str(", world");
    
        println!("{}", s);
    }
    
    fn move_practice() {
        let s1 = String::from("hello");
        let s2 = s1;
    
        // println!("s1: {}", s1); // error
        println!("s2: {}", s2);
    }
    
    fn copy_practice() {
        let x = 5;
        let y = x;
    
        println!("x = {}, y = {}", x, y);
    }
    
    fn owner_practice() {
        let s = String::from("owner");
    
        takes_ownership(s);
    
        let x = 5;
    
        makes_copy(x);
    
        // println!("s: {}", s); // error
        println!("x: {}", x);
    }
    
    fn takes_ownership(some_string: String) {
        println!("fn takes_ownership print: {}", some_string);
    }
    
    fn makes_copy(some_integer: i32) {
        println!("fn makes_copy print: {}", some_integer);
    }

    fn move_reuse() {
        let s1 = String::from("hello");

        let (s2, len) = calculate_length(s1);

        println!("The length of '{}' is {}.", s2, len);
    }

    fn calculate_length(s: String) -> (String, usize) {
        let length = s.len();

        (s, length)
    }
}
