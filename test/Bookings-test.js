import {expect} from 'chai';
import Booking from '../src/bookings';

describe('Bookings class', () => {
  let booking1, booking2, booking3;


  beforeEach(() => {
    booking1 = new Booking('5fwrgu4i7k55hl6sz', 1, '2020/12/25', 1);
    booking2 = new Booking('5fwrgu4i7k55hl6t5', 2, '2020/12/26', 2);
    booking3 = new Booking('5fwrgu4i7k55hl6t6', 3, '2020/12/27', 3);
  });

  it('should be a function', function () {
    expect(Booking).to.be.a('function');
  });

  it('should have a booking Id', function () {
    expect(booking1.id).to.equal('5fwrgu4i7k55hl6sz');
  });

  it('should have a userID for the user who has booked the room', function () {
    expect(booking2.userID).to.equal(2);
  });

  it('should have a date', function () {
    expect(booking3.date).to.equal('2020/12/27');
  });

  it('should be have a room numver', function () {
    expect(booking1.roomNumber).to.equal(1);
  });

});
