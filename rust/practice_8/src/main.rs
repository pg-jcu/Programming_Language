fn main() {   
    println!("Practice 8.1");
    practice_8_1();
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