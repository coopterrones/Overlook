// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
// // An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'
import './images/user.png';
import Customer from '../src/Customer';
import Manager from '../src/Manager';
import {fetchAPI} from '../src/API';

let users;
let rooms;
let bookings;
let customer;
let manager;

function createData() {
  const fetchedUserData = fetchAPI.fetchUsers();
  const fetchedRoomData = fetchAPI.fetchRooms();
  const fetchedBookingData = fetchAPI.fetchBookings();
  Promise.all([fetchedUserData, fetchedRoomData, fetchedBookingData]).then(values => {
    users = values[0];
    rooms = values[1];
    bookings = values[2];
  })
}

window.onload = createData(); 
