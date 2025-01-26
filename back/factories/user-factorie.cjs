const { fakerES } = require('@faker-js/faker');
const bcrypt = require('bcrypt');

const generateUsers = async (count) => {
  const users = [];

  for (let i = 0; i < count; i++) {
    const password = await bcrypt.hash('12345', 10);
    const user = {
      dni: fakerES.string.numeric(8) + fakerES.string.alpha({ length: 1, casing: 'upper' }),
      first_name: fakerES.person.firstName(),
      last_name: fakerES.person.lastName(),
      email: fakerES.internet.email(),
      password: password,
      phone: fakerES.phone.number('+34 6########'),
      birth_date: fakerES.date.past({ years: 30 }).toISOString().split('T')[0],
      gender: fakerES.helpers.arrayElement(['Male', 'Female', 'Other']),
      profile_picture: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null
    };
    users.push(user);
  }

  return users;
};

module.exports = { generateUsers };
