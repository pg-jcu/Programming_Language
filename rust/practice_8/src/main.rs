fn main() {   
    println!("Practice 8.1");
    practice_8_1();
    println!("---------------------------");

    println!("Practice 8.2");
    practice_8_2();
    println!("---------------------------");
}

fn practice_8_1() {
    let v1: Vec<i32> = Vec::new();
    let v2 = vec![1, 2];
    let mut v3 = Vec::new();

    v3.push(1);
    v3.push(2);
    v3.push(3);

    {
        let v1 = vec![1];

        println!("drop v1: {:?}", v1);
    }

    println!("v1: {:?}", v1);
    println!("v2: {:?}", v2);
    println!("v3: {:?}", v3);

    let one: &i32 = &v2[0];
    let two: Option<&i32> = v2.get(1);

    println!("one: {}", one);
    println!("two: {:?}", two);

    let mut v4 = vec![1, 2, 3, 4];
    // let mut first = &v4[0]; // error

    v4.push(5);

    println!("v4: {:?}", v4);

    let v5 = vec![1, 2, 3, 4, 5];

    println!("for &v5");
    for i in &v5 {
        println!("{}", i);
    }

    let mut v6 = vec![1, 2, 3, 4, 5, 6];

    for i in &mut v6 {
        *i += 2;
    }

    println!("v6: {:?}", v6);

    #[derive(Debug)]
    enum SpreadsheetCell {
        Int(i32),
        Float(f64),
        Text(String),
    }

    let row = vec![
        SpreadsheetCell::Int(3),
        SpreadsheetCell::Float(10.12),
        SpreadsheetCell::Text(String::from("blue")),
    ];

    println!("SpreadsheetCell row: {:?}", row);
}

fn practice_8_2() {
    let s1 = String::new();

    println!("s1: {}", s1);

    let data = "initial contents";

    println!("data: {}", data);

    let s2 = data.to_string();

    println!("s2: {}", s2);

    let s3 = "to_string".to_string();

    println!("s3: {}", s3);

    let s4 = String::from("String::from");

    println!("s4: {}", s4);

    let mut s5 = String::from("foo");
    s5.push_str("bar");

    println!("s5.push_str(bar): {}", s5);

    let s6 = "baz";
    s5.push_str(&s6);

    println!("s5.push_str(&s6): {}", s5);

    let mut s7 = String::from("lo");
    s7.push('l');

    println!("s7: {}", s7);

    let s8 = String::from("Hello, ");
    let s9 = String::from("world!");
    let s10 = s8 + &s9;

    println!("s10 = s8 + &s9: {}", s10);

    let tic = String::from("tic");
    let tac = String::from("tac");
    let toe = String::from("toe");

    let tictactoe = format!("{}-{}-{}", tic, tac, toe);
    println!("tictactoe: {}", tictactoe);

    // let s11 = String::from("hello");
    // let h = s11[0]; // error

    let rust = String::from("러스트");
    println!("러스트 length: {}", rust.len());

    let rust_0_3 = &rust[0..3];
    println!("rust[0..3]: {}", rust_0_3);

    for c in "러스트".chars() {
        println!("{}", c);
    }

    for b in "러스트".bytes() {
        println!("{}", b);
    }
}