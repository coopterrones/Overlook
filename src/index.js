// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
// // An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'
// import './images/user.png';
import Customer from './Customer';
import Manager from './Manager';
import {fetchAPI} from './API';

let userData;
let roomData;
let bookingData;
let customer;
let manager;
let date;

Promise.all([fetchAPI.fetchUsers(), fetchAPI.fetchRooms(), fetchAPI.fetchBookings()]).then(values => {
  userData = values[0]['users'];
  roomData = values[1]['rooms'];
  bookingData = values[2]['bookings'];
});


let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();

today = yyyy + '/' + mm + '/' + dd;

const loginButton = document.querySelector('.login-button');
const clearButton = document.querySelector('.clear-button');
const usernameInput = document.querySelector('.username-input');
const passwordInput = document.querySelector('.password-input');
const loginScreen = document.querySelector('.login-screen');
const customerDashboard = document.querySelector('.customer-view');
const customerBookingArea = document.querySelector('.customer-bookings-area');
const managerBookingArea = document.querySelector('.manager-bookings-area');
const managerDashboard = document.querySelector('.manager-view');
const customerName = document.querySelector('.customer-name');
const managerName = document.querySelector('.manager-name');
const customerDateInput = document.querySelector('.customer-calendar-dropdown');
const managerDateInput = document.querySelector('.manager-calendar-dropdown');
const customerAvailableRooms = document.querySelector('.customer-available-rooms');
const managerAvailableRooms = document.querySelector('.manager-available-rooms');
const customerBookings = document.querySelector('.customer-bookings');
const customerRoomTypeInput = document.getElementById('roomTypes-customer');
const managerRoomTypeInput = document.getElementById('roomTypes-manager');

loginButton.addEventListener('click', userLogin);
clearButton.addEventListener('click', clearInputs);
customerDateInput.addEventListener('input', updateCustomerAvailableRooms);
managerDateInput.addEventListener('input', updateManagerAvailableRooms);
customerRoomTypeInput.addEventListener('change', filterCustomerRoomsByType);
managerRoomTypeInput.addEventListener('change', filterManagerRoomsByType);

function userLogin() {
  let user;
  const username = usernameInput.value;
  const password = passwordInput.value;
  let splitUsername = username.split('customer');
  if (password === 'overlook2020' && splitUsername[0] === '' && splitUsername[1] < 51) {
    user = userData.find((user) => {return user.id === parseInt(splitUsername[1])})
    createCustomer(user);
    displayCustomerDashboard();
  } else if (password === 'overlook2020' && splitUsername[0] === 'manager') {
    user = new Manager(1, 'Cooper Pooper', userData, roomData, bookingData);
    createManager(user);
    displayManagerDashboard();
  } else {
    const user = undefined;
  }
  clearInputs(usernameInput);
  clearInputs(passwordInput);
  return user ? user : alert('Please enter a valid username and password.');
};

function createCustomer(userInfo) {
  customer = new Customer(userInfo.id, userInfo.name, roomData, bookingData);
};

function createManager(user) {
  manager = user;
}

function displayCustomerDashboard() {
  loginScreen.classList.add('hidden');
  customerDashboard.classList.remove('hidden');
  customerBookingArea.classList.remove('hidden');
  createCustomerDashboard();

}

function displayManagerDashboard() {
  loginScreen.classList.add('hidden');
  managerDashboard.classList.remove('hidden');
  managerBookingArea.classList.remove('hidden');
  createManagerDashboard();
}

function updateCustomerAvailableRooms() {
  customerAvailableRooms.innerText = '';
  let date = customerDateInput.value.replace(/-/g, "/");
  const allAvailableRooms = customer.searchAvailableRoomsByDate(date);
  displayAvailableRooms(date, customer);
}

function updateManagerAvailableRooms() {
  managerAvailableRooms.innerText = '';
  let date = managerDateInput.value.replace(/-/g, "/");
  const allAvailableRooms = manager.searchAvailableRoomsByDate(date);
  displayAvailableRooms(date, manager);
}

function clearInputs(input) {
  usernameInput.value = '';
  passwordInput.value = '';
}

function createCustomerDashboard() {
  customerName.innerText = customer.name;
  displayAvailableRooms(today, customer);
  getCustomerBookings();
}

function createManagerDashboard() {
  managerName.innerText = manager.name;
  displayAvailableRooms(today, manager);
}

function displayAvailableRooms(date, user) {
  if(user === customer) {
    const allAvailableRooms = user.searchAvailableRoomsByDate(date);
    allAvailableRooms.forEach((room) => {
      let roomInfo = `
        <p>Room Number: ${room.number}</p>
        <p>Type: ${room.roomType}</p>
        <p>Bidet: ${room.bidet}</p>
        <p>Bed Size: ${room.bedSize}</p>
        <p>Beds: ${room.numBeds}</p>
        <p>Cost Per Night: $${room.costPerNight}</p>
      `
      customerAvailableRooms.insertAdjacentHTML('beforeend', roomInfo);
    })
  } else if (user === manager) {
    const allAvailableRooms = user.searchAvailableRoomsByDate(date);
    allAvailableRooms.forEach((room) => {
      let roomInfo = `
        <p>Room Number: ${room.number}</p>
        <p>Type: ${room.roomType}</p>
        <p>Bidet: ${room.bidet}</p>
        <p>Bed Size: ${room.bedSize}</p>
        <p>Beds: ${room.numBeds}</p>
        <p>Cost Per Night: $${room.costPerNight}</p>
      `
      managerAvailableRooms.insertAdjacentHTML('beforeend', roomInfo);
    })
  }
}

function getCustomerBookings() {
  const allBookings = customer.bookings.reduce((allBookings, booking) => {
    customer.rooms.forEach((room) => {
      if (booking.userID === customer.id && booking.roomNumber === room.number) {
        allBookings.push(booking);
      }
    })
  return allBookings;
  }, [])
  displayCustomerBookings(allBookings);
}

function displayCustomerBookings(bookings) {
  bookings.forEach((booking) => {
    let bookingInfo = `
      <p>Booking Confirmation: ${booking.id}</p>
      <p>Date: ${booking.date}</p>
      <p>Room Number: ${booking.roomNumber}</p>
    `
  customerBookings.insertAdjacentHTML('beforeend', bookingInfo);
  })
}

function filterCustomerRoomsByType() {
  let date = customerDateInput.value.replace(/-/g, "/");
  const allAvailableRooms = customer.searchAvailableRoomsByDate(date);
  let roomTypeSelection = customerRoomTypeInput.options[customerRoomTypeInput.selectedIndex].value;
  const allFilteredRooms = allAvailableRooms.reduce((allFiltered, room) => {
    if (room.roomType === roomTypeSelection) {
      allFiltered.push(room);
    } else if (roomTypeSelection === 'all rooms') {
      allFiltered.push(room);
    }
  return allFiltered;
  }, [])
  displayCustomerFilteredRooms(allFilteredRooms);
}

function filterManagerRoomsByType() {
  let date = managerDateInput.value.replace(/-/g, "/");
  const allAvailableRooms = manager.searchAvailableRoomsByDate(date);
  let roomTypeSelection = managerRoomTypeInput.options[managerRoomTypeInput.selectedIndex].value;
  const allFilteredRooms = allAvailableRooms.reduce((allFiltered, room) => {
    if (room.roomType === roomTypeSelection) {
      allFiltered.push(room);
    } else if (roomTypeSelection === 'all rooms') {
      allFiltered.push(room);
    }
  return allFiltered;
  }, [])
  displayManagerFilteredRooms(allFilteredRooms);
}

function displayCustomerFilteredRooms(allFilteredRooms) {
  customerAvailableRooms.innerHTML = '';
  allFilteredRooms.forEach((room) => {
    let roomInfo = `
    <p>Room Number: ${room.number}</p>
    <p>Type: ${room.roomType}</p>
    <p>Bidet: ${room.bidet}</p>
    <p>Bed Size: ${room.bedSize}</p>
    <p>Beds: ${room.numBeds}</p>
    <p>Cost Per Night: $${room.costPerNight}</p>
    `
    customerAvailableRooms.insertAdjacentHTML('beforeend', roomInfo);
  })
}

function displayManagerFilteredRooms(allFilteredRooms) {
  managerAvailableRooms.innerHTML = '';
  allFilteredRooms.forEach((room) => {
    let roomInfo = `
    <p>Room Number: ${room.number}</p>
    <p>Type: ${room.roomType}</p>
    <p>Bidet: ${room.bidet}</p>
    <p>Bed Size: ${room.bedSize}</p>
    <p>Beds: ${room.numBeds}</p>
    <p>Cost Per Night: $${room.costPerNight}</p>
    `
    managerAvailableRooms.insertAdjacentHTML('beforeend', roomInfo);
  })
}
