#![allow(dead_code)]

fn main() {
    println!("structures");
    structures();
    println!("-------------------------");

    println!("enums");
    enums();
    println!("-------------------------");

    println!("use and c-like");
    use_and_c_like();
    println!("-------------------------");

    println!("linked-list");
    linked_list();
    println!("-------------------------");

    println!("constants");
    constants();
    println!("-------------------------");
}

fn structures() {
    #[derive(Debug)]
    struct Person {
        name: String,
        age: u8,
    }

    struct Unit;

    struct Pair(i32, f32);

    struct Point {
        x: f32,
        y: f32,
    }

    struct Rectangle {
        top_left: Point,
        bottom_right: Point,
    }

    let name = String::from("Peter");
    let age = 27;
    let peter = Person { name, age };

    println!("{:?}", peter);

    let point: Point = Point { x: 10.3, y: 0.4 };

    println!("point coordinates: ({}, {})", point.x, point.y);

    let bottom_right = Point { x: 5.2, ..point };

    println!("second point: ({}, {})", bottom_right.x, bottom_right.y);

    let Point { x: left_edge, y: top_edge } = point;

    let _rectangle = Rectangle {
        top_left: Point { x: left_edge, y: top_edge },
        bottom_right: bottom_right,
    };

    let _unit = Unit;
    let pair = Pair(1, 0.1);

    println!("pair contains {:?} and {:?}", pair.0, pair.1);

    let Pair(integer, decimal) = pair;

    println!("pair contains {:?} and {:?}", integer, decimal);
}

fn enums() {
    enum WebEvent {
        PageLoad,
        PageUnload,
        KeyPress(char),
        Paste(String),
        Click { x: i64, y: i64 },
    }
    
    fn inspect(event: WebEvent) {
        match event {
            WebEvent::PageLoad => println!("page loaded"),
            WebEvent::PageUnload => println!("page unloaded"),
            WebEvent::KeyPress(c) => println!("pressed '{}'.", c),
            WebEvent::Paste(s) => println!("pasted \"{}\".", s),
            WebEvent::Click { x, y } => {
                println!("clicked at x={}, y={}.", x, y);
            },
        }
    }
    
    enum VeryVerboseEnumOfThingsToDoWithNumbers {
        Add,
        Subtract,
    }
    
    // Creates a type alias
    type Operations = VeryVerboseEnumOfThingsToDoWithNumbers;
    
    impl VeryVerboseEnumOfThingsToDoWithNumbers {
        fn run(&self, x: i32, y: i32) -> i32 {
            match self {
                Self::Add => x + y,
                Self::Subtract => x - y,
            }
        }
    }

    let pressed = WebEvent::KeyPress('x');
    let pasted = WebEvent::Paste("my text".to_owned());
    let click = WebEvent::Click { x: 20, y: 80 };
    let load = WebEvent::PageLoad;
    let unload = WebEvent::PageUnload;

    inspect(pressed);
    inspect(pasted);
    inspect(click);
    inspect(load);
    inspect(unload);

    let add = Operations::Add.run(1, 2);
    let sub = Operations::Subtract.run(1, 2);

    println!("Operations::Add -> 1 + 2 = {}", add);
    println!("Operations::Subtract -> 1 - 2 = {}", sub);
}

fn use_and_c_like() {
    enum Status {
        Rich,
        Poor,
    }
    
    enum Work {
        Civilian,
        Soldier,
    }
    
    enum Number {
        Zero,
        One,
        Two,
    }
    
    enum Color {
        Red = 0xff0000,
        Green = 0x00ff00,
        Blue = 0x0000ff,
    }

    use Status::{Poor, Rich};
    use Work::*;

    let status = Poor;
    let work = Civilian;

    match status {
        Rich => println!("The rich have lots of money!"),
        Poor => println!("The poor have no money..."),
    }

    match work {
        Civilian => println!("Civilians work!"),
        Soldier => println!("Soldiers fight!"),
    }

    println!("zero is {}", Number::Zero as i32);
    println!("one is {}", Number::One as i32);

    println!("roses are #{:06x}", Color::Red as i32);
    println!("violets are #{:06x}", Color::Blue as i32);
}

fn linked_list() {
    enum List {
        Cons(u32, Box<List>),
        Nil,
    }
    
    use List::{Cons, Nil};
    
    impl List {
        fn new() -> List {
            Nil
        }
    
        fn prepend(self, elem: u32) -> List {
            Cons(elem, Box::new(self))
        }
    
        fn len(&self) -> u32 {
            match *self {
                Cons(_, ref tail) => 1 + tail.len(),
                Nil => 0,
            }
        }
    
        fn stringify(&self) -> String {
            match *self {
                Cons(head, ref tail) => {
                    format!("{}, {}", head, tail.stringify())
                },
                Nil => {
                    format!("Nil")
                },
            }
        }
    }

    let mut list = List::new();

    list = list.prepend(1);
    list = list.prepend(2);
    list = list.prepend(3);

    println!("linked list has length: {}", list.len());
    println!("{}", list.stringify());
}

fn constants() {
    static LANGUAGE: &str = "Rust";
    const THRESHOLD: i32 = 10;

    fn is_big(n: i32) -> bool {
        n > THRESHOLD
    }

    let n = 16;

    println!("This is {}", LANGUAGE);
    println!("The threshold is {}", THRESHOLD);
    println!("{} is {}", n, if is_big(n) { "big" } else { "small" });
}
