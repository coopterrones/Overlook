import {expect} from 'chai';
import User from '../src/user';

describe ('User class', () => {
  let userData;
  let user1, user2, user3;
  let manager;

  beforeEach(() => {
    user1 = new User(1, 'Olga Morgan');
    user2 = new User(2, 'Elle Li');
    user3 = new User(3, 'Cooper Terrones');
    manager = new User('manager', 'John Wick');
    userData = [user1, user2, user3, manager];
  });
  it('should be a function', function () {
    expect(User).to.be.a('function');
  });

  it('should have an id', function () {
    expect(user1.id).to.equal(1);
  });

  it('should be able to have another id', function () {
    expect(user2.id).to.equal(2);
  });

  it('should have a name', function () {
    expect(user1.name).to.equal('Olga Morgan');
  });

  it('should be able to have another name', function () {
    expect(user2.name).to.equal('Elle Li');
  });

  it('should be able to log into our application as a user', function () {
    expect(user1.userLogin('customer1', 'overlook2020', userData)).to.equal(user1);
  });

  it('should be able to log in as a different user', function () {
    expect(user3.userLogin('customer3', 'overlook2020', userData)).to.equal(user3);
  });

  it('should only be able to log in when a correct password is provided', function () {
    expect(user2.userLogin('customer2', '2020', userData)).to.equal('Please enter a valid username and password.')
  });

  it('should not be able to log in without a password', function () {
    expect(user1.userLogin('customer1', undefined, userData)).to.equal('Please enter a valid username and password.')
  });

  it('should be able to log in as a manager', function () {
    expect(manager.userLogin('manager', 'overlook2020', userData)).to.equal(manager);
  });

})
