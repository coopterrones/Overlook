import {expect} from 'chai';
import User from '../src/user';

describe ('User class', () => {
  let user1, user2, user3;

  beforeEach(() => {
    user1 = new User(1, 'Olga Morgan');
    user2 = new User(2, 'Elle Li');
    user3 = new User(3, 'Cooper Terrones');
  })
  it('should be a function', function () {
    expect(User).to.be.a('function');
  })

  it('should have an id', function () {
    expect(user1.id).to.equal(1);
  })

  it('should be able to have another id', function () {
    expect(user2.id).to.equal(2);
  })

  it('should have a name', function () {
    expect(user1.name).to.equal('Olga Morgan');
  })

  it('should be able to have another name', function () {
    expect(user2.name).to.equal('Elle Li');
  })
})
