let userName: string = "Mildred";

let isValid: boolean = true;
let age: number = 44;

//union types - or
let userID: string | number = "ab1";

//object types
let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};
user = {
  name: "Mil",
  age: 22,
  isAdmin: true,
  id: "abc",
};

//array type
let hobbies: string[];
hobbies = ["sleeping", "cooking", "reading"];
