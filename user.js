// Manage user data and operations
const users = process.env.USER_DATA ? JSON.parse(process.env.USER_DATA) : [];

const createUser = (username, password) => {
  const newUser = {
    id: users.length + 1,
    username,
    password,
  };
  users.push(newUser);
  return newUser;
};

const updateUser = (id, username, password) => {
  const user = users.find((user) => user.id === id);
  if (user) {
    user.username = username ?? user.username;
    user.password = password ?? user.password;
  }
  return user;
};

const deleteUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
  return null;
};

const listUsersWithFilter = (filter) => {
  return users.filter((user) => {
    return Object.keys(filter).every((key) => user[key] === filter[key]);
  });
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  listUsersWithFilter,
};
