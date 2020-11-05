import {expect} from 'chai';
import Customer from '../src/customer';

describe('Customer class', () => {
  let customer1, customer2, customer3;

  beforeEach(() => {
    customer1 = new Customer(1, 'John Doe');
    customer2 = new Customer(2, 'Don Joe');
    customer3 = new Customer(3, 'Joseph Donavan');
  })
  it('should be a function', function () {
    expect(Customer).to.be.a('function');
  })
})
