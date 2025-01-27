const { fakerES } = require('@faker-js/faker');
const bcrypt = require('bcrypt');

const generateUsers = async (count) => {
  const users = [];

  for (let i = 0; i < count; i++) {
    const password = await bcrypt.hash('12345', 10);
    const user = {
      code: fakerES.string.alphanumeric(10),
      last_name: fakerES.person.lastName(),
      first_name: fakerES.person.firstName(),
      nrp: fakerES.string.numeric(6),
      dni: fakerES.string.numeric(8) + fakerES.string.alpha({ length: 1, casing: 'upper' }),
      abbreviation: fakerES.string.alpha({ length: 3, casing: 'upper' }),
      birth_date: fakerES.date.past({ years: 30 }).toISOString().split('T')[0],
      gender: fakerES.helpers.arrayElement(['Male', 'Female', 'Other']),
      title: fakerES.person.jobTitle(),
      address: fakerES.location.streetAddress(),
      city: fakerES.location.city(),
      postal_code: fakerES.location.zipCode(),
      province: fakerES.location.state(),
      phone_rp: fakerES.phone.number('+34 6########'),
      specialty: fakerES.person.jobType(),
      body: fakerES.company.name(),
      department: fakerES.commerce.department(),
      admission_date: fakerES.date.past({ years: 5 }).toISOString().split('T')[0],
      leave_date: fakerES.helpers.maybe(() => fakerES.date.recent().toISOString().split('T')[0], { probability: 0.2 }),
      email: fakerES.internet.email(),
      corporate_email: fakerES.internet.email(),
      password: password,
      phone: fakerES.phone.number('+34 6########'),
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
