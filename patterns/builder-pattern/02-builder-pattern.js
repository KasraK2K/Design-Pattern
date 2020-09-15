class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

/* ----------------------------------- one ---------------------------------- */
class User {
  constructor(name, age, phone, address) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

class UserBuilder {
  constructor(name) {
    this.user = new User(name);
  }

  setAge(age) {
    this.user.age = age;
    return this;
  }

  setPhone(phone) {
    this.user.phone = phone;
    return this;
  }

  setAddress(address) {
    this.user.address = address;
    return this;
  }

  build() {
    return this.user;
  }
}

let user = new UserBuilder("Bob")
  .setAge(10)
  .setPhone("09123456789")
  .setAddress(new Address("123465", "Main Street, My House"))
  .build();
console.log(user);
/* -------------------------------------------------------------------------- */

/* ----------------------------------- two ---------------------------------- */
class User2 {
  constructor(name, { age, phone, address } = {}) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

let user2 = new User2("Bob", {
  age: 10,
  phone: "09123456789",
  address: new Address("123465", "Main Street, My House"),
});
console.log(user2);
/* -------------------------------------------------------------------------- */
