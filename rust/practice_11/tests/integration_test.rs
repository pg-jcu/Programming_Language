extern crate practice_11;

mod common;

#[test]
fn it_adds() {
  common::setup();
  assert_eq!(4, practice_11::add(2, 2));
}