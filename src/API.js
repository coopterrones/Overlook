let fetchAPI = {
  fetchUsers() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
      .then(response => response.json())
      // .then(data => data.userData)
      .catch(error => console.log(error.message));
  },

  fetchRooms() {
    let fetchedRooms = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
    .then(response => response.json())
    // .then(data => data.roomData)
    .catch(error => console.log(error.message));
    return fetchedRooms;
  },

  fetchBookings() {
    let fetchedBookings = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
    .then(response => response.json())
    // .then(data => data.bookingData)
    .catch(error => console.log(error.message));
    return fetchedBookings;
  },

  deleteBooking(booking) {
    let deletedData = fetch(`https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings/${booking.id}` , {
      method: 'DELETE',
    })
    return deletedData;
  },

  postBooking(booking) {
    let newBooking = fetchApi.buildBookingData(booking);
    let postedData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(newBooking)
      })
      .then(response => response.json())
      .catch(error => console.log(error.message))
    return postedData;
  },

  buildBookingObject(booking) {
    let bookingObject = {
      userID : booking.userID,
      date : booking.date,
      roomNumber : booking.roomNumber
    }
    return bookingObject;
  }
};

export {fetchAPI};
