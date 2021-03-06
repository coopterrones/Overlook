import './css/base.scss';
import'./images/overlook.png';
import'./images/hotel.png';
import'./images/user.png';
import Customer from './Customer';
import Manager from './Manager';
import {fetchAPI} from './API';

let userData;
let roomData;
let bookingData;
let customer;
let manager;
let date;
let newBooking = {userID: 0, date: '', roomNumber: 0};

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
const customerDashboard = document.querySelector('.customer-layout');
const customerBookingArea = document.querySelector('.customer-bookings-area');
const managerBookingArea = document.querySelector('.manager-bookings-area');
const managerDashboard = document.querySelector('.manager-layout');
const customerName = document.querySelector('.customer-name');
const managerName = document.querySelector('.manager-name');
const customerDateInput = document.querySelector('.customer-calendar-dropdown');
const managerDateInput = document.querySelector('.manager-calendar-dropdown');
const customerAvailableRooms = document.querySelector('.customer-available-rooms');
const managerAvailableRooms = document.querySelector('.manager-available-rooms');
const customerBookings = document.querySelector('.customer-bookings');
const managerBookings = document.querySelector('.manager-bookings');
const customerRoomTypeInput = document.getElementById('roomTypes-customer');
const managerRoomTypeInput = document.getElementById('roomTypes-manager');
const customerSearchInput = document.querySelector('.manager-search-input');
const customerSpentSymbol = document.querySelector('.customer-spent-symbol')
const customerSearchButton = document.querySelector('.manager-search-button');
const customerDollarsSpent = document.querySelector('.customer-dollars-spent');
const customerSpentDecimal = document.querySelector('.customer-amount-decimal');
const customerCentsSpent = document.querySelector('.customer-cents-spent');
const managerSpentSymbol = document.querySelector('.manager-spent-symbol');
const managerDollarsSpent = document.querySelector('.manager-dollars-spent');
const managerSpentDecimal = document.querySelector('.manager-amount-decimal');
const managerCentsSpent = document.querySelector('.manager-cents-spent');
const managerAmountSpentLabel = document.querySelector('.manager-amount-spent-label');
const managerRevenueSymbol = document.querySelector('.manager-revenue-symbol');
const managerRevenueDollars = document.querySelector('.manager-revenue-dollars');
const managerRevenueDecimal = document.querySelector('.manager-revenue-decimal');
const managerRevenueCents = document.querySelector('.manager-revenue-cents');
const managerPercentageOccupiedValue = document.querySelector('.manager-percentage-value');
const managerPercentageOccupiedSymbol = document.querySelector('.manager-percentage-symbol');

loginButton.addEventListener('click', userLogin);
clearButton.addEventListener('click', clearInputs);
customerDateInput.addEventListener('input', updateCustomerAvailableRooms);
managerDateInput.addEventListener('input', updateManagerAvailableRooms);
customerRoomTypeInput.addEventListener('change', filterCustomerRoomsByType);
managerRoomTypeInput.addEventListener('change', filterManagerRoomsByType);
customerSearchButton.addEventListener('click', searchCustomers);
customerAvailableRooms.addEventListener('click', selectARoom);
managerAvailableRooms.addEventListener('click', selectARoom);
managerBookings.addEventListener('click', selectBooking);

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
    user = new Manager(1, 'Manager', userData, roomData, bookingData);
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
};

function displayCustomerDashboard() {
  date = today;
  loginScreen.classList.add('hidden');
  customerDashboard.classList.remove('hidden');
  customerBookingArea.classList.remove('hidden');
  createCustomerDashboard();

}

function displayManagerDashboard() {
  date = today;
  loginScreen.classList.add('hidden');
  managerDashboard.classList.remove('hidden');
  managerBookingArea.classList.remove('hidden');
  createManagerDashboard();
  getManagerRevenue(today);
  getManagerPercentageOccupied(today);
};

function updateCustomerAvailableRooms() {
  customerAvailableRooms.innerText = '';
  date = customerDateInput.value.replace(/-/g, "/");
  const allAvailableRooms = customer.searchAvailableRoomsByDate(date);
  displayAvailableRooms(date, customer);
};

function updateManagerAvailableRooms() {
  managerAvailableRooms.innerText = '';
  date = managerDateInput.value.replace(/-/g, "/");
  const allAvailableRooms = manager.searchAvailableRoomsByDate(date);
  displayAvailableRooms(date, manager);
  updateManagerInfo(date, manager);
};

function clearInputs(input) {
  usernameInput.value = '';
  passwordInput.value = '';
};

function createCustomerDashboard() {
  customerName.innerText = customer.name;
  displayAvailableRooms(today, customer);
  getCustomerBookings();
  getTotalSpent(customer);
};

function createManagerDashboard() {
  displayAvailableRooms(today, manager);
};

function displayAvailableRooms(date, user) {
  if(user === customer) {
    displayCustomerAvailableRooms(date, user);
  } else if (user === manager) {
    displayManagerAvailableRooms(date, user);
  }
}

function displayCustomerAvailableRooms(date, user) {
  const allAvailableRooms = user.searchAvailableRoomsByDate(date);
  if (typeof allAvailableRooms === "string") {
    let roomInfo = `
    <div class="room-card">
      <p> ${allAvailableRooms} </p>
    </div>
    `
  customerAvailableRooms.insertAdjacentHTML('beforeend', roomInfo);
} else {
  allAvailableRooms.forEach((room) => {
    let roomInfo = `
    <div id="${room.number}" class="room-card" tabindex="0">
      <div class="room-card-break-one">
        <p>Room Number: ${room.number}</p>
        <p>Type: ${room.roomType}</p>
        <p>Bidet: ${room.bidet}</p>
      </div>
      <div class="room-card-break-two">
        <p>Bed Size: ${room.bedSize}</p>
        <p>Beds: ${room.numBeds}</p>
        <p>Cost Per Night: $${room.costPerNight}</p>
      </div>
      <button class="book-room-button" type="button" name="button" tabindex="0">Book</button>
    </div>
    `
    customerAvailableRooms.insertAdjacentHTML('beforeend', roomInfo);
    })
  }
}

function displayManagerAvailableRooms(date, user) {
  const allAvailableRooms = user.searchAvailableRoomsByDate(date);
  if (typeof allAvailableRooms === "string") {
    let roomInfo = `
    <div class="room-card">
      <p> ${allAvailableRooms} </p>
    </div>
    `
  managerAvailableRooms.insertAdjacentHTML('beforeend', roomInfo);
  } else {
  allAvailableRooms.forEach((room) => {
    let roomInfo = `
    <div id="${room.number}" class="room-card" tabindex="0">
      <div class="room-card-break-one">
        <p>Room Number: ${room.number}</p>
        <p>Type: ${room.roomType}</p>
        <p>Bidet: ${room.bidet}</p>
      </div>
      <div class="room-card-break-two">
        <p>Bed Size: ${room.bedSize}</p>
        <p>Beds: ${room.numBeds}</p>
        <p>Cost Per Night: $${room.costPerNight}</p>
      </div>
      <button class="book-room-button" type="button" name="button" tabindex="0">Book</button>
    </div>
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
};

function displayCustomerBookings(bookings) {
  bookings.forEach((booking) => {
    let bookingInfo = `
    <div class="booking-card" tabindex="0">
      <p>Booking Confirmation: ${booking.id}</p>
      <p>Date: ${booking.date}</p>
      <p>Room Number: ${booking.roomNumber}</p>
    </div>
    `
  customerBookings.insertAdjacentHTML('beforeend', bookingInfo);
  })
};

function filterCustomerRoomsByType() {
  date = customerDateInput.value.replace(/-/g, "/") || today;
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
};

function filterManagerRoomsByType() {
  date = managerDateInput.value.replace(/-/g, "/") || today;
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
};

function displayCustomerFilteredRooms(allFilteredRooms) {
  customerAvailableRooms.innerHTML = '';
  allFilteredRooms.forEach((room) => {
    let roomInfo = `
    <div id="${room.number}" class="room-card" tabindex="0">
      <div class="room-card-break-one">
        <p>Room Number: ${room.number}</p>
        <p>Type: ${room.roomType}</p>
        <p>Bidet: ${room.bidet}</p>
      </div>
      <div class="room-card-break-two">
        <p>Bed Size: ${room.bedSize}</p>
        <p>Beds: ${room.numBeds}</p>
        <p>Cost Per Night: $${room.costPerNight}</p>
      </div>
      <button class="book-room-button" type="button" name="button" tabindex="0">Book</button>
    </div>
    `
    customerAvailableRooms.insertAdjacentHTML('beforeend', roomInfo);
  })
};

function displayManagerFilteredRooms(allFilteredRooms) {
  managerAvailableRooms.innerHTML = '';
  allFilteredRooms.forEach((room) => {
    let roomInfo = `
    <div id="${room.number}" class="room-card" tabindex="0">
      <div class="room-card-break-one">
        <p>Room Number: ${room.number}</p>
        <p>Type: ${room.roomType}</p>
        <p>Bidet: ${room.bidet}</p>
      </div>
      <div class="room-card-break-two">
        <p>Bed Size: ${room.bedSize}</p>
        <p>Beds: ${room.numBeds}</p>
        <p>Cost Per Night: $${room.costPerNight}</p>
      </div>
      <button class="book-room-button" type="button" name="button" tabindex="0">Book</button>
    </div>
    `
    managerAvailableRooms.insertAdjacentHTML('beforeend', roomInfo);
  })
};

function searchCustomers() {
  const customerInput = customerSearchInput.value;
  const userResult = manager.getCustomerById(customerInput);
  customer = new Customer(userResult.id, userResult.name, roomData, bookingData);
  managerName.innerText = customer.name;
  getCustomerBookingsForManager(customer)
  getTotalSpent(manager)
};

function getCustomerBookingsForManager(customer) {
  const allBookings = customer.bookings.reduce((allBookings, booking) => {
    customer.rooms.forEach((room) => {
      if (booking.userID === customer.id && booking.roomNumber === room.number) {
        allBookings.push(booking);
      }
    })
  return allBookings;
  }, [])
  displayManagerViewBookings(allBookings);
};

function displayManagerViewBookings(bookings) {
  managerBookings.innerHTML = '';
  bookings.forEach((booking) => {
    let bookingInfo = `
    <div id="${booking.id}"class="booking-card" tabindex="0">
      <p>Booking Confirmation: ${booking.id}</p>
      <p>Date: ${booking.date}</p>
      <p>Room Number: ${booking.roomNumber}</p>
      <button class="cancel-booking-button" type="button" name="button" tabindex="0">Cancel</button>
    </div>
    `
  managerBookings.insertAdjacentHTML('beforeend', bookingInfo);
  })
};

function getTotalSpent(user) {
  const totalSpent = user.getCustomerTotalSpent(customer)
  displayCustomerAmountSpent(totalSpent, user);
};

function displayCustomerAmountSpent(totalSpent, user) {
  if (user === manager) {
    managerAmountSpentLabel.innerText = 'Amount Spent';
    managerSpentSymbol.innerText = ''
    managerDollarsSpent.innerText = '';
    managerSpentSymbol.innerText = '';
    managerCentsSpent.innerText = '';
    let string = totalSpent.toString();
    const splitTotal = string.split('.');
    managerSpentSymbol.innerText = '$';
    managerDollarsSpent.innerText = splitTotal[0];
    managerSpentDecimal.innerText = '.';
    managerCentsSpent.innerText = splitTotal[1];
  }
  else if (user === customer) {
  customerSpentSymbol.innerText = '';
  customerDollarsSpent.innerText = '';
  customerSpentDecimal.innerText = '';
  customerCentsSpent.innerText = '';
  let string = totalSpent.toString();
  const splitTotal = string.split('.');
  customerSpentSymbol.innerText = '$';
  customerDollarsSpent.innerText = splitTotal[0];
  customerSpentDecimal.innerText = '.';
  customerCentsSpent.innerText = splitTotal[1];
  }
};

function getManagerRevenue(date) {
  const revenue = manager.getTotalRevenueForDate(date);
  displayManagerRevenue(revenue);
};

function displayManagerRevenue(revenue) {
  managerRevenueSymbol.innrText = '';
  managerRevenueDollars.innerText = '';
  managerRevenueDecimal.innerText = '';
  managerRevenueCents.innerText = '';
  const stringRevenue = revenue.toString();
  const splitTotal = stringRevenue.split('.');
  managerRevenueSymbol.innerText = '$';
  managerRevenueDollars.innerText = splitTotal[0];
  managerRevenueDecimal.innerText = '.';
  managerRevenueCents.innerText = splitTotal[1] || '0';
};

function getManagerPercentageOccupied(date) {
  const percentage = manager.getPercentageOccupied(date);
  displayManagerPercentageOccupied(percentage);
};

function displayManagerPercentageOccupied(percentage) {
  managerPercentageOccupiedValue.innerText = '';
  managerPercentageOccupiedSymbol.innerText = '';
  managerPercentageOccupiedValue.innerText = percentage;
  managerPercentageOccupiedSymbol.innerText = '%';
};

function updateManagerInfo(date) {
  getManagerRevenue(date);
  getManagerPercentageOccupied(date);
};

function selectARoom(event) {
  let roomNumber = parseInt(event.target.parentNode.id);
  let book = confirm("Would you like to book this room?");
    if (book === true) {
      newBooking.roomNumber = roomNumber;
      makeBooking();
    } else {
      return undefined;
    }
};

function makeBooking() {
  newBooking.date = date;
  if (customer) {
    newBooking.userID = customer.id;
    bookingData.push(newBooking);
    addBooking(customer);
  } else {
    alert('Please provide a customer to add a booking')
  }
};

function addBooking(customer) {
  newBooking.userID = customer.id;
  fetchAPI.postBooking(newBooking);
  displayAvailableRooms(date, customer);
};

function selectBooking(event) {
  let bookingId = (event.target.parentNode.id)
  let dateText = event.target.parentNode.children[1].innerText;
  let splitDate = dateText.split('Date:');
  let dateFormated = splitDate[1];
  let cancelDate = dateFormated.split('/')
  let dateInts = cancelDate.map((datePortion) => {return parseInt(datePortion)});
  let todayDate = today.split('/');
  let todayInts = todayDate.map((todayPortion) => {return parseInt(todayPortion)});
  let cancel = confirm(`Would you like to cancel booking, ${bookingId}`);
  if (cancel === true && dateInts[0] >= todayInts[0] && dateInts[1] >= todayInts[1] && dateInts[2] >= todayInts[2]) {
    deleteBooking(bookingId);
  } else if (cancel === true && dateInts[0] <= todayInts[0] || dateInts[1] <= todayInts[1] || dateInts[2] <= todayInts[2]) {
    alert('You cannot delete a booking that has already occured');
  } else if (cancel === false) {
    alert('Please Choose Another Booking')
  }
};

function deleteBooking(idInput) {
  let numberId = parseInt(idInput);
  fetchAPI.deleteBooking({id: numberId});
  deleteLocalBooking(idInput);
  udpateCustomerAvailableRooms();
  updateManagerAvailableRooms();
};

function deleteLocalBooking(id) {
  bookingData = bookingData.filter((booking) => {
    return !booking.id === id;
  })
};
