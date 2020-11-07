let fetchAPI = {
  fetchUsers() {
    let fetchedUserData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
    .then(response => response.josn());
    .then(data => data.userData);
    .catch(error => console.log(error.message));
  },

  fetchBookings() {
    let fetchedBookingsData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings');
    .then(response => response.json());
    .then(data => data.bookingsData);
    .catch(error => console.log(error.message));
  },

  fetchRoomdata() {
    let fetchedRoomData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms');
    .then(response => response.json());
    .then(data => data.roomData);
    .catch(error => console.log(error.message));
  },

  postBooking(booking) {
    fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(booking),
    })
      .then(response => response.json());
      .catch(err => console.log(err.message));
  },

  deleteBooking(bookingID) {
    fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(bookingID),
    })
      .then(response => response.json());
      .catch(err => console.log(err.message));
  },
}
