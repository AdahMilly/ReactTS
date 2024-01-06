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

//functions
function add(a: number, b: number): number {
  const res = a + b;
  return res;
}

//custom types - type alias
type Addfn = (a: number, b: number) => number;

//interfaces
interface User {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
}

//merging types
type Admin = {
  permissions: string[];
};
type AppUser = {
  userName: string;
};
type AppAdmin = Admin & AppUser;

//literal types admin/user/editor
let role: 'admin' | 'user' | 'editor';
