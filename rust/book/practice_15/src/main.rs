fn main() {
    println!("Practice 15.1");
    practice_15_1();
    println!("---------------------------");

    println!("Practice 15.2");
    practice_15_2();
    println!("---------------------------");

    println!("Practice 15.3");
    practice_15_3();
    println!("---------------------------");

    println!("Practice 15.4");
    practice_15_4();
    println!("---------------------------");

    println!("Practice 15.5");
    practice_15_5();
    println!("---------------------------");
}

fn practice_15_1() {
    let b = Box::new(5);
    println!("b = {}", b);

    enum List {
        Cons(i32, Box<List>),
        Nil,
    }

    use List::{Cons, Nil};

    let list = Cons(1,
        Box::new(Cons(2,
            Box::new(Cons(3,
                Box::new(Nil))))));
}

fn practice_15_2() {
    let x = 5;
    let y = &x;
    let box_y = Box::new(x);

    println!("x: {}, y: {}, box_y: {}", x, *y, *box_y);

    struct MyBox<T>(T);

    impl<T> MyBox<T> {
        fn new(x: T) -> MyBox<T> {
            MyBox(x)
        }
    }

    use std::ops::Deref;

    impl<T> Deref for MyBox<T> {
        type Target = T;

        fn deref(&self) -> &T {
            &self.0
        }
    }

    let my_box_y = MyBox::new(x);

    assert_eq!(5, *my_box_y);

    fn hello(name: &str) {
        println!("Hello, {}!", name);
    }

    let m = MyBox::new(String::from("Rust"));
    hello(&m);
    hello(&(*m)[..]);
}

fn practice_15_3() {
    struct CustomSmartPointer {
        data: String,
    }

    impl Drop for CustomSmartPointer {
        fn drop(&mut self) {
            println!("Dropping CustomSmartPointer with data `{}`!", self.data);
        }
    }

    let a = CustomSmartPointer { data: String::from("A") };
    let b = CustomSmartPointer { data: String::from("B") };
    let c = CustomSmartPointer { data: String::from("C") };
    println!("CustomSmartPointers created.");
    drop(a);
}

fn practice_15_4() {
    enum List {
        Cons(i32, Rc<List>),
        Nil,
    }

    use List::{Cons, Nil};
    use std::rc::Rc;

    let a = Rc::new(Cons(5, Rc::new(Cons(10, Rc::new(Nil)))));
    println!("count after creating a = {}", Rc::strong_count(&a));
    let b = Cons(3, Rc::clone(&a));
    println!("count after creating b = {}", Rc::strong_count(&a));
    {
        let c = Cons(4, Rc::clone(&a));
        println!("count after creating c = {}", Rc::strong_count(&a));
    }
    println!("count after c goes out of scope = {}", Rc::strong_count(&a));
}

fn practice_15_5() {
    #[derive(Debug)]
    enum List {
        Cons(Rc<RefCell<i32>>, Rc<List>),
        Nil,
    }

    use List::{Cons, Nil};
    use std::rc::Rc;
    use std::cell::RefCell;

    let value = Rc::new(RefCell::new(5));

    let a = Rc::new(Cons(Rc::clone(&value), Rc::new(Nil)));
    let b = Cons(Rc::new(RefCell::new(6)), Rc::clone(&a));
    let c = Cons(Rc::new(RefCell::new(10)), Rc::clone(&a));

    *value.borrow_mut() += 10;

    println!("a after = {:?}", a);
    println!("b after = {:?}", b);
    println!("c after = {:?}", c);
}