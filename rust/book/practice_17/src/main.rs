use practice_17::*;

fn main() {
    println!("Practice 17.1");
    practice_17_1();
    println!("---------------------------");
}

fn practice_17_1() {
    let mut avg = AveragedCollection::new(vec![1, 2, 3]);

    avg.add(4);
    avg.add(5);
    avg.remove();

    println!("avg: {}", avg.average());
}
