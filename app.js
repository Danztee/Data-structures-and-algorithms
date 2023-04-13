// const names = ["Dan", "Max", "Julie", "Dan"];
// //console.log(names[1]);

// for (const name of names) {
//   //   console.log(name);
// }

// const array1 = ["+234800", "+234801", "+234802", "+234803"];
// const array2 = ["+234802", "+234803", "+234804"];

// array2.forEach((arr) => console.log(arr));

// const find = array1.findIndex((arr) => arr === "+234802");
// console.log(find);

// const ids = new Set();

// ids.add("abc");
// ids.add("1");
// ids.add(false);
// ids.add(1);
// ids.add("1");

// console.log(ids.has(false));

// const person = {
//   name: "Daniel",
//   age: 20,
//   hobbies: ["football", "coding"],
//   greet() {
//     console.log("Hi i am", this.name);
//   },
// };

// delete person.hobbies;
// person.greet();
// console.log();

// const arr = [444, 29393, 2928];
// const names = ["D", "S", "P"];

// const maps = new Map();

// maps.set("rating", 5.2);
// maps.set("falling", false);
// // maps.set(arr);

// maps.set("score", arr);

// const obj = {  [2, 4, 5] [2, 4, 5] [2, 4, 5] }

// // for (const arrs of arr) {
// //   maps.set("score", arrs);
// // }
// console.log(maps);
// // for (const map of maps) {
// //   console.log(map);
// //   const first = map[0];
// //   console.log(first);
// // }

// custom-data-structure linked-list

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = { value: value, next: null };

    if (!this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;

    if (!this.head) {
      this.head = newNode;
    }
  }
}

const linkedList = new LinkedList();

// stopped at 11
