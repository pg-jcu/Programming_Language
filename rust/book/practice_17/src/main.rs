use practice_17::*;

fn main() {
    println!("Practice 17.1");
    practice_17_1();
    println!("---------------------------");

    println!("Practice 17.2");
    practice_17_2();
    println!("---------------------------");

    println!("Practice 17.3");
    practice_17_3();
    println!("---------------------------");
}

fn practice_17_1() {
    let mut avg = AveragedCollection::new(vec![1, 2, 3]);

    avg.add(4);
    avg.add(5);
    avg.remove();

    println!("avg: {}", avg.average());
}

fn practice_17_2() {
    struct SelectBox {
        width: u32,
        height: u32,
        options: Vec<String>,
    }

    impl Draw for SelectBox {
        fn draw(&self) {
            println!("SelectBox draw");
            println!("width: {}, height: {}, options: {:?}", 
                     self.width, self.height, self.options);
        }
    }

    let screen = Screen {
        components: vec![
            Box::new(Button {
                width: 50,
                height: 10,
                label: String::from("OK"),
            }),
            Box::new(SelectBox {
                width: 75,
                height: 10,
                options: vec![
                    String::from("Yes"),
                    String::from("Maybe"),
                    String::from("No")
                ],
            })
        ],
    };

    screen.run();
}

fn practice_17_3() {
    let mut post = Post::new();

    post.add_text("I ate a salad for lunch today");
    assert_eq!("", post.content());

    post.request_review();
    assert_eq!("", post.content());

    post.approve();
    assert_eq!("I ate a salad for lunch today", post.content());

    println!("post content: {}", post.content());
}