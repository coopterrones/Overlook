class User {
  constructor(id, name, userData, roomData, bookingData) {
    this.id = id;
    this.name = name;
    this.users = userData;
    this.rooms = roomData;
    this.bookings = bookingData;
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

}

export default User;
