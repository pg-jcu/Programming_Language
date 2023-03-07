interface SStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: SStorage<T> = {};

  set(key: string, value: T) {
    this.storage[key] = value;
  }

  remove(key: string) {
    delete this.storage[key];
  }

  get(key: string) {
    return this.storage[key];
  }

  clear() {
    this.storage = {};
  }
}

const stringsStorage = new LocalStorage<string>();
stringsStorage.set("hi", "hi");
stringsStorage.get("hi");

const booleansStorage = new LocalStorage<boolean>();
booleansStorage.set("hello", true);
booleansStorage.get("hello");
