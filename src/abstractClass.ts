abstract class CarFactory {
  constructor(public carName: string, public model: string) {}

  start(carName: string): string {
    return `${carName} has started..`;
  }

  stop(carName: string): string {
    return `${carName} is stopped..`;
  }

  abstract carSpeed(speed: number): string;
  abstract carMileage(distance: number): string;
}

class BMW extends CarFactory {
  carSpeed(speed: number): string {
    return `${speed}km/hr.`;
  }

  carMileage(distance: number): string {
    return `${distance}/ltr`;
  }
}

const myCar = new BMW("BMW-Marcy", "x10");

console.log(myCar.start);

class Parent {
  constructor(public name: string) {}
}

class Child extends Parent {
  constructor(public name: string, public age: number) {
    super(name);
    this.name = name;
    this.age = age;
  }
}

const newChild = new Child("shubham", 22);

export {};
