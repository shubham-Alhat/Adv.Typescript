function detection(val: string | number) {
  if (typeof val === "string") {
    return val.toUpperCase();
  }
  return val.toFixed(3);
}

// Now these code you will write a lot in future.

function getId(id: string | null) {
  if (!id) {
    console.log("Database dont provided any id.");
    return;
  }

  return id.toUpperCase();
}

// `in` operator in narrowing

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdmin(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
  return account.name;
}

// Narrowing with `instanceof` operator.

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

// Norrowing Using type predicates

type Fish = {
  swim: () => void;
};

type Bird = {
  fly: () => void;
};

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    console.log("Fish food");
  } else {
    pet;
    console.log("Bird food");
  }
}

// discriminated unions

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  length: number;
  breadth: number;
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius;
  }
  if (shape.kind === "rectangle") {
    return shape.breadth + 74;
  }
  return shape.side * shape.side; // it will gave an error but if put recatngle check, it wont
}

// Exhaustedcheck and never using above example

function getShape(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius;
    case "square":
      return shape.side * shape.side;
    case "rectangle":
      return shape.length * shape.breadth;
    default:
      const defaultShape: never = shape;
      return defaultShape;
  }
}
