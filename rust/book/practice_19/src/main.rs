fn main() {
    println!("Practice 19.1");
    practice_19_1();
    println!("---------------------------");

    println!("Practice 19.2");
    practice_19_2();
    println!("---------------------------");

    println!("Practice 19.3");
    practice_19_3();
    println!("---------------------------");
}

fn practice_19_1() {
    #![allow(unused_variables)]
    let mut num = 5;

    let r1 = &num as *const i32;
    let r2 = &mut num as *mut i32;

    let address = 0x012345usize;
    let r = address as *const i32;

    unsafe {
        println!("r1 is: {}", *r1);
        println!("r2 is: {}", *r2);
    }

    unsafe fn in_dangerous() {
        println!("in_dangerous");
    }

    unsafe fn dangerous() {
        in_dangerous();
        println!("dangerous");
    }

    unsafe {
        dangerous();
    }

    use std::slice;

    let mut v = vec![1, 2, 3, 4, 5, 6];
    let r = &mut v[..];

    let (a, b) = r.split_at_mut(3);

    assert_eq!(a, &mut [1, 2, 3]);
    assert_eq!(b, &mut [4, 5, 6]);

    fn split_at_mut(slice: &mut [i32], mid: usize) -> (&mut [i32], &mut [i32]) {
        let len = slice.len();
        let ptr = slice.as_mut_ptr();

        assert!(mid <= len);

        unsafe {
            (slice::from_raw_parts_mut(ptr, mid),
             slice::from_raw_parts_mut(ptr.offset(mid as isize), len - mid))
        }
    }

    println!("split_at_mut(r, 3): {:?}", split_at_mut(r, 3));

    extern "C" {
        fn abs(input: i32) -> i32;
    }

    unsafe {
        println!("Absolute value of -3 according to C: {}", abs(-3));
    }

    static HELLO_WORLD: &str = "Hello, world!";

    println!("name is: {}", HELLO_WORLD);

    static mut COUNTER: u32 = 0;

    fn add_to_count(inc: u32) {
        unsafe {
            COUNTER += inc;
        }
    }

    add_to_count(3);

    unsafe {
        println!("COUNTER: {}", COUNTER);
    }
}

fn practice_19_2() {
    #![allow(dead_code, unused_variables)]

    println!("lifetime subtyping");

    struct Context<'s>(&'s str);

    struct Parser<'c, 's: 'c> {
        context: &'c Context<'s>,
    }

    impl<'c, 's> Parser<'c, 's> {
        fn parse(&self) -> Result<(), &'s str> {
            Err(&self.context.0[1..])
        }
    }

    fn parse_context(context: Context) -> Result<(), &str> {
        Parser { context: &context }.parse()
    }

    println!("lifetime bound");

    struct Ref<'a, T: 'a>(&'a T);

    struct StaticRef<T: 'static>(&'static T);

    println!("lifetime inference");

    trait Red { }

    struct Ball<'a> {
        diameter: &'a i32,
    }

    impl<'a> Red for Ball<'a> { }

    let num = 5;

    let obj = Box::new(Ball { diameter: &num }) as Box<dyn Red>;
}

fn practice_19_3() {
    use std::ops::Add;

    #[derive(Debug, PartialEq)]
    struct Point {
        x: i32,
        y: i32,
    }

    impl Add for Point {
        type Output = Point;

        fn add(self, other: Point) -> Point {
            Point {
                x: self.x + other.x,
                y: self.y + other.y,
            }
        }
    }

    let point = Point { x: 1, y: 0 } + Point { x: 2, y: 3 };

    assert_eq!(Point { x: 1, y: 0 } + Point { x: 2, y: 3 }, Point { x: 3, y: 3});
    println!("Point {{ x: 1, y: 0 }} + Point {{ x: 2, y: 3 }} = {:?}", point);

    #[derive(Debug)]
    struct Millimeters(u32);
    struct Meters(u32);

    impl Add<Meters> for Millimeters {
        type Output = Millimeters;

        fn add(self, other: Meters) -> Millimeters {
            Millimeters(self.0 + (other.0 * 1000))
        }
    }

    println!("Millimeters(10) + Meters(1) = {:?}", Millimeters(10) + Meters(1));

    trait Pilot {
        fn fly(&self);
    }

    trait Wizard {
        fn fly(&self);
    }

    struct Human;

    impl Pilot for Human {
        fn fly(&self) {
            println!("This is your caption speaking.");
        }
    }

    impl Wizard for Human {
        fn fly(&self) {
            println!("Up!");
        }
    }

    impl Human {
        fn fly(&self) {
            println!("*waving arms furiously*");
        }
    }

    let person = Human;
    Pilot::fly(&person);
    Wizard::fly(&person);
    person.fly();

    trait Animal {
        fn baby_name() -> String;
    }

    struct Dog;

    impl Dog {
        fn baby_name() -> String {
            String::from("Spot")
        }
    }

    impl Animal for Dog {
        fn baby_name() -> String {
            String::from("puppy")
        }
    }

    println!("The baby dog is called {}.", Dog::baby_name());
    println!("A baby dog is called a {}.", <Dog as Animal>::baby_name());

    use std::fmt;

    trait OutlinePrint: fmt::Display {
        fn outline_print(&self) {
            let output = self.to_string();
            let len = output.len();
            println!("{}", "*".repeat(len + 4));
            println!("*{}*", " ".repeat(len + 2));
            println!("* {} *", output);
            println!("*{}*", " ".repeat(len + 2));
            println!("{}", "*".repeat(len + 4));
        }
    }

    impl fmt::Display for Point {
        fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
            write!(f, "({}, {})", self.x, self.y)
        }
    }

    impl OutlinePrint for Point {}

    let point = Point { x: 1, y: 1 };
    point.outline_print();

    struct Wrapper(Vec<String>);

    impl fmt::Display for Wrapper {
        fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
            write!(f, "[{}]", self.0.join(", "))
        }
    }

    let w = Wrapper(vec![String::from("hello"), String::from("world")]);
    println!("w = {}", w);
}
