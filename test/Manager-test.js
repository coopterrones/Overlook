import {expect} from 'chai';
import Manager from '../src/Manager';
import Customer from '../src/Customer';

describe('Manager class', () => {
  let customer1, customer2, customer3;
  let userData;
  let user1, user2, user3;
  let manager;
  let roomData;
  let bookingData;

  beforeEach(() => {
    userData = [customer1, customer2, customer3];
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
      {"id":"5fwrgu4i7k55hl6t8","userID":1,"date":"2020/07/15","roomNumber":1,"roomServiceCharges":[]},
      {"id":"5fwrgu4i7k55hl6t8","userID":2,"date":"2020/07/15","roomNumber":2,"roomServiceCharges":[]},
      {"id":"5fwrgu4i7k55hl6t8","userID":3,"date":"2020/07/15","roomNumber":4,"roomServiceCharges":[]},
    ];
    customer1 = new Customer(1, 'John Doe', roomData, bookingData);
    customer2 = new Customer(2, 'Don Joe', roomData, bookingData);
    customer3 = new Customer(3, 'Joseph Donavan', roomData, bookingData);
    manager = new Manager(1, 'Cooper', userData, roomData, bookingData);

  });

  it('should be able to get a total revenue for a given date', function () {
    manager.getTotalRevenueForDate('2020/04/22');

    expect(manager.totalRevenue).to.equal(835.78);
  });

  it('should be able to get a total percentage of rooms occupied when given a date', function () {
    manager.getPercentageOccupied('2020/04/22');

    expect(manager.percentageOccupied).to.equal(50);
  })

});
