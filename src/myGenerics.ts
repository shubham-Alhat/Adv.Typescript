const score: Array<number> = []; // this is another way to create a array.

const names: Array<string> = [];

// Actually where generics is used.

function identityOne(val: number | string): number | string {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

interface Laptop {
  brand: string;
  version: string;
}

function getLaptop<T>(obj: T): T {
  return obj;
}

const laptopDetails: Laptop = getLaptop<Laptop>({
  brand: "HP",
  version: "victus x18",
});

console.log(laptopDetails.brand);
console.log(laptopDetails.version);

// with Array

function getProduct<T>(product: T[]): T {
  // do some database operations
  return product[2];
}

// Arrow function

const getMorePrducts = <T>(product: T[]): T => {
  const myIndex = 4;
  return product[myIndex];
};

// generics `extend` key word.

interface Database {
  username: string;
  password: number;
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): Object {
  return {
    valOne,
    valTwo,
  };
}

anotherFunction(34, { username: "shubham29", password: 1234 });
