console.log("typescript is here..");
console.log("hello brother..");

// classes in Ts

class User {
  // In Ts, we first have to define the parameters and their types before writing constructor.
  email: string;
  code: number;
  readonly city: string = "Pune";
  constructor(email: string, code: number) {
    this.email = email;
    this.code = code;
  }
}

let shubham = new User("shubham@gmail.com", 292929);
