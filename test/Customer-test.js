import {expect} from 'chai';
import Customer from '../src/Customer';

describe('Customer class', () => {
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
  });
  it('should be a function', function () {
    expect(Customer).to.be.a('function');
  });

  it('should have a list of all bookings the customer has made', function () {
    customer1.getUserBookings(customer1.id);

    expect(customer1.myBookings).to.deep.equal([
      {"id":"5fwrgu4i7k55hl6sz","userID":1,"date":"2020/04/22","roomNumber":1,"roomServiceCharges":[]},
      {"id":"5fwrgu4i7k55hl6t5","userID":1,"date":"2020/05/12","roomNumber":2,"roomServiceCharges":[]},
      {"id":"5fwrgu4i7k55hl6t6","userID":1,"date":"2020/05/24","roomNumber":3,"roomServiceCharges":[]},
      {"id":"5fwrgu4i7k55hl6t8","userID":1,"date":"2020/07/15","roomNumber":1,"roomServiceCharges":[]},
    ]);
  });

  it('should be able to get a total amount spent on bookings for a customer', function () {
    customer1.getTotalSpent();

    expect(customer1.totalSpent).to.equal(1685.32);
  });
})
