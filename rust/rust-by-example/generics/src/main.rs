fn main() {
    println!("generics");
    generics();
    println!("-------------------------");
}

fn generics() {
    struct A;
    struct Single(A);
    struct SingleGen<T>(T);

    let _s = Single(A);
    
    // explicitly specified
    let _char: SingleGen<char> = SingleGen('a');

    // implicitly specified
    let _t = SingleGen(A);
    let _i32 = SingleGen(6);
    let _char = SingleGen('a');
}
