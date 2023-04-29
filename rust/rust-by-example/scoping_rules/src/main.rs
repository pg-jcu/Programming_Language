fn main() {
    println!("RAII");
    raii();
    println!("-------------------------");

    println!("ownership and moves");
    ownership_and_moves();
    println!("-------------------------");

    println!("borrowing");
    borrowing();
    println!("-------------------------");

    println!("lifetimes");
    lifetimes();
    println!("-------------------------");
}

fn raii() {
    fn create_box() {
        let _box1 = Box::new(3i32);
    }

    let _box2 = Box::new(5i32);

    {
        let _box3 = Box::new(4i32);
    }

    for _ in 0u32..1_000 {
        create_box();
    }

    // Destructor
    struct ToDrop;

    impl Drop for ToDrop {
        fn drop(&mut self) {
            println!("ToDrop is being dropped");
        }
    }

    let _x = ToDrop;
    println!("Made a ToDrop!");
}

fn ownership_and_moves() {
    fn destroy_box(c: Box<i32>) {
        println!("Destroying a box that contains {}", c);
    }

    let x = 5u32;
    let y = x;

    println!("x is {}, and y is {}", x, y);

    let a = Box::new(5i32);

    println!("a contains: {}", a);

    // The pointer address of `a` is copied (not the data) into `b`.
    // Both are now pointers to the same heap allocated data, but
    // `b` now owns it.
    let b = a;

    destroy_box(b);

    println!("mutability");

    let immutable_box = Box::new(5u32);

    println!("immutable_box contains {}", immutable_box);

    let mut mutable_box = immutable_box;

    println!("mutable_box contains {}", mutable_box);

    *mutable_box = 4;

    println!("mutable_box new contains {}", mutable_box);

    println!("partial moves");

    #[derive(Debug)]
    struct Person {
        name: String,
        age: Box<u8>,
    }

    let person = Person {
        name: String::from("Jeong"),
        age: Box::new(20),
    };

    let Person { name, ref age } = person;

    println!("The person's age is {}", age);
    println!("The person's name is {}", name);

    println!("The person's age from person struct is {}", person.age);
}

fn borrowing() {
    fn eat_box_i32(boxed_i32: Box<i32>) {
        println!("Destroying box that contains {}", boxed_i32);
    }

    fn borrow_i32(borrowed_i32: &i32) {
        println!("This int is: {}", borrowed_i32);
    }

    let boxed_i32 = Box::new(5_i32);
    let stacked_i32 = 6_i32;

    borrow_i32(&boxed_i32);
    borrow_i32(&stacked_i32);

    {
        let _ref_to_i32: &i32 = &boxed_i32;

        borrow_i32(_ref_to_i32);
    }

    eat_box_i32(boxed_i32);

    println!("mutability");

    #[allow(dead_code)]
    #[derive(Clone, Copy)]
    struct Book {
        author: &'static str,
        title: &'static str,
        year: u32,
    }

    fn borrow_book(book: &Book) {
        println!("I immutably borrowed {} - {} edition", book.title, book.year);
    }
    
    fn new_edition(book: &mut Book) {
        book.year = 2014;
        println!("I mutably borrowed {} - {} edition", book.title, book.year);
    }

    let immutabook = Book {
        author: "Douglas Hofstadter",
        title: "Gödel, Escher, Bach",
        year: 1979,
    };

    let mut mutabook = immutabook;

    borrow_book(&immutabook);

    borrow_book(&mutabook);

    new_edition(&mut mutabook);

    println!("aliasing");

    struct Point { x: i32, y: i32, z: i32 }

    let mut point = Point { x: 0, y: 0, z: 0 };

    let borrowed_point = &point;
    let another_borrow = &point;

    println!("Point has coordinates: ({}, {}, {})", 
             borrowed_point.x, another_borrow.y, point.z);

    // error! can't borrow 'point' as mutable because it's currently
    // borrowed as immutable.
    // let mutable_borrow = &mut point;

    println!("Point has coordinates: ({}, {}, {})", 
             borrowed_point.x, another_borrow.y, point.z);

    let mutable_borrow = &mut point;

    mutable_borrow.x = 5;
    mutable_borrow.y = 2;
    mutable_borrow.z = 1;

    // error! can't borrow 'point' as immutable because it's currently
    // borrowed as mutable.
    // let y = &point.y;

    // error! Can't print because 'println!' takes an immutable reference.
    // println!("Point Z coordinate is {}", point.z);

    println!("Point has coordinates: ({}, {}, {})",
             mutable_borrow.x, mutable_borrow.y, mutable_borrow.z);

    let new_borrowed_point = &point;
    println!("Point now has coordinates: ({}, {}, {})",
             new_borrowed_point.x, new_borrowed_point.y, new_borrowed_point.z);
                
    println!("the ref pattern");

    #[derive(Clone, Copy)]
    struct PointXY { x: i32, y: i32 }

    let c = 'Q';

    let ref ref_c1 = c;
    let ref_c2 = &c;

    println!("ref_c1 equals ref_c2: {}", *ref_c1 == *ref_c2);

    let point = PointXY { x: 0, y: 0 };

    // 'ref' is also valid when destructuring a struct.
    let _copy_of_x = {
        // 'ref_to_x' is a reference to the 'x' field of 'point'.
        let PointXY { x: ref ref_to_x, y: _ } = point;

        // return a copy of the 'x' field of 'point'.
        *ref_to_x
    };

    let mut mutable_point = point;

    {
        let PointXY { x: _, y: ref mut mut_ref_to_y } = mutable_point;

        *mut_ref_to_y = 1;
    }

    println!("point is ({}, {})", point.x, point.y);
    println!("mutable_point is ({}, {})", mutable_point.x, mutable_point.y);

    let mut mutable_tuple = (Box::new(5u32), 3u32);
    
    {
        let (_, ref mut last) = mutable_tuple;
        *last = 2u32;
    }
    
    println!("tuple is {:?}", mutable_tuple);
}

fn lifetimes() {
    fn print_refs<'a, 'b>(x: &'a i32, y: &'b i32) {
        println!("x is {} and y is {}", x, y);
    }

    let (four, nine) = (4, 9);

    print_refs(&four, &nine);

    println!("functions");

    fn print_one<'a>(x: &'a i32) {
        println!("print_one: x is {}", x);
    }

    fn add_one<'a>(x: &'a mut i32) {
        *x += 1;
    }

    fn print_multi<'a, 'b>(x: &'a i32, y: &'b i32) {
        println!("print_multi: x is {}, y is {}", x, y);
    }

    fn pass_x<'a, 'b>(x: &'a i32, _: &'b i32) -> &'a i32 { x }

    let x = 7;
    let y = 9;
    
    print_one(&x);
    print_multi(&x, &y);
    
    let z = pass_x(&x, &y);
    print_one(z);

    let mut t = 3;
    add_one(&mut t);
    print_one(&t);

    println!("methods");

    struct Owner(i32);

    impl Owner {
        fn add_one<'a>(&'a mut self) { self.0 += 1; }
        fn print<'a>(&'a self) {
            println!("print: {}", self.0);
        }
    }

    let mut owner = Owner(19);

    owner.add_one();
    owner.print();

    println!("struct");

    #[derive(Debug)]
    struct Borrowed<'a>(&'a i32);

    #[derive(Debug)]
    struct NamedBorrowed<'a> {
        _x: &'a i32,
        _y: &'a i32,
    }

    #[derive(Debug)]
    enum Either<'a> {
        Num(i32),
        Ref(&'a i32),
    }

    let x = 18;
    let y = 15;

    let single = Borrowed(&x);
    let double = NamedBorrowed { _x: &x, _y: &y };
    let reference = Either::Ref(&x);
    let number = Either::Num(y);

    println!("x is borrowed in {:?}", single);
    println!("x and y are borrowed in {:?}", double);
    println!("x is borrowed in {:?}", reference);
    println!("y is not borrowed in {:?}", number);

    println!("traits");

    #[derive(Debug)]
    struct BorrowedTrait<'a> {
        _x: &'a i32,
    }

    impl<'a> Default for BorrowedTrait<'a> {
        fn default() -> Self {
            Self {
                _x: &10,
            }
        }
    }

    let b: BorrowedTrait = Default::default();
    println!("b is {:?}", b);

    println!("bounds");

    use std::fmt::Debug;

    #[derive(Debug)]
    struct Ref<'a, T: 'a>(&'a T);

    fn print<T: Debug>(t: T) {
        println!("print: t is {:?}", t);
    }

    fn print_ref<'a, T>(t: &'a T) where
        T: Debug + 'a {
        println!("print_ref: t is {:?}", t);
    }

    let x = 7;
    let ref_x = Ref(&x);

    print_ref(&ref_x);
    print(ref_x);

    println!("coercion");

    fn multiply<'a>(first: &'a i32, second: &'a i32) -> i32 {
        first * second
    }

    fn choose_first<'a: 'b, 'b>(first: &'a i32, _: &'b i32) -> &'b i32 {
        first
    }

    let first = 2;
    
    {
        let second = 3;
        
        println!("The product is {}", multiply(&first, &second));
        println!("{} is the first", choose_first(&first, &second));
    };

    println!("elision");

    fn elided_input(x: &i32) {
        println!("elided_input: {}", x);
    }

    fn annotated_input<'a>(x: &'a i32) {
        println!("annotated_input: {}", x);
    }

    fn elided_pass(x: &i32) -> &i32 { x }

    fn annotated_pass<'a>(x: &'a i32) -> &'a i32 { x }

    let x = 3;

    elided_input(&x);
    annotated_input(&x);

    println!("elided_pass: {}", elided_pass(&x));
    println!("annotated_pass: {}", annotated_pass(&x));
}
