import User from './User';

class Customer extends User {
  constructor(id, name, userData, roomData, bookingData) {
    super(id, name, userData, roomData, bookingData);
    this.myBookings = [];
    this.totalSpent = 0;
  }

  getUserBookings(id) {
    const userBookings = this.bookings.filter((booking) => {
      return booking.userID === id;
    })
    this.myBookings = userBookings;
  }

  getTotalSpent() {
    const amount = this.bookings.reduce((total, booking) => {
      this.rooms.forEach((room) => {
        if (booking.userID === this.id && room.number === booking.roomNumber) {
          total += room.costPerNight;
        }
      });
    return total;
  }, 0);
    const roundedAmount = amount.toFixed(2);
    this.totalSpent = parseFloat(roundedAmount);
  }
}

export default Customer;
