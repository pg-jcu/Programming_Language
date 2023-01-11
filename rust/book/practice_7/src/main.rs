extern crate practice_7;

enum TrafficLight {
  Red,
  Yellow,
  Green,
}

use TrafficLight::{Red, Yellow};
// use TrafficLight::*;

fn main() {
  practice_7::client::connect();
  practice_7::network::connect();
  practice_7::network::server::connect();
  practice_7::try_me();
}