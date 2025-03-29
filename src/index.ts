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

// In Js there is #
