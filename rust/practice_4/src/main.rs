fn main() {
    println!("Practice 4.1");
    practice_4_1();
    println!("---------------------------");

    println!("Practice 4.2");
    practice_4_2();
    println!("---------------------------");

    println!("Practice 4.3");
    practice_4_3();
    println!("---------------------------");
}

fn practice_4_1() {
    string_type();
    move_practice();
    copy_practice();
    owner_practice();
    move_reuse();

    fn string_type() {
        let mut s = String::from("string");
    
        s.push_str(" type");
    
        println!("{}", s);
    }
    
    fn move_practice() {
        let s1 = String::from("move practice");
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
        let s1 = String::from("move reuse");

        let (s2, len) = calculate_length(s1);

        println!("The length of '{}' is {}.", s2, len);
    }

    fn calculate_length(s: String) -> (String, usize) {
        let length = s.len();

        (s, length)
    }
}

fn practice_4_2() {
    reference_practice();
    mutable_reference();
    // let reference_to_nothing = dangle();

    fn reference_practice() {
        let s1 = String::from("reference practice");
        let len = calculate_length(&s1);

        println!("The length of '{}' is {}.", s1, len);
    }

    fn calculate_length(s: &String) -> usize {
        s.len()
    }

    // fn change_immutable() {
    //     let s = String::from("change immutable");

    //     change(&s);
    // }

    // fn change(some_string: &String) {
    //     some_string.push_str(", error"); // error
    // }

    fn mutable_reference() {
        let mut s = String::from("mutable");

        // let r1 = &mut s; // error
        // let r2 = &mut s; // error

        {
            let r1 = &mut s;
            println!("r1: {}", r1);
        }

        let r2 = &mut s;
        println!("r2: {}", r2);

        // let r1 = &s; 
        // let r2 = &s;
        // let r3 = &mut s; // error

        change(&mut s);

        println!("{}", s);
    }

    fn change(some_string: &mut String) {
        some_string.push_str(" reference");
    }

    // fn dangle() -> &String {
    //     let s = String::from("dangle");

    //     &s
    // }
}

fn practice_4_3() {
    let s = String::from("String slice");
    let word = first_word(&s[..]);
    // let word = first_word(&s);

    // s.clear(); // error

    println!("String first word: {}", word);

    let string_literal = "string literal";
    let word = first_word(&string_literal[..]);
    // let word = first_word(string_literal);

    println!("string literal first word: {}", word);

    let a = [1, 2, 3, 4, 5];
    let slice = &a[1..3];

    println!("array slice: {:?}", slice);

    fn first_word(s: &str) -> &str {
        let bytes = s.as_bytes();

        for (i, &item) in bytes.iter().enumerate() {
            if item == b' ' {
                return &s[0..i];
            }
        }

        &s[..]
    }
}