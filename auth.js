const users = process.env.USER_DATA ? JSON.parse(process.env.USER_DATA) : [];

const authenticateUser = (username, password) => {
  const user = users.find(
    (user) => user.username === username && user.password === password,
  );
  return user && { id: user.id, username: user.username };
};

module.exports = {
  authenticateUser,
};
