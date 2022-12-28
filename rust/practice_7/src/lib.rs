pub mod client;

pub mod network;

pub mod outermost {
    pub fn middle_function() {
        println!("outermost::middle_function");
    }

    pub fn middle_secret_function() {
        println!("outermost::middle_secret_function");
    }

    pub mod inside {
        pub fn inner_function() {
            println!("outermost::inside::inner_function");
        }

        pub fn secret_function() {
            println!("outermost::inside::secret_function");
        }
    }
}

pub fn try_me() {
    outermost::middle_function();
    outermost::middle_secret_function();
    outermost::inside::inner_function();
    outermost::inside::secret_function();
}

#[cfg(test)]
mod tests {
    use super::client;

    #[test]
    fn it_works() {
        client::connect();
    }
}
