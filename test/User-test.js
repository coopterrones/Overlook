import {expect} from 'chai';
import User from '../src/user';

describe ('User class', () => {
  let userData;
  let user1, user2, user3;
  let manager;
  let roomData;
  let bookingData;

  beforeEach(() => {
    user1 = new User(1, 'Olga Morgan', userData, roomData, bookingData);
    user2 = new User(2, 'Elle Li');
    user3 = new User(3, 'Cooper Terrones');
    manager = new User('manager', 'John Wick');
    userData = [user1, user2, user3, manager];
    roomData = [
      {"number":1,"roomType":"residential suite","bidet":true,"bedSize":"queen","numBeds":1,"costPerNight":358.4},
      {"number":2,"roomType":"suite","bidet":false,"bedSize":"full","numBeds":2,"costPerNight":477.38},
      {"number":3,"roomType":"single room","bidet":false,"bedSize":"king","numBeds":1,"costPerNight":491.14},
      {"number":4,"roomType":"single room","bidet":false,"bedSize":"queen","numBeds":1,"costPerNight":429.44}
    ];
    bookingData = [

      {"id":"5fwrgu4i7k55hl6sz","userID":1,"date":"2020/04/22","roomNumber":1,"roomServiceCharges":[]},
      {"id":"5fwrgu4i7k55hl6t5","userID":1,"date":"2020/05/12","roomNumber":2,"roomServiceCharges":[]},
      {"id":"5fwrgu4i7k55hl6t6","userID":1,"date":"2020/05/24","roomNumber":3,"roomServiceCharges":[]},
      {"id":"5fwrgu4i7k55hl6t7","userID":2,"date":"2020/04/22","roomNumber":2,"roomServiceCharges":[]},
      {"id":"5fwrgu4i7k55hl6t8","userID":2,"date":"2020/06/05","roomNumber":1,"roomServiceCharges":[]},
      {"id":"5fwrgu4i7k55hl6t8","userID":2,"date":"2020/06/05","roomNumber":2,"roomServiceCharges":[]},
      {"id":"5fwrgu4i7k55hl6t8","userID":3,"date":"2020/07/15","roomNumber":3,"roomServiceCharges":[]},
      {"id":"5fwrgu4i7k55hl6t8","userID":3,"date":"2020/09/10","roomNumber":4,"roomServiceCharges":[]},
      {"id":"5fwrgu4i7k55hl6t8","userID":3,"date":"2020/10/24","roomNumber":1,"roomServiceCharges":[]},

    ];

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

  it('should have rooms data', function () {
    expect(user1.roomsData).to.equal()
  })

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

  it('should be able to find available rooms on a given date', function() {
    expect(user1.searchAvailableRoomsByDate('2020/04/22')).to.deep.equal(
      [{"number":3,"roomType":"single room","bidet":false,"bedSize":"king","numBeds":1,"costPerNight":491.14},
      {"number":4,"roomType":"single room","bidet":false,"bedSize":"queen","numBeds":1,"costPerNight":429.44}]);
  });

  
})
