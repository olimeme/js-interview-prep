class Observable {
  constructor() {
    this.observer = [];
  }

  subscribe(fn) {
    this.observer.push(fn);
  }

  unsubscribe(fn) {
    this.observer = this.observer.filter((subscriber) => subscriber !== fn);
  }

  notify(data) {
    this.observer.forEach((subscriber) => subscriber(data));
  }
}

const subject = new Observable();

const logger1 = (data) => console.log(`Logger 1: ${data}`);
const logger2 = (data) => console.log(`Logger 2: ${data}`);

subject.subscribe(logger1);
subject.subscribe(logger2);

subject.notify("Hello, observers!");

subject.unsubscribe(logger2);

subject.notify("logger2 has been removed.");
