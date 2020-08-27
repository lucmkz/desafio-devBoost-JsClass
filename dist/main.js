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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_HanddlerClients__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/HanddlerClients */ \"./src/models/HanddlerClients.js\");\n/* harmony import */ var _mock_mockClientes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock/mockClientes */ \"./src/mock/mockClientes.js\");\n\n //insert here all data\n\nvar cliente1 = Object(_models_HanddlerClients__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n  cliente: _mock_mockClientes__WEBPACK_IMPORTED_MODULE_1__[\"IClienteCliente1\"],\n  contaCorrente: _mock_mockClientes__WEBPACK_IMPORTED_MODULE_1__[\"IContaCorenteCliente1\"],\n  movimentacao: [_mock_mockClientes__WEBPACK_IMPORTED_MODULE_1__[\"IMovimentacao1Cliente1\"], _mock_mockClientes__WEBPACK_IMPORTED_MODULE_1__[\"IMovimentacao2Cliente1\"], _mock_mockClientes__WEBPACK_IMPORTED_MODULE_1__[\"IMovimentacao3Cliente1\"]]\n});\nvar cliente2 = Object(_models_HanddlerClients__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n  cliente: _mock_mockClientes__WEBPACK_IMPORTED_MODULE_1__[\"IClienteCliente2\"],\n  contaCorrente: _mock_mockClientes__WEBPACK_IMPORTED_MODULE_1__[\"IContaCorenteCliente2\"],\n  movimentacao: [_mock_mockClientes__WEBPACK_IMPORTED_MODULE_1__[\"IMovimentacao1Cliente2\"], _mock_mockClientes__WEBPACK_IMPORTED_MODULE_1__[\"IMovimentacao2Cliente2\"], _mock_mockClientes__WEBPACK_IMPORTED_MODULE_1__[\"IMovimentacao3Cliente2\"]]\n});\nvar cliente3 = Object(_models_HanddlerClients__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n  cliente: _mock_mockClientes__WEBPACK_IMPORTED_MODULE_1__[\"IClienteCliente3\"],\n  contaCorrente: _mock_mockClientes__WEBPACK_IMPORTED_MODULE_1__[\"IContaCorenteCliente3\"],\n  movimentacao: [_mock_mockClientes__WEBPACK_IMPORTED_MODULE_1__[\"IMovimentacao1Cliente3\"], _mock_mockClientes__WEBPACK_IMPORTED_MODULE_1__[\"IMovimentacao2Cliente3\"], _mock_mockClientes__WEBPACK_IMPORTED_MODULE_1__[\"IMovimentacao3Cliente3\"]]\n});\nvar clientes = [cliente1, cliente2, cliente3];\ndocument.querySelector('#main').textContent = JSON.stringify(clientes, undefined, 2);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/mock/mockClientes.js":
/*!**********************************!*\
  !*** ./src/mock/mockClientes.js ***!
  \**********************************/
/*! exports provided: IMovimentacao1Cliente1, IMovimentacao2Cliente1, IMovimentacao3Cliente1, IContaCorenteCliente1, IClienteCliente1, IMovimentacao1Cliente2, IMovimentacao2Cliente2, IMovimentacao3Cliente2, IContaCorenteCliente2, IClienteCliente2, IMovimentacao1Cliente3, IMovimentacao2Cliente3, IMovimentacao3Cliente3, IContaCorenteCliente3, IClienteCliente3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IMovimentacao1Cliente1\", function() { return IMovimentacao1Cliente1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IMovimentacao2Cliente1\", function() { return IMovimentacao2Cliente1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IMovimentacao3Cliente1\", function() { return IMovimentacao3Cliente1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IContaCorenteCliente1\", function() { return IContaCorenteCliente1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IClienteCliente1\", function() { return IClienteCliente1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IMovimentacao1Cliente2\", function() { return IMovimentacao1Cliente2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IMovimentacao2Cliente2\", function() { return IMovimentacao2Cliente2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IMovimentacao3Cliente2\", function() { return IMovimentacao3Cliente2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IContaCorenteCliente2\", function() { return IContaCorenteCliente2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IClienteCliente2\", function() { return IClienteCliente2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IMovimentacao1Cliente3\", function() { return IMovimentacao1Cliente3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IMovimentacao2Cliente3\", function() { return IMovimentacao2Cliente3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IMovimentacao3Cliente3\", function() { return IMovimentacao3Cliente3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IContaCorenteCliente3\", function() { return IContaCorenteCliente3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IClienteCliente3\", function() { return IClienteCliente3; });\n//Cliente1\nvar IMovimentacao1Cliente1 = {\n  operacao: \"Pizza Express\",\n  custo: 120.22,\n  action: \"remove\"\n};\nvar IMovimentacao2Cliente1 = {\n  operacao: \"O Rei Merlin\",\n  custo: 120.22,\n  action: \"add\"\n};\nvar IMovimentacao3Cliente1 = {\n  operacao: \"Deposito Cliente\",\n  custo: 40.22,\n  action: \"remove\"\n};\nvar IContaCorenteCliente1 = {\n  contaCorrenteId: \"2h3i12uh-0ggh0d9h-93hb9fh\",\n  saldo: 253.22\n};\nvar IClienteCliente1 = {\n  clienteID: \"asd23423-sad3211-ssd546ad\",\n  clienteNome: \"João Faria\",\n  clienteEmail: \"joao@mail.com\",\n  clienteCPF: \"222.222.222-22\",\n  contaPoupanca: 1500.0\n};\nvar IMovimentacao1Cliente2 = {\n  operacao: \"Autoposto SuperGas\",\n  custo: 30.22,\n  action: \"remove\"\n};\nvar IMovimentacao2Cliente2 = {\n  operacao: \"Restaurante BoFood\",\n  custo: 230.22,\n  action: \"remove\"\n};\nvar IMovimentacao3Cliente2 = {\n  operacao: \"Fast soup\",\n  custo: 80.22,\n  action: \"remove\"\n};\nvar IContaCorenteCliente2 = {\n  contaCorrenteId: \"2sadas12-123adhsadh-93hb23ra\",\n  saldo: 2253.22\n};\nvar IClienteCliente2 = {\n  clienteID: \"aasd3f54ndc-09n5058376-29385029v8n\",\n  clienteNome: \"Pedro Faria\",\n  clienteEmail: \"pedro@mail.com\",\n  clienteCPF: \"333.333.333-22\",\n  contaPoupanca: 200.00\n};\nvar IMovimentacao1Cliente3 = {\n  operacao: \"Deposito Luiz da Silva\",\n  custo: 998.44,\n  action: \"add\"\n};\nvar IMovimentacao2Cliente3 = {\n  operacao: \"Deposito Mapple LTDA\",\n  custo: 575.89,\n  action: \"add\"\n};\nvar IMovimentacao3Cliente3 = {\n  operacao: \"Compra BestBuyer\",\n  custo: 1320.22,\n  action: \"remove\"\n};\nvar IContaCorenteCliente3 = {\n  id: \"2saasd12-asdsad2312dh-45sdhb2ra\",\n  saldo: 253.22\n};\nvar IClienteCliente3 = {\n  clienteID: \"bhj3b1pk2-hhad43287-8h9h9g873g94\",\n  clienteNome: \"João Rubens de Souza\",\n  clienteEmail: \"joao@mail.com\",\n  clienteCPF: \"132.321.456-22\",\n  contaPoupanca: 1500.00\n};\n\n//# sourceURL=webpack:///./src/mock/mockClientes.js?");

/***/ }),

/***/ "./src/models/Cliente.js":
/*!*******************************!*\
  !*** ./src/models/Cliente.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Cliente; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Cliente = function Cliente(_ref) {\n  var clienteID = _ref.clienteID,\n      srclienteNomecLink = _ref.srclienteNomecLink,\n      clienteEmail = _ref.clienteEmail,\n      clienteCPF = _ref.clienteCPF,\n      contaPoupanca = _ref.contaPoupanca,\n      contaCorrente = _ref.contaCorrente;\n\n  _classCallCheck(this, Cliente);\n\n  this.clienteID = clienteID;\n  this.srclienteNomecLink = srclienteNomecLink;\n  this.clienteEmail = clienteEmail;\n  this.clienteCPF = clienteCPF;\n  this.contaPoupanca = contaPoupanca;\n  this.contaCorrente = contaCorrente;\n};\n\n\n\n//# sourceURL=webpack:///./src/models/Cliente.js?");

/***/ }),

/***/ "./src/models/ContaCorrente.js":
/*!*************************************!*\
  !*** ./src/models/ContaCorrente.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ContaCorrente; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ContaCorrente = function ContaCorrente(_ref) {\n  var contaCorrenteId = _ref.contaCorrenteId,\n      saldo = _ref.saldo,\n      movimentacoes = _ref.movimentacoes;\n\n  _classCallCheck(this, ContaCorrente);\n\n  this.contaCorrenteId = contaCorrenteId;\n  this.saldo = saldo;\n  this.movimentacoes = movimentacoes;\n};\n\n\n\n//# sourceURL=webpack:///./src/models/ContaCorrente.js?");

/***/ }),

/***/ "./src/models/HanddlerClients.js":
/*!***************************************!*\
  !*** ./src/models/HanddlerClients.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HanddlerClients; });\n/* harmony import */ var _Cliente__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cliente */ \"./src/models/Cliente.js\");\n/* harmony import */ var _ContaCorrente__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContaCorrente */ \"./src/models/ContaCorrente.js\");\n/* harmony import */ var _Movimentacao__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Movimentacao */ \"./src/models/Movimentacao.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n//Create Clientes\n\n\n\nfunction HanddlerClients(_ref) {\n  var cliente = _ref.cliente,\n      contaCorrente = _ref.contaCorrente,\n      movimentacao = _ref.movimentacao;\n  var movs = movimentacao.map(function (mov) {\n    return new _Movimentacao__WEBPACK_IMPORTED_MODULE_2__[\"default\"](mov);\n  });\n  var contaCorrenteData = new _ContaCorrente__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_objectSpread(_objectSpread({}, contaCorrente), {}, {\n    movimentacoes: movs\n  }));\n  return cliente = new _Cliente__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_objectSpread(_objectSpread({}, cliente), {}, {\n    contaCorrente: contaCorrenteData\n  }));\n}\n\n//# sourceURL=webpack:///./src/models/HanddlerClients.js?");

/***/ }),

/***/ "./src/models/Movimentacao.js":
/*!************************************!*\
  !*** ./src/models/Movimentacao.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return movimentacao; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar movimentacao = function movimentacao(_ref) {\n  var operacao = _ref.operacao,\n      custo = _ref.custo,\n      action = _ref.action;\n\n  _classCallCheck(this, movimentacao);\n\n  this.operacao = operacao;\n  this.custo = custo;\n  this.action = action;\n};\n\n\n\n//# sourceURL=webpack:///./src/models/Movimentacao.js?");

/***/ })

/******/ });