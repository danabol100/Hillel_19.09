const users = {
  name: "Kyrylo",
  age: 20,
  city: "Varna",
  getInfo: function () {
    console.log(`name: ${users.name}, age: ${users.age}, city: ${users.city}`);
  },
};

users.getInfo();

// функция

// function getInfo(object) {
//   console.log(`name: ${object.name}, age: ${object.age}, city: ${object.city}`);
// }

// getInfo(users);
