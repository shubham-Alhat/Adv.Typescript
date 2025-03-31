"use strict";
console.log("typescript is here..");
console.log("hello brother..");
// classes in Ts
class User1 {
    constructor(email, code) {
        this.city = "Pune";
        this.email = email;
        this.code = code;
        this.city;
    }
}
let shubham = new User1("shubham@gmail.com", 292929);
// Professional way
class User {
    constructor(email, passcode) {
        this.email = email;
        this.passcode = passcode;
        this.email = email;
        this.passcode = passcode;
    }
}
// Getter and setter in Ts
class Car {
    constructor(model, price) {
        this.model = model;
    }
    get price() {
        return this.price;
    }
    set price(value) {
        this.price = value;
    }
}
const myCar = new Car("Benz", 309999);
console.log(myCar.price);
myCar.price = 490000;
console.log(myCar.price, "Updated value");
class subCar extends Car {
    constructor() {
        super(...arguments);
        this.carInsurance = true;
    }
    anyFun() {
        this.model = "mercediz";
    }
}
