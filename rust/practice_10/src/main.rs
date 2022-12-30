fn main() {
    println!("Practice 10.0");
    practice_10_0();
    println!("---------------------------");
}

fn practice_10_0() {
    fn largest(list: &[i32]) -> i32 {
        let mut largest = list[0];

        for &item in list.iter() {
            if item > largest {
                largest = item;
            }
        }

        largest
    }

    let numbers = vec![23, 43, 45, 19, 21];

    let result = largest(&numbers);
    println!("The largest number is {}", result);
}