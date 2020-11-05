import {expect} from 'chai';
import Room from '../src/room';

describe('Room class', () => {
  let room1, room2, room3;

  beforeEach(() => {
    room1 = new Room(1, 'residential suite', true, 'queen', 1, 358.4);
    room2 = new Room(2, 'suite', false, 'full', 2, 477.38);
    room3 = new Room(3, 'singe room', false, 'king', 1, 491.14);
  });

  it('should be a function', function () {
    expect(Room).to.be.a('function');
  });

  it('should have a room number', function () {
    expect(room1.number).to.equal(1);
  });

  it('should have a room type', function () {
    expect(room2.roomType).to.equal('suite');
  });

  it('should be able to have a bidet', function () {
    expect(room1.bidet).to.equal(true);
  });

  it('should be able to not have a bidet', function () {
    expect(room2.bidet).to.equal(false);
  });

  it('should have a bed size', function () {
    expect(room1.bedSize).to.equal('queen');
  });

  it('should have a cost per night', function () {
    expect(room3.costPerNight).to.equal(491.14);
  });
  
})
