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

type Shape = Circle | Square;

function getTrueShape(shape: Circle | Square) {
  if (shape.kind === "circle") {
    return (shape.radius * 21) / 7;
  }
  return shape.side * 4;
}
