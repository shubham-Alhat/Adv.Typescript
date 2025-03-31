"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CarFactory {
    constructor(carName, model) {
        this.carName = carName;
        this.model = model;
    }
    start(carName) {
        return `${carName} has started..`;
    }
    stop(carName) {
        return `${carName} is stopped..`;
    }
}
class BMW extends CarFactory {
    carSpeed(speed) {
        return `${speed}km/hr.`;
    }
    carMileage(distance) {
        return `${distance}/ltr`;
    }
}
const myCar = new BMW("BMW-Marcy", "x10");
console.log(myCar.start);
