const users = [
  {
    id: 1,
    username: "user1",
    password: "password1",
  },
  {
    id: 2,
    username: "user2",
    password: "password2",
  },
];

const authenticateUser = (username, password) => {
  const user = users.find(
    (user) => user.username === username && user.password === password,
  );
  return user && { id: user.id, username: user.username };
};

module.exports = {
  authenticateUser,
};
