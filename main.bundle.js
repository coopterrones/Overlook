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

/***/ "./src/images/user.png":
/*!*****************************!*\
  !*** ./src/images/user.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/user.png";

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
/* harmony import */ var _images_user_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/user.png */ "./src/images/user.png");
/* harmony import */ var _images_user_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_user_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Customer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Customer */ "./src/Customer.js");
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Manager */ "./src/Manager.js");
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./API */ "./src/API.js");








let userData;
let roomData;
let bookingData;
let customer;
let manager;
let date;
let newBooking = {userID: 0, date: '', roomNumber: 0};

Promise.all([_API__WEBPACK_IMPORTED_MODULE_6__["fetchAPI"].fetchUsers(), _API__WEBPACK_IMPORTED_MODULE_6__["fetchAPI"].fetchRooms(), _API__WEBPACK_IMPORTED_MODULE_6__["fetchAPI"].fetchBookings()]).then(values => {
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
    user = new _Manager__WEBPACK_IMPORTED_MODULE_5__["default"](1, 'Manager', userData, roomData, bookingData);
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
  customer = new _Customer__WEBPACK_IMPORTED_MODULE_4__["default"](userInfo.id, userInfo.name, roomData, bookingData);
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
  customer = new _Customer__WEBPACK_IMPORTED_MODULE_4__["default"](userResult.id, userResult.name, roomData, bookingData);
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
  _API__WEBPACK_IMPORTED_MODULE_6__["fetchAPI"].postBooking(newBooking);
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
  _API__WEBPACK_IMPORTED_MODULE_6__["fetchAPI"].deleteBooking({id: numberId});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvdXJsLWVzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQVBJLmpzIiwid2VicGFjazovLy8uL3NyYy9DdXN0b21lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2Jhc2Uuc2Nzcz9hMjM4Iiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaG90ZWwucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvb3Zlcmxvb2sucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvdXNlci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsS0FBSyxLQUF3QyxFQUFFLEVBRTdDOztBQUVGLFFBQVEsc0JBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSw2Q0FBUTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELDZCQUE2QjtBQUMvRTtBQUNBLG1EQUFtRCw4QkFBOEI7QUFDakYsNERBQTRELFVBQVU7QUFDdEU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsNkNBQVEsZ0JBQWdCLGFBQWE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBJbXBvcnRzXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNhYmluOml0YWwsd2dodEAwLDQwMDswLDUwMDswLDYwMDswLDcwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMCZkaXNwbGF5PXN3YXApO1wiLCBcIlwiXSk7XG52YXIgdXJsRXNjYXBlID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS91cmwtZXNjYXBlLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyA9IHVybEVzY2FwZShyZXF1aXJlKFwiLi4vaW1hZ2VzL292ZXJsb29rLnBuZ1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18xX19fID0gdXJsRXNjYXBlKHJlcXVpcmUoXCIuLi9pbWFnZXMvaG90ZWwucG5nXCIpKTtcblxuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7IH1cXG5cXG5idXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50OyB9XFxuXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMHZoOyB9XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBFNUVDO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dzsgfVxcblxcbi5sb2dpbi1zY3JlZW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1JTsgfVxcblxcbi5vdmVybG9vay1sb2dvIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyArIFwiKTtcXG4gIGhlaWdodDogMTUwcHg7XFxuICB3aWR0aDogNTAwcHg7IH1cXG5cXG4ub3Zlcmxvb2stbG9nbzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzFfX18gKyBcIik7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgd2lkdGg6IDUwMHB4OyB9XFxuXFxuLmxvZ2luLWxheW91dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMzV2aDtcXG4gIHdpZHRoOiA3NXZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTVFQztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtZmFtaWx5OiBDYWJpbiwgc2Fucy1zZXJpZjsgfVxcblxcbi51c2VybmFtZS1pbnB1dCB7XFxuICBtYXJnaW46IDFlbTtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBoZWlnaHQ6IDUlO1xcbiAgd2lkdGg6IDg1JTtcXG4gIHBhZGRpbmc6IDIlO1xcbiAgY29sb3I6ICMyMTI1Mjk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBFNUVDO1xcbiAgYm94LXNoYWRvdzogOXB4IDlweCAxNnB4IHJnYmEoMTYzLCAxNzcsIDE5OCwgMC42KSwgLTlweCAtOXB4IDE2cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XFxuXFxuLnVzZXJuYW1lLWlucHV0OmZvY3VzIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDZweCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgLTZweCAtNnB4IDEwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7IH1cXG5cXG4ucGFzc3dvcmQtaW5wdXQge1xcbiAgbWFyZ2luOiAxZW07XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgaGVpZ2h0OiA1JTtcXG4gIHdpZHRoOiA4NSU7XFxuICBwYWRkaW5nOiAyJTtcXG4gIGNvbG9yOiAjMjEyNTI5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTVFQztcXG4gIGJveC1zaGFkb3c6IDlweCA5cHggMTZweCByZ2JhKDE2MywgMTc3LCAxOTgsIDAuNiksIC05cHggLTlweCAxNnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgfVxcblxcbi5wYXNzd29yZC1pbnB1dDpmb2N1cyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiBpbnNldCA2cHggNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIGluc2V0IC02cHggLTZweCAxMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XFxuXFxuI3VzZXJuYW1lSW5wdXRMYWJlbCB7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBtYXJnaW4tbGVmdDogMmVtO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDsgfVxcblxcbiNwYXNzd29yZElucHV0TGFiZWwge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDJlbTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7IH1cXG5cXG4uYm9vay1yb29tLWJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgaGVpZ2h0OiAzZW07XFxuICB3aWR0aDogNWVtO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgY29sb3I6ICMyMTI1Mjk7XFxuICBmb250LWZhbWlseTogQ2FiaW4sIHNhbnMtc2VyaWY7XFxuICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBFNUVDO1xcbiAgYm94LXNoYWRvdzogOXB4IDlweCAxNnB4IHJnYmEoMTYzLCAxNzcsIDE5OCwgMC42KSwgLTlweCAtOXB4IDE2cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XFxuXFxuLmJvb2stcm9vbS1idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0NWRlZywgI2YwZjVmZCwgI2NhY2VkNCk7XFxuICBib3gtc2hhZG93OiAyMHB4IDIwcHggNjBweCAjYmVjM2M5LCAtMjBweCAtMjBweCA2MHB4ICNmZmZmZmY7IH1cXG5cXG4uYm9vay1yb29tLWJ1dHRvbjphY3RpdmUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgNnB4IDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAtNnB4IC02cHggMTBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgfVxcblxcbi5ib29rLXJvb20tYnV0dG9uOmZvY3VzIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDZweCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgLTZweCAtNnB4IDEwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7IH1cXG5cXG4uY2FuY2VsLWJvb2tpbmctYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBoZWlnaHQ6IDNlbTtcXG4gIHdpZHRoOiA1ZW07XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBjb2xvcjogIzIxMjUyOTtcXG4gIGZvbnQtZmFtaWx5OiBDYWJpbiwgc2Fucy1zZXJpZjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFMEU1RUM7XFxuICBib3gtc2hhZG93OiA5cHggOXB4IDE2cHggcmdiYSgxNjMsIDE3NywgMTk4LCAwLjYpLCAtOXB4IC05cHggMTZweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7IH1cXG5cXG4uY2FuY2VsLWJvb2tpbmctYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsICNmMGY1ZmQsICNjYWNlZDQpO1xcbiAgYm94LXNoYWRvdzogMjBweCAyMHB4IDYwcHggI2JlYzNjOSwgLTIwcHggLTIwcHggNjBweCAjZmZmZmZmOyB9XFxuXFxuLmNhbmNlbC1ib29raW5nLWJ1dHRvbjphY3RpdmUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgNnB4IDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAtNnB4IC02cHggMTBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgfVxcblxcbi5jYW5jZWwtYm9va2luZy1idXR0b246Zm9jdXMge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgNnB4IDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAtNnB4IC02cHggMTBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgfVxcblxcbjo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICMyMTI1Mjk7XFxuICBmb250LWZhbWlseTogQ2FiaW4sIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEycHg7IH1cXG5cXG4ubG9naW4tYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAzdmg7IH1cXG5cXG4uY2xlYXItYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIG1hcmdpbjogMi41ZW07XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgd2lkdGg6IDhlbTtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IC41ZW07XFxuICBjb2xvcjogIzIxMjUyOTtcXG4gIGZvbnQtZmFtaWx5OiBDYWJpbiwgc2Fucy1zZXJpZjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFMEU1RUM7XFxuICBib3gtc2hhZG93OiA5cHggOXB4IDE2cHggcmdiYSgxNjMsIDE3NywgMTk4LCAwLjYpLCAtOXB4IC05cHggMTZweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7IH1cXG5cXG4uY2xlYXItYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsICNmMGY1ZmQsICNjYWNlZDQpO1xcbiAgYm94LXNoYWRvdzogMjBweCAyMHB4IDYwcHggI2JlYzNjOSwgLTIwcHggLTIwcHggNjBweCAjZmZmZmZmOyB9XFxuXFxuLmNsZWFyLWJ1dHRvbjphY3RpdmUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgNnB4IDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAtNnB4IC02cHggMTBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgfVxcblxcbi5jbGVhci1idXR0b246Zm9jdXMge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgNnB4IDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAtNnB4IC02cHggMTBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgfVxcblxcbi5sb2dpbi1idXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWFyZ2luOiAyLjVlbTtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICB3aWR0aDogOGVtO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogLjVlbTtcXG4gIGNvbG9yOiAjMjEyNTI5O1xcbiAgZm9udC1mYW1pbHk6IENhYmluLCBzYW5zLXNlcmlmO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTVFQztcXG4gIGJveC1zaGFkb3c6IDlweCA5cHggMTZweCByZ2JhKDE2MywgMTc3LCAxOTgsIDAuNiksIC05cHggLTlweCAxNnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgfVxcblxcbi5sb2dpbi1idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0NWRlZywgI2YwZjVmZCwgI2NhY2VkNCk7XFxuICBib3gtc2hhZG93OiAyMHB4IDIwcHggNjBweCAjYmVjM2M5LCAtMjBweCAtMjBweCA2MHB4ICNmZmZmZmY7IH1cXG5cXG4ubG9naW4tYnV0dG9uOmFjdGl2ZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiBpbnNldCA2cHggNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIGluc2V0IC02cHggLTZweCAxMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XFxuXFxuLmxvZ2luLWJ1dHRvbjpmb2N1cyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiBpbnNldCA2cHggNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIGluc2V0IC02cHggLTZweCAxMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XFxuXFxuLmN1c3RvbWVyLXZpZXcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmb250LWZhbWlseTogQ2FiaW4sIHNhbnMtc2VyaWY7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuLm1hbmFnZXItdmlldyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZvbnQtZmFtaWx5OiBDYWJpbiwgc2Fucy1zZXJpZjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG4ubWFuYWdlci1tZXRyaWNzLXdyYXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogODUlOyB9XFxuXFxuLm1hbmFnZXItbWV0cmljcyB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbiAgcGFkZGluZzogMWVtOyB9XFxuXFxuLm1hbmFnZXItcmV2ZW51ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFMEU1RUM7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiA5cHggOXB4IDE2cHggcmdiYSgxNjMsIDE3NywgMTk4LCAwLjYpLCAtOXB4IC05cHggMTZweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7IH1cXG5cXG4ubWFuYWdlci1yZXZlbnVlLWxhYmVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5tYW5hZ2VyLXBlcmNlbnRhZ2Utb2NjdXBpZWQge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG4gIHBhZGRpbmc6IDFlbTsgfVxcblxcbi5tYW5hZ2VyLXBlcmNlbnRhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwcHg7XFxuICB3aWR0aDogMTAwcHg7XFxuICBwYWRkaW5nOiAxZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBFNUVDO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogOXB4IDlweCAxNnB4IHJnYmEoMTYzLCAxNzcsIDE5OCwgMC42KSwgLTlweCAtOXB4IDE2cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XFxuXFxuLm1hbmFnZXItcGVyY2VudGFnZS1sYWJlbCB7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tdG9wOiAxZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4ubWFuYWdlci1jYWxlbmRhci1kcm9wZG93biB7XFxuICBtYXJnaW46IDFlbTtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGhlaWdodDogMjUlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIHBhZGRpbmc6IDIlO1xcbiAgY29sb3I6ICMyMTI1Mjk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBFNUVDO1xcbiAgYm94LXNoYWRvdzogOXB4IDlweCAxNnB4IHJnYmEoMTYzLCAxNzcsIDE5OCwgMC42KSwgLTlweCAtOXB4IDE2cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XFxuXFxuLm1hbmFnZXItY2FsZW5kYXItZHJvcGRvd246Zm9jdXMge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgNnB4IDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAtNnB4IC02cHggMTBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIG91dGxpbmU6IGJsdWUgIWltcG9ydGFudDsgfVxcblxcbi5jdXN0b21lci1jYWxlbmRhci1kcm9wZG93biB7XFxuICBtYXJnaW46IDFlbTtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGhlaWdodDogMjUlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIHBhZGRpbmc6IDIlO1xcbiAgY29sb3I6ICMyMTI1Mjk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBFNUVDO1xcbiAgYm94LXNoYWRvdzogOXB4IDlweCAxNnB4IHJnYmEoMTYzLCAxNzcsIDE5OCwgMC42KSwgLTlweCAtOXB4IDE2cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XFxuXFxuLmN1c3RvbWVyLWNhbGVuZGFyLWRyb3Bkb3duOmZvY3VzIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDZweCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgLTZweCAtNnB4IDEwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICBvdXRsaW5lOiBibHVlICFpbXBvcnRhbnQ7IH1cXG5cXG4ubWFuYWdlci1yb29tLXR5cGUtZHJvcGRvd24ge1xcbiAgbWFyZ2luOiAxZW07XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBoZWlnaHQ6IDY1JTtcXG4gIHdpZHRoOiA4NSU7XFxuICBwYWRkaW5nOiAyJTtcXG4gIGNvbG9yOiAjMjEyNTI5O1xcbiAgZm9udC1mYW1pbHk6IENhYmluLCBzYW5zLXNlcmlmO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTVFQztcXG4gIGJveC1zaGFkb3c6IDlweCA5cHggMTZweCByZ2JhKDE2MywgMTc3LCAxOTgsIDAuNiksIC05cHggLTlweCAxNnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgfVxcblxcbi5tYW5hZ2VyLXJvb20tdHlwZS1kcm9wZG93bjpmb2N1cyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiBpbnNldCA2cHggNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIGluc2V0IC02cHggLTZweCAxMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XFxuXFxuLmN1c3RvbWVyLXJvb20tdHlwZS1kcm9wZG93biB7XFxuICBtYXJnaW46IDFlbTtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGhlaWdodDogNjUlO1xcbiAgd2lkdGg6IDg1JTtcXG4gIHBhZGRpbmc6IDIlO1xcbiAgY29sb3I6ICMyMTI1Mjk7XFxuICBmb250LWZhbWlseTogQ2FiaW4sIHNhbnMtc2VyaWY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBFNUVDO1xcbiAgYm94LXNoYWRvdzogOXB4IDlweCAxNnB4IHJnYmEoMTYzLCAxNzcsIDE5OCwgMC42KSwgLTlweCAtOXB4IDE2cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XFxuXFxuLmN1c3RvbWVyLXJvb20tdHlwZS1kcm9wZG93bjpmb2N1cyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiBpbnNldCA2cHggNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIGluc2V0IC02cHggLTZweCAxMHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XFxuXFxuLnVzZXItaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgaGVpZ2h0OiA4NXZoO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgbWFyZ2luOiAxZW07IH1cXG5cXG4udXNlci1pbWcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTVFQztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDlweCA5cHggMTZweCByZ2JhKDE2MywgMTc3LCAxOTgsIDAuNiksIC05cHggLTlweCAxNnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBtYXJnaW4tdG9wOiAxZW07XFxuICBwYWRkaW5nOiAxZW07XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgd2lkdGg6IDEwMHB4OyB9XFxuXFxuLnVzZXItaW1hZ2UtbmFtZS13cmFwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAyNSU7IH1cXG5cXG4udXNlci1wcm9maWxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDg1JTsgfVxcblxcbi5jdXN0b21lci1hbW91bnQtc3BlbnQge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG4gIHBhZGRpbmc6IDFlbTsgfVxcblxcbi5tYW5hZ2VyLWFtb3VudC1zcGVudCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbiAgcGFkZGluZzogMWVtOyB9XFxuXFxuLmN1c3RvbWVyLWFtb3VudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFMEU1RUM7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiA5cHggOXB4IDE2cHggcmdiYSgxNjMsIDE3NywgMTk4LCAwLjYpLCAtOXB4IC05cHggMTZweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7IH1cXG5cXG4ubWFuYWdlci1hbW91bnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwcHg7XFxuICB3aWR0aDogMTAwcHg7XFxuICBwYWRkaW5nOiAxZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBFNUVDO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogOXB4IDlweCAxNnB4IHJnYmEoMTYzLCAxNzcsIDE5OCwgMC42KSwgLTlweCAtOXB4IDE2cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XFxuXFxuLmFtb3VudC1zcGVudC1sYWJlbCB7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tdG9wOiAxZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4ubWFuYWdlci1hbW91bnQtc3BlbnQtbGFiZWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmN1c3RvbWVyLW5hbWUge1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLXRvcDogMWVtOyB9XFxuXFxuLm1hbmFnZXItbmFtZSB7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tdG9wOiAxZW07IH1cXG5cXG4ucm9vbS1pbnB1dHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDg1JTsgfVxcblxcbi5jdXN0b21lci1hdmFpbGFibGUtcm9vbXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTVFQztcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBFNUVDO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93OiBzY3JvbGw7IH1cXG5cXG4ubWFuYWdlci1hdmFpbGFibGUtcm9vbXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTVFQztcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBFNUVDO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93OiBzY3JvbGw7IH1cXG5cXG4ucm9vbS1jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMWVtO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMWVtO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTVFQztcXG4gIGJveC1zaGFkb3c6IDlweCA5cHggMTZweCByZ2JhKDE2MywgMTc3LCAxOTgsIDAuNiksIC05cHggLTlweCAxNnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIHdpZHRoOiA4NSU7IH1cXG5cXG4ucm9vbS1jYXJkOmZvY3VzIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaGFkb3c6IGluc2V0IGluc2V0IDZweCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgLTZweCAtNnB4IDEwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7IH1cXG5cXG4ucm9vbS1jYXJkLWJyZWFrLW9uZSB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuXFxuLnJvb20tY2FyZC1icmVhay10d28ge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cXG5cXG4uYm9va2luZy1jYXJkIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbjogMWVtO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgY29sb3I6ICMyMTI1Mjk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBFNUVDO1xcbiAgYm94LXNoYWRvdzogOXB4IDlweCAxNnB4IHJnYmEoMTYzLCAxNzcsIDE5OCwgMC42KSwgLTlweCAtOXB4IDE2cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgd2lkdGg6IDg1JTsgfVxcblxcbi5ib29raW5nLWNhcmQ6Zm9jdXMge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgNnB4IDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAtNnB4IC02cHggMTBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgfVxcblxcbi5jdXN0b21lci1ib29raW5ncy1hcmVhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgaGVpZ2h0OiA4NXZoO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTVFQzsgfVxcblxcbi5tYW5hZ2VyLWJvb2tpbmdzLWFyZWEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDUwdnc7XFxuICBoZWlnaHQ6IDg1dmg7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBFNUVDOyB9XFxuXFxuLmJvb2tpbmdzLWhlYWRlciB7XFxuICBtYXJnaW46IC41ZW07IH1cXG5cXG4uY3VzdG9tZXItYm9va2luZ3Mge1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTVFQztcXG4gIHdpZHRoOiA4NSU7XFxuICBoZWlnaHQ6IDc1dmg7XFxuICBvdmVyZmxvdzogc2Nyb2xsOyB9XFxuXFxuLm1hbmFnZXItc2VhcmNoLXdyYXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDg1JTsgfVxcblxcbi5tYW5hZ2VyLXNlYXJjaC1pbnB1dCB7XFxuICBtYXJnaW46IDFlbTtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGhlaWdodDogMzAlO1xcbiAgd2lkdGg6IDc1JTtcXG4gIHBhZGRpbmc6IDIlO1xcbiAgY29sb3I6ICMyMTI1Mjk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBFNUVDO1xcbiAgYm94LXNoYWRvdzogOXB4IDlweCAxNnB4IHJnYmEoMTYzLCAxNzcsIDE5OCwgMC42KSwgLTlweCAtOXB4IDE2cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XFxuXFxuLm1hbmFnZXItc2VhcmNoLWlucHV0OmZvY3VzIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDZweCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgaW5zZXQgLTZweCAtNnB4IDEwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7IH1cXG5cXG4ubWFuYWdlci1zZWFyY2gtYnV0dG9uIHtcXG4gIG1hcmdpbjogMWVtO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgaGVpZ2h0OiA1NSU7XFxuICB3aWR0aDogMjAlO1xcbiAgcGFkZGluZzogMiU7XFxuICBjb2xvcjogIzIxMjUyOTtcXG4gIGZvbnQtZmFtaWx5OiBDYWJpbiwgc2Fucy1zZXJpZjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFMEU1RUM7XFxuICBib3gtc2hhZG93OiA5cHggOXB4IDE2cHggcmdiYSgxNjMsIDE3NywgMTk4LCAwLjYpLCAtOXB4IC05cHggMTZweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7IH1cXG5cXG4ubWFuYWdlci1zZWFyY2gtYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsICNmMGY1ZmQsICNjYWNlZDQpO1xcbiAgYm94LXNoYWRvdzogMjBweCAyMHB4IDYwcHggI2JlYzNjOSwgLTIwcHggLTIwcHggNjBweCAjZmZmZmZmOyB9XFxuXFxuLm1hbmFnZXItc2VhcmNoLWJ1dHRvbjphY3RpdmUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgNnB4IDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAtNnB4IC02cHggMTBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgfVxcblxcbi5tYW5hZ2VyLXNlYXJjaC1idXR0b246Zm9jdXMge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgNnB4IDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCBpbnNldCAtNnB4IC02cHggMTBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgfVxcblxcbi5tYW5hZ2VyLWJvb2tpbmdzIHtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFMEU1RUM7XFxuICB3aWR0aDogODUlO1xcbiAgaGVpZ2h0OiA3NXZoO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDsgfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gIC5yb29tLWNhcmQge1xcbiAgICBtYXJnaW46IDA7IH1cXG4gIC5jdXN0b21lci12aWV3IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LWZhbWlseTogQ2FiaW4sIHNhbnMtc2VyaWY7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gIC5tYW5hZ2VyLXZpZXcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtZmFtaWx5OiBDYWJpbiwgc2Fucy1zZXJpZjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgLnVzZXItaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbi1sZWZ0OiAxZW07IH1cXG4gIC51c2VyLXByb2ZpbGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjV2aDsgfVxcbiAgLnVzZXItaW1nIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDsgfVxcbiAgLnVzZXItaW1hZ2UtbmFtZS13cmFwIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogYXV0bzsgfVxcbiAgLmN1c3RvbWVyLWFtb3VudC1zcGVudCB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42NSk7IH1cXG4gIC5tYW5hZ2VyLWFtb3VudC1zcGVudCB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42NSk7IH1cXG4gIC5hbW91bnQtc3BlbnQtbGFiZWwge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7IH1cXG4gIC5jdXN0b21lci1hdmFpbGFibGUtcm9vbXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBFNUVDO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBFNUVDO1xcbiAgICBoZWlnaHQ6IDIwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDsgfVxcbiAgLm1hbmFnZXItYXZhaWxhYmxlLXJvb21zIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTVFQztcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTVFQztcXG4gICAgaGVpZ2h0OiAyMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7IH1cXG4gIC5jdXN0b21lci1ib29raW5ncyB7XFxuICAgIGhlaWdodDogMzV2aDtcXG4gICAgd2lkdGg6IDEwMHZ3OyB9XFxuICAubWFuYWdlci1ib29raW5ncyB7XFxuICAgIGhlaWdodDogMzV2aDtcXG4gICAgd2lkdGg6IDEwMHZ3OyB9XFxuICAubWFuYWdlci1ib29raW5ncy1oZWFkaW5nIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAubWFuYWdlci1zZWFyY2gtd3JhcCB7XFxuICAgIHdpZHRoOiA5NXZ3OyB9XFxuICAucm9vbS1pbnB1dHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogODUlOyB9XFxuICAuYm9va2luZy1jYXJkIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFyZ2luLXRvcDogLjVlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjVlbTtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBjb2xvcjogIzIxMjUyOTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTVFQztcXG4gICAgYm94LXNoYWRvdzogOXB4IDlweCAxNnB4IHJnYmEoMTYzLCAxNzcsIDE5OCwgMC42KSwgLTlweCAtOXB4IDE2cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgICB3aWR0aDogODUlOyB9IH1cXG5cXG46Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTsgfVxcblwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlc2NhcGUodXJsLCBuZWVkUXVvdGVzKSB7XG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBuZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuICdcIicgKyB1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSArICdcIic7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJsZXQgZmV0Y2hBUEkgPSB7XG4gIGZldGNoVXNlcnMoKSB7XG4gICAgcmV0dXJuIGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvb3Zlcmxvb2svMTkwNC91c2Vycy91c2VycycpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSkpO1xuICB9LFxuXG4gIGZldGNoUm9vbXMoKSB7XG4gICAgbGV0IGZldGNoZWRSb29tcyA9IGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvb3Zlcmxvb2svMTkwNC9yb29tcy9yb29tcycpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKSk7XG4gICAgcmV0dXJuIGZldGNoZWRSb29tcztcbiAgfSxcblxuICBmZXRjaEJvb2tpbmdzKCkge1xuICAgIGxldCBmZXRjaGVkQm9va2luZ3MgPSBmZXRjaCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL292ZXJsb29rLzE5MDQvYm9va2luZ3MvYm9va2luZ3MnKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSkpO1xuICAgIHJldHVybiBmZXRjaGVkQm9va2luZ3M7XG4gIH0sXG5cbiAgZGVsZXRlQm9va2luZyhib29raW5nKSB7XG4gICAgY29uc29sZS5sb2coYm9va2luZyk7XG4gICAgbGV0IGRlbGV0ZWREYXRhID0gZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS9vdmVybG9vay8xOTA0L2Jvb2tpbmdzL2Jvb2tpbmdzJywge1xuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9va2luZylcbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSkpXG4gICAgcmV0dXJuIGRlbGV0ZWREYXRhO1xuICB9LFxuXG4gIHBvc3RCb29raW5nKGJvb2tpbmcpIHtcbiAgICBsZXQgbmV3Qm9va2luZyA9IGZldGNoQVBJLmJ1aWxkQm9va2luZ09iamVjdChib29raW5nKTtcbiAgICBsZXQgcG9zdGVkRGF0YSA9IGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvb3Zlcmxvb2svMTkwNC9ib29raW5ncy9ib29raW5ncycsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdCb29raW5nKVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKSlcbiAgICByZXR1cm4gcG9zdGVkRGF0YTtcbiAgfSxcblxuICBidWlsZEJvb2tpbmdPYmplY3QoYm9va2luZykge1xuICAgIGxldCBib29raW5nT2JqZWN0ID0ge1xuICAgICAgdXNlcklEIDogYm9va2luZy51c2VySUQsXG4gICAgICBkYXRlIDogYm9va2luZy5kYXRlLFxuICAgICAgcm9vbU51bWJlciA6IGJvb2tpbmcucm9vbU51bWJlclxuICAgIH1cbiAgICByZXR1cm4gYm9va2luZ09iamVjdDtcbiAgfVxufTtcblxuZXhwb3J0IHtmZXRjaEFQSX07XG4iLCJpbXBvcnQgVXNlciBmcm9tICcuL1VzZXInO1xuXG5jbGFzcyBDdXN0b21lciBleHRlbmRzIFVzZXIge1xuICBjb25zdHJ1Y3RvcihpZCwgbmFtZSwgcm9vbURhdGEsIGJvb2tpbmdEYXRhKSB7XG4gICAgc3VwZXIoaWQsIG5hbWUsIFtdLCByb29tRGF0YSwgYm9va2luZ0RhdGEpO1xuICAgIHRoaXMubXlCb29raW5ncyA9IFtdO1xuICAgIHRoaXMudG90YWxTcGVudCA9IDA7XG4gIH07XG5cbiAgZ2V0VXNlckJvb2tpbmdzKGlkKSB7XG4gICAgY29uc3QgdXNlckJvb2tpbmdzID0gdGhpcy5ib29raW5ncy5maWx0ZXIoKGJvb2tpbmcpID0+IHtcbiAgICAgIHJldHVybiBib29raW5nLnVzZXJJRCA9PT0gaWQ7XG4gICAgfSlcbiAgICB0aGlzLm15Qm9va2luZ3MgPSB1c2VyQm9va2luZ3M7XG4gIH07XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWVyO1xuIiwiaW1wb3J0IFVzZXIgZnJvbSAnLi9Vc2VyJztcblxuY2xhc3MgTWFuYWdlciBleHRlbmRzIFVzZXJ7XG4gIGNvbnN0cnVjdG9yKGlkLCBuYW1lLCB1c2VyRGF0YSwgcm9vbURhdGEsIGJvb2tpbmdEYXRhKSB7XG4gICAgc3VwZXIoaWQsIG5hbWUsIHVzZXJEYXRhLCByb29tRGF0YSwgYm9va2luZ0RhdGEpO1xuICB9O1xuXG4gIGdldFRvdGFsUmV2ZW51ZUZvckRhdGUoZGF0ZSkge1xuICAgIGNvbnN0IHRvdGFsUmV2ZW51ZUZvclRvZGF5ID0gdGhpcy5ib29raW5ncy5yZWR1Y2UoKHRvdGFsLCBib29raW5nKSA9PiB7XG4gICAgICB0aGlzLnJvb21zLmZvckVhY2goKHJvb20pID0+IHtcbiAgICAgICAgaWYgKGJvb2tpbmcuZGF0ZSA9PT0gZGF0ZSAmJiBib29raW5nLnJvb21OdW1iZXIgPT09IHJvb20ubnVtYmVyKSB7XG4gICAgICAgICAgdG90YWwgKz0gcm9vbS5jb3N0UGVyTmlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICByZXR1cm4gdG90YWw7XG4gICAgfSwgMCk7XG4gICAgY29uc3Qgcm91bmRlZEFtb3VudCA9IHRvdGFsUmV2ZW51ZUZvclRvZGF5LnRvRml4ZWQoMilcbiAgICByZXR1cm4gcGFyc2VGbG9hdChyb3VuZGVkQW1vdW50KTtcbiAgfTtcblxuICBnZXRQZXJjZW50YWdlT2NjdXBpZWQoZGF0ZSkge1xuICAgIGNvbnN0IG9jY3VwaWVkID0gdGhpcy5ib29raW5ncy5yZWR1Y2UoKHN1bSwgYm9va2luZykgPT4ge1xuICAgICAgdGhpcy5yb29tcy5mb3JFYWNoKChyb29tKSA9PiB7XG4gICAgICAgIGlmIChib29raW5nLmRhdGUgPT09IGRhdGUgJiYgYm9va2luZy5yb29tTnVtYmVyID09PSByb29tLm51bWJlcikge1xuICAgICAgICAgIHN1bSArPSAxO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgcmV0dXJuIHN1bTtcbiAgICB9LCAwKVxuICAgbGV0IGF2ZXJhZ2UgPSAob2NjdXBpZWQgLyB0aGlzLnJvb21zLmxlbmd0aCkgKiAxMDA7XG4gICByZXR1cm4gYXZlcmFnZS50b0ZpeGVkKCk7XG4gIH07XG5cbiAgZ2V0Q3VzdG9tZXJCeUlkKGlkKSB7XG4gICAgY29uc3Qgc3BsaXRVc2VybmFtZSA9IGlkLnNwbGl0KCdjdXN0b21lcicpO1xuICAgIGNvbnN0IGludElEID0gcGFyc2VJbnQoc3BsaXRVc2VybmFtZVsxXSlcbiAgICBjb25zdCBjdXJyZW50VXNlciA9IHRoaXMudXNlcnMuZmluZCgodXNlcikgPT4ge1xuICAgICAgcmV0dXJuIHVzZXIuaWQgPT09IGludElEO1xuICAgIH0pXG4gICAgcmV0dXJuIGN1cnJlbnRVc2VyO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFuYWdlcjtcbiIsImNsYXNzIFVzZXIge1xuICBjb25zdHJ1Y3RvcihpZCwgbmFtZSwgdXNlckRhdGEsIHJvb21EYXRhLCBib29raW5nRGF0YSkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudXNlcnMgPSB1c2VyRGF0YTtcbiAgICB0aGlzLnJvb21zID0gcm9vbURhdGE7XG4gICAgdGhpcy5ib29raW5ncyA9IGJvb2tpbmdEYXRhO1xuICB9O1xuXG4gIHNlYXJjaEF2YWlsYWJsZVJvb21zQnlEYXRlKGRhdGUpIHtcbiAgICBsZXQgcm9vbXNCb29rZWQgPSB0aGlzLmJvb2tpbmdzLnJlZHVjZSgoYWxsQm9va2VkUm9vbXMsIHJvb21Cb29rZWQgKSA9PiB7XG4gICAgICBpZiAoZGF0ZSA9PT0gcm9vbUJvb2tlZC5kYXRlKSB7XG4gICAgICAgIGFsbEJvb2tlZFJvb21zLnB1c2gocm9vbUJvb2tlZC5yb29tTnVtYmVyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhbGxCb29rZWRSb29tcztcbiAgICB9LCBbXSlcbiAgICBjb25zdCByb29tc0F2YWlsYWJsZSA9IHRoaXMucm9vbXMuZmlsdGVyKChyb29tKSA9PiB7XG4gICAgICByZXR1cm4gIXJvb21zQm9va2VkLmluY2x1ZGVzKHJvb20ubnVtYmVyKTtcbiAgICB9KTtcbiAgICBjb25zdCBub1Jvb21zQXZhaWxhYmxlID0gICdXZSBhcmUgdmVyeSBzb3JyeS4gTm8gYXZhaWxhYmxlIHJvb21zIG9uIHRoYXQgZGF0ZS4gUGxlYXNlIG1vZGlmeSB5b3VyIHNlYXJjaC4nO1xuICAgIHJldHVybiByb29tc0F2YWlsYWJsZS5sZW5ndGggPiAwID8gcm9vbXNBdmFpbGFibGUgOiBub1Jvb21zQXZhaWxhYmxlO1xuICB9O1xuXG4gIGZpbHRlclJvb21zQnlUeXBlKHJvb21UeXBlLCBhdmFpbGFibGVSb29tcykge1xuICAgIGxldCBtYXRjaGVkUm9vbXMgPSBhdmFpbGFibGVSb29tcy5maWx0ZXIoKHJvb20pID0+IHtcbiAgICAgIHJldHVybiByb29tLnJvb21UeXBlID09PSByb29tVHlwZTtcbiAgICB9KVxuICAgIGNvbnN0IG5vUm9vbXNBdmFpbGFibGUgPSAnV2UgYXJlIHZlcnkgc29ycnkuIE5vIGF2YWlsYWJsZSByb29tcyBvbiB0aGF0IGRhdGUuIFBsZWFzZSBtb2RpZnkgeW91ciBzZWFyY2guJztcbiAgICByZXR1cm4gbWF0Y2hlZFJvb21zLmxlbmd0aCA+IDAgPyBtYXRjaGVkUm9vbXMgOiBub1Jvb21zQXZhaWxhYmxlO1xuICB9O1xuXG4gIGdldEN1c3RvbWVyVG90YWxTcGVudChjdXN0b21lcikge1xuICAgIGNvbnN0IGFtb3VudCA9IHRoaXMuYm9va2luZ3MucmVkdWNlKCh0b3RhbCwgYm9va2luZykgPT4ge1xuICAgICAgdGhpcy5yb29tcy5mb3JFYWNoKChyb29tKSA9PiB7XG4gICAgICAgIGlmIChib29raW5nLnVzZXJJRCA9PT0gY3VzdG9tZXIuaWQgJiYgcm9vbS5udW1iZXIgPT09IGJvb2tpbmcucm9vbU51bWJlcikge1xuICAgICAgICAgIHRvdGFsICs9IHJvb20uY29zdFBlck5pZ2h0O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICByZXR1cm4gdG90YWw7XG4gIH0sIDApO1xuICAgIGNvbnN0IHJvdW5kZWRBbW91bnQgPSBhbW91bnQudG9GaXhlZCgyKTtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChyb3VuZGVkQW1vdW50KTtcbiAgfTtcblxuICB1c2VyTG9naW4odXNlcm5hbWUsIHBhc3N3b3JkLCB1c2Vycykge1xuICAgIGxldCBzcGxpdFVzZXJuYW1lID0gdXNlcm5hbWUuc3BsaXQoJ2N1c3RvbWVyJyk7XG4gICAgICAgY29uc3QgdXNlckluZm8gPSB1c2Vycy5maW5kKCh1c2VyKSA9PiB7XG4gICAgICAgICBpZiAocGFzc3dvcmQgPT09ICdvdmVybG9vazIwMjAnICYmIHNwbGl0VXNlcm5hbWVbMV0gPCA1MSkge1xuICAgICAgICAgICByZXR1cm4gdXNlci5pZCA9PT0gcGFyc2VJbnQoc3BsaXRVc2VybmFtZVsxXSk7XG4gICAgICAgICB9IGVsc2UgaWYgKHBhc3N3b3JkID09PSAnb3Zlcmxvb2syMDIwJyAmJiB1c2VybmFtZSA9PT0gJ21hbmFnZXInKVxuICAgICAgICAgICByZXR1cm4gdXNlci5pZCA9PT0gJ21hbmFnZXInO1xuICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICB9XG4gICAgICAgfSlcbiAgICAgICByZXR1cm4gdXNlckluZm8gPyB1c2VySW5mbyA6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCB1c2VybmFtZSBhbmQgcGFzc3dvcmQuJztcbiAgfTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2Jhc2Uuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9iYXNlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2Jhc2Uuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWFnZXMvaG90ZWwucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy9vdmVybG9vay5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL3VzZXIucG5nXCI7IiwiaW1wb3J0ICcuL2Nzcy9iYXNlLnNjc3MnO1xuaW1wb3J0Jy4vaW1hZ2VzL292ZXJsb29rLnBuZyc7XG5pbXBvcnQnLi9pbWFnZXMvaG90ZWwucG5nJztcbmltcG9ydCcuL2ltYWdlcy91c2VyLnBuZyc7XG5pbXBvcnQgQ3VzdG9tZXIgZnJvbSAnLi9DdXN0b21lcic7XG5pbXBvcnQgTWFuYWdlciBmcm9tICcuL01hbmFnZXInO1xuaW1wb3J0IHtmZXRjaEFQSX0gZnJvbSAnLi9BUEknO1xuXG5sZXQgdXNlckRhdGE7XG5sZXQgcm9vbURhdGE7XG5sZXQgYm9va2luZ0RhdGE7XG5sZXQgY3VzdG9tZXI7XG5sZXQgbWFuYWdlcjtcbmxldCBkYXRlO1xubGV0IG5ld0Jvb2tpbmcgPSB7dXNlcklEOiAwLCBkYXRlOiAnJywgcm9vbU51bWJlcjogMH07XG5cblByb21pc2UuYWxsKFtmZXRjaEFQSS5mZXRjaFVzZXJzKCksIGZldGNoQVBJLmZldGNoUm9vbXMoKSwgZmV0Y2hBUEkuZmV0Y2hCb29raW5ncygpXSkudGhlbih2YWx1ZXMgPT4ge1xuICB1c2VyRGF0YSA9IHZhbHVlc1swXVsndXNlcnMnXTtcbiAgcm9vbURhdGEgPSB2YWx1ZXNbMV1bJ3Jvb21zJ107XG4gIGJvb2tpbmdEYXRhID0gdmFsdWVzWzJdWydib29raW5ncyddO1xufSk7XG5cbmxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG5sZXQgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xubGV0IG1tID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xubGV0IHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xudG9kYXkgPSB5eXl5ICsgJy8nICsgbW0gKyAnLycgKyBkZDtcblxuY29uc3QgbG9naW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4tYnV0dG9uJyk7XG5jb25zdCBjbGVhckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGVhci1idXR0b24nKTtcbmNvbnN0IHVzZXJuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlcm5hbWUtaW5wdXQnKTtcbmNvbnN0IHBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFzc3dvcmQtaW5wdXQnKTtcbmNvbnN0IGxvZ2luU2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLXNjcmVlbicpO1xuY29uc3QgY3VzdG9tZXJEYXNoYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tZXItbGF5b3V0Jyk7XG5jb25zdCBjdXN0b21lckJvb2tpbmdBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1c3RvbWVyLWJvb2tpbmdzLWFyZWEnKTtcbmNvbnN0IG1hbmFnZXJCb29raW5nQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYW5hZ2VyLWJvb2tpbmdzLWFyZWEnKTtcbmNvbnN0IG1hbmFnZXJEYXNoYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFuYWdlci1sYXlvdXQnKTtcbmNvbnN0IGN1c3RvbWVyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b21lci1uYW1lJyk7XG5jb25zdCBtYW5hZ2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYW5hZ2VyLW5hbWUnKTtcbmNvbnN0IGN1c3RvbWVyRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1c3RvbWVyLWNhbGVuZGFyLWRyb3Bkb3duJyk7XG5jb25zdCBtYW5hZ2VyRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hbmFnZXItY2FsZW5kYXItZHJvcGRvd24nKTtcbmNvbnN0IGN1c3RvbWVyQXZhaWxhYmxlUm9vbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tZXItYXZhaWxhYmxlLXJvb21zJyk7XG5jb25zdCBtYW5hZ2VyQXZhaWxhYmxlUm9vbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFuYWdlci1hdmFpbGFibGUtcm9vbXMnKTtcbmNvbnN0IGN1c3RvbWVyQm9va2luZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tZXItYm9va2luZ3MnKTtcbmNvbnN0IG1hbmFnZXJCb29raW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYW5hZ2VyLWJvb2tpbmdzJyk7XG5jb25zdCBjdXN0b21lclJvb21UeXBlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vbVR5cGVzLWN1c3RvbWVyJyk7XG5jb25zdCBtYW5hZ2VyUm9vbVR5cGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb29tVHlwZXMtbWFuYWdlcicpO1xuY29uc3QgY3VzdG9tZXJTZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYW5hZ2VyLXNlYXJjaC1pbnB1dCcpO1xuY29uc3QgY3VzdG9tZXJTcGVudFN5bWJvbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b21lci1zcGVudC1zeW1ib2wnKVxuY29uc3QgY3VzdG9tZXJTZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFuYWdlci1zZWFyY2gtYnV0dG9uJyk7XG5jb25zdCBjdXN0b21lckRvbGxhcnNTcGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b21lci1kb2xsYXJzLXNwZW50Jyk7XG5jb25zdCBjdXN0b21lclNwZW50RGVjaW1hbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b21lci1hbW91bnQtZGVjaW1hbCcpO1xuY29uc3QgY3VzdG9tZXJDZW50c1NwZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1c3RvbWVyLWNlbnRzLXNwZW50Jyk7XG5jb25zdCBtYW5hZ2VyU3BlbnRTeW1ib2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFuYWdlci1zcGVudC1zeW1ib2wnKTtcbmNvbnN0IG1hbmFnZXJEb2xsYXJzU3BlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFuYWdlci1kb2xsYXJzLXNwZW50Jyk7XG5jb25zdCBtYW5hZ2VyU3BlbnREZWNpbWFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hbmFnZXItYW1vdW50LWRlY2ltYWwnKTtcbmNvbnN0IG1hbmFnZXJDZW50c1NwZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hbmFnZXItY2VudHMtc3BlbnQnKTtcbmNvbnN0IG1hbmFnZXJBbW91bnRTcGVudExhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hbmFnZXItYW1vdW50LXNwZW50LWxhYmVsJyk7XG5jb25zdCBtYW5hZ2VyUmV2ZW51ZVN5bWJvbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYW5hZ2VyLXJldmVudWUtc3ltYm9sJyk7XG5jb25zdCBtYW5hZ2VyUmV2ZW51ZURvbGxhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFuYWdlci1yZXZlbnVlLWRvbGxhcnMnKTtcbmNvbnN0IG1hbmFnZXJSZXZlbnVlRGVjaW1hbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYW5hZ2VyLXJldmVudWUtZGVjaW1hbCcpO1xuY29uc3QgbWFuYWdlclJldmVudWVDZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYW5hZ2VyLXJldmVudWUtY2VudHMnKTtcbmNvbnN0IG1hbmFnZXJQZXJjZW50YWdlT2NjdXBpZWRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYW5hZ2VyLXBlcmNlbnRhZ2UtdmFsdWUnKTtcbmNvbnN0IG1hbmFnZXJQZXJjZW50YWdlT2NjdXBpZWRTeW1ib2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFuYWdlci1wZXJjZW50YWdlLXN5bWJvbCcpO1xuXG5sb2dpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVzZXJMb2dpbik7XG5jbGVhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsZWFySW5wdXRzKTtcbmN1c3RvbWVyRGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdXBkYXRlQ3VzdG9tZXJBdmFpbGFibGVSb29tcyk7XG5tYW5hZ2VyRGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdXBkYXRlTWFuYWdlckF2YWlsYWJsZVJvb21zKTtcbmN1c3RvbWVyUm9vbVR5cGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmaWx0ZXJDdXN0b21lclJvb21zQnlUeXBlKTtcbm1hbmFnZXJSb29tVHlwZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZpbHRlck1hbmFnZXJSb29tc0J5VHlwZSk7XG5jdXN0b21lclNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlYXJjaEN1c3RvbWVycyk7XG5jdXN0b21lckF2YWlsYWJsZVJvb21zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0QVJvb20pO1xubWFuYWdlckF2YWlsYWJsZVJvb21zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0QVJvb20pO1xubWFuYWdlckJvb2tpbmdzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0Qm9va2luZyk7XG5cbmZ1bmN0aW9uIHVzZXJMb2dpbigpIHtcbiAgbGV0IHVzZXI7XG4gIGNvbnN0IHVzZXJuYW1lID0gdXNlcm5hbWVJbnB1dC52YWx1ZTtcbiAgY29uc3QgcGFzc3dvcmQgPSBwYXNzd29yZElucHV0LnZhbHVlO1xuICBsZXQgc3BsaXRVc2VybmFtZSA9IHVzZXJuYW1lLnNwbGl0KCdjdXN0b21lcicpO1xuICBpZiAocGFzc3dvcmQgPT09ICdvdmVybG9vazIwMjAnICYmIHNwbGl0VXNlcm5hbWVbMF0gPT09ICcnICYmIHNwbGl0VXNlcm5hbWVbMV0gPCA1MSkge1xuICAgIHVzZXIgPSB1c2VyRGF0YS5maW5kKCh1c2VyKSA9PiB7cmV0dXJuIHVzZXIuaWQgPT09IHBhcnNlSW50KHNwbGl0VXNlcm5hbWVbMV0pfSlcbiAgICBjcmVhdGVDdXN0b21lcih1c2VyKTtcbiAgICBkaXNwbGF5Q3VzdG9tZXJEYXNoYm9hcmQoKTtcbiAgfSBlbHNlIGlmIChwYXNzd29yZCA9PT0gJ292ZXJsb29rMjAyMCcgJiYgc3BsaXRVc2VybmFtZVswXSA9PT0gJ21hbmFnZXInKSB7XG4gICAgdXNlciA9IG5ldyBNYW5hZ2VyKDEsICdNYW5hZ2VyJywgdXNlckRhdGEsIHJvb21EYXRhLCBib29raW5nRGF0YSk7XG4gICAgY3JlYXRlTWFuYWdlcih1c2VyKTtcbiAgICBkaXNwbGF5TWFuYWdlckRhc2hib2FyZCgpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHVzZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgY2xlYXJJbnB1dHModXNlcm5hbWVJbnB1dCk7XG4gIGNsZWFySW5wdXRzKHBhc3N3b3JkSW5wdXQpO1xuICByZXR1cm4gdXNlciA/IHVzZXIgOiBhbGVydCgnUGxlYXNlIGVudGVyIGEgdmFsaWQgdXNlcm5hbWUgYW5kIHBhc3N3b3JkLicpO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlQ3VzdG9tZXIodXNlckluZm8pIHtcbiAgY3VzdG9tZXIgPSBuZXcgQ3VzdG9tZXIodXNlckluZm8uaWQsIHVzZXJJbmZvLm5hbWUsIHJvb21EYXRhLCBib29raW5nRGF0YSk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVNYW5hZ2VyKHVzZXIpIHtcbiAgbWFuYWdlciA9IHVzZXI7XG59O1xuXG5mdW5jdGlvbiBkaXNwbGF5Q3VzdG9tZXJEYXNoYm9hcmQoKSB7XG4gIGRhdGUgPSB0b2RheTtcbiAgbG9naW5TY3JlZW4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIGN1c3RvbWVyRGFzaGJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICBjdXN0b21lckJvb2tpbmdBcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICBjcmVhdGVDdXN0b21lckRhc2hib2FyZCgpO1xuXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlNYW5hZ2VyRGFzaGJvYXJkKCkge1xuICBkYXRlID0gdG9kYXk7XG4gIGxvZ2luU2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBtYW5hZ2VyRGFzaGJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICBtYW5hZ2VyQm9va2luZ0FyZWEuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIGNyZWF0ZU1hbmFnZXJEYXNoYm9hcmQoKTtcbiAgZ2V0TWFuYWdlclJldmVudWUodG9kYXkpO1xuICBnZXRNYW5hZ2VyUGVyY2VudGFnZU9jY3VwaWVkKHRvZGF5KTtcbn07XG5cbmZ1bmN0aW9uIHVwZGF0ZUN1c3RvbWVyQXZhaWxhYmxlUm9vbXMoKSB7XG4gIGN1c3RvbWVyQXZhaWxhYmxlUm9vbXMuaW5uZXJUZXh0ID0gJyc7XG4gIGRhdGUgPSBjdXN0b21lckRhdGVJbnB1dC52YWx1ZS5yZXBsYWNlKC8tL2csIFwiL1wiKTtcbiAgY29uc3QgYWxsQXZhaWxhYmxlUm9vbXMgPSBjdXN0b21lci5zZWFyY2hBdmFpbGFibGVSb29tc0J5RGF0ZShkYXRlKTtcbiAgZGlzcGxheUF2YWlsYWJsZVJvb21zKGRhdGUsIGN1c3RvbWVyKTtcbn07XG5cbmZ1bmN0aW9uIHVwZGF0ZU1hbmFnZXJBdmFpbGFibGVSb29tcygpIHtcbiAgbWFuYWdlckF2YWlsYWJsZVJvb21zLmlubmVyVGV4dCA9ICcnO1xuICBkYXRlID0gbWFuYWdlckRhdGVJbnB1dC52YWx1ZS5yZXBsYWNlKC8tL2csIFwiL1wiKTtcbiAgY29uc3QgYWxsQXZhaWxhYmxlUm9vbXMgPSBtYW5hZ2VyLnNlYXJjaEF2YWlsYWJsZVJvb21zQnlEYXRlKGRhdGUpO1xuICBkaXNwbGF5QXZhaWxhYmxlUm9vbXMoZGF0ZSwgbWFuYWdlcik7XG4gIHVwZGF0ZU1hbmFnZXJJbmZvKGRhdGUsIG1hbmFnZXIpO1xufTtcblxuZnVuY3Rpb24gY2xlYXJJbnB1dHMoaW5wdXQpIHtcbiAgdXNlcm5hbWVJbnB1dC52YWx1ZSA9ICcnO1xuICBwYXNzd29yZElucHV0LnZhbHVlID0gJyc7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVDdXN0b21lckRhc2hib2FyZCgpIHtcbiAgY3VzdG9tZXJOYW1lLmlubmVyVGV4dCA9IGN1c3RvbWVyLm5hbWU7XG4gIGRpc3BsYXlBdmFpbGFibGVSb29tcyh0b2RheSwgY3VzdG9tZXIpO1xuICBnZXRDdXN0b21lckJvb2tpbmdzKCk7XG4gIGdldFRvdGFsU3BlbnQoY3VzdG9tZXIpO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlTWFuYWdlckRhc2hib2FyZCgpIHtcbiAgZGlzcGxheUF2YWlsYWJsZVJvb21zKHRvZGF5LCBtYW5hZ2VyKTtcbn07XG5cbmZ1bmN0aW9uIGRpc3BsYXlBdmFpbGFibGVSb29tcyhkYXRlLCB1c2VyKSB7XG4gIGlmKHVzZXIgPT09IGN1c3RvbWVyKSB7XG4gICAgZGlzcGxheUN1c3RvbWVyQXZhaWxhYmxlUm9vbXMoZGF0ZSwgdXNlcik7XG4gIH0gZWxzZSBpZiAodXNlciA9PT0gbWFuYWdlcikge1xuICAgIGRpc3BsYXlNYW5hZ2VyQXZhaWxhYmxlUm9vbXMoZGF0ZSwgdXNlcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheUN1c3RvbWVyQXZhaWxhYmxlUm9vbXMoZGF0ZSwgdXNlcikge1xuICBjb25zdCBhbGxBdmFpbGFibGVSb29tcyA9IHVzZXIuc2VhcmNoQXZhaWxhYmxlUm9vbXNCeURhdGUoZGF0ZSk7XG4gIGlmICh0eXBlb2YgYWxsQXZhaWxhYmxlUm9vbXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICBsZXQgcm9vbUluZm8gPSBgXG4gICAgPGRpdiBjbGFzcz1cInJvb20tY2FyZFwiPlxuICAgICAgPHA+ICR7YWxsQXZhaWxhYmxlUm9vbXN9IDwvcD5cbiAgICA8L2Rpdj5cbiAgICBgXG4gIGN1c3RvbWVyQXZhaWxhYmxlUm9vbXMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCByb29tSW5mbyk7XG59IGVsc2Uge1xuICBhbGxBdmFpbGFibGVSb29tcy5mb3JFYWNoKChyb29tKSA9PiB7XG4gICAgbGV0IHJvb21JbmZvID0gYFxuICAgIDxkaXYgaWQ9XCIke3Jvb20ubnVtYmVyfVwiIGNsYXNzPVwicm9vbS1jYXJkXCIgdGFiaW5kZXg9XCIwXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicm9vbS1jYXJkLWJyZWFrLW9uZVwiPlxuICAgICAgICA8cD5Sb29tIE51bWJlcjogJHtyb29tLm51bWJlcn08L3A+XG4gICAgICAgIDxwPlR5cGU6ICR7cm9vbS5yb29tVHlwZX08L3A+XG4gICAgICAgIDxwPkJpZGV0OiAke3Jvb20uYmlkZXR9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicm9vbS1jYXJkLWJyZWFrLXR3b1wiPlxuICAgICAgICA8cD5CZWQgU2l6ZTogJHtyb29tLmJlZFNpemV9PC9wPlxuICAgICAgICA8cD5CZWRzOiAke3Jvb20ubnVtQmVkc308L3A+XG4gICAgICAgIDxwPkNvc3QgUGVyIE5pZ2h0OiAkJHtyb29tLmNvc3RQZXJOaWdodH08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJib29rLXJvb20tYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIG5hbWU9XCJidXR0b25cIiB0YWJpbmRleD1cIjBcIj5Cb29rPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgYFxuICAgIGN1c3RvbWVyQXZhaWxhYmxlUm9vbXMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCByb29tSW5mbyk7XG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5TWFuYWdlckF2YWlsYWJsZVJvb21zKGRhdGUsIHVzZXIpIHtcbiAgY29uc3QgYWxsQXZhaWxhYmxlUm9vbXMgPSB1c2VyLnNlYXJjaEF2YWlsYWJsZVJvb21zQnlEYXRlKGRhdGUpO1xuICBpZiAodHlwZW9mIGFsbEF2YWlsYWJsZVJvb21zID09PSBcInN0cmluZ1wiKSB7XG4gICAgbGV0IHJvb21JbmZvID0gYFxuICAgIDxkaXYgY2xhc3M9XCJyb29tLWNhcmRcIj5cbiAgICAgIDxwPiAke2FsbEF2YWlsYWJsZVJvb21zfSA8L3A+XG4gICAgPC9kaXY+XG4gICAgYFxuICBtYW5hZ2VyQXZhaWxhYmxlUm9vbXMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCByb29tSW5mbyk7XG4gIH0gZWxzZSB7XG4gIGFsbEF2YWlsYWJsZVJvb21zLmZvckVhY2goKHJvb20pID0+IHtcbiAgICBsZXQgcm9vbUluZm8gPSBgXG4gICAgPGRpdiBpZD1cIiR7cm9vbS5udW1iZXJ9XCIgY2xhc3M9XCJyb29tLWNhcmRcIiB0YWJpbmRleD1cIjBcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb29tLWNhcmQtYnJlYWstb25lXCI+XG4gICAgICAgIDxwPlJvb20gTnVtYmVyOiAke3Jvb20ubnVtYmVyfTwvcD5cbiAgICAgICAgPHA+VHlwZTogJHtyb29tLnJvb21UeXBlfTwvcD5cbiAgICAgICAgPHA+QmlkZXQ6ICR7cm9vbS5iaWRldH08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb29tLWNhcmQtYnJlYWstdHdvXCI+XG4gICAgICAgIDxwPkJlZCBTaXplOiAke3Jvb20uYmVkU2l6ZX08L3A+XG4gICAgICAgIDxwPkJlZHM6ICR7cm9vbS5udW1CZWRzfTwvcD5cbiAgICAgICAgPHA+Q29zdCBQZXIgTmlnaHQ6ICQke3Jvb20uY29zdFBlck5pZ2h0fTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJvb2stcm9vbS1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgbmFtZT1cImJ1dHRvblwiIHRhYmluZGV4PVwiMFwiPkJvb2s8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICBgXG4gICAgbWFuYWdlckF2YWlsYWJsZVJvb21zLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgcm9vbUluZm8pO1xuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0Q3VzdG9tZXJCb29raW5ncygpIHtcbiAgY29uc3QgYWxsQm9va2luZ3MgPSBjdXN0b21lci5ib29raW5ncy5yZWR1Y2UoKGFsbEJvb2tpbmdzLCBib29raW5nKSA9PiB7XG4gICAgY3VzdG9tZXIucm9vbXMuZm9yRWFjaCgocm9vbSkgPT4ge1xuICAgICAgaWYgKGJvb2tpbmcudXNlcklEID09PSBjdXN0b21lci5pZCAmJiBib29raW5nLnJvb21OdW1iZXIgPT09IHJvb20ubnVtYmVyKSB7XG4gICAgICAgIGFsbEJvb2tpbmdzLnB1c2goYm9va2luZyk7XG4gICAgICB9XG4gICAgfSlcbiAgcmV0dXJuIGFsbEJvb2tpbmdzO1xuICB9LCBbXSlcbiAgZGlzcGxheUN1c3RvbWVyQm9va2luZ3MoYWxsQm9va2luZ3MpO1xufTtcblxuZnVuY3Rpb24gZGlzcGxheUN1c3RvbWVyQm9va2luZ3MoYm9va2luZ3MpIHtcbiAgYm9va2luZ3MuZm9yRWFjaCgoYm9va2luZykgPT4ge1xuICAgIGxldCBib29raW5nSW5mbyA9IGBcbiAgICA8ZGl2IGNsYXNzPVwiYm9va2luZy1jYXJkXCIgdGFiaW5kZXg9XCIwXCI+XG4gICAgICA8cD5Cb29raW5nIENvbmZpcm1hdGlvbjogJHtib29raW5nLmlkfTwvcD5cbiAgICAgIDxwPkRhdGU6ICR7Ym9va2luZy5kYXRlfTwvcD5cbiAgICAgIDxwPlJvb20gTnVtYmVyOiAke2Jvb2tpbmcucm9vbU51bWJlcn08L3A+XG4gICAgPC9kaXY+XG4gICAgYFxuICBjdXN0b21lckJvb2tpbmdzLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYm9va2luZ0luZm8pO1xuICB9KVxufTtcblxuZnVuY3Rpb24gZmlsdGVyQ3VzdG9tZXJSb29tc0J5VHlwZSgpIHtcbiAgZGF0ZSA9IGN1c3RvbWVyRGF0ZUlucHV0LnZhbHVlLnJlcGxhY2UoLy0vZywgXCIvXCIpIHx8IHRvZGF5O1xuICBjb25zdCBhbGxBdmFpbGFibGVSb29tcyA9IGN1c3RvbWVyLnNlYXJjaEF2YWlsYWJsZVJvb21zQnlEYXRlKGRhdGUpO1xuICBsZXQgcm9vbVR5cGVTZWxlY3Rpb24gPSBjdXN0b21lclJvb21UeXBlSW5wdXQub3B0aW9uc1tjdXN0b21lclJvb21UeXBlSW5wdXQuc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gIGNvbnN0IGFsbEZpbHRlcmVkUm9vbXMgPSBhbGxBdmFpbGFibGVSb29tcy5yZWR1Y2UoKGFsbEZpbHRlcmVkLCByb29tKSA9PiB7XG4gICAgaWYgKHJvb20ucm9vbVR5cGUgPT09IHJvb21UeXBlU2VsZWN0aW9uKSB7XG4gICAgICBhbGxGaWx0ZXJlZC5wdXNoKHJvb20pO1xuICAgIH0gZWxzZSBpZiAocm9vbVR5cGVTZWxlY3Rpb24gPT09ICdhbGwgcm9vbXMnKSB7XG4gICAgICBhbGxGaWx0ZXJlZC5wdXNoKHJvb20pO1xuICAgIH1cbiAgcmV0dXJuIGFsbEZpbHRlcmVkO1xuICB9LCBbXSlcbiAgZGlzcGxheUN1c3RvbWVyRmlsdGVyZWRSb29tcyhhbGxGaWx0ZXJlZFJvb21zKTtcbn07XG5cbmZ1bmN0aW9uIGZpbHRlck1hbmFnZXJSb29tc0J5VHlwZSgpIHtcbiAgZGF0ZSA9IG1hbmFnZXJEYXRlSW5wdXQudmFsdWUucmVwbGFjZSgvLS9nLCBcIi9cIikgfHwgdG9kYXk7XG4gIGNvbnN0IGFsbEF2YWlsYWJsZVJvb21zID0gbWFuYWdlci5zZWFyY2hBdmFpbGFibGVSb29tc0J5RGF0ZShkYXRlKTtcbiAgbGV0IHJvb21UeXBlU2VsZWN0aW9uID0gbWFuYWdlclJvb21UeXBlSW5wdXQub3B0aW9uc1ttYW5hZ2VyUm9vbVR5cGVJbnB1dC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgY29uc3QgYWxsRmlsdGVyZWRSb29tcyA9IGFsbEF2YWlsYWJsZVJvb21zLnJlZHVjZSgoYWxsRmlsdGVyZWQsIHJvb20pID0+IHtcbiAgICBpZiAocm9vbS5yb29tVHlwZSA9PT0gcm9vbVR5cGVTZWxlY3Rpb24pIHtcbiAgICAgIGFsbEZpbHRlcmVkLnB1c2gocm9vbSk7XG4gICAgfSBlbHNlIGlmIChyb29tVHlwZVNlbGVjdGlvbiA9PT0gJ2FsbCByb29tcycpIHtcbiAgICAgIGFsbEZpbHRlcmVkLnB1c2gocm9vbSk7XG4gICAgfVxuICByZXR1cm4gYWxsRmlsdGVyZWQ7XG4gIH0sIFtdKVxuICBkaXNwbGF5TWFuYWdlckZpbHRlcmVkUm9vbXMoYWxsRmlsdGVyZWRSb29tcyk7XG59O1xuXG5mdW5jdGlvbiBkaXNwbGF5Q3VzdG9tZXJGaWx0ZXJlZFJvb21zKGFsbEZpbHRlcmVkUm9vbXMpIHtcbiAgY3VzdG9tZXJBdmFpbGFibGVSb29tcy5pbm5lckhUTUwgPSAnJztcbiAgYWxsRmlsdGVyZWRSb29tcy5mb3JFYWNoKChyb29tKSA9PiB7XG4gICAgbGV0IHJvb21JbmZvID0gYFxuICAgIDxkaXYgaWQ9XCIke3Jvb20ubnVtYmVyfVwiIGNsYXNzPVwicm9vbS1jYXJkXCIgdGFiaW5kZXg9XCIwXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicm9vbS1jYXJkLWJyZWFrLW9uZVwiPlxuICAgICAgICA8cD5Sb29tIE51bWJlcjogJHtyb29tLm51bWJlcn08L3A+XG4gICAgICAgIDxwPlR5cGU6ICR7cm9vbS5yb29tVHlwZX08L3A+XG4gICAgICAgIDxwPkJpZGV0OiAke3Jvb20uYmlkZXR9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicm9vbS1jYXJkLWJyZWFrLXR3b1wiPlxuICAgICAgICA8cD5CZWQgU2l6ZTogJHtyb29tLmJlZFNpemV9PC9wPlxuICAgICAgICA8cD5CZWRzOiAke3Jvb20ubnVtQmVkc308L3A+XG4gICAgICAgIDxwPkNvc3QgUGVyIE5pZ2h0OiAkJHtyb29tLmNvc3RQZXJOaWdodH08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJib29rLXJvb20tYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIG5hbWU9XCJidXR0b25cIiB0YWJpbmRleD1cIjBcIj5Cb29rPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgYFxuICAgIGN1c3RvbWVyQXZhaWxhYmxlUm9vbXMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCByb29tSW5mbyk7XG4gIH0pXG59O1xuXG5mdW5jdGlvbiBkaXNwbGF5TWFuYWdlckZpbHRlcmVkUm9vbXMoYWxsRmlsdGVyZWRSb29tcykge1xuICBtYW5hZ2VyQXZhaWxhYmxlUm9vbXMuaW5uZXJIVE1MID0gJyc7XG4gIGFsbEZpbHRlcmVkUm9vbXMuZm9yRWFjaCgocm9vbSkgPT4ge1xuICAgIGxldCByb29tSW5mbyA9IGBcbiAgICA8ZGl2IGlkPVwiJHtyb29tLm51bWJlcn1cIiBjbGFzcz1cInJvb20tY2FyZFwiIHRhYmluZGV4PVwiMFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvb20tY2FyZC1icmVhay1vbmVcIj5cbiAgICAgICAgPHA+Um9vbSBOdW1iZXI6ICR7cm9vbS5udW1iZXJ9PC9wPlxuICAgICAgICA8cD5UeXBlOiAke3Jvb20ucm9vbVR5cGV9PC9wPlxuICAgICAgICA8cD5CaWRldDogJHtyb29tLmJpZGV0fTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInJvb20tY2FyZC1icmVhay10d29cIj5cbiAgICAgICAgPHA+QmVkIFNpemU6ICR7cm9vbS5iZWRTaXplfTwvcD5cbiAgICAgICAgPHA+QmVkczogJHtyb29tLm51bUJlZHN9PC9wPlxuICAgICAgICA8cD5Db3N0IFBlciBOaWdodDogJCR7cm9vbS5jb3N0UGVyTmlnaHR9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYm9vay1yb29tLWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiBuYW1lPVwiYnV0dG9uXCIgdGFiaW5kZXg9XCIwXCI+Qm9vazwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIGBcbiAgICBtYW5hZ2VyQXZhaWxhYmxlUm9vbXMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCByb29tSW5mbyk7XG4gIH0pXG59O1xuXG5mdW5jdGlvbiBzZWFyY2hDdXN0b21lcnMoKSB7XG4gIGNvbnN0IGN1c3RvbWVySW5wdXQgPSBjdXN0b21lclNlYXJjaElucHV0LnZhbHVlO1xuICBjb25zdCB1c2VyUmVzdWx0ID0gbWFuYWdlci5nZXRDdXN0b21lckJ5SWQoY3VzdG9tZXJJbnB1dCk7XG4gIGN1c3RvbWVyID0gbmV3IEN1c3RvbWVyKHVzZXJSZXN1bHQuaWQsIHVzZXJSZXN1bHQubmFtZSwgcm9vbURhdGEsIGJvb2tpbmdEYXRhKTtcbiAgbWFuYWdlck5hbWUuaW5uZXJUZXh0ID0gY3VzdG9tZXIubmFtZTtcbiAgZ2V0Q3VzdG9tZXJCb29raW5nc0Zvck1hbmFnZXIoY3VzdG9tZXIpXG4gIGdldFRvdGFsU3BlbnQobWFuYWdlcilcbn07XG5cbmZ1bmN0aW9uIGdldEN1c3RvbWVyQm9va2luZ3NGb3JNYW5hZ2VyKGN1c3RvbWVyKSB7XG4gIGNvbnN0IGFsbEJvb2tpbmdzID0gY3VzdG9tZXIuYm9va2luZ3MucmVkdWNlKChhbGxCb29raW5ncywgYm9va2luZykgPT4ge1xuICAgIGN1c3RvbWVyLnJvb21zLmZvckVhY2goKHJvb20pID0+IHtcbiAgICAgIGlmIChib29raW5nLnVzZXJJRCA9PT0gY3VzdG9tZXIuaWQgJiYgYm9va2luZy5yb29tTnVtYmVyID09PSByb29tLm51bWJlcikge1xuICAgICAgICBhbGxCb29raW5ncy5wdXNoKGJvb2tpbmcpO1xuICAgICAgfVxuICAgIH0pXG4gIHJldHVybiBhbGxCb29raW5ncztcbiAgfSwgW10pXG4gIGRpc3BsYXlNYW5hZ2VyVmlld0Jvb2tpbmdzKGFsbEJvb2tpbmdzKTtcbn07XG5cbmZ1bmN0aW9uIGRpc3BsYXlNYW5hZ2VyVmlld0Jvb2tpbmdzKGJvb2tpbmdzKSB7XG4gIG1hbmFnZXJCb29raW5ncy5pbm5lckhUTUwgPSAnJztcbiAgYm9va2luZ3MuZm9yRWFjaCgoYm9va2luZykgPT4ge1xuICAgIGxldCBib29raW5nSW5mbyA9IGBcbiAgICA8ZGl2IGlkPVwiJHtib29raW5nLmlkfVwiY2xhc3M9XCJib29raW5nLWNhcmRcIiB0YWJpbmRleD1cIjBcIj5cbiAgICAgIDxwPkJvb2tpbmcgQ29uZmlybWF0aW9uOiAke2Jvb2tpbmcuaWR9PC9wPlxuICAgICAgPHA+RGF0ZTogJHtib29raW5nLmRhdGV9PC9wPlxuICAgICAgPHA+Um9vbSBOdW1iZXI6ICR7Ym9va2luZy5yb29tTnVtYmVyfTwvcD5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJjYW5jZWwtYm9va2luZy1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgbmFtZT1cImJ1dHRvblwiIHRhYmluZGV4PVwiMFwiPkNhbmNlbDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIGBcbiAgbWFuYWdlckJvb2tpbmdzLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYm9va2luZ0luZm8pO1xuICB9KVxufTtcblxuZnVuY3Rpb24gZ2V0VG90YWxTcGVudCh1c2VyKSB7XG4gIGNvbnN0IHRvdGFsU3BlbnQgPSB1c2VyLmdldEN1c3RvbWVyVG90YWxTcGVudChjdXN0b21lcilcbiAgZGlzcGxheUN1c3RvbWVyQW1vdW50U3BlbnQodG90YWxTcGVudCwgdXNlcik7XG59O1xuXG5mdW5jdGlvbiBkaXNwbGF5Q3VzdG9tZXJBbW91bnRTcGVudCh0b3RhbFNwZW50LCB1c2VyKSB7XG4gIGlmICh1c2VyID09PSBtYW5hZ2VyKSB7XG4gICAgbWFuYWdlckFtb3VudFNwZW50TGFiZWwuaW5uZXJUZXh0ID0gJ0Ftb3VudCBTcGVudCc7XG4gICAgbWFuYWdlclNwZW50U3ltYm9sLmlubmVyVGV4dCA9ICcnXG4gICAgbWFuYWdlckRvbGxhcnNTcGVudC5pbm5lclRleHQgPSAnJztcbiAgICBtYW5hZ2VyU3BlbnRTeW1ib2wuaW5uZXJUZXh0ID0gJyc7XG4gICAgbWFuYWdlckNlbnRzU3BlbnQuaW5uZXJUZXh0ID0gJyc7XG4gICAgbGV0IHN0cmluZyA9IHRvdGFsU3BlbnQudG9TdHJpbmcoKTtcbiAgICBjb25zdCBzcGxpdFRvdGFsID0gc3RyaW5nLnNwbGl0KCcuJyk7XG4gICAgbWFuYWdlclNwZW50U3ltYm9sLmlubmVyVGV4dCA9ICckJztcbiAgICBtYW5hZ2VyRG9sbGFyc1NwZW50LmlubmVyVGV4dCA9IHNwbGl0VG90YWxbMF07XG4gICAgbWFuYWdlclNwZW50RGVjaW1hbC5pbm5lclRleHQgPSAnLic7XG4gICAgbWFuYWdlckNlbnRzU3BlbnQuaW5uZXJUZXh0ID0gc3BsaXRUb3RhbFsxXTtcbiAgfVxuICBlbHNlIGlmICh1c2VyID09PSBjdXN0b21lcikge1xuICBjdXN0b21lclNwZW50U3ltYm9sLmlubmVyVGV4dCA9ICcnO1xuICBjdXN0b21lckRvbGxhcnNTcGVudC5pbm5lclRleHQgPSAnJztcbiAgY3VzdG9tZXJTcGVudERlY2ltYWwuaW5uZXJUZXh0ID0gJyc7XG4gIGN1c3RvbWVyQ2VudHNTcGVudC5pbm5lclRleHQgPSAnJztcbiAgbGV0IHN0cmluZyA9IHRvdGFsU3BlbnQudG9TdHJpbmcoKTtcbiAgY29uc3Qgc3BsaXRUb3RhbCA9IHN0cmluZy5zcGxpdCgnLicpO1xuICBjdXN0b21lclNwZW50U3ltYm9sLmlubmVyVGV4dCA9ICckJztcbiAgY3VzdG9tZXJEb2xsYXJzU3BlbnQuaW5uZXJUZXh0ID0gc3BsaXRUb3RhbFswXTtcbiAgY3VzdG9tZXJTcGVudERlY2ltYWwuaW5uZXJUZXh0ID0gJy4nO1xuICBjdXN0b21lckNlbnRzU3BlbnQuaW5uZXJUZXh0ID0gc3BsaXRUb3RhbFsxXTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZ2V0TWFuYWdlclJldmVudWUoZGF0ZSkge1xuICBjb25zdCByZXZlbnVlID0gbWFuYWdlci5nZXRUb3RhbFJldmVudWVGb3JEYXRlKGRhdGUpO1xuICBkaXNwbGF5TWFuYWdlclJldmVudWUocmV2ZW51ZSk7XG59O1xuXG5mdW5jdGlvbiBkaXNwbGF5TWFuYWdlclJldmVudWUocmV2ZW51ZSkge1xuICBtYW5hZ2VyUmV2ZW51ZVN5bWJvbC5pbm5yVGV4dCA9ICcnO1xuICBtYW5hZ2VyUmV2ZW51ZURvbGxhcnMuaW5uZXJUZXh0ID0gJyc7XG4gIG1hbmFnZXJSZXZlbnVlRGVjaW1hbC5pbm5lclRleHQgPSAnJztcbiAgbWFuYWdlclJldmVudWVDZW50cy5pbm5lclRleHQgPSAnJztcbiAgY29uc3Qgc3RyaW5nUmV2ZW51ZSA9IHJldmVudWUudG9TdHJpbmcoKTtcbiAgY29uc3Qgc3BsaXRUb3RhbCA9IHN0cmluZ1JldmVudWUuc3BsaXQoJy4nKTtcbiAgbWFuYWdlclJldmVudWVTeW1ib2wuaW5uZXJUZXh0ID0gJyQnO1xuICBtYW5hZ2VyUmV2ZW51ZURvbGxhcnMuaW5uZXJUZXh0ID0gc3BsaXRUb3RhbFswXTtcbiAgbWFuYWdlclJldmVudWVEZWNpbWFsLmlubmVyVGV4dCA9ICcuJztcbiAgbWFuYWdlclJldmVudWVDZW50cy5pbm5lclRleHQgPSBzcGxpdFRvdGFsWzFdIHx8ICcwJztcbn07XG5cbmZ1bmN0aW9uIGdldE1hbmFnZXJQZXJjZW50YWdlT2NjdXBpZWQoZGF0ZSkge1xuICBjb25zdCBwZXJjZW50YWdlID0gbWFuYWdlci5nZXRQZXJjZW50YWdlT2NjdXBpZWQoZGF0ZSk7XG4gIGRpc3BsYXlNYW5hZ2VyUGVyY2VudGFnZU9jY3VwaWVkKHBlcmNlbnRhZ2UpO1xufTtcblxuZnVuY3Rpb24gZGlzcGxheU1hbmFnZXJQZXJjZW50YWdlT2NjdXBpZWQocGVyY2VudGFnZSkge1xuICBtYW5hZ2VyUGVyY2VudGFnZU9jY3VwaWVkVmFsdWUuaW5uZXJUZXh0ID0gJyc7XG4gIG1hbmFnZXJQZXJjZW50YWdlT2NjdXBpZWRTeW1ib2wuaW5uZXJUZXh0ID0gJyc7XG4gIG1hbmFnZXJQZXJjZW50YWdlT2NjdXBpZWRWYWx1ZS5pbm5lclRleHQgPSBwZXJjZW50YWdlO1xuICBtYW5hZ2VyUGVyY2VudGFnZU9jY3VwaWVkU3ltYm9sLmlubmVyVGV4dCA9ICclJztcbn07XG5cbmZ1bmN0aW9uIHVwZGF0ZU1hbmFnZXJJbmZvKGRhdGUpIHtcbiAgZ2V0TWFuYWdlclJldmVudWUoZGF0ZSk7XG4gIGdldE1hbmFnZXJQZXJjZW50YWdlT2NjdXBpZWQoZGF0ZSk7XG59O1xuXG5mdW5jdGlvbiBzZWxlY3RBUm9vbShldmVudCkge1xuICBsZXQgcm9vbU51bWJlciA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmlkKTtcbiAgbGV0IGJvb2sgPSBjb25maXJtKFwiV291bGQgeW91IGxpa2UgdG8gYm9vayB0aGlzIHJvb20/XCIpO1xuICAgIGlmIChib29rID09PSB0cnVlKSB7XG4gICAgICBuZXdCb29raW5nLnJvb21OdW1iZXIgPSByb29tTnVtYmVyO1xuICAgICAgbWFrZUJvb2tpbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBtYWtlQm9va2luZygpIHtcbiAgbmV3Qm9va2luZy5kYXRlID0gZGF0ZTtcbiAgaWYgKGN1c3RvbWVyKSB7XG4gICAgbmV3Qm9va2luZy51c2VySUQgPSBjdXN0b21lci5pZDtcbiAgICBib29raW5nRGF0YS5wdXNoKG5ld0Jvb2tpbmcpO1xuICAgIGFkZEJvb2tpbmcoY3VzdG9tZXIpO1xuICB9IGVsc2Uge1xuICAgIGFsZXJ0KCdQbGVhc2UgcHJvdmlkZSBhIGN1c3RvbWVyIHRvIGFkZCBhIGJvb2tpbmcnKVxuICB9XG59O1xuXG5mdW5jdGlvbiBhZGRCb29raW5nKGN1c3RvbWVyKSB7XG4gIG5ld0Jvb2tpbmcudXNlcklEID0gY3VzdG9tZXIuaWQ7XG4gIGZldGNoQVBJLnBvc3RCb29raW5nKG5ld0Jvb2tpbmcpO1xuICBkaXNwbGF5QXZhaWxhYmxlUm9vbXMoZGF0ZSwgY3VzdG9tZXIpO1xufTtcblxuZnVuY3Rpb24gc2VsZWN0Qm9va2luZyhldmVudCkge1xuICBsZXQgYm9va2luZ0lkID0gKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmlkKVxuICBsZXQgZGF0ZVRleHQgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5jaGlsZHJlblsxXS5pbm5lclRleHQ7XG4gIGxldCBzcGxpdERhdGUgPSBkYXRlVGV4dC5zcGxpdCgnRGF0ZTonKTtcbiAgbGV0IGRhdGVGb3JtYXRlZCA9IHNwbGl0RGF0ZVsxXTtcbiAgbGV0IGNhbmNlbERhdGUgPSBkYXRlRm9ybWF0ZWQuc3BsaXQoJy8nKVxuICBsZXQgZGF0ZUludHMgPSBjYW5jZWxEYXRlLm1hcCgoZGF0ZVBvcnRpb24pID0+IHtyZXR1cm4gcGFyc2VJbnQoZGF0ZVBvcnRpb24pfSk7XG4gIGxldCB0b2RheURhdGUgPSB0b2RheS5zcGxpdCgnLycpO1xuICBsZXQgdG9kYXlJbnRzID0gdG9kYXlEYXRlLm1hcCgodG9kYXlQb3J0aW9uKSA9PiB7cmV0dXJuIHBhcnNlSW50KHRvZGF5UG9ydGlvbil9KTtcbiAgbGV0IGNhbmNlbCA9IGNvbmZpcm0oYFdvdWxkIHlvdSBsaWtlIHRvIGNhbmNlbCBib29raW5nLCAke2Jvb2tpbmdJZH1gKTtcbiAgaWYgKGNhbmNlbCA9PT0gdHJ1ZSAmJiBkYXRlSW50c1swXSA+PSB0b2RheUludHNbMF0gJiYgZGF0ZUludHNbMV0gPj0gdG9kYXlJbnRzWzFdICYmIGRhdGVJbnRzWzJdID49IHRvZGF5SW50c1syXSkge1xuICAgIGRlbGV0ZUJvb2tpbmcoYm9va2luZ0lkKTtcbiAgfSBlbHNlIGlmIChjYW5jZWwgPT09IHRydWUgJiYgZGF0ZUludHNbMF0gPD0gdG9kYXlJbnRzWzBdIHx8IGRhdGVJbnRzWzFdIDw9IHRvZGF5SW50c1sxXSB8fCBkYXRlSW50c1syXSA8PSB0b2RheUludHNbMl0pIHtcbiAgICBhbGVydCgnWW91IGNhbm5vdCBkZWxldGUgYSBib29raW5nIHRoYXQgaGFzIGFscmVhZHkgb2NjdXJlZCcpO1xuICB9IGVsc2UgaWYgKGNhbmNlbCA9PT0gZmFsc2UpIHtcbiAgICBhbGVydCgnUGxlYXNlIENob29zZSBBbm90aGVyIEJvb2tpbmcnKVxuICB9XG59O1xuXG5mdW5jdGlvbiBkZWxldGVCb29raW5nKGlkSW5wdXQpIHtcbiAgbGV0IG51bWJlcklkID0gcGFyc2VJbnQoaWRJbnB1dCk7XG4gIGZldGNoQVBJLmRlbGV0ZUJvb2tpbmcoe2lkOiBudW1iZXJJZH0pO1xuICBkZWxldGVMb2NhbEJvb2tpbmcoaWRJbnB1dCk7XG4gIHVkcGF0ZUN1c3RvbWVyQXZhaWxhYmxlUm9vbXMoKTtcbiAgdXBkYXRlTWFuYWdlckF2YWlsYWJsZVJvb21zKCk7XG59O1xuXG5mdW5jdGlvbiBkZWxldGVMb2NhbEJvb2tpbmcoaWQpIHtcbiAgYm9va2luZ0RhdGEgPSBib29raW5nRGF0YS5maWx0ZXIoKGJvb2tpbmcpID0+IHtcbiAgICByZXR1cm4gIWJvb2tpbmcuaWQgPT09IGlkO1xuICB9KVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=