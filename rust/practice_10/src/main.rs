fn main() {
    println!("Practice 10.0");
    practice_10_0();
    println!("---------------------------");

    println!("Practice 10.1");
    practice_10_1();
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

fn practice_10_1() {
    #[derive(Copy, Clone)]
    struct Point<T, U> {
        x: T,
        y: U,
    }

    let p1 = Point { x: 5, y: 10 };
    let p2 = Point { x: 1.0, y: 4.0 };
    let p3 = Point { x: 5, y: 4.0 };
    let p4 = Point { x: "Hello", y: 'c' };

    impl<T, U> Point<T, U> {
        fn x(&self) -> &T {
            &self.x
        }

        fn mixup<V, W>(&self, other: Point<V, W>) -> Point<&T, W> {
            Point {
                x: &self.x,
                y: other.y,
            }
        }
    }

    let mix = p1.mixup(p4);

    println!("mix.x = {}, mix.y = {}", mix.x, mix.y);
    println!("&p1.x = {}", p1.x());
    println!("p1.x = {}", p1.x);
    println!("p4.y = {}", p4.y);
}