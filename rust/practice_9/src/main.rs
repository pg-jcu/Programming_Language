fn main() {
    println!("Practice 9.1");
    practice_9_1();
    println!("---------------------------");

    println!("Practice 9.2");
    practice_9_2();
    println!("---------------------------");
}

fn practice_9_1() {
    // panic!("crash and burn");

    // let v: Vec<i32> = Vec::new();

    // v[0];
}

fn practice_9_2() {
    use std::io;
    use std::io::Read;
    use std::fs::File;
    use std::io::ErrorKind;

    let f = File::open("hello.txt");

    let f = match f {
        Ok(file) => file,
        Err(ref error) if error.kind() == ErrorKind::NotFound => {
            match File::create("hello.txt") {
                Ok(fc) => fc,
                Err(e) => {
                    panic!("Tried to create file but there was a problem: {:?}", e);
                },
            }
        },
        Err(error) => {
            panic!("There was a problem opening the file: {:?}", error);
        },
    };

    let f = File::open("hello.txt").unwrap();

    let f = File::open("hello.txt").expect("Failed to open hello.txt");
    println!("{:?}", f);

    fn read_username_from_file() -> Result<String, io::Error> {
        let mut f = File::open("hello.txt").unwrap();

        // let mut f = match f {
        //     Ok(file) => file,
        //     Err(e) => return Err(e),
        // };

        let mut s = String::new();

        match f.read_to_string(&mut s) {
            Ok(_) => Ok(s),
            Err(e) => Err(e),
        }

        // let mut s = String::new();

        // File::open("hello.txt")?.read_to_string(&mut s)?;

        // Ok(s)
    }

    println!("{:?}", read_username_from_file());
}