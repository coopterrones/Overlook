import User from './User';

class Manager extends User{
  constructor(id, name, userData, roomData, bookingData) {
    super(id, name, userData, roomData, bookingData);
    this.totalRevenue = 0;
    this.percentageOccupied = 0;
  }

  getTotalRevenueForDate(date) {
    const totalRevenueForToday = this.bookings.reduce((total, booking) => {
      this.rooms.forEach((room) => {
        if (booking.date === date && booking.roomNumber === room.number) {
          total += room.costPerNight;
        }
      })
      return total;
    }, 0);
    const roundedAmount = totalRevenueForToday.toFixed(2)
    this.totalRevenue = parseFloat(roundedAmount);
  }

  getPercentageOccupied(date) {
    const occupied = this.bookings.reduce((sum, booking) => {
      this.rooms.forEach((room) => {
        if (booking.date === date && booking.roomNumber === room.number) {
          sum += 1;
        }
      })
      return sum;
    }, 0)
    const percentOccupied = this.percentageOccupied = (occupied / this.rooms.length) * 100;
  }

  getCustomerById(id) {
    const splitUsername = id.split('customer');
    const intID = parseInt(splitUsername[1])
    const currentUser = this.users.find((user) => {
      return user.id === intID;
    })
    return currentUser;
  }
}

export default Manager;
