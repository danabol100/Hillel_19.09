const user = {
  contacts: [
    {
      name: "Kyrylo",
      phone: "9233223",
      email: "Kyrylo@sjdf.com",
    },
    {
      name: "Alex",
      phone: "00934323",
      email: "Alex@com.com",
    },
    {
      name: "Viola",
      phone: "111223131",
      email: "Viola@com.com",
    },
  ],
  addContact(contact) {
    user.contacts.push(contact);
  },
  findContact(name) {
    const findObject = user.contacts.filter(function (elem) {
      return elem.name === name;
    });
    console.log(findObject);
    return findObject;
  },
};
const newContact = { name: "newUser", phone: "Потерял", email: NaN };
user.addContact(newContact);
user.findContact("Alex");
console.log(user);
