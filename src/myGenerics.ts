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
