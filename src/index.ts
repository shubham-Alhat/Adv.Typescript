console.log("typescript is here..");
console.log("hello brother..");

// classes in Ts

class User1 {
  // In Ts, we first have to define the parameters and their types before writing constructor.
  email: string;
  code: number;
  private readonly city: string = "Pune";
  constructor(email: string, code: number) {
    this.email = email;
    this.code = code;
    this.city;
  }
}

let shubham = new User1("shubham@gmail.com", 292929);

// Professional way

class User {
  constructor(public email: string, private passcode: number) {
    this.email = email;
    this.passcode = passcode;
  }
}

// Getter and setter in Ts

class Car {
  constructor(protected model: string, price: number) {}

  get price(): number {
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
  carInsurance: boolean = true;
  anyFun() {
    this.model = 
  }

}