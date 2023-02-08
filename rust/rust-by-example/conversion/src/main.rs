#![allow(dead_code)]

fn main() {
    println!("From and Into");
    from_and_into();
    println!("-------------------------");

    println!("TryFrom and TryInto");
    tryfrom_and_tryinto();
    println!("-------------------------");

    println!("to and from Strings");
    to_and_from_strings();
    println!("-------------------------");
}

fn from_and_into() {
    // use std::convert::From;

    #[derive(Debug)]
    struct Number {
        value: i32,
    }

    impl From<i32> for Number {
        fn from(item: i32) -> Self {
            Number { value: item }
        }
    }

    let num = Number::from(30);

    println!("My number is {:?}", num);

    let int = 5;
    let num: Number = int.into();
    println!("My number is {:?}", num);
}

fn tryfrom_and_tryinto() {
    #[derive(Debug, PartialEq)]
    struct EvenNumber(i32);

    impl TryFrom<i32> for EvenNumber {
        type Error = ();

        fn try_from(value: i32) -> Result<Self, Self::Error> {
            if value % 2 == 0 {
                Ok(EvenNumber(value))
            } else {
                Err(())
            }
        }
    }

    assert_eq!(EvenNumber::try_from(8), Ok(EvenNumber(8)));
    assert_eq!(EvenNumber::try_from(5), Err(()));

    println!("EvenNumber::try_from(8) -> {:?}", EvenNumber::try_from(8));
    println!("EvenNumber::try_from(5) -> {:?}", EvenNumber::try_from(5));

    let result: Result<EvenNumber, ()> = 8i32.try_into();
    assert_eq!(result, Ok(EvenNumber(8)));
    println!("try_into: {:?}", result);

    let result: Result<EvenNumber, ()> = 5i32.try_into();
    assert_eq!(result, Err(()));
    println!("try_into: {:?}", result);
}

fn to_and_from_strings() {
    use std::fmt;

    struct Circle {
        radius: i32,
    }

    impl fmt::Display for Circle {
        fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
            write!(f, "Circle of radius {}", self.radius)
        }
    }

    let circle = Circle { radius: 6 };
    println!("{}", circle.to_string());

    let parsed: i32 = "5".parse().unwrap();
    let turbo_parsed = "10".parse::<i32>().unwrap();

    let sum = parsed + turbo_parsed;
    println!("Sum: {:?}", sum);
}
