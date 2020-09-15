// Null Object Design Pattern
// in this pattern we create a null object to have a method and property but az null
// this pattern helped us to avoid null check in rest of code

class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  hasAccess() {
    return this.name === "Bob";
  }
}

class NullUser {
  constructor() {
    this.id = -1;
    this.name = "Guest";
  }
  hasAccess() {
    return false;
  }
}

const users = [new User(1, "Bob"), new User(2, "John")];

function getUser(id) {
  const user = users.find((user) => user.id === id);
  if (user == null) return new NullUser();
  else return user;
}

// in this function we can avoid null checking because we using null object pattern
function printUser(id) {
  const user = getUser(id);

  let name = "Guest";
  if (user != null && user.name != null) name = user.name;
  console.log("Hello " + name);

  if (user != null && user.hasAccess != null && user.hasAccess()) {
    console.log("You have access");
  } else {
    console.log("You are not allowed here");
  }
}
