fn main() {
    println!("functions");
    functions();
    println!("-------------------------");

    println!("associated functions and methods");
    associated_functions_and_methods();
    println!("-------------------------");
}

fn functions() {
    fizzbuzz_to(100);

    fn is_divisible_by(lhs: u32, rhs: u32) -> bool {
        if rhs == 0 {
            return false;
        }

        lhs % rhs == 0
    }

    fn fizzbuzz(n: u32) -> () {
        if is_divisible_by(n, 15) {
            println!("fizzbuzz");
        } else if is_divisible_by(n, 3) {
            println!("fizz");
        } else if is_divisible_by(n, 5) {
            println!("buzz");
        } else {
            println!("{}", n);
        }
    }

    // when a function returns '()', the return type can be omitted from the signature.
    fn fizzbuzz_to(n: u32) {
        for n in 1..=n {
            fizzbuzz(n);
        }
    }
}

fn associated_functions_and_methods() {
    struct Point {
        x: f64,
        y: f64,
    }

    impl Point {
        // associated function
        fn origin() -> Point {
            Point { x: 0.0, y: 0.0 }
        }

        fn new(x: f64, y: f64) -> Point {
            Point { x: x, y: y }
        }
    }

    struct Rectangle {
        p1: Point,
        p2: Point,
    }

    impl Rectangle {
        // method
        // '&self' is sugar for 'self: &Self', where 'Self' is the type of the 
        // caller object. In this case 'Self' = 'Rectangle'.
        fn area(&self) -> f64 {
            let Point { x: x1, y: y1 } = self.p1;
            let Point { x: x2, y: y2 } = self.p2;

            ((x1 - x2) * (y1 - y2)).abs()
        }

        fn perimeter(&self) -> f64 {
            let Point { x: x1, y: y1 } = self.p1;
            let Point { x: x2, y: y2 } = self.p2;

            2.0 * ((x1 - x2).abs() + (y1 - y2).abs())
        }

        // '&mut self' desugars to 'self: &mut Self'.
        fn translate(&mut self, x: f64, y: f64) {
            self.p1.x += x;
            self.p2.x += x;

            self.p1.y += y;
            self.p2.y += y;
        }
    }

    struct Pair(Box<i32>, Box<i32>);

    impl Pair {
        // this method consumes the resources of the caller object.
        // 'self' desugars to 'self: Self'.
        fn destroy(self) {
            let Pair(first, second) = self;

            println!("Destroying Pair({}, {})", first, second);

            // 'first' and 'second' go out of scope and get freed.
        }
    }

    let rectangle = Rectangle {
        p1: Point::origin(),
        p2: Point::new(3.0, 4.0),
    };

    // 'rectangle.perimeter()' === 'Rectangle::perimeter(&rectangle)'
    println!("Rectangle perimeter: {}", rectangle.perimeter());
    println!("Rectangle area: {}", rectangle.area());

    let mut square = Rectangle {
        p1: Point::origin(),
        p2: Point::new(1.0, 1.0),
    };

    square.translate(1.0, 1.0);

    let pair = Pair(Box::new(1), Box::new(2));

    pair.destroy();
}
