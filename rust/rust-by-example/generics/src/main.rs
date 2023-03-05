fn main() {
    println!("generics");
    generics();
    println!("-------------------------");

    println!("functions");
    functions();
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

fn functions() {
    struct A;
    struct S(A);
    struct SGen<T>(T);

    // this functions are not generic
    fn reg_fn(_s: S) {}
    fn gen_spec_t(_s: SGen<A>) {}
    fn gen_spec_i32(_s: SGen<i32>) {}

    // this function is generic
    fn generic<T>(_s: SGen<T>) {}

    reg_fn(S(A));
    gen_spec_t(SGen(A));
    gen_spec_i32(SGen(6));

    // explicitly specified
    generic::<char>(SGen('a'));

    // implicitly specified
    generic(SGen('c'));
}
