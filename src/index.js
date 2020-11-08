// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
// // An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'
import './images/user.png';
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



// function createData() {
// };



// window.addEventListener('load', (event) => {
//   createData();
// });

const loginButton = document.querySelector('.login-button');
const clearButton = document.querySelector('.clear-button');
const usernameInput = document.querySelector('.username-input');
const passwordInput = document.querySelector('.password-input');
const loginScreen = document.querySelector('.login-screen');
const customerDashboard = document.querySelector('.customer-view');
const bookingsArea = document.querySelector('.bookings-area');
const managerDashboard = document.querySelector('.manager-view');
const customerName = document.querySelector('.customer-name');
const dateInput = document.querySelector('.calendar-dropdown');

//event Listener login buttons
loginButton.addEventListener('click', userLogin);
clearButton.addEventListener('click', clearInputs);
dateInput.addEventListener('input', updateAvailableRooms);

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
    user = new Manager(1, 'Cooper Pooper', userData, roomData, bookingData)
    createManager();
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

function createManager() {
  manager = new Manager(1, 'Cooper Pooper', userData, roomData, bookingData);
}

function displayCustomerDashboard() {
  loginScreen.classList.add('hidden');
  customerDashboard.classList.remove('hidden');
  bookingsArea.classList.remove('hidden');
  createCustomerDashboard();
}

// function displayManagerDashboard() {
//   loginScreen.classList.add('hidden');
//   managerDashboard.classList.remove('hidden');
//   bookingsArea.classList.remove('hidden');
// }

function updateAvailableRooms() {
  let date = dateInput.value.replace(/-/g, "/");
  const availableRooms = customer.searchAvailableRoomsByDate(date);
}

function clearInputs(input) {
  usernameInput.value = '';
  passwordInput.value = '';
}

function createCustomerDashboard() {
  customerName.innerText = customer.name;
  displayAvailableRooms(today);
}

function displayAvailableRooms(date) {
  const availableRooms = customer.searchAvailableRoomsByDate(date);
}
