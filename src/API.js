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
    .then(data => data.bookingData);
    .catch(error => console.log(error.message));
  }
}
