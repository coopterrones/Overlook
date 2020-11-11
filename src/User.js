class User {
  constructor(id, name, userData, roomData, bookingData) {
    this.id = id;
    this.name = name;
    this.users = userData;
    this.rooms = roomData;
    this.bookings = bookingData;
  };

  searchAvailableRoomsByDate(date) {
    let roomsBooked = this.bookings.reduce((allBookedRooms, roomBooked ) => {
      if (date === roomBooked.date) {
        allBookedRooms.push(roomBooked.roomNumber);
      }
      return allBookedRooms;
    }, [])
    const roomsAvailable = this.rooms.filter((room) => {
      return !roomsBooked.includes(room.number);
    });
    const noRoomsAvailable =  'We are very sorry. No available rooms on that date. Please modify your search.';
    return roomsAvailable.length > 0 ? roomsAvailable : noRoomsAvailable;
  };

  filterRoomsByType(roomType, availableRooms) {
    let matchedRooms = availableRooms.filter((room) => {
      return room.roomType === roomType;
    })
    const noRoomsAvailable = 'We are very sorry. No available rooms on that date. Please modify your search.';
    return matchedRooms.length > 0 ? matchedRooms : noRoomsAvailable;
  };

  getCustomerTotalSpent(customer) {
    const amount = this.bookings.reduce((total, booking) => {
      this.rooms.forEach((room) => {
        if (booking.userID === customer.id && room.number === booking.roomNumber) {
          total += room.costPerNight;
        }
      });
    return total;
  }, 0);
    const roundedAmount = amount.toFixed(2);
    return parseFloat(roundedAmount);
  };

  userLogin(username, password, users) {
    let splitUsername = username.split('customer');
       const userInfo = users.find((user) => {
         if (password === 'overlook2020' && splitUsername[1] < 51) {
           return user.id === parseInt(splitUsername[1]);
         } else if (password === 'overlook2020' && username === 'manager')
           return user.id === 'manager';
         else {
           return undefined;
         }
       })
       return userInfo ? userInfo : 'Please enter a valid username and password.';
  };

};

export default User;
