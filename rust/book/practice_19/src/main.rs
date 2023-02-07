fn main() {
    println!("Practice 19.1");
    practice_19_1();
    println!("---------------------------");

    println!("Practice 19.2");
    practice_19_2();
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
    #![allow(dead_code)]
    struct Context<'a>(&'a str);

    struct Parser<'a> {
        context: &'a Context<'a>,
    }

    impl<'a> Parser<'a> {
        fn parse(&self) -> Result<(), &str> {
            Err(&self.context.0[1..])
        }
    }
}
