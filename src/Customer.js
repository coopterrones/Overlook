import User from './User';

class Customer extends User {
  constructor(id, name, roomData, bookingData) {
    super(id, name, [], roomData, bookingData);
    this.myBookings = [];
    this.totalSpent = 0;
  };

  getUserBookings(id) {
    const userBookings = this.bookings.filter((booking) => {
      return booking.userID === id;
    })
    this.myBookings = userBookings;
  };

};

export default Customer;
