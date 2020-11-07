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
}

export default Manager;
