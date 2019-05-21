'use strict';

class Car {
  constructor(name) {
    this.name = name;
    this.wheels = 4;
  }

  drive() {
    return 'Moving Forward';
  }

  stop() {
    return 'Stopping';
  }
}

class Motorcycle {
  constructor(name) {
    this.name = name;
    this.wheels = 2;
  }

  drive() {
    return 'Moving Forward';
  }

  stop() {
    return 'Stopping';
  }

  wheelie() {
    return 'Wheee!';
  }
}

module.exports = {Car, Motorcycle};