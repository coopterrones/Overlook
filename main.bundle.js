/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap);", ""]);
var urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../images/overlook.png */ "./src/images/overlook.png"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../images/hotel.png */ "./src/images/hotel.png"));

// Module
exports.push([module.i, "input:focus {\n  outline: none !important; }\n\nbutton:focus {\n  outline: none !important; }\n\nhtml {\n  height: 100vh; }\n\nbody {\n  background-color: #E0E5EC;\n  background-size: cover;\n  background-repeat: no-repeat;\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  width: 100vw; }\n\n.login-screen {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 5%; }\n\n.overlook-logo {\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  height: 150px;\n  width: 500px; }\n\n.overlook-logo:hover {\n  background-image: url(" + ___CSS_LOADER_URL___1___ + ");\n  height: 150px;\n  width: 500px; }\n\n.login-layout {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 35vh;\n  width: 75vh;\n  background-color: #E0E5EC;\n  border-radius: 5px;\n  font-family: Cabin, sans-serif; }\n\n.username-input {\n  margin: 1em;\n  margin-bottom: 0;\n  border-style: none;\n  border-radius: 4px;\n  height: 5%;\n  width: 85%;\n  padding: 2%;\n  color: #212529;\n  background-color: #E0E5EC;\n  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5); }\n\n.username-input:focus {\n  cursor: pointer;\n  box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5); }\n\n.password-input {\n  margin: 1em;\n  margin-bottom: 0;\n  border-style: none;\n  border-radius: 4px;\n  height: 5%;\n  width: 85%;\n  padding: 2%;\n  color: #212529;\n  background-color: #E0E5EC;\n  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5); }\n\n.password-input:focus {\n  cursor: pointer;\n  box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5); }\n\n#usernameInputLabel {\n  font-size: 10px;\n  margin-left: 2em;\n  align-self: flex-start; }\n\n#passwordInputLabel {\n  font-size: 10px;\n  margin-left: 2em;\n  align-self: flex-start; }\n\n.book-room-button {\n  margin-top: 0;\n  height: 3em;\n  width: 5em;\n  border-style: none;\n  color: #212529;\n  font-family: Cabin, sans-serif;\n  border-radius: 10%;\n  background-color: #E0E5EC;\n  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5); }\n\n.book-room-button:hover {\n  cursor: pointer;\n  background: linear-gradient(145deg, #f0f5fd, #caced4);\n  box-shadow: 20px 20px 60px #bec3c9, -20px -20px 60px #ffffff; }\n\n.book-room-button:active {\n  cursor: pointer;\n  box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5); }\n\n.book-room-button:focus {\n  box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5); }\n\n.cancel-booking-button {\n  margin-top: 0;\n  height: 3em;\n  width: 5em;\n  border-style: none;\n  color: #212529;\n  font-family: Cabin, sans-serif;\n  border-radius: 10%;\n  background-color: #E0E5EC;\n  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5); }\n\n.cancel-booking-button:hover {\n  cursor: pointer;\n  background: linear-gradient(145deg, #f0f5fd, #caced4);\n  box-shadow: 20px 20px 60px #bec3c9, -20px -20px 60px #ffffff; }\n\n.cancel-booking-button:active {\n  cursor: pointer;\n  box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5); }\n\n.cancel-booking-button:focus {\n  cursor: pointer;\n  box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5); }\n\n::placeholder {\n  color: #212529;\n  font-family: Cabin, sans-serif;\n  font-size: 12px; }\n\n.login-buttons {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: space-between;\n  width: 100%;\n  margin-top: 3vh; }\n\n.clear-button {\n  border-radius: 4px;\n  margin: 2.5em;\n  margin-top: 0;\n  width: 8em;\n  border-style: none;\n  padding: .5em;\n  color: #212529;\n  font-family: Cabin, sans-serif;\n  border-radius: 5px;\n  background-color: #E0E5EC;\n  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5); }\n\n.clear-button:hover {\n  cursor: pointer;\n  background: linear-gradient(145deg, #f0f5fd, #caced4);\n  box-shadow: 20px 20px 60px #bec3c9, -20px -20px 60px #ffffff; }\n\n.clear-button:active {\n  cursor: pointer;\n  box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5); }\n\n.clear-button:focus {\n  cursor: pointer;\n  box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5); }\n\n.login-button {\n  border-radius: 4px;\n  margin: 2.5em;\n  margin-top: 0;\n  width: 8em;\n  border-style: none;\n  padding: .5em;\n  color: #212529;\n  font-family: Cabin, sans-serif;\n  border-radius: 5px;\n  background-color: #E0E5EC;\n  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5); }\n\n.login-button:hover {\n  cursor: pointer;\n  background: linear-gradient(145deg, #f0f5fd, #caced4);\n  box-shadow: 20px 20px 60px #bec3c9, -20px -20px 60px #ffffff; }\n\n.login-button:active {\n  cursor: pointer;\n  box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5); }\n\n.login-button:focus {\n  cursor: pointer;\n  box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5); }\n\n.customer-view {\n  display: flex;\n  flex-direction: row;\n  font-family: Cabin, sans-serif;\n  align-items: center;\n  height: 100%; }\n\n.manager-view {\n  display: flex;\n  flex-direction: row;\n  font-family: Cabin, sans-serif;\n  align-items: center;\n  height: 100%; }\n\n.manager-metrics-wrap {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  width: 85%; }\n\n.manager-metrics {\n  margin-bottom: 0;\n  margin-top: 1em;\n  padding: 1em; }\n\n.manager-revenue {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100px;\n  width: 100px;\n  padding: 1em;\n  background-color: #E0E5EC;\n  border-radius: 5px;\n  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5); }\n\n.manager-revenue-label {\n  margin: 0;\n  margin-top: 1em;\n  text-align: center; }\n\n.manager-percentage-occupied {\n  margin-bottom: 0;\n  margin-top: 1em;\n  padding: 1em; }\n\n.manager-percentage {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100px;\n  width: 100px;\n  padding: 1em;\n  background-color: #E0E5EC;\n  border-radius: 5px;\n  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5); }\n\n.manager-percentage-label {\n  margin: 0;\n  margin-top: 1em;\n  text-align: center; }\n\n.manager-calendar-dropdown {\n  margin: 1em;\n  border-style: none;\n  border-radius: 4px;\n  height: 25%;\n  width: 50%;\n  padding: 2%;\n  color: #212529;\n  background-color: #E0E5EC;\n  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5); }\n\n.manager-calendar-dropdown:focus {\n  cursor: pointer;\n  box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5);\n  outline: blue !important; }\n\n.customer-calendar-dropdown {\n  margin: 1em;\n  border-style: none;\n  border-radius: 4px;\n  height: 25%;\n  width: 50%;\n  padding: 2%;\n  color: #212529;\n  background-color: #E0E5EC;\n  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5); }\n\n.customer-calendar-dropdown:focus {\n  cursor: pointer;\n  box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5);\n  outline: blue !important; }\n\n.manager-room-type-dropdown {\n  margin: 1em;\n  border-style: none;\n  border-radius: 4px;\n  height: 65%;\n  width: 85%;\n  padding: 2%;\n  color: #212529;\n  font-family: Cabin, sans-serif;\n  border-radius: 5px;\n  background-color: #E0E5EC;\n  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5); }\n\n.manager-room-type-dropdown:focus {\n  cursor: pointer;\n  box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5); }\n\n.customer-room-type-dropdown {\n  margin: 1em;\n  border-style: none;\n  border-radius: 4px;\n  height: 65%;\n  width: 85%;\n  padding: 2%;\n  color: #212529;\n  font-family: Cabin, sans-serif;\n  border-radius: 5px;\n  background-color: #E0E5EC;\n  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5); }\n\n.customer-room-type-dropdown:focus {\n  cursor: pointer;\n  box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5); }\n\n.user-info {\n  display: flex;\n  flex-direction: column;\n  width: 50vw;\n  height: 85vh;\n  border-radius: 7px;\n  margin: 1em; }\n\n.user-img {\n  background-color: #E0E5EC;\n  border-radius: 5px;\n  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5);\n  margin-bottom: 0;\n  margin-top: 1em;\n  padding: 1em;\n  height: 100px;\n  width: 100px; }\n\n.user-image-name-wrap {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 25%; }\n\n.user-profile {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  width: 85%; }\n\n.customer-amount-spent {\n  margin-bottom: 0;\n  margin-top: 1em;\n  padding: 1em; }\n\n.manager-amount-spent {\n  margin-bottom: 0;\n  margin-top: 1em;\n  padding: 1em; }\n\n.customer-amount {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100px;\n  width: 100px;\n  padding: 1em;\n  background-color: #E0E5EC;\n  border-radius: 5px;\n  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5); }\n\n.manager-amount {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100px;\n  width: 100px;\n  padding: 1em;\n  background-color: #E0E5EC;\n  border-radius: 5px;\n  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5); }\n\n.amount-spent-label {\n  margin: 0;\n  margin-top: 1em;\n  text-align: center; }\n\n.manager-amount-spent-label {\n  margin: 0;\n  margin-top: 1em;\n  text-align: center; }\n\n.customer-name {\n  margin: 0;\n  margin-top: 1em; }\n\n.manager-name {\n  margin: 0;\n  margin-top: 1em; }\n\n.room-inputs-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 85%; }\n\n.customer-available-rooms {\n  background-color: #E0E5EC;\n  overflow: scroll;\n  background-color: #E0E5EC;\n  height: 90%;\n  width: 100%;\n  overflow: scroll; }\n\n.manager-available-rooms {\n  background-color: #E0E5EC;\n  overflow: scroll;\n  background-color: #E0E5EC;\n  height: 90%;\n  width: 100%;\n  overflow: scroll; }\n\n.room-card {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin: 1em;\n  border-style: none;\n  border-radius: 5px;\n  padding: 1em;\n  color: black;\n  background-color: #E0E5EC;\n  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5);\n  width: 85%; }\n\n.room-card:focus {\n  cursor: pointer;\n  box-shadow: inset inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5); }\n\n.room-card-break-one {\n  text-align: left; }\n\n.room-card-break-two {\n  text-align: right; }\n\n.booking-card {\n  border-style: none;\n  border-radius: 5px;\n  margin: 1em;\n  padding: 1em;\n  color: #212529;\n  background-color: #E0E5EC;\n  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5);\n  width: 85%; }\n\n.booking-card:focus {\n  cursor: pointer;\n  box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5); }\n\n.customer-bookings-area {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 50vw;\n  height: 85vh;\n  border-radius: 7px;\n  background-color: #E0E5EC; }\n\n.manager-bookings-area {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 50vw;\n  height: 85vh;\n  border-radius: 7px;\n  background-color: #E0E5EC; }\n\n.bookings-header {\n  margin: .5em; }\n\n.customer-bookings {\n  padding: 1em;\n  background-color: #E0E5EC;\n  width: 85%;\n  height: 75vh;\n  overflow: scroll; }\n\n.manager-search-wrap {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: 85%; }\n\n.manager-search-input {\n  margin: 1em;\n  border-style: none;\n  border-radius: 4px;\n  height: 30%;\n  width: 75%;\n  padding: 2%;\n  color: #212529;\n  background-color: #E0E5EC;\n  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5); }\n\n.manager-search-input:focus {\n  cursor: pointer;\n  box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5); }\n\n.manager-search-button {\n  margin: 1em;\n  border-style: none;\n  border-radius: 4px;\n  height: 55%;\n  width: 20%;\n  padding: 2%;\n  color: #212529;\n  font-family: Cabin, sans-serif;\n  border-radius: 5px;\n  background-color: #E0E5EC;\n  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5); }\n\n.manager-search-button:hover {\n  cursor: pointer;\n  background: linear-gradient(145deg, #f0f5fd, #caced4);\n  box-shadow: 20px 20px 60px #bec3c9, -20px -20px 60px #ffffff; }\n\n.manager-search-button:active {\n  cursor: pointer;\n  box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5); }\n\n.manager-search-button:focus {\n  cursor: pointer;\n  box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5); }\n\n.manager-bookings {\n  padding: 1em;\n  background-color: #E0E5EC;\n  width: 85%;\n  height: 75vh;\n  overflow: scroll; }\n\n.hidden {\n  display: none; }\n\n@media only screen and (max-width: 650px) {\n  .room-card {\n    margin: 0; }\n  .customer-view {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    font-family: Cabin, sans-serif;\n    height: 100%;\n    width: 100%; }\n  .manager-view {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    font-family: Cabin, sans-serif;\n    height: 100%;\n    width: 100%; }\n  .user-info {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    width: 100%;\n    height: 50%;\n    margin: 0;\n    margin-left: 1em; }\n  .user-profile {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    width: 100%;\n    height: 25vh; }\n  .user-img {\n    height: 50px;\n    width: 50px; }\n  .user-image-name-wrap {\n    height: auto;\n    width: auto; }\n  .customer-amount-spent {\n    transform: scale(0.65); }\n  .manager-amount-spent {\n    transform: scale(0.65); }\n  .amount-spent-label {\n    transform: scale(1.5); }\n  .customer-available-rooms {\n    background-color: #E0E5EC;\n    overflow: scroll;\n    background-color: #E0E5EC;\n    height: 20vh;\n    width: 100vw;\n    overflow: scroll; }\n  .manager-available-rooms {\n    background-color: #E0E5EC;\n    overflow: scroll;\n    background-color: #E0E5EC;\n    height: 20vh;\n    width: 100vw;\n    overflow: scroll; }\n  .customer-bookings {\n    height: 35vh;\n    width: 100vw; }\n  .manager-bookings {\n    height: 35vh;\n    width: 100vw; }\n  .manager-bookings-heading {\n    text-align: center; }\n  .manager-search-wrap {\n    width: 95vw; }\n  .room-inputs-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 85%; }\n  .booking-card {\n    border-style: none;\n    border-radius: 5px;\n    margin: 0;\n    margin-top: .5em;\n    margin-bottom: .5em;\n    padding: 1em;\n    color: #212529;\n    background-color: #E0E5EC;\n    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5);\n    width: 85%; } }\n\n:focus {\n  outline: none; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/API.js":
/*!********************!*\
  !*** ./src/API.js ***!
  \********************/
/*! exports provided: fetchAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAPI", function() { return fetchAPI; });
let fetchAPI = {
  fetchUsers() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
      .then(response => response.json())
      .catch(error => console.log(error.message));
  },

  fetchRooms() {
    let fetchedRooms = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
    .then(response => response.json())
    .catch(error => console.log(error.message));
    return fetchedRooms;
  },

  fetchBookings() {
    let fetchedBookings = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
    .then(response => response.json())
    .catch(error => console.log(error.message));
    return fetchedBookings;
  },

  deleteBooking(booking) {
    console.log(booking);
    let deletedData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
      method: 'DELETE',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(response => response.json())
    .catch(error => console.log(error.message))
    return deletedData;
  },

  postBooking(booking) {
    let newBooking = fetchAPI.buildBookingObject(booking);
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




/***/ }),

/***/ "./src/Customer.js":
/*!*************************!*\
  !*** ./src/Customer.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ "./src/User.js");


class Customer extends _User__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(id, name, roomData, bookingData) {
    super(id, name, [], roomData, bookingData);
    this.myBookings = [];
    this.totalSpent = 0;
  };

  getUserBookings(id) {
    const userBookings = this.bookings.filter((booking) => {
      return booking.userID === id;
    })
    this.myBookings = userBookings;
  };

};

/* harmony default export */ __webpack_exports__["default"] = (Customer);


/***/ }),

/***/ "./src/Manager.js":
/*!************************!*\
  !*** ./src/Manager.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ "./src/User.js");


class Manager extends _User__WEBPACK_IMPORTED_MODULE_0__["default"]{
  constructor(id, name, userData, roomData, bookingData) {
    super(id, name, userData, roomData, bookingData);
  };

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
    return parseFloat(roundedAmount);
  };

  getPercentageOccupied(date) {
    const occupied = this.bookings.reduce((sum, booking) => {
      this.rooms.forEach((room) => {
        if (booking.date === date && booking.roomNumber === room.number) {
          sum += 1;
        }
      })
      return sum;
    }, 0)
   let average = (occupied / this.rooms.length) * 100;
   return average.toFixed();
  };

  getCustomerById(id) {
    const splitUsername = id.split('customer');
    const intID = parseInt(splitUsername[1])
    const currentUser = this.users.find((user) => {
      return user.id === intID;
    })
    return currentUser;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Manager);


/***/ }),

/***/ "./src/User.js":
/*!*********************!*\
  !*** ./src/User.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (User);


/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/images/hotel.png":
/*!******************************!*\
  !*** ./src/images/hotel.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/hotel.png";

/***/ }),

/***/ "./src/images/overlook.png":
/*!*********************************!*\
  !*** ./src/images/overlook.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/overlook.png";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_base_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_overlook_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/overlook.png */ "./src/images/overlook.png");
/* harmony import */ var _images_overlook_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_overlook_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_hotel_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/hotel.png */ "./src/images/hotel.png");
/* harmony import */ var _images_hotel_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_hotel_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Customer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Customer */ "./src/Customer.js");
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Manager */ "./src/Manager.js");
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./API */ "./src/API.js");







let userData;
let roomData;
let bookingData;
let customer;
let manager;
let date;
let newBooking = {userID: 0, date: '', roomNumber: 0};

Promise.all([_API__WEBPACK_IMPORTED_MODULE_5__["fetchAPI"].fetchUsers(), _API__WEBPACK_IMPORTED_MODULE_5__["fetchAPI"].fetchRooms(), _API__WEBPACK_IMPORTED_MODULE_5__["fetchAPI"].fetchBookings()]).then(values => {
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
    user = new _Manager__WEBPACK_IMPORTED_MODULE_4__["default"](1, 'Manager', userData, roomData, bookingData);
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
  customer = new _Customer__WEBPACK_IMPORTED_MODULE_3__["default"](userInfo.id, userInfo.name, roomData, bookingData);
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
  customer = new _Customer__WEBPACK_IMPORTED_MODULE_3__["default"](userResult.id, userResult.name, roomData, bookingData);
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
  _API__WEBPACK_IMPORTED_MODULE_5__["fetchAPI"].postBooking(newBooking);
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
  _API__WEBPACK_IMPORTED_MODULE_5__["fetchAPI"].deleteBooking({id: numberId});
  deleteLocalBooking(idInput);
  udpateCustomerAvailableRooms();
  updateManagerAvailableRooms();
};

function deleteLocalBooking(id) {
  bookingData = bookingData.filter((booking) => {
    return !booking.id === id;
  })
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvdXJsLWVzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQVBJLmpzIiwid2VicGFjazovLy8uL3NyYy9DdXN0b21lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2Jhc2Uuc2Nzcz9hMjM4Iiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaG90ZWwucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvb3Zlcmxvb2sucG5nIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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RztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtB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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsNkNBQVE7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCw2QkFBNkI7QUFDL0U7QUFDQSxtREFBbUQsOEJBQThCO0FBQ2pGLDREQUE0RCxVQUFVO0FBQ3RFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLDZDQUFRLGdCQUFnQixhQUFhO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYWJpbjppdGFsLHdnaHRAMCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDAmZGlzcGxheT1zd2FwKTtcIiwgXCJcIl0pO1xudmFyIHVybEVzY2FwZSA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvdXJsLWVzY2FwZS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4uL2ltYWdlcy9vdmVybG9vay5wbmdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMV9fXyA9IHVybEVzY2FwZShyZXF1aXJlKFwiLi4vaW1hZ2VzL2hvdGVsLnBuZ1wiKSk7XG5cbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50OyB9XFxuXFxuYnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDsgfVxcblxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDB2aDsgfVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTVFQztcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7IH1cXG5cXG4ubG9naW4tc2NyZWVuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogNSU7IH1cXG5cXG4ub3Zlcmxvb2stbG9nbyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gKyBcIik7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgd2lkdGg6IDUwMHB4OyB9XFxuXFxuLm92ZXJsb29rLWxvZ286aG92ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18xX19fICsgXCIpO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIHdpZHRoOiA1MDBweDsgfVxcblxcbi5sb2dpbi1sYXlvdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDM1dmg7XFxuICB3aWR0aDogNzV2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFMEU1RUM7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LWZhbWlseTogQ2FiaW4sIHNhbnMtc2VyaWY7IH1cXG5cXG4udXNlcm5hbWUtaW5wdXQge1xcbiAgbWFyZ2luOiAxZW07XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgaGVpZ2h0OiA1JTtcXG4gIHdpZHRoOiA4NSU7XFxuICBwYWRkaW5nOiAyJTtcXG4gIGNvbG9yOiAjMjEyNTI5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTVFQztcXG4gIGJveC1zaGFkb3c6IDlweCA5cHggMTZweCByZ2JhKDE2MywgMTc3LCAxOTgsIDAuNiksIC05cHggLTlweCAxNnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgfVxcblxcbi51c2VybmFtZS1pbnB1dDpmb2N1cyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiBpbnNldCA2cHggNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIGluc2V0IC02cHggLTZweCAxMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XFxuXFxuLnBhc3N3b3JkLWlucHV0IHtcXG4gIG1hcmdpbjogMWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGhlaWdodDogNSU7XFxuICB3aWR0aDogODUlO1xcbiAgcGFkZGluZzogMiU7XFxuICBjb2xvcjogIzIxMjUyOTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFMEU1RUM7XFxuICBib3gtc2hhZG93OiA5cHggOXB4IDE2cHggcmdiYSgxNjMsIDE3NywgMTk4LCAwLjYpLCAtOXB4IC05cHggMTZweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7IH1cXG5cXG4ucGFzc3dvcmQtaW5wdXQ6Zm9jdXMge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgNnB4IDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAtNnB4IC02cHggMTBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgfVxcblxcbiN1c2VybmFtZUlucHV0TGFiZWwge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDJlbTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7IH1cXG5cXG4jcGFzc3dvcmRJbnB1dExhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIG1hcmdpbi1sZWZ0OiAyZW07XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0OyB9XFxuXFxuLmJvb2stcm9vbS1idXR0b24ge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGhlaWdodDogM2VtO1xcbiAgd2lkdGg6IDVlbTtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGNvbG9yOiAjMjEyNTI5O1xcbiAgZm9udC1mYW1pbHk6IENhYmluLCBzYW5zLXNlcmlmO1xcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTVFQztcXG4gIGJveC1zaGFkb3c6IDlweCA5cHggMTZweCByZ2JhKDE2MywgMTc3LCAxOTgsIDAuNiksIC05cHggLTlweCAxNnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgfVxcblxcbi5ib29rLXJvb20tYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsICNmMGY1ZmQsICNjYWNlZDQpO1xcbiAgYm94LXNoYWRvdzogMjBweCAyMHB4IDYwcHggI2JlYzNjOSwgLTIwcHggLTIwcHggNjBweCAjZmZmZmZmOyB9XFxuXFxuLmJvb2stcm9vbS1idXR0b246YWN0aXZlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDZweCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgLTZweCAtNnB4IDEwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7IH1cXG5cXG4uYm9vay1yb29tLWJ1dHRvbjpmb2N1cyB7XFxuICBib3gtc2hhZG93OiBpbnNldCA2cHggNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIGluc2V0IC02cHggLTZweCAxMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XFxuXFxuLmNhbmNlbC1ib29raW5nLWJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgaGVpZ2h0OiAzZW07XFxuICB3aWR0aDogNWVtO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgY29sb3I6ICMyMTI1Mjk7XFxuICBmb250LWZhbWlseTogQ2FiaW4sIHNhbnMtc2VyaWY7XFxuICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBFNUVDO1xcbiAgYm94LXNoYWRvdzogOXB4IDlweCAxNnB4IHJnYmEoMTYzLCAxNzcsIDE5OCwgMC42KSwgLTlweCAtOXB4IDE2cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XFxuXFxuLmNhbmNlbC1ib29raW5nLWJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCAjZjBmNWZkLCAjY2FjZWQ0KTtcXG4gIGJveC1zaGFkb3c6IDIwcHggMjBweCA2MHB4ICNiZWMzYzksIC0yMHB4IC0yMHB4IDYwcHggI2ZmZmZmZjsgfVxcblxcbi5jYW5jZWwtYm9va2luZy1idXR0b246YWN0aXZlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDZweCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgLTZweCAtNnB4IDEwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7IH1cXG5cXG4uY2FuY2VsLWJvb2tpbmctYnV0dG9uOmZvY3VzIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDZweCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgLTZweCAtNnB4IDEwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7IH1cXG5cXG46OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjMjEyNTI5O1xcbiAgZm9udC1mYW1pbHk6IENhYmluLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMnB4OyB9XFxuXFxuLmxvZ2luLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogM3ZoOyB9XFxuXFxuLmNsZWFyLWJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBtYXJnaW46IDIuNWVtO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIHdpZHRoOiA4ZW07XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAuNWVtO1xcbiAgY29sb3I6ICMyMTI1Mjk7XFxuICBmb250LWZhbWlseTogQ2FiaW4sIHNhbnMtc2VyaWY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBFNUVDO1xcbiAgYm94LXNoYWRvdzogOXB4IDlweCAxNnB4IHJnYmEoMTYzLCAxNzcsIDE5OCwgMC42KSwgLTlweCAtOXB4IDE2cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XFxuXFxuLmNsZWFyLWJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCAjZjBmNWZkLCAjY2FjZWQ0KTtcXG4gIGJveC1zaGFkb3c6IDIwcHggMjBweCA2MHB4ICNiZWMzYzksIC0yMHB4IC0yMHB4IDYwcHggI2ZmZmZmZjsgfVxcblxcbi5jbGVhci1idXR0b246YWN0aXZlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDZweCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgLTZweCAtNnB4IDEwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7IH1cXG5cXG4uY2xlYXItYnV0dG9uOmZvY3VzIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDZweCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgLTZweCAtNnB4IDEwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7IH1cXG5cXG4ubG9naW4tYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIG1hcmdpbjogMi41ZW07XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgd2lkdGg6IDhlbTtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IC41ZW07XFxuICBjb2xvcjogIzIxMjUyOTtcXG4gIGZvbnQtZmFtaWx5OiBDYWJpbiwgc2Fucy1zZXJpZjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFMEU1RUM7XFxuICBib3gtc2hhZG93OiA5cHggOXB4IDE2cHggcmdiYSgxNjMsIDE3NywgMTk4LCAwLjYpLCAtOXB4IC05cHggMTZweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7IH1cXG5cXG4ubG9naW4tYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsICNmMGY1ZmQsICNjYWNlZDQpO1xcbiAgYm94LXNoYWRvdzogMjBweCAyMHB4IDYwcHggI2JlYzNjOSwgLTIwcHggLTIwcHggNjBweCAjZmZmZmZmOyB9XFxuXFxuLmxvZ2luLWJ1dHRvbjphY3RpdmUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgNnB4IDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAtNnB4IC02cHggMTBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgfVxcblxcbi5sb2dpbi1idXR0b246Zm9jdXMge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgNnB4IDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAtNnB4IC02cHggMTBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgfVxcblxcbi5jdXN0b21lci12aWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZm9udC1mYW1pbHk6IENhYmluLCBzYW5zLXNlcmlmO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbi5tYW5hZ2VyLXZpZXcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmb250LWZhbWlseTogQ2FiaW4sIHNhbnMtc2VyaWY7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuLm1hbmFnZXItbWV0cmljcy13cmFwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDg1JTsgfVxcblxcbi5tYW5hZ2VyLW1ldHJpY3Mge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG4gIHBhZGRpbmc6IDFlbTsgfVxcblxcbi5tYW5hZ2VyLXJldmVudWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwcHg7XFxuICB3aWR0aDogMTAwcHg7XFxuICBwYWRkaW5nOiAxZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBFNUVDO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogOXB4IDlweCAxNnB4IHJnYmEoMTYzLCAxNzcsIDE5OCwgMC42KSwgLTlweCAtOXB4IDE2cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XFxuXFxuLm1hbmFnZXItcmV2ZW51ZS1sYWJlbCB7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tdG9wOiAxZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4ubWFuYWdlci1wZXJjZW50YWdlLW9jY3VwaWVkIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBtYXJnaW4tdG9wOiAxZW07XFxuICBwYWRkaW5nOiAxZW07IH1cXG5cXG4ubWFuYWdlci1wZXJjZW50YWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTVFQztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDlweCA5cHggMTZweCByZ2JhKDE2MywgMTc3LCAxOTgsIDAuNiksIC05cHggLTlweCAxNnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgfVxcblxcbi5tYW5hZ2VyLXBlcmNlbnRhZ2UtbGFiZWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLm1hbmFnZXItY2FsZW5kYXItZHJvcGRvd24ge1xcbiAgbWFyZ2luOiAxZW07XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBoZWlnaHQ6IDI1JTtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nOiAyJTtcXG4gIGNvbG9yOiAjMjEyNTI5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTVFQztcXG4gIGJveC1zaGFkb3c6IDlweCA5cHggMTZweCByZ2JhKDE2MywgMTc3LCAxOTgsIDAuNiksIC05cHggLTlweCAxNnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgfVxcblxcbi5tYW5hZ2VyLWNhbGVuZGFyLWRyb3Bkb3duOmZvY3VzIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDZweCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgLTZweCAtNnB4IDEwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICBvdXRsaW5lOiBibHVlICFpbXBvcnRhbnQ7IH1cXG5cXG4uY3VzdG9tZXItY2FsZW5kYXItZHJvcGRvd24ge1xcbiAgbWFyZ2luOiAxZW07XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBoZWlnaHQ6IDI1JTtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nOiAyJTtcXG4gIGNvbG9yOiAjMjEyNTI5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTVFQztcXG4gIGJveC1zaGFkb3c6IDlweCA5cHggMTZweCByZ2JhKDE2MywgMTc3LCAxOTgsIDAuNiksIC05cHggLTlweCAxNnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgfVxcblxcbi5jdXN0b21lci1jYWxlbmRhci1kcm9wZG93bjpmb2N1cyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiBpbnNldCA2cHggNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIGluc2V0IC02cHggLTZweCAxMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgb3V0bGluZTogYmx1ZSAhaW1wb3J0YW50OyB9XFxuXFxuLm1hbmFnZXItcm9vbS10eXBlLWRyb3Bkb3duIHtcXG4gIG1hcmdpbjogMWVtO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgaGVpZ2h0OiA2NSU7XFxuICB3aWR0aDogODUlO1xcbiAgcGFkZGluZzogMiU7XFxuICBjb2xvcjogIzIxMjUyOTtcXG4gIGZvbnQtZmFtaWx5OiBDYWJpbiwgc2Fucy1zZXJpZjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFMEU1RUM7XFxuICBib3gtc2hhZG93OiA5cHggOXB4IDE2cHggcmdiYSgxNjMsIDE3NywgMTk4LCAwLjYpLCAtOXB4IC05cHggMTZweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7IH1cXG5cXG4ubWFuYWdlci1yb29tLXR5cGUtZHJvcGRvd246Zm9jdXMge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgNnB4IDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAtNnB4IC02cHggMTBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgfVxcblxcbi5jdXN0b21lci1yb29tLXR5cGUtZHJvcGRvd24ge1xcbiAgbWFyZ2luOiAxZW07XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBoZWlnaHQ6IDY1JTtcXG4gIHdpZHRoOiA4NSU7XFxuICBwYWRkaW5nOiAyJTtcXG4gIGNvbG9yOiAjMjEyNTI5O1xcbiAgZm9udC1mYW1pbHk6IENhYmluLCBzYW5zLXNlcmlmO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTVFQztcXG4gIGJveC1zaGFkb3c6IDlweCA5cHggMTZweCByZ2JhKDE2MywgMTc3LCAxOTgsIDAuNiksIC05cHggLTlweCAxNnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgfVxcblxcbi5jdXN0b21lci1yb29tLXR5cGUtZHJvcGRvd246Zm9jdXMge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgNnB4IDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAtNnB4IC02cHggMTBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgfVxcblxcbi51c2VyLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNTB2dztcXG4gIGhlaWdodDogODV2aDtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIG1hcmdpbjogMWVtOyB9XFxuXFxuLnVzZXItaW1nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFMEU1RUM7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiA5cHggOXB4IDE2cHggcmdiYSgxNjMsIDE3NywgMTk4LCAwLjYpLCAtOXB4IC05cHggMTZweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHdpZHRoOiAxMDBweDsgfVxcblxcbi51c2VyLWltYWdlLW5hbWUtd3JhcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMjUlOyB9XFxuXFxuLnVzZXItcHJvZmlsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA4NSU7IH1cXG5cXG4uY3VzdG9tZXItYW1vdW50LXNwZW50IHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBtYXJnaW4tdG9wOiAxZW07XFxuICBwYWRkaW5nOiAxZW07IH1cXG5cXG4ubWFuYWdlci1hbW91bnQtc3BlbnQge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG4gIHBhZGRpbmc6IDFlbTsgfVxcblxcbi5jdXN0b21lci1hbW91bnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwcHg7XFxuICB3aWR0aDogMTAwcHg7XFxuICBwYWRkaW5nOiAxZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBFNUVDO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogOXB4IDlweCAxNnB4IHJnYmEoMTYzLCAxNzcsIDE5OCwgMC42KSwgLTlweCAtOXB4IDE2cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XFxuXFxuLm1hbmFnZXItYW1vdW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTVFQztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDlweCA5cHggMTZweCByZ2JhKDE2MywgMTc3LCAxOTgsIDAuNiksIC05cHggLTlweCAxNnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgfVxcblxcbi5hbW91bnQtc3BlbnQtbGFiZWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLm1hbmFnZXItYW1vdW50LXNwZW50LWxhYmVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5jdXN0b21lci1uYW1lIHtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi10b3A6IDFlbTsgfVxcblxcbi5tYW5hZ2VyLW5hbWUge1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLXRvcDogMWVtOyB9XFxuXFxuLnJvb20taW5wdXRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiA4NSU7IH1cXG5cXG4uY3VzdG9tZXItYXZhaWxhYmxlLXJvb21zIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFMEU1RUM7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTVFQztcXG4gIGhlaWdodDogOTAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogc2Nyb2xsOyB9XFxuXFxuLm1hbmFnZXItYXZhaWxhYmxlLXJvb21zIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFMEU1RUM7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTVFQztcXG4gIGhlaWdodDogOTAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogc2Nyb2xsOyB9XFxuXFxuLnJvb20tY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDFlbTtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFMEU1RUM7XFxuICBib3gtc2hhZG93OiA5cHggOXB4IDE2cHggcmdiYSgxNjMsIDE3NywgMTk4LCAwLjYpLCAtOXB4IC05cHggMTZweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICB3aWR0aDogODUlOyB9XFxuXFxuLnJvb20tY2FyZDpmb2N1cyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiBpbnNldCBpbnNldCA2cHggNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIGluc2V0IC02cHggLTZweCAxMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XFxuXFxuLnJvb20tY2FyZC1icmVhay1vbmUge1xcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxcblxcbi5yb29tLWNhcmQtYnJlYWstdHdvIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuXFxuLmJvb2tpbmctY2FyZCB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW46IDFlbTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGNvbG9yOiAjMjEyNTI5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTVFQztcXG4gIGJveC1zaGFkb3c6IDlweCA5cHggMTZweCByZ2JhKDE2MywgMTc3LCAxOTgsIDAuNiksIC05cHggLTlweCAxNnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIHdpZHRoOiA4NSU7IH1cXG5cXG4uYm9va2luZy1jYXJkOmZvY3VzIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDZweCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgLTZweCAtNnB4IDEwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7IH1cXG5cXG4uY3VzdG9tZXItYm9va2luZ3MtYXJlYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogNTB2dztcXG4gIGhlaWdodDogODV2aDtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFMEU1RUM7IH1cXG5cXG4ubWFuYWdlci1ib29raW5ncy1hcmVhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgaGVpZ2h0OiA4NXZoO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTVFQzsgfVxcblxcbi5ib29raW5ncy1oZWFkZXIge1xcbiAgbWFyZ2luOiAuNWVtOyB9XFxuXFxuLmN1c3RvbWVyLWJvb2tpbmdzIHtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFMEU1RUM7XFxuICB3aWR0aDogODUlO1xcbiAgaGVpZ2h0OiA3NXZoO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDsgfVxcblxcbi5tYW5hZ2VyLXNlYXJjaC13cmFwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA4NSU7IH1cXG5cXG4ubWFuYWdlci1zZWFyY2gtaW5wdXQge1xcbiAgbWFyZ2luOiAxZW07XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBoZWlnaHQ6IDMwJTtcXG4gIHdpZHRoOiA3NSU7XFxuICBwYWRkaW5nOiAyJTtcXG4gIGNvbG9yOiAjMjEyNTI5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTVFQztcXG4gIGJveC1zaGFkb3c6IDlweCA5cHggMTZweCByZ2JhKDE2MywgMTc3LCAxOTgsIDAuNiksIC05cHggLTlweCAxNnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgfVxcblxcbi5tYW5hZ2VyLXNlYXJjaC1pbnB1dDpmb2N1cyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiBpbnNldCA2cHggNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIGluc2V0IC02cHggLTZweCAxMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XFxuXFxuLm1hbmFnZXItc2VhcmNoLWJ1dHRvbiB7XFxuICBtYXJnaW46IDFlbTtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGhlaWdodDogNTUlO1xcbiAgd2lkdGg6IDIwJTtcXG4gIHBhZGRpbmc6IDIlO1xcbiAgY29sb3I6ICMyMTI1Mjk7XFxuICBmb250LWZhbWlseTogQ2FiaW4sIHNhbnMtc2VyaWY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBFNUVDO1xcbiAgYm94LXNoYWRvdzogOXB4IDlweCAxNnB4IHJnYmEoMTYzLCAxNzcsIDE5OCwgMC42KSwgLTlweCAtOXB4IDE2cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XFxuXFxuLm1hbmFnZXItc2VhcmNoLWJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCAjZjBmNWZkLCAjY2FjZWQ0KTtcXG4gIGJveC1zaGFkb3c6IDIwcHggMjBweCA2MHB4ICNiZWMzYzksIC0yMHB4IC0yMHB4IDYwcHggI2ZmZmZmZjsgfVxcblxcbi5tYW5hZ2VyLXNlYXJjaC1idXR0b246YWN0aXZlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDZweCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgLTZweCAtNnB4IDEwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7IH1cXG5cXG4ubWFuYWdlci1zZWFyY2gtYnV0dG9uOmZvY3VzIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDZweCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgLTZweCAtNnB4IDEwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7IH1cXG5cXG4ubWFuYWdlci1ib29raW5ncyB7XFxuICBwYWRkaW5nOiAxZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBFNUVDO1xcbiAgd2lkdGg6IDg1JTtcXG4gIGhlaWdodDogNzV2aDtcXG4gIG92ZXJmbG93OiBzY3JvbGw7IH1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAucm9vbS1jYXJkIHtcXG4gICAgbWFyZ2luOiAwOyB9XFxuICAuY3VzdG9tZXItdmlldyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1mYW1pbHk6IENhYmluLCBzYW5zLXNlcmlmO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAubWFuYWdlci12aWV3IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LWZhbWlseTogQ2FiaW4sIHNhbnMtc2VyaWY7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gIC51c2VyLWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW4tbGVmdDogMWVtOyB9XFxuICAudXNlci1wcm9maWxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDI1dmg7IH1cXG4gIC51c2VyLWltZyB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7IH1cXG4gIC51c2VyLWltYWdlLW5hbWUtd3JhcCB7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IGF1dG87IH1cXG4gIC5jdXN0b21lci1hbW91bnQtc3BlbnQge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNjUpOyB9XFxuICAubWFuYWdlci1hbW91bnQtc3BlbnQge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNjUpOyB9XFxuICAuYW1vdW50LXNwZW50LWxhYmVsIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpOyB9XFxuICAuY3VzdG9tZXItYXZhaWxhYmxlLXJvb21zIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTVFQztcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTVFQztcXG4gICAgaGVpZ2h0OiAyMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7IH1cXG4gIC5tYW5hZ2VyLWF2YWlsYWJsZS1yb29tcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMEU1RUM7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMEU1RUM7XFxuICAgIGhlaWdodDogMjB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsOyB9XFxuICAuY3VzdG9tZXItYm9va2luZ3Mge1xcbiAgICBoZWlnaHQ6IDM1dmg7XFxuICAgIHdpZHRoOiAxMDB2dzsgfVxcbiAgLm1hbmFnZXItYm9va2luZ3Mge1xcbiAgICBoZWlnaHQ6IDM1dmg7XFxuICAgIHdpZHRoOiAxMDB2dzsgfVxcbiAgLm1hbmFnZXItYm9va2luZ3MtaGVhZGluZyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgLm1hbmFnZXItc2VhcmNoLXdyYXAge1xcbiAgICB3aWR0aDogOTV2dzsgfVxcbiAgLnJvb20taW5wdXRzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDg1JTsgfVxcbiAgLmJvb2tpbmctY2FyZCB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbi10b3A6IC41ZW07XFxuICAgIG1hcmdpbi1ib3R0b206IC41ZW07XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgY29sb3I6ICMyMTI1Mjk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMEU1RUM7XFxuICAgIGJveC1zaGFkb3c6IDlweCA5cHggMTZweCByZ2JhKDE2MywgMTc3LCAxOTgsIDAuNiksIC05cHggLTlweCAxNnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gICAgd2lkdGg6IDg1JTsgfSB9XFxuXFxuOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXNjYXBlKHVybCwgbmVlZFF1b3Rlcykge1xuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgbmVlZFF1b3Rlcykge1xuICAgIHJldHVybiAnXCInICsgdXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJykgKyAnXCInO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwibGV0IGZldGNoQVBJID0ge1xuICBmZXRjaFVzZXJzKCkge1xuICAgIHJldHVybiBmZXRjaCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL292ZXJsb29rLzE5MDQvdXNlcnMvdXNlcnMnKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpKTtcbiAgfSxcblxuICBmZXRjaFJvb21zKCkge1xuICAgIGxldCBmZXRjaGVkUm9vbXMgPSBmZXRjaCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL292ZXJsb29rLzE5MDQvcm9vbXMvcm9vbXMnKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSkpO1xuICAgIHJldHVybiBmZXRjaGVkUm9vbXM7XG4gIH0sXG5cbiAgZmV0Y2hCb29raW5ncygpIHtcbiAgICBsZXQgZmV0Y2hlZEJvb2tpbmdzID0gZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS9vdmVybG9vay8xOTA0L2Jvb2tpbmdzL2Jvb2tpbmdzJylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpKTtcbiAgICByZXR1cm4gZmV0Y2hlZEJvb2tpbmdzO1xuICB9LFxuXG4gIGRlbGV0ZUJvb2tpbmcoYm9va2luZykge1xuICAgIGNvbnNvbGUubG9nKGJvb2tpbmcpO1xuICAgIGxldCBkZWxldGVkRGF0YSA9IGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvb3Zlcmxvb2svMTkwNC9ib29raW5ncy9ib29raW5ncycsIHtcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvb2tpbmcpXG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpKVxuICAgIHJldHVybiBkZWxldGVkRGF0YTtcbiAgfSxcblxuICBwb3N0Qm9va2luZyhib29raW5nKSB7XG4gICAgbGV0IG5ld0Jvb2tpbmcgPSBmZXRjaEFQSS5idWlsZEJvb2tpbmdPYmplY3QoYm9va2luZyk7XG4gICAgbGV0IHBvc3RlZERhdGEgPSBmZXRjaCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL292ZXJsb29rLzE5MDQvYm9va2luZ3MvYm9va2luZ3MnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3Qm9va2luZylcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSkpXG4gICAgcmV0dXJuIHBvc3RlZERhdGE7XG4gIH0sXG5cbiAgYnVpbGRCb29raW5nT2JqZWN0KGJvb2tpbmcpIHtcbiAgICBsZXQgYm9va2luZ09iamVjdCA9IHtcbiAgICAgIHVzZXJJRCA6IGJvb2tpbmcudXNlcklELFxuICAgICAgZGF0ZSA6IGJvb2tpbmcuZGF0ZSxcbiAgICAgIHJvb21OdW1iZXIgOiBib29raW5nLnJvb21OdW1iZXJcbiAgICB9XG4gICAgcmV0dXJuIGJvb2tpbmdPYmplY3Q7XG4gIH1cbn07XG5cbmV4cG9ydCB7ZmV0Y2hBUEl9O1xuIiwiaW1wb3J0IFVzZXIgZnJvbSAnLi9Vc2VyJztcblxuY2xhc3MgQ3VzdG9tZXIgZXh0ZW5kcyBVc2VyIHtcbiAgY29uc3RydWN0b3IoaWQsIG5hbWUsIHJvb21EYXRhLCBib29raW5nRGF0YSkge1xuICAgIHN1cGVyKGlkLCBuYW1lLCBbXSwgcm9vbURhdGEsIGJvb2tpbmdEYXRhKTtcbiAgICB0aGlzLm15Qm9va2luZ3MgPSBbXTtcbiAgICB0aGlzLnRvdGFsU3BlbnQgPSAwO1xuICB9O1xuXG4gIGdldFVzZXJCb29raW5ncyhpZCkge1xuICAgIGNvbnN0IHVzZXJCb29raW5ncyA9IHRoaXMuYm9va2luZ3MuZmlsdGVyKChib29raW5nKSA9PiB7XG4gICAgICByZXR1cm4gYm9va2luZy51c2VySUQgPT09IGlkO1xuICAgIH0pXG4gICAgdGhpcy5teUJvb2tpbmdzID0gdXNlckJvb2tpbmdzO1xuICB9O1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21lcjtcbiIsImltcG9ydCBVc2VyIGZyb20gJy4vVXNlcic7XG5cbmNsYXNzIE1hbmFnZXIgZXh0ZW5kcyBVc2Vye1xuICBjb25zdHJ1Y3RvcihpZCwgbmFtZSwgdXNlckRhdGEsIHJvb21EYXRhLCBib29raW5nRGF0YSkge1xuICAgIHN1cGVyKGlkLCBuYW1lLCB1c2VyRGF0YSwgcm9vbURhdGEsIGJvb2tpbmdEYXRhKTtcbiAgfTtcblxuICBnZXRUb3RhbFJldmVudWVGb3JEYXRlKGRhdGUpIHtcbiAgICBjb25zdCB0b3RhbFJldmVudWVGb3JUb2RheSA9IHRoaXMuYm9va2luZ3MucmVkdWNlKCh0b3RhbCwgYm9va2luZykgPT4ge1xuICAgICAgdGhpcy5yb29tcy5mb3JFYWNoKChyb29tKSA9PiB7XG4gICAgICAgIGlmIChib29raW5nLmRhdGUgPT09IGRhdGUgJiYgYm9va2luZy5yb29tTnVtYmVyID09PSByb29tLm51bWJlcikge1xuICAgICAgICAgIHRvdGFsICs9IHJvb20uY29zdFBlck5pZ2h0O1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgcmV0dXJuIHRvdGFsO1xuICAgIH0sIDApO1xuICAgIGNvbnN0IHJvdW5kZWRBbW91bnQgPSB0b3RhbFJldmVudWVGb3JUb2RheS50b0ZpeGVkKDIpXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQocm91bmRlZEFtb3VudCk7XG4gIH07XG5cbiAgZ2V0UGVyY2VudGFnZU9jY3VwaWVkKGRhdGUpIHtcbiAgICBjb25zdCBvY2N1cGllZCA9IHRoaXMuYm9va2luZ3MucmVkdWNlKChzdW0sIGJvb2tpbmcpID0+IHtcbiAgICAgIHRoaXMucm9vbXMuZm9yRWFjaCgocm9vbSkgPT4ge1xuICAgICAgICBpZiAoYm9va2luZy5kYXRlID09PSBkYXRlICYmIGJvb2tpbmcucm9vbU51bWJlciA9PT0gcm9vbS5udW1iZXIpIHtcbiAgICAgICAgICBzdW0gKz0gMTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHJldHVybiBzdW07XG4gICAgfSwgMClcbiAgIGxldCBhdmVyYWdlID0gKG9jY3VwaWVkIC8gdGhpcy5yb29tcy5sZW5ndGgpICogMTAwO1xuICAgcmV0dXJuIGF2ZXJhZ2UudG9GaXhlZCgpO1xuICB9O1xuXG4gIGdldEN1c3RvbWVyQnlJZChpZCkge1xuICAgIGNvbnN0IHNwbGl0VXNlcm5hbWUgPSBpZC5zcGxpdCgnY3VzdG9tZXInKTtcbiAgICBjb25zdCBpbnRJRCA9IHBhcnNlSW50KHNwbGl0VXNlcm5hbWVbMV0pXG4gICAgY29uc3QgY3VycmVudFVzZXIgPSB0aGlzLnVzZXJzLmZpbmQoKHVzZXIpID0+IHtcbiAgICAgIHJldHVybiB1c2VyLmlkID09PSBpbnRJRDtcbiAgICB9KVxuICAgIHJldHVybiBjdXJyZW50VXNlcjtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hbmFnZXI7XG4iLCJjbGFzcyBVc2VyIHtcbiAgY29uc3RydWN0b3IoaWQsIG5hbWUsIHVzZXJEYXRhLCByb29tRGF0YSwgYm9va2luZ0RhdGEpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnVzZXJzID0gdXNlckRhdGE7XG4gICAgdGhpcy5yb29tcyA9IHJvb21EYXRhO1xuICAgIHRoaXMuYm9va2luZ3MgPSBib29raW5nRGF0YTtcbiAgfTtcblxuICBzZWFyY2hBdmFpbGFibGVSb29tc0J5RGF0ZShkYXRlKSB7XG4gICAgbGV0IHJvb21zQm9va2VkID0gdGhpcy5ib29raW5ncy5yZWR1Y2UoKGFsbEJvb2tlZFJvb21zLCByb29tQm9va2VkICkgPT4ge1xuICAgICAgaWYgKGRhdGUgPT09IHJvb21Cb29rZWQuZGF0ZSkge1xuICAgICAgICBhbGxCb29rZWRSb29tcy5wdXNoKHJvb21Cb29rZWQucm9vbU51bWJlcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWxsQm9va2VkUm9vbXM7XG4gICAgfSwgW10pXG4gICAgY29uc3Qgcm9vbXNBdmFpbGFibGUgPSB0aGlzLnJvb21zLmZpbHRlcigocm9vbSkgPT4ge1xuICAgICAgcmV0dXJuICFyb29tc0Jvb2tlZC5pbmNsdWRlcyhyb29tLm51bWJlcik7XG4gICAgfSk7XG4gICAgY29uc3Qgbm9Sb29tc0F2YWlsYWJsZSA9ICAnV2UgYXJlIHZlcnkgc29ycnkuIE5vIGF2YWlsYWJsZSByb29tcyBvbiB0aGF0IGRhdGUuIFBsZWFzZSBtb2RpZnkgeW91ciBzZWFyY2guJztcbiAgICByZXR1cm4gcm9vbXNBdmFpbGFibGUubGVuZ3RoID4gMCA/IHJvb21zQXZhaWxhYmxlIDogbm9Sb29tc0F2YWlsYWJsZTtcbiAgfTtcblxuICBmaWx0ZXJSb29tc0J5VHlwZShyb29tVHlwZSwgYXZhaWxhYmxlUm9vbXMpIHtcbiAgICBsZXQgbWF0Y2hlZFJvb21zID0gYXZhaWxhYmxlUm9vbXMuZmlsdGVyKChyb29tKSA9PiB7XG4gICAgICByZXR1cm4gcm9vbS5yb29tVHlwZSA9PT0gcm9vbVR5cGU7XG4gICAgfSlcbiAgICBjb25zdCBub1Jvb21zQXZhaWxhYmxlID0gJ1dlIGFyZSB2ZXJ5IHNvcnJ5LiBObyBhdmFpbGFibGUgcm9vbXMgb24gdGhhdCBkYXRlLiBQbGVhc2UgbW9kaWZ5IHlvdXIgc2VhcmNoLic7XG4gICAgcmV0dXJuIG1hdGNoZWRSb29tcy5sZW5ndGggPiAwID8gbWF0Y2hlZFJvb21zIDogbm9Sb29tc0F2YWlsYWJsZTtcbiAgfTtcblxuICBnZXRDdXN0b21lclRvdGFsU3BlbnQoY3VzdG9tZXIpIHtcbiAgICBjb25zdCBhbW91bnQgPSB0aGlzLmJvb2tpbmdzLnJlZHVjZSgodG90YWwsIGJvb2tpbmcpID0+IHtcbiAgICAgIHRoaXMucm9vbXMuZm9yRWFjaCgocm9vbSkgPT4ge1xuICAgICAgICBpZiAoYm9va2luZy51c2VySUQgPT09IGN1c3RvbWVyLmlkICYmIHJvb20ubnVtYmVyID09PSBib29raW5nLnJvb21OdW1iZXIpIHtcbiAgICAgICAgICB0b3RhbCArPSByb29tLmNvc3RQZXJOaWdodDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgcmV0dXJuIHRvdGFsO1xuICB9LCAwKTtcbiAgICBjb25zdCByb3VuZGVkQW1vdW50ID0gYW1vdW50LnRvRml4ZWQoMik7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQocm91bmRlZEFtb3VudCk7XG4gIH07XG5cbiAgdXNlckxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCwgdXNlcnMpIHtcbiAgICBsZXQgc3BsaXRVc2VybmFtZSA9IHVzZXJuYW1lLnNwbGl0KCdjdXN0b21lcicpO1xuICAgICAgIGNvbnN0IHVzZXJJbmZvID0gdXNlcnMuZmluZCgodXNlcikgPT4ge1xuICAgICAgICAgaWYgKHBhc3N3b3JkID09PSAnb3Zlcmxvb2syMDIwJyAmJiBzcGxpdFVzZXJuYW1lWzFdIDwgNTEpIHtcbiAgICAgICAgICAgcmV0dXJuIHVzZXIuaWQgPT09IHBhcnNlSW50KHNwbGl0VXNlcm5hbWVbMV0pO1xuICAgICAgICAgfSBlbHNlIGlmIChwYXNzd29yZCA9PT0gJ292ZXJsb29rMjAyMCcgJiYgdXNlcm5hbWUgPT09ICdtYW5hZ2VyJylcbiAgICAgICAgICAgcmV0dXJuIHVzZXIuaWQgPT09ICdtYW5hZ2VyJztcbiAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgfVxuICAgICAgIH0pXG4gICAgICAgcmV0dXJuIHVzZXJJbmZvID8gdXNlckluZm8gOiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgdXNlcm5hbWUgYW5kIHBhc3N3b3JkLic7XG4gIH07XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9iYXNlLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vYmFzZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9iYXNlLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL2hvdGVsLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWFnZXMvb3Zlcmxvb2sucG5nXCI7IiwiaW1wb3J0ICcuL2Nzcy9iYXNlLnNjc3MnO1xuaW1wb3J0Jy4vaW1hZ2VzL292ZXJsb29rLnBuZyc7XG5pbXBvcnQnLi9pbWFnZXMvaG90ZWwucG5nJztcbmltcG9ydCBDdXN0b21lciBmcm9tICcuL0N1c3RvbWVyJztcbmltcG9ydCBNYW5hZ2VyIGZyb20gJy4vTWFuYWdlcic7XG5pbXBvcnQge2ZldGNoQVBJfSBmcm9tICcuL0FQSSc7XG5cbmxldCB1c2VyRGF0YTtcbmxldCByb29tRGF0YTtcbmxldCBib29raW5nRGF0YTtcbmxldCBjdXN0b21lcjtcbmxldCBtYW5hZ2VyO1xubGV0IGRhdGU7XG5sZXQgbmV3Qm9va2luZyA9IHt1c2VySUQ6IDAsIGRhdGU6ICcnLCByb29tTnVtYmVyOiAwfTtcblxuUHJvbWlzZS5hbGwoW2ZldGNoQVBJLmZldGNoVXNlcnMoKSwgZmV0Y2hBUEkuZmV0Y2hSb29tcygpLCBmZXRjaEFQSS5mZXRjaEJvb2tpbmdzKCldKS50aGVuKHZhbHVlcyA9PiB7XG4gIHVzZXJEYXRhID0gdmFsdWVzWzBdWyd1c2VycyddO1xuICByb29tRGF0YSA9IHZhbHVlc1sxXVsncm9vbXMnXTtcbiAgYm9va2luZ0RhdGEgPSB2YWx1ZXNbMl1bJ2Jvb2tpbmdzJ107XG59KTtcblxubGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcbmxldCBkZCA9IFN0cmluZyh0b2RheS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG5sZXQgbW0gPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7XG5sZXQgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG50b2RheSA9IHl5eXkgKyAnLycgKyBtbSArICcvJyArIGRkO1xuXG5jb25zdCBsb2dpbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbi1idXR0b24nKTtcbmNvbnN0IGNsZWFyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsZWFyLWJ1dHRvbicpO1xuY29uc3QgdXNlcm5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VybmFtZS1pbnB1dCcpO1xuY29uc3QgcGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXNzd29yZC1pbnB1dCcpO1xuY29uc3QgbG9naW5TY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4tc2NyZWVuJyk7XG5jb25zdCBjdXN0b21lckRhc2hib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b21lci1sYXlvdXQnKTtcbmNvbnN0IGN1c3RvbWVyQm9va2luZ0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tZXItYm9va2luZ3MtYXJlYScpO1xuY29uc3QgbWFuYWdlckJvb2tpbmdBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hbmFnZXItYm9va2luZ3MtYXJlYScpO1xuY29uc3QgbWFuYWdlckRhc2hib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYW5hZ2VyLWxheW91dCcpO1xuY29uc3QgY3VzdG9tZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1c3RvbWVyLW5hbWUnKTtcbmNvbnN0IG1hbmFnZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hbmFnZXItbmFtZScpO1xuY29uc3QgY3VzdG9tZXJEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tZXItY2FsZW5kYXItZHJvcGRvd24nKTtcbmNvbnN0IG1hbmFnZXJEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFuYWdlci1jYWxlbmRhci1kcm9wZG93bicpO1xuY29uc3QgY3VzdG9tZXJBdmFpbGFibGVSb29tcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b21lci1hdmFpbGFibGUtcm9vbXMnKTtcbmNvbnN0IG1hbmFnZXJBdmFpbGFibGVSb29tcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYW5hZ2VyLWF2YWlsYWJsZS1yb29tcycpO1xuY29uc3QgY3VzdG9tZXJCb29raW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b21lci1ib29raW5ncycpO1xuY29uc3QgbWFuYWdlckJvb2tpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hbmFnZXItYm9va2luZ3MnKTtcbmNvbnN0IGN1c3RvbWVyUm9vbVR5cGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb29tVHlwZXMtY3VzdG9tZXInKTtcbmNvbnN0IG1hbmFnZXJSb29tVHlwZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb21UeXBlcy1tYW5hZ2VyJyk7XG5jb25zdCBjdXN0b21lclNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hbmFnZXItc2VhcmNoLWlucHV0Jyk7XG5jb25zdCBjdXN0b21lclNwZW50U3ltYm9sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1c3RvbWVyLXNwZW50LXN5bWJvbCcpXG5jb25zdCBjdXN0b21lclNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYW5hZ2VyLXNlYXJjaC1idXR0b24nKTtcbmNvbnN0IGN1c3RvbWVyRG9sbGFyc1NwZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1c3RvbWVyLWRvbGxhcnMtc3BlbnQnKTtcbmNvbnN0IGN1c3RvbWVyU3BlbnREZWNpbWFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1c3RvbWVyLWFtb3VudC1kZWNpbWFsJyk7XG5jb25zdCBjdXN0b21lckNlbnRzU3BlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tZXItY2VudHMtc3BlbnQnKTtcbmNvbnN0IG1hbmFnZXJTcGVudFN5bWJvbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYW5hZ2VyLXNwZW50LXN5bWJvbCcpO1xuY29uc3QgbWFuYWdlckRvbGxhcnNTcGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYW5hZ2VyLWRvbGxhcnMtc3BlbnQnKTtcbmNvbnN0IG1hbmFnZXJTcGVudERlY2ltYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFuYWdlci1hbW91bnQtZGVjaW1hbCcpO1xuY29uc3QgbWFuYWdlckNlbnRzU3BlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFuYWdlci1jZW50cy1zcGVudCcpO1xuY29uc3QgbWFuYWdlckFtb3VudFNwZW50TGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFuYWdlci1hbW91bnQtc3BlbnQtbGFiZWwnKTtcbmNvbnN0IG1hbmFnZXJSZXZlbnVlU3ltYm9sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hbmFnZXItcmV2ZW51ZS1zeW1ib2wnKTtcbmNvbnN0IG1hbmFnZXJSZXZlbnVlRG9sbGFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYW5hZ2VyLXJldmVudWUtZG9sbGFycycpO1xuY29uc3QgbWFuYWdlclJldmVudWVEZWNpbWFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hbmFnZXItcmV2ZW51ZS1kZWNpbWFsJyk7XG5jb25zdCBtYW5hZ2VyUmV2ZW51ZUNlbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hbmFnZXItcmV2ZW51ZS1jZW50cycpO1xuY29uc3QgbWFuYWdlclBlcmNlbnRhZ2VPY2N1cGllZFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hbmFnZXItcGVyY2VudGFnZS12YWx1ZScpO1xuY29uc3QgbWFuYWdlclBlcmNlbnRhZ2VPY2N1cGllZFN5bWJvbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYW5hZ2VyLXBlcmNlbnRhZ2Utc3ltYm9sJyk7XG5cbmxvZ2luQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXNlckxvZ2luKTtcbmNsZWFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xlYXJJbnB1dHMpO1xuY3VzdG9tZXJEYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB1cGRhdGVDdXN0b21lckF2YWlsYWJsZVJvb21zKTtcbm1hbmFnZXJEYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB1cGRhdGVNYW5hZ2VyQXZhaWxhYmxlUm9vbXMpO1xuY3VzdG9tZXJSb29tVHlwZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZpbHRlckN1c3RvbWVyUm9vbXNCeVR5cGUpO1xubWFuYWdlclJvb21UeXBlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZmlsdGVyTWFuYWdlclJvb21zQnlUeXBlKTtcbmN1c3RvbWVyU2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VhcmNoQ3VzdG9tZXJzKTtcbmN1c3RvbWVyQXZhaWxhYmxlUm9vbXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RBUm9vbSk7XG5tYW5hZ2VyQXZhaWxhYmxlUm9vbXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RBUm9vbSk7XG5tYW5hZ2VyQm9va2luZ3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RCb29raW5nKTtcblxuZnVuY3Rpb24gdXNlckxvZ2luKCkge1xuICBsZXQgdXNlcjtcbiAgY29uc3QgdXNlcm5hbWUgPSB1c2VybmFtZUlucHV0LnZhbHVlO1xuICBjb25zdCBwYXNzd29yZCA9IHBhc3N3b3JkSW5wdXQudmFsdWU7XG4gIGxldCBzcGxpdFVzZXJuYW1lID0gdXNlcm5hbWUuc3BsaXQoJ2N1c3RvbWVyJyk7XG4gIGlmIChwYXNzd29yZCA9PT0gJ292ZXJsb29rMjAyMCcgJiYgc3BsaXRVc2VybmFtZVswXSA9PT0gJycgJiYgc3BsaXRVc2VybmFtZVsxXSA8IDUxKSB7XG4gICAgdXNlciA9IHVzZXJEYXRhLmZpbmQoKHVzZXIpID0+IHtyZXR1cm4gdXNlci5pZCA9PT0gcGFyc2VJbnQoc3BsaXRVc2VybmFtZVsxXSl9KVxuICAgIGNyZWF0ZUN1c3RvbWVyKHVzZXIpO1xuICAgIGRpc3BsYXlDdXN0b21lckRhc2hib2FyZCgpO1xuICB9IGVsc2UgaWYgKHBhc3N3b3JkID09PSAnb3Zlcmxvb2syMDIwJyAmJiBzcGxpdFVzZXJuYW1lWzBdID09PSAnbWFuYWdlcicpIHtcbiAgICB1c2VyID0gbmV3IE1hbmFnZXIoMSwgJ01hbmFnZXInLCB1c2VyRGF0YSwgcm9vbURhdGEsIGJvb2tpbmdEYXRhKTtcbiAgICBjcmVhdGVNYW5hZ2VyKHVzZXIpO1xuICAgIGRpc3BsYXlNYW5hZ2VyRGFzaGJvYXJkKCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdXNlciA9IHVuZGVmaW5lZDtcbiAgfVxuICBjbGVhcklucHV0cyh1c2VybmFtZUlucHV0KTtcbiAgY2xlYXJJbnB1dHMocGFzc3dvcmRJbnB1dCk7XG4gIHJldHVybiB1c2VyID8gdXNlciA6IGFsZXJ0KCdQbGVhc2UgZW50ZXIgYSB2YWxpZCB1c2VybmFtZSBhbmQgcGFzc3dvcmQuJyk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVDdXN0b21lcih1c2VySW5mbykge1xuICBjdXN0b21lciA9IG5ldyBDdXN0b21lcih1c2VySW5mby5pZCwgdXNlckluZm8ubmFtZSwgcm9vbURhdGEsIGJvb2tpbmdEYXRhKTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZU1hbmFnZXIodXNlcikge1xuICBtYW5hZ2VyID0gdXNlcjtcbn07XG5cbmZ1bmN0aW9uIGRpc3BsYXlDdXN0b21lckRhc2hib2FyZCgpIHtcbiAgZGF0ZSA9IHRvZGF5O1xuICBsb2dpblNjcmVlbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgY3VzdG9tZXJEYXNoYm9hcmQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIGN1c3RvbWVyQm9va2luZ0FyZWEuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIGNyZWF0ZUN1c3RvbWVyRGFzaGJvYXJkKCk7XG5cbn1cblxuZnVuY3Rpb24gZGlzcGxheU1hbmFnZXJEYXNoYm9hcmQoKSB7XG4gIGRhdGUgPSB0b2RheTtcbiAgbG9naW5TY3JlZW4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIG1hbmFnZXJEYXNoYm9hcmQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIG1hbmFnZXJCb29raW5nQXJlYS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgY3JlYXRlTWFuYWdlckRhc2hib2FyZCgpO1xuICBnZXRNYW5hZ2VyUmV2ZW51ZSh0b2RheSk7XG4gIGdldE1hbmFnZXJQZXJjZW50YWdlT2NjdXBpZWQodG9kYXkpO1xufTtcblxuZnVuY3Rpb24gdXBkYXRlQ3VzdG9tZXJBdmFpbGFibGVSb29tcygpIHtcbiAgY3VzdG9tZXJBdmFpbGFibGVSb29tcy5pbm5lclRleHQgPSAnJztcbiAgZGF0ZSA9IGN1c3RvbWVyRGF0ZUlucHV0LnZhbHVlLnJlcGxhY2UoLy0vZywgXCIvXCIpO1xuICBjb25zdCBhbGxBdmFpbGFibGVSb29tcyA9IGN1c3RvbWVyLnNlYXJjaEF2YWlsYWJsZVJvb21zQnlEYXRlKGRhdGUpO1xuICBkaXNwbGF5QXZhaWxhYmxlUm9vbXMoZGF0ZSwgY3VzdG9tZXIpO1xufTtcblxuZnVuY3Rpb24gdXBkYXRlTWFuYWdlckF2YWlsYWJsZVJvb21zKCkge1xuICBtYW5hZ2VyQXZhaWxhYmxlUm9vbXMuaW5uZXJUZXh0ID0gJyc7XG4gIGRhdGUgPSBtYW5hZ2VyRGF0ZUlucHV0LnZhbHVlLnJlcGxhY2UoLy0vZywgXCIvXCIpO1xuICBjb25zdCBhbGxBdmFpbGFibGVSb29tcyA9IG1hbmFnZXIuc2VhcmNoQXZhaWxhYmxlUm9vbXNCeURhdGUoZGF0ZSk7XG4gIGRpc3BsYXlBdmFpbGFibGVSb29tcyhkYXRlLCBtYW5hZ2VyKTtcbiAgdXBkYXRlTWFuYWdlckluZm8oZGF0ZSwgbWFuYWdlcik7XG59O1xuXG5mdW5jdGlvbiBjbGVhcklucHV0cyhpbnB1dCkge1xuICB1c2VybmFtZUlucHV0LnZhbHVlID0gJyc7XG4gIHBhc3N3b3JkSW5wdXQudmFsdWUgPSAnJztcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUN1c3RvbWVyRGFzaGJvYXJkKCkge1xuICBjdXN0b21lck5hbWUuaW5uZXJUZXh0ID0gY3VzdG9tZXIubmFtZTtcbiAgZGlzcGxheUF2YWlsYWJsZVJvb21zKHRvZGF5LCBjdXN0b21lcik7XG4gIGdldEN1c3RvbWVyQm9va2luZ3MoKTtcbiAgZ2V0VG90YWxTcGVudChjdXN0b21lcik7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVNYW5hZ2VyRGFzaGJvYXJkKCkge1xuICBkaXNwbGF5QXZhaWxhYmxlUm9vbXModG9kYXksIG1hbmFnZXIpO1xufTtcblxuZnVuY3Rpb24gZGlzcGxheUF2YWlsYWJsZVJvb21zKGRhdGUsIHVzZXIpIHtcbiAgaWYodXNlciA9PT0gY3VzdG9tZXIpIHtcbiAgICBkaXNwbGF5Q3VzdG9tZXJBdmFpbGFibGVSb29tcyhkYXRlLCB1c2VyKTtcbiAgfSBlbHNlIGlmICh1c2VyID09PSBtYW5hZ2VyKSB7XG4gICAgZGlzcGxheU1hbmFnZXJBdmFpbGFibGVSb29tcyhkYXRlLCB1c2VyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5Q3VzdG9tZXJBdmFpbGFibGVSb29tcyhkYXRlLCB1c2VyKSB7XG4gIGNvbnN0IGFsbEF2YWlsYWJsZVJvb21zID0gdXNlci5zZWFyY2hBdmFpbGFibGVSb29tc0J5RGF0ZShkYXRlKTtcbiAgaWYgKHR5cGVvZiBhbGxBdmFpbGFibGVSb29tcyA9PT0gXCJzdHJpbmdcIikge1xuICAgIGxldCByb29tSW5mbyA9IGBcbiAgICA8ZGl2IGNsYXNzPVwicm9vbS1jYXJkXCI+XG4gICAgICA8cD4gJHthbGxBdmFpbGFibGVSb29tc30gPC9wPlxuICAgIDwvZGl2PlxuICAgIGBcbiAgY3VzdG9tZXJBdmFpbGFibGVSb29tcy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHJvb21JbmZvKTtcbn0gZWxzZSB7XG4gIGFsbEF2YWlsYWJsZVJvb21zLmZvckVhY2goKHJvb20pID0+IHtcbiAgICBsZXQgcm9vbUluZm8gPSBgXG4gICAgPGRpdiBpZD1cIiR7cm9vbS5udW1iZXJ9XCIgY2xhc3M9XCJyb29tLWNhcmRcIiB0YWJpbmRleD1cIjBcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb29tLWNhcmQtYnJlYWstb25lXCI+XG4gICAgICAgIDxwPlJvb20gTnVtYmVyOiAke3Jvb20ubnVtYmVyfTwvcD5cbiAgICAgICAgPHA+VHlwZTogJHtyb29tLnJvb21UeXBlfTwvcD5cbiAgICAgICAgPHA+QmlkZXQ6ICR7cm9vbS5iaWRldH08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb29tLWNhcmQtYnJlYWstdHdvXCI+XG4gICAgICAgIDxwPkJlZCBTaXplOiAke3Jvb20uYmVkU2l6ZX08L3A+XG4gICAgICAgIDxwPkJlZHM6ICR7cm9vbS5udW1CZWRzfTwvcD5cbiAgICAgICAgPHA+Q29zdCBQZXIgTmlnaHQ6ICQke3Jvb20uY29zdFBlck5pZ2h0fTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJvb2stcm9vbS1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgbmFtZT1cImJ1dHRvblwiIHRhYmluZGV4PVwiMFwiPkJvb2s8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICBgXG4gICAgY3VzdG9tZXJBdmFpbGFibGVSb29tcy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHJvb21JbmZvKTtcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlNYW5hZ2VyQXZhaWxhYmxlUm9vbXMoZGF0ZSwgdXNlcikge1xuICBjb25zdCBhbGxBdmFpbGFibGVSb29tcyA9IHVzZXIuc2VhcmNoQXZhaWxhYmxlUm9vbXNCeURhdGUoZGF0ZSk7XG4gIGlmICh0eXBlb2YgYWxsQXZhaWxhYmxlUm9vbXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICBsZXQgcm9vbUluZm8gPSBgXG4gICAgPGRpdiBjbGFzcz1cInJvb20tY2FyZFwiPlxuICAgICAgPHA+ICR7YWxsQXZhaWxhYmxlUm9vbXN9IDwvcD5cbiAgICA8L2Rpdj5cbiAgICBgXG4gIG1hbmFnZXJBdmFpbGFibGVSb29tcy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHJvb21JbmZvKTtcbiAgfSBlbHNlIHtcbiAgYWxsQXZhaWxhYmxlUm9vbXMuZm9yRWFjaCgocm9vbSkgPT4ge1xuICAgIGxldCByb29tSW5mbyA9IGBcbiAgICA8ZGl2IGlkPVwiJHtyb29tLm51bWJlcn1cIiBjbGFzcz1cInJvb20tY2FyZFwiIHRhYmluZGV4PVwiMFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvb20tY2FyZC1icmVhay1vbmVcIj5cbiAgICAgICAgPHA+Um9vbSBOdW1iZXI6ICR7cm9vbS5udW1iZXJ9PC9wPlxuICAgICAgICA8cD5UeXBlOiAke3Jvb20ucm9vbVR5cGV9PC9wPlxuICAgICAgICA8cD5CaWRldDogJHtyb29tLmJpZGV0fTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInJvb20tY2FyZC1icmVhay10d29cIj5cbiAgICAgICAgPHA+QmVkIFNpemU6ICR7cm9vbS5iZWRTaXplfTwvcD5cbiAgICAgICAgPHA+QmVkczogJHtyb29tLm51bUJlZHN9PC9wPlxuICAgICAgICA8cD5Db3N0IFBlciBOaWdodDogJCR7cm9vbS5jb3N0UGVyTmlnaHR9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYm9vay1yb29tLWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiBuYW1lPVwiYnV0dG9uXCIgdGFiaW5kZXg9XCIwXCI+Qm9vazwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIGBcbiAgICBtYW5hZ2VyQXZhaWxhYmxlUm9vbXMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCByb29tSW5mbyk7XG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRDdXN0b21lckJvb2tpbmdzKCkge1xuICBjb25zdCBhbGxCb29raW5ncyA9IGN1c3RvbWVyLmJvb2tpbmdzLnJlZHVjZSgoYWxsQm9va2luZ3MsIGJvb2tpbmcpID0+IHtcbiAgICBjdXN0b21lci5yb29tcy5mb3JFYWNoKChyb29tKSA9PiB7XG4gICAgICBpZiAoYm9va2luZy51c2VySUQgPT09IGN1c3RvbWVyLmlkICYmIGJvb2tpbmcucm9vbU51bWJlciA9PT0gcm9vbS5udW1iZXIpIHtcbiAgICAgICAgYWxsQm9va2luZ3MucHVzaChib29raW5nKTtcbiAgICAgIH1cbiAgICB9KVxuICByZXR1cm4gYWxsQm9va2luZ3M7XG4gIH0sIFtdKVxuICBkaXNwbGF5Q3VzdG9tZXJCb29raW5ncyhhbGxCb29raW5ncyk7XG59O1xuXG5mdW5jdGlvbiBkaXNwbGF5Q3VzdG9tZXJCb29raW5ncyhib29raW5ncykge1xuICBib29raW5ncy5mb3JFYWNoKChib29raW5nKSA9PiB7XG4gICAgbGV0IGJvb2tpbmdJbmZvID0gYFxuICAgIDxkaXYgY2xhc3M9XCJib29raW5nLWNhcmRcIiB0YWJpbmRleD1cIjBcIj5cbiAgICAgIDxwPkJvb2tpbmcgQ29uZmlybWF0aW9uOiAke2Jvb2tpbmcuaWR9PC9wPlxuICAgICAgPHA+RGF0ZTogJHtib29raW5nLmRhdGV9PC9wPlxuICAgICAgPHA+Um9vbSBOdW1iZXI6ICR7Ym9va2luZy5yb29tTnVtYmVyfTwvcD5cbiAgICA8L2Rpdj5cbiAgICBgXG4gIGN1c3RvbWVyQm9va2luZ3MuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBib29raW5nSW5mbyk7XG4gIH0pXG59O1xuXG5mdW5jdGlvbiBmaWx0ZXJDdXN0b21lclJvb21zQnlUeXBlKCkge1xuICBkYXRlID0gY3VzdG9tZXJEYXRlSW5wdXQudmFsdWUucmVwbGFjZSgvLS9nLCBcIi9cIikgfHwgdG9kYXk7XG4gIGNvbnN0IGFsbEF2YWlsYWJsZVJvb21zID0gY3VzdG9tZXIuc2VhcmNoQXZhaWxhYmxlUm9vbXNCeURhdGUoZGF0ZSk7XG4gIGxldCByb29tVHlwZVNlbGVjdGlvbiA9IGN1c3RvbWVyUm9vbVR5cGVJbnB1dC5vcHRpb25zW2N1c3RvbWVyUm9vbVR5cGVJbnB1dC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgY29uc3QgYWxsRmlsdGVyZWRSb29tcyA9IGFsbEF2YWlsYWJsZVJvb21zLnJlZHVjZSgoYWxsRmlsdGVyZWQsIHJvb20pID0+IHtcbiAgICBpZiAocm9vbS5yb29tVHlwZSA9PT0gcm9vbVR5cGVTZWxlY3Rpb24pIHtcbiAgICAgIGFsbEZpbHRlcmVkLnB1c2gocm9vbSk7XG4gICAgfSBlbHNlIGlmIChyb29tVHlwZVNlbGVjdGlvbiA9PT0gJ2FsbCByb29tcycpIHtcbiAgICAgIGFsbEZpbHRlcmVkLnB1c2gocm9vbSk7XG4gICAgfVxuICByZXR1cm4gYWxsRmlsdGVyZWQ7XG4gIH0sIFtdKVxuICBkaXNwbGF5Q3VzdG9tZXJGaWx0ZXJlZFJvb21zKGFsbEZpbHRlcmVkUm9vbXMpO1xufTtcblxuZnVuY3Rpb24gZmlsdGVyTWFuYWdlclJvb21zQnlUeXBlKCkge1xuICBkYXRlID0gbWFuYWdlckRhdGVJbnB1dC52YWx1ZS5yZXBsYWNlKC8tL2csIFwiL1wiKSB8fCB0b2RheTtcbiAgY29uc3QgYWxsQXZhaWxhYmxlUm9vbXMgPSBtYW5hZ2VyLnNlYXJjaEF2YWlsYWJsZVJvb21zQnlEYXRlKGRhdGUpO1xuICBsZXQgcm9vbVR5cGVTZWxlY3Rpb24gPSBtYW5hZ2VyUm9vbVR5cGVJbnB1dC5vcHRpb25zW21hbmFnZXJSb29tVHlwZUlucHV0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuICBjb25zdCBhbGxGaWx0ZXJlZFJvb21zID0gYWxsQXZhaWxhYmxlUm9vbXMucmVkdWNlKChhbGxGaWx0ZXJlZCwgcm9vbSkgPT4ge1xuICAgIGlmIChyb29tLnJvb21UeXBlID09PSByb29tVHlwZVNlbGVjdGlvbikge1xuICAgICAgYWxsRmlsdGVyZWQucHVzaChyb29tKTtcbiAgICB9IGVsc2UgaWYgKHJvb21UeXBlU2VsZWN0aW9uID09PSAnYWxsIHJvb21zJykge1xuICAgICAgYWxsRmlsdGVyZWQucHVzaChyb29tKTtcbiAgICB9XG4gIHJldHVybiBhbGxGaWx0ZXJlZDtcbiAgfSwgW10pXG4gIGRpc3BsYXlNYW5hZ2VyRmlsdGVyZWRSb29tcyhhbGxGaWx0ZXJlZFJvb21zKTtcbn07XG5cbmZ1bmN0aW9uIGRpc3BsYXlDdXN0b21lckZpbHRlcmVkUm9vbXMoYWxsRmlsdGVyZWRSb29tcykge1xuICBjdXN0b21lckF2YWlsYWJsZVJvb21zLmlubmVySFRNTCA9ICcnO1xuICBhbGxGaWx0ZXJlZFJvb21zLmZvckVhY2goKHJvb20pID0+IHtcbiAgICBsZXQgcm9vbUluZm8gPSBgXG4gICAgPGRpdiBpZD1cIiR7cm9vbS5udW1iZXJ9XCIgY2xhc3M9XCJyb29tLWNhcmRcIiB0YWJpbmRleD1cIjBcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb29tLWNhcmQtYnJlYWstb25lXCI+XG4gICAgICAgIDxwPlJvb20gTnVtYmVyOiAke3Jvb20ubnVtYmVyfTwvcD5cbiAgICAgICAgPHA+VHlwZTogJHtyb29tLnJvb21UeXBlfTwvcD5cbiAgICAgICAgPHA+QmlkZXQ6ICR7cm9vbS5iaWRldH08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb29tLWNhcmQtYnJlYWstdHdvXCI+XG4gICAgICAgIDxwPkJlZCBTaXplOiAke3Jvb20uYmVkU2l6ZX08L3A+XG4gICAgICAgIDxwPkJlZHM6ICR7cm9vbS5udW1CZWRzfTwvcD5cbiAgICAgICAgPHA+Q29zdCBQZXIgTmlnaHQ6ICQke3Jvb20uY29zdFBlck5pZ2h0fTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJvb2stcm9vbS1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgbmFtZT1cImJ1dHRvblwiIHRhYmluZGV4PVwiMFwiPkJvb2s8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICBgXG4gICAgY3VzdG9tZXJBdmFpbGFibGVSb29tcy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHJvb21JbmZvKTtcbiAgfSlcbn07XG5cbmZ1bmN0aW9uIGRpc3BsYXlNYW5hZ2VyRmlsdGVyZWRSb29tcyhhbGxGaWx0ZXJlZFJvb21zKSB7XG4gIG1hbmFnZXJBdmFpbGFibGVSb29tcy5pbm5lckhUTUwgPSAnJztcbiAgYWxsRmlsdGVyZWRSb29tcy5mb3JFYWNoKChyb29tKSA9PiB7XG4gICAgbGV0IHJvb21JbmZvID0gYFxuICAgIDxkaXYgaWQ9XCIke3Jvb20ubnVtYmVyfVwiIGNsYXNzPVwicm9vbS1jYXJkXCIgdGFiaW5kZXg9XCIwXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicm9vbS1jYXJkLWJyZWFrLW9uZVwiPlxuICAgICAgICA8cD5Sb29tIE51bWJlcjogJHtyb29tLm51bWJlcn08L3A+XG4gICAgICAgIDxwPlR5cGU6ICR7cm9vbS5yb29tVHlwZX08L3A+XG4gICAgICAgIDxwPkJpZGV0OiAke3Jvb20uYmlkZXR9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicm9vbS1jYXJkLWJyZWFrLXR3b1wiPlxuICAgICAgICA8cD5CZWQgU2l6ZTogJHtyb29tLmJlZFNpemV9PC9wPlxuICAgICAgICA8cD5CZWRzOiAke3Jvb20ubnVtQmVkc308L3A+XG4gICAgICAgIDxwPkNvc3QgUGVyIE5pZ2h0OiAkJHtyb29tLmNvc3RQZXJOaWdodH08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJib29rLXJvb20tYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIG5hbWU9XCJidXR0b25cIiB0YWJpbmRleD1cIjBcIj5Cb29rPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgYFxuICAgIG1hbmFnZXJBdmFpbGFibGVSb29tcy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHJvb21JbmZvKTtcbiAgfSlcbn07XG5cbmZ1bmN0aW9uIHNlYXJjaEN1c3RvbWVycygpIHtcbiAgY29uc3QgY3VzdG9tZXJJbnB1dCA9IGN1c3RvbWVyU2VhcmNoSW5wdXQudmFsdWU7XG4gIGNvbnN0IHVzZXJSZXN1bHQgPSBtYW5hZ2VyLmdldEN1c3RvbWVyQnlJZChjdXN0b21lcklucHV0KTtcbiAgY3VzdG9tZXIgPSBuZXcgQ3VzdG9tZXIodXNlclJlc3VsdC5pZCwgdXNlclJlc3VsdC5uYW1lLCByb29tRGF0YSwgYm9va2luZ0RhdGEpO1xuICBtYW5hZ2VyTmFtZS5pbm5lclRleHQgPSBjdXN0b21lci5uYW1lO1xuICBnZXRDdXN0b21lckJvb2tpbmdzRm9yTWFuYWdlcihjdXN0b21lcilcbiAgZ2V0VG90YWxTcGVudChtYW5hZ2VyKVxufTtcblxuZnVuY3Rpb24gZ2V0Q3VzdG9tZXJCb29raW5nc0Zvck1hbmFnZXIoY3VzdG9tZXIpIHtcbiAgY29uc3QgYWxsQm9va2luZ3MgPSBjdXN0b21lci5ib29raW5ncy5yZWR1Y2UoKGFsbEJvb2tpbmdzLCBib29raW5nKSA9PiB7XG4gICAgY3VzdG9tZXIucm9vbXMuZm9yRWFjaCgocm9vbSkgPT4ge1xuICAgICAgaWYgKGJvb2tpbmcudXNlcklEID09PSBjdXN0b21lci5pZCAmJiBib29raW5nLnJvb21OdW1iZXIgPT09IHJvb20ubnVtYmVyKSB7XG4gICAgICAgIGFsbEJvb2tpbmdzLnB1c2goYm9va2luZyk7XG4gICAgICB9XG4gICAgfSlcbiAgcmV0dXJuIGFsbEJvb2tpbmdzO1xuICB9LCBbXSlcbiAgZGlzcGxheU1hbmFnZXJWaWV3Qm9va2luZ3MoYWxsQm9va2luZ3MpO1xufTtcblxuZnVuY3Rpb24gZGlzcGxheU1hbmFnZXJWaWV3Qm9va2luZ3MoYm9va2luZ3MpIHtcbiAgbWFuYWdlckJvb2tpbmdzLmlubmVySFRNTCA9ICcnO1xuICBib29raW5ncy5mb3JFYWNoKChib29raW5nKSA9PiB7XG4gICAgbGV0IGJvb2tpbmdJbmZvID0gYFxuICAgIDxkaXYgaWQ9XCIke2Jvb2tpbmcuaWR9XCJjbGFzcz1cImJvb2tpbmctY2FyZFwiIHRhYmluZGV4PVwiMFwiPlxuICAgICAgPHA+Qm9va2luZyBDb25maXJtYXRpb246ICR7Ym9va2luZy5pZH08L3A+XG4gICAgICA8cD5EYXRlOiAke2Jvb2tpbmcuZGF0ZX08L3A+XG4gICAgICA8cD5Sb29tIE51bWJlcjogJHtib29raW5nLnJvb21OdW1iZXJ9PC9wPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImNhbmNlbC1ib29raW5nLWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiBuYW1lPVwiYnV0dG9uXCIgdGFiaW5kZXg9XCIwXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgYFxuICBtYW5hZ2VyQm9va2luZ3MuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBib29raW5nSW5mbyk7XG4gIH0pXG59O1xuXG5mdW5jdGlvbiBnZXRUb3RhbFNwZW50KHVzZXIpIHtcbiAgY29uc3QgdG90YWxTcGVudCA9IHVzZXIuZ2V0Q3VzdG9tZXJUb3RhbFNwZW50KGN1c3RvbWVyKVxuICBkaXNwbGF5Q3VzdG9tZXJBbW91bnRTcGVudCh0b3RhbFNwZW50LCB1c2VyKTtcbn07XG5cbmZ1bmN0aW9uIGRpc3BsYXlDdXN0b21lckFtb3VudFNwZW50KHRvdGFsU3BlbnQsIHVzZXIpIHtcbiAgaWYgKHVzZXIgPT09IG1hbmFnZXIpIHtcbiAgICBtYW5hZ2VyQW1vdW50U3BlbnRMYWJlbC5pbm5lclRleHQgPSAnQW1vdW50IFNwZW50JztcbiAgICBtYW5hZ2VyU3BlbnRTeW1ib2wuaW5uZXJUZXh0ID0gJydcbiAgICBtYW5hZ2VyRG9sbGFyc1NwZW50LmlubmVyVGV4dCA9ICcnO1xuICAgIG1hbmFnZXJTcGVudFN5bWJvbC5pbm5lclRleHQgPSAnJztcbiAgICBtYW5hZ2VyQ2VudHNTcGVudC5pbm5lclRleHQgPSAnJztcbiAgICBsZXQgc3RyaW5nID0gdG90YWxTcGVudC50b1N0cmluZygpO1xuICAgIGNvbnN0IHNwbGl0VG90YWwgPSBzdHJpbmcuc3BsaXQoJy4nKTtcbiAgICBtYW5hZ2VyU3BlbnRTeW1ib2wuaW5uZXJUZXh0ID0gJyQnO1xuICAgIG1hbmFnZXJEb2xsYXJzU3BlbnQuaW5uZXJUZXh0ID0gc3BsaXRUb3RhbFswXTtcbiAgICBtYW5hZ2VyU3BlbnREZWNpbWFsLmlubmVyVGV4dCA9ICcuJztcbiAgICBtYW5hZ2VyQ2VudHNTcGVudC5pbm5lclRleHQgPSBzcGxpdFRvdGFsWzFdO1xuICB9XG4gIGVsc2UgaWYgKHVzZXIgPT09IGN1c3RvbWVyKSB7XG4gIGN1c3RvbWVyU3BlbnRTeW1ib2wuaW5uZXJUZXh0ID0gJyc7XG4gIGN1c3RvbWVyRG9sbGFyc1NwZW50LmlubmVyVGV4dCA9ICcnO1xuICBjdXN0b21lclNwZW50RGVjaW1hbC5pbm5lclRleHQgPSAnJztcbiAgY3VzdG9tZXJDZW50c1NwZW50LmlubmVyVGV4dCA9ICcnO1xuICBsZXQgc3RyaW5nID0gdG90YWxTcGVudC50b1N0cmluZygpO1xuICBjb25zdCBzcGxpdFRvdGFsID0gc3RyaW5nLnNwbGl0KCcuJyk7XG4gIGN1c3RvbWVyU3BlbnRTeW1ib2wuaW5uZXJUZXh0ID0gJyQnO1xuICBjdXN0b21lckRvbGxhcnNTcGVudC5pbm5lclRleHQgPSBzcGxpdFRvdGFsWzBdO1xuICBjdXN0b21lclNwZW50RGVjaW1hbC5pbm5lclRleHQgPSAnLic7XG4gIGN1c3RvbWVyQ2VudHNTcGVudC5pbm5lclRleHQgPSBzcGxpdFRvdGFsWzFdO1xuICB9XG59O1xuXG5mdW5jdGlvbiBnZXRNYW5hZ2VyUmV2ZW51ZShkYXRlKSB7XG4gIGNvbnN0IHJldmVudWUgPSBtYW5hZ2VyLmdldFRvdGFsUmV2ZW51ZUZvckRhdGUoZGF0ZSk7XG4gIGRpc3BsYXlNYW5hZ2VyUmV2ZW51ZShyZXZlbnVlKTtcbn07XG5cbmZ1bmN0aW9uIGRpc3BsYXlNYW5hZ2VyUmV2ZW51ZShyZXZlbnVlKSB7XG4gIG1hbmFnZXJSZXZlbnVlU3ltYm9sLmlubnJUZXh0ID0gJyc7XG4gIG1hbmFnZXJSZXZlbnVlRG9sbGFycy5pbm5lclRleHQgPSAnJztcbiAgbWFuYWdlclJldmVudWVEZWNpbWFsLmlubmVyVGV4dCA9ICcnO1xuICBtYW5hZ2VyUmV2ZW51ZUNlbnRzLmlubmVyVGV4dCA9ICcnO1xuICBjb25zdCBzdHJpbmdSZXZlbnVlID0gcmV2ZW51ZS50b1N0cmluZygpO1xuICBjb25zdCBzcGxpdFRvdGFsID0gc3RyaW5nUmV2ZW51ZS5zcGxpdCgnLicpO1xuICBtYW5hZ2VyUmV2ZW51ZVN5bWJvbC5pbm5lclRleHQgPSAnJCc7XG4gIG1hbmFnZXJSZXZlbnVlRG9sbGFycy5pbm5lclRleHQgPSBzcGxpdFRvdGFsWzBdO1xuICBtYW5hZ2VyUmV2ZW51ZURlY2ltYWwuaW5uZXJUZXh0ID0gJy4nO1xuICBtYW5hZ2VyUmV2ZW51ZUNlbnRzLmlubmVyVGV4dCA9IHNwbGl0VG90YWxbMV0gfHwgJzAnO1xufTtcblxuZnVuY3Rpb24gZ2V0TWFuYWdlclBlcmNlbnRhZ2VPY2N1cGllZChkYXRlKSB7XG4gIGNvbnN0IHBlcmNlbnRhZ2UgPSBtYW5hZ2VyLmdldFBlcmNlbnRhZ2VPY2N1cGllZChkYXRlKTtcbiAgZGlzcGxheU1hbmFnZXJQZXJjZW50YWdlT2NjdXBpZWQocGVyY2VudGFnZSk7XG59O1xuXG5mdW5jdGlvbiBkaXNwbGF5TWFuYWdlclBlcmNlbnRhZ2VPY2N1cGllZChwZXJjZW50YWdlKSB7XG4gIG1hbmFnZXJQZXJjZW50YWdlT2NjdXBpZWRWYWx1ZS5pbm5lclRleHQgPSAnJztcbiAgbWFuYWdlclBlcmNlbnRhZ2VPY2N1cGllZFN5bWJvbC5pbm5lclRleHQgPSAnJztcbiAgbWFuYWdlclBlcmNlbnRhZ2VPY2N1cGllZFZhbHVlLmlubmVyVGV4dCA9IHBlcmNlbnRhZ2U7XG4gIG1hbmFnZXJQZXJjZW50YWdlT2NjdXBpZWRTeW1ib2wuaW5uZXJUZXh0ID0gJyUnO1xufTtcblxuZnVuY3Rpb24gdXBkYXRlTWFuYWdlckluZm8oZGF0ZSkge1xuICBnZXRNYW5hZ2VyUmV2ZW51ZShkYXRlKTtcbiAgZ2V0TWFuYWdlclBlcmNlbnRhZ2VPY2N1cGllZChkYXRlKTtcbn07XG5cbmZ1bmN0aW9uIHNlbGVjdEFSb29tKGV2ZW50KSB7XG4gIGxldCByb29tTnVtYmVyID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuaWQpO1xuICBsZXQgYm9vayA9IGNvbmZpcm0oXCJXb3VsZCB5b3UgbGlrZSB0byBib29rIHRoaXMgcm9vbT9cIik7XG4gICAgaWYgKGJvb2sgPT09IHRydWUpIHtcbiAgICAgIG5ld0Jvb2tpbmcucm9vbU51bWJlciA9IHJvb21OdW1iZXI7XG4gICAgICBtYWtlQm9va2luZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIG1ha2VCb29raW5nKCkge1xuICBuZXdCb29raW5nLmRhdGUgPSBkYXRlO1xuICBpZiAoY3VzdG9tZXIpIHtcbiAgICBuZXdCb29raW5nLnVzZXJJRCA9IGN1c3RvbWVyLmlkO1xuICAgIGJvb2tpbmdEYXRhLnB1c2gobmV3Qm9va2luZyk7XG4gICAgYWRkQm9va2luZyhjdXN0b21lcik7XG4gIH0gZWxzZSB7XG4gICAgYWxlcnQoJ1BsZWFzZSBwcm92aWRlIGEgY3VzdG9tZXIgdG8gYWRkIGEgYm9va2luZycpXG4gIH1cbn07XG5cbmZ1bmN0aW9uIGFkZEJvb2tpbmcoY3VzdG9tZXIpIHtcbiAgbmV3Qm9va2luZy51c2VySUQgPSBjdXN0b21lci5pZDtcbiAgZmV0Y2hBUEkucG9zdEJvb2tpbmcobmV3Qm9va2luZyk7XG4gIGRpc3BsYXlBdmFpbGFibGVSb29tcyhkYXRlLCBjdXN0b21lcik7XG59O1xuXG5mdW5jdGlvbiBzZWxlY3RCb29raW5nKGV2ZW50KSB7XG4gIGxldCBib29raW5nSWQgPSAoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuaWQpXG4gIGxldCBkYXRlVGV4dCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmNoaWxkcmVuWzFdLmlubmVyVGV4dDtcbiAgbGV0IHNwbGl0RGF0ZSA9IGRhdGVUZXh0LnNwbGl0KCdEYXRlOicpO1xuICBsZXQgZGF0ZUZvcm1hdGVkID0gc3BsaXREYXRlWzFdO1xuICBsZXQgY2FuY2VsRGF0ZSA9IGRhdGVGb3JtYXRlZC5zcGxpdCgnLycpXG4gIGxldCBkYXRlSW50cyA9IGNhbmNlbERhdGUubWFwKChkYXRlUG9ydGlvbikgPT4ge3JldHVybiBwYXJzZUludChkYXRlUG9ydGlvbil9KTtcbiAgbGV0IHRvZGF5RGF0ZSA9IHRvZGF5LnNwbGl0KCcvJyk7XG4gIGxldCB0b2RheUludHMgPSB0b2RheURhdGUubWFwKCh0b2RheVBvcnRpb24pID0+IHtyZXR1cm4gcGFyc2VJbnQodG9kYXlQb3J0aW9uKX0pO1xuICBsZXQgY2FuY2VsID0gY29uZmlybShgV291bGQgeW91IGxpa2UgdG8gY2FuY2VsIGJvb2tpbmcsICR7Ym9va2luZ0lkfWApO1xuICBpZiAoY2FuY2VsID09PSB0cnVlICYmIGRhdGVJbnRzWzBdID49IHRvZGF5SW50c1swXSAmJiBkYXRlSW50c1sxXSA+PSB0b2RheUludHNbMV0gJiYgZGF0ZUludHNbMl0gPj0gdG9kYXlJbnRzWzJdKSB7XG4gICAgZGVsZXRlQm9va2luZyhib29raW5nSWQpO1xuICB9IGVsc2UgaWYgKGNhbmNlbCA9PT0gdHJ1ZSAmJiBkYXRlSW50c1swXSA8PSB0b2RheUludHNbMF0gfHwgZGF0ZUludHNbMV0gPD0gdG9kYXlJbnRzWzFdIHx8IGRhdGVJbnRzWzJdIDw9IHRvZGF5SW50c1syXSkge1xuICAgIGFsZXJ0KCdZb3UgY2Fubm90IGRlbGV0ZSBhIGJvb2tpbmcgdGhhdCBoYXMgYWxyZWFkeSBvY2N1cmVkJyk7XG4gIH0gZWxzZSBpZiAoY2FuY2VsID09PSBmYWxzZSkge1xuICAgIGFsZXJ0KCdQbGVhc2UgQ2hvb3NlIEFub3RoZXIgQm9va2luZycpXG4gIH1cbn07XG5cbmZ1bmN0aW9uIGRlbGV0ZUJvb2tpbmcoaWRJbnB1dCkge1xuICBsZXQgbnVtYmVySWQgPSBwYXJzZUludChpZElucHV0KTtcbiAgZmV0Y2hBUEkuZGVsZXRlQm9va2luZyh7aWQ6IG51bWJlcklkfSk7XG4gIGRlbGV0ZUxvY2FsQm9va2luZyhpZElucHV0KTtcbiAgdWRwYXRlQ3VzdG9tZXJBdmFpbGFibGVSb29tcygpO1xuICB1cGRhdGVNYW5hZ2VyQXZhaWxhYmxlUm9vbXMoKTtcbn07XG5cbmZ1bmN0aW9uIGRlbGV0ZUxvY2FsQm9va2luZyhpZCkge1xuICBib29raW5nRGF0YSA9IGJvb2tpbmdEYXRhLmZpbHRlcigoYm9va2luZykgPT4ge1xuICAgIHJldHVybiAhYm9va2luZy5pZCA9PT0gaWQ7XG4gIH0pXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==