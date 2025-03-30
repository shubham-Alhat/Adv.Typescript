![alt text](image.png)

# Adv. Typescript

<hr>

#### Project setup.

1. run the following cmd. this will generate **config.ts** file.

```
tsc --init
```

2. Now we have to create a project so.

```
npm init -y
```

this will generate **package.json file** and `-y` is that it will not ask Questions. this file is for installing other packages.

3. Create a new file **index.html**.
   Now, here we need to load our script tag and` src=""`.
   But there is no any file.

4. Create two folders, **src** and **dist**.
   this below cmd is for windows.
   For mac or linux run `mkdir src dist`.

```
mkdir src, dist
```

<hr>

**IMP NOTE -**
The `src` folder contains the original source code of your project.

This is where you write uncompiled code (e.g., TypeScript, SCSS, JSX, or ES6 JavaScript).

The `dist` folder contains the final compiled version of your code.

It is generated automatically when you build your project (e.g., with Webpack, Vite, or Angular CLI).

This folder contains **optimized** and **minified** files ready for deployment.

This folder structure may seem like -

```bash
/dist
  ├── bundle.js
  ├── styles.css
  ├── index.html
```

#### Why Do We Separate src and dist?

✅ Keeps the project clean. you only edit src, and dist is auto-generated.

✅ Faster deployments. you only upload dist to production.

✅ Improves performance. minified/optimized code in dist.

✅ Works with build tools. Webpack, Babel, and TypeScript output to dist.

<hr>

5. Create a file inside src. `index.ts`.
   where we will write Ts code.

6. But we also have to load script tag in **index.html**. and we know that at the end, **Ts** is get converted into **Js**.

7. Here, we can create index.js file manually inside dist folder or it will get autogenerate when index.ts file get compiled. Right????

_But who is going to tell that generate js file **inside the dist folder**._
----> **tsconfig.json**.

If you dont create manually, write some code in src/index.ts and run the cmd `tsc -w`. But first config the _tsconfig.json as shown below. so that the compiled file will generate in **dist** folder_.

Here we create manually & load script tag with `src="./dist/index.js"` in **index.html**.

8. Go to **tsconfig.json**, 62 line no. comment in the `outDir` and give folder `dist`.

```json
"outDir": "./dist" /* Specify an output folder for all emitted files. */,
```

It will actually scan whole code base and whenever there is compilation, the compiled ones will store in `dist` folder.

9. Lets check it.Run the following cmd

```
tsc -w
```

**Watch mode ON.**
_This will watch our code simultanously and compiled it as well._

So, when i change index.ts file and save it. changes get reflect in **index.js** inside _dist_ folder.

<hr>

#### How to start it on server.

Now, we know that to start a server, we need **index.html** which we have.

There are two ways to do this.

1. Go to index.html > Right click > Open with live server. (_Make sure your script tag is loaded._)

2. Install Package name **lite server**.

a. Run the following cmd.

```bash
npm i lite-server
```

b. Create scripts. Go to **package.json**.
_remove the test script_

![alt text](image-1.png)

_Add the following script._

![alt text](image-2.png)

c. Now run following cmd.

```bash
npm start
```

this will start live local host server.

<hr>

#### Here, we use our Live server. (1st way)

#### IMP Note : **Make sure you have watch mode ON as well. So that Ts will compiled whenever there will be changes.**

<hr>

### Classes in Ts.

_In Ts, we first have to define the parameters and their types before writing constructor._

```typescript
class User {
  // In Ts, we first have to define the parameters and their types before writing constructor.
  email: string;
  code: number;
  city: string = "Pune";
  constructor(email: string, code: number) {
    this.email = email;
    this.code = code;
  }
}

let shubham = new User("shubham@gmail.com", 292929);

shubham.city = "New york";
```

**From above code, `city` variable needs a initializer because we dont add it to constructor.**

_I can even apply `readonly` property to those variable._

For **city** variable, there we cannot reassign but it is accessible there.
But if we dont want to accessible, we can use `private` keyword.

_see the code below._

```typescript
class User {
  // here we use private keyword
  email: string;
  code: number;
  private city: string = "Pune";
  constructor(email: string, code: number) {
    this.email = email;
    this.code = code;
  }
}

let shubham = new User("shubham@gmail.com", 292929);

shubham.city; // Throws error here. because we can access here. we can only access in class "User".
```

#### Access modifiers. private, public and protected.

**This `access modifiers` are actually limit our accessibility towards properties.**

There is another modifier "public" which actually does opposite of "private".
**If we dont mention any othem, the variable is in public mode by default.**

**In javacsript world, it actually `#` which used to act as private.**

```javascript
class Person {
  #name; // Private field

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name; // Accessing private field inside the class
  }
}

const person = new Person("Swayam");
console.log(person.getName()); // ✅ Works: Outputs "Swayam"

console.log(person.#name); // ❌ Error: Private field cannot be accessed outside the class
```

<hr>

#### protected access modifier.

This is where inheritance also comes in action.

![alt text](image-5.png)

```typescript
class Car {
  constructor(protected model: string, price: number) {} // ------- protected keyword is used.

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
    this.model = "Mercedez";
  }
}
```

Here, **protected** keyword actually allow properties to access within it own class or its **child** or **inherited** class.

#### Getter & setter in Ts.

It comes when we have to customize the accessiblity of any values. sometimes, if anyone ask _(console logging)_ for password, we dont want but actaully give it modifying or encrypted. this is when our **getter** and **setter** comes in action.

whenever we create any properties in class, get and set method automatically get assign to them.So we can apply set and get methods to any properties in class.

_remind the `prototype` object we get and there are methods._

**we can apply getter and setter to any variable there in class.**

**Here how we use them in Javascript.**

```javascript
class User {
  constructor(email, password) {
    this.email = email;
    this._password = password; // Using _password to avoid recursion & ✅ Original password is stored here
  }

  get password() {
    return `Encrypted: ${this._password}`;
  }

  set password(value) {
    console.log(`Setting new password: ${value}`);
    this._password = value; // Assigning the new value to _password
  }
}

const user = new User("test@example.com", "12345");

console.log(user.password); // Calls getter → Encrypted: 12345

user.password = "67890"; // Calls setter with value "67890"
console.log(user.password); // Encrypted: 67890
```

For Revision : https://youtu.be/t6vLhF-iSxQ?si=YQKwpK47wbv-Zkse

**Getter and setter are used in classes. A getter is defined with the same name as the property and the get keyword. It does not take parameters because it only returns a modified version of the value, preventing direct access to the original one.**

**A setter is used for updating the property value. It requires exactly one parameter, which represents the new value. The setter is automatically called when we assign a new value to the property, updating it without returning anything.**

![alt text](image-3.png)

<hr>

#### Now, setter and getter in Ts.

In Ts, we first **have to** declared properties before using them.

```typescript
private _price: number;
model: string;
```

Then constructor comes in action.

```typescript
constructor(model: string, price: number) {
    this.model = model;
    this._price = price;
}
```

✅ Fixed & Complete TypeScript Code.

```typescript
class Car {
  model: string;
  private _price: number;

  constructor(model: string, price: number) {
    this.model = model;
    this._price = price;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    if (value < 0) {
      throw new Error("Price cannot be negative");
    }
    this._price = value;
  }
}

const myCar = new Car("Benz", 309999);

console.log(myCar.price); // Calls getter → 309999

myCar.price = 490000; // Calls setter
console.log(myCar.price, "Updated value"); // 490000 Updated value
```

**Remember:** In typescript setter method should not give any return type as it does not return anything.😂🤣

This below image when I assign -ve number to `price` property.

![alt text](image-4.png)

**setter and getter are actually used to deal with private properties and have additional logic to it.**

3:19 --------
