class User {
  constructor(id, name) {
  this.id = id;
  this.name = name;
  }

  userLogin(username, password, users) {
    let splitUsername = username.split('customer');
    const userInfo = users.find((user) => {
      if (password === 'overlook2020' && splitUsername[1] < 51) {
        return user.id === parseInt(splitUsername[1]);
      } else if (password === 'overlook2020' && username === 'manager')
        return user.id === 'manager';
      else {
        return undefined;
      }
    })
    return userInfo ? userInfo : 'Please enter a valid username and password.';
  }

}

export default User;
