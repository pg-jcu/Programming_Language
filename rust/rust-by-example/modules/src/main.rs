fn main() {
    println!("visibility");
    visibility();
    println!("-------------------------");

    println!("struct visibility");
    struct_visibility();
    println!("-------------------------");

    println!("the use declaration");
    use_declaration();
    println!("-------------------------");

    println!("super and self");
    super_and_self();
    println!("-------------------------");

    println!("file hierarchy");
    file_hierarchy();
    println!("-------------------------");
}

fn visibility() {
    mod my_mod {
        // Items in modules default to private visibility.
        fn private_function() {
            println!("called `my_mod::private_function()`");
        }
    
        // Use the `pub` modifier to override default visibility.
        pub fn function() {
            println!("called `my_mod::function()`");
        }
    
        // Items can access other items in the same module,
        // even when private.
        pub fn indirect_access() {
            print!("called `my_mod::indirect_access()`, that\n> ");
            private_function();
        }
    
        // Modules can also be nested
        pub mod nested {
            pub fn function() {
                println!("called `my_mod::nested::function()`");
            }
    
            #[allow(dead_code)]
            fn private_function() {
                println!("called `my_mod::nested::private_function()`");
            }
    
            // Functions declared using `pub(in path)` syntax are only visible
            // within the given path. `path` must be a parent or ancestor module
            // pub(in crate::my_mod) fn public_function_in_my_mod() {
            //     print!("called `my_mod::nested::public_function_in_my_mod()`, that\n> ");
            //     public_function_in_nested();
            // }
    
            // Functions declared using `pub(self)` syntax are only visible within
            // the current module, which is the same as leaving them private
            pub(self) fn public_function_in_nested() {
                println!("called `my_mod::nested::public_function_in_nested()`");
            }
    
            // Functions declared using `pub(super)` syntax are only visible within
            // the parent module
            pub(super) fn public_function_in_super_mod() {
                println!("called `my_mod::nested::public_function_in_super_mod()`");
                public_function_in_nested();
            }
        }
    
        pub fn call_public_function_in_my_mod() {
            print!("called `my_mod::call_public_function_in_my_mod()`, that\n> ");
            // nested::public_function_in_my_mod();
            print!("> ");
            nested::public_function_in_super_mod();
        }
    
        // pub(crate) makes functions visible only within the current crate
        pub(crate) fn public_function_in_crate() {
            println!("called `my_mod::public_function_in_crate()`");
        }
    
        // Nested modules follow the same rules for visibility
        mod private_nested {
            #[allow(dead_code)]
            pub fn function() {
                println!("called `my_mod::private_nested::function()`");
            }
    
            // Private parent items will still restrict the visibility of a child item,
            // even if it is declared as visible within a bigger scope.
            #[allow(dead_code)]
            pub(crate) fn restricted_function() {
                println!("called `my_mod::private_nested::restricted_function()`");
            }
        }
    }
    
    fn function() {
        println!("called `function()`");
    }

    // Modules allow disambiguation between items that have the same name.
    function();
    my_mod::function();

    // Public items, including those inside nested modules, can be
    // accessed from outside the parent module.
    my_mod::indirect_access();
    my_mod::nested::function();
    my_mod::call_public_function_in_my_mod();

    // pub(crate) items can be called from anywhere in the same crate
    my_mod::public_function_in_crate();

    // pub(in path) items can only be called from within the module specified
    // Error! function `public_function_in_my_mod` is private
    //my_mod::nested::public_function_in_my_mod();

    // Private items of a module cannot be directly accessed, even if
    // nested in a public module:

    // Error! `private_function` is private
    //my_mod::private_function();

    // Error! `private_function` is private
    //my_mod::nested::private_function();

    // Error! `private_nested` is a private module
    //my_mod::private_nested::function();

    // Error! `private_nested` is a private module
    //my_mod::private_nested::restricted_function();
}

fn struct_visibility() {
    mod my {
        pub struct OpenBox<T> {
            pub contents: T,
        }

        pub struct ClosedBox<T> {
            _contents: T,
        }

        impl<T> ClosedBox<T> {
            pub fn new(contents: T) -> ClosedBox<T> {
                ClosedBox {
                    _contents: contents,
                }
            }
        }
    }

    let open_box = my::OpenBox { contents: "public information" };

    println!("The open box contains: {}", open_box.contents);

    // Public structs with private fields cannot be constructed using field names.
    // Error! 'ClosedBox' has private fields
    // let closed_box = my::ClosedBox { contents: "classified information" };

    // However, structs with private fields can be created using public constructors
    let _closed_box = my::ClosedBox::new("classified information");

    // and the private fields of a public struct cannot be accessed.
    // Error! The 'contents' field is private
    // println!("The closed box contains: {}", _closed_box.contents);
}

fn use_declaration() {
    fn function() {
        println!("called 'function()'");
    }

    mod deeply {
        pub mod nested {
            pub fn function() {
                println!("called 'deeply::nested::function()");
            }
        }
    }

    use deeply::nested::function as other_function;

    other_function();

    println!("Entering block");
    {
        use deeply::nested::function;

        function();

        println!("Leaving block");
    }

    function();
}

fn super_and_self() {
    mod root {
        fn function() {
            println!("called 'function()'");
        }

        mod cool {
            pub fn function() {
                println!("called 'cool::function()'");
            }
        }

        pub mod my {
            fn function() {
                println!("called 'my::function()'");
            }

            mod cool {
                pub fn function() {
                    println!("called 'my::cool::function()'");
                }
            }

            pub fn indirect_call() {
                print!("called 'my::indirect_call()', that\n> ");

                // the 'self' keyword refers to the current module scope
                self::function();
                function();

                self::cool::function();

                // the 'super' keyword refers to the parent scope
                super::function();

                {
                    use super::cool::function as root_function;
                    root_function();
                }
            }
        }
    }

    root::my::indirect_call();
}

mod my;

fn file_hierarchy() {
    fn function() {
        println!("called 'function()'");
    }

    my::function();

    function();

    my::indirect_access();

    my::nested::function();
}
