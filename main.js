(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* html{ height:100%; }\nbody{ min-height:100%; padding:0; margin:0; position:relative; }\n\nbody::after{ content:''; display:block; height:100px; } */\n* {\n    box-sizing: border-box;\n}\nbody {\n    margin: 0;\n}\nnav {\n    box-shadow: 0 0 15px rgba(0, 0, 0, 0.10);\n}\nnav ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    position: relative;\n    text-align: left;\n}\nnav li {\n    display: inline-block;\n}\nnav a {\n    color: #444444;\n    text-decoration: none;\n    display: block;\n    padding: 0.75em 0.75em;\n}\nnav li:hover {\n    background: #444444;\n}\nnav a:hover {\n    color: #ffffff;\n}\n\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu-simple></app-menu-simple>\n<!-- <app-mega-menu></app-mega-menu> -->\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Marketing y Posicionamiento Web El Salvador | Vertikal';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_menu_simple_simple_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/menu/simple/simple.component */ "./src/app/components/menu/simple/simple.component.ts");
/* harmony import */ var _components_menu_mega_mega_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/menu/mega/mega.component */ "./src/app/components/menu/mega/mega.component.ts");
/* harmony import */ var _components_menu_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menu/footer/footer.component */ "./src/app/components/menu/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_menu_mega_mega_component__WEBPACK_IMPORTED_MODULE_4__["MegaMenuComponent"],
                _components_menu_simple_simple_component__WEBPACK_IMPORTED_MODULE_3__["MenuSimpleComponent"],
                _components_menu_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/menu/footer/footer.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/menu/footer/footer.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footer {\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n}\n"

/***/ }),

/***/ "./src/app/components/menu/footer/footer.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/menu/footer/footer.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\" class=\"bg-grey-darkest p-8\">\n  <div class=\"mx-auto container overflow-hidden content-center sm:flex mb-4 mx-4\">\n    <div class=\"sm:w-1/4 h-auto\">\n      <div class=\"text-orange mb-2\">Orange</div>\n      <ul class=\"list-reset leading-normal\">\n        <li class=\"hover:text-orange text-grey-lightest\">One</li>\n        <li class=\"hover:text-orange text-grey-lightest\">Two</li>\n        <li class=\"hover:text-orange text-grey-lightest\">Three</li>\n        <li class=\"hover:text-orange text-grey-lightest\">Four</li>\n        <li class=\"hover:text-orange text-grey-lightest\">Five</li>\n        <li class=\"hover:text-orange text-grey-lightest\">Six</li>\n        <li class=\"hover:text-orange text-grey-lightest\">Seven</li>\n        <li class=\"hover:text-orange text-grey-lightest\">Eight</li>\n      </ul>\n    </div>\n    <div class=\"sm:w-1/4 h-auto sm:mt-0 mt-8\">\n      <div class=\"text-blue mb-2\">Blue</div>\n      <ul class=\"list-reset leading-normal\">\n        <li class=\"hover:text-blue text-grey-lightest\">One</li>\n        <li class=\"hover:text-blue text-grey-lightest\">Two</li>\n        <li class=\"hover:text-blue text-grey-lightest\">Three</li>\n      </ul>\n\n      <div class=\"text-blue-light mb-2 mt-4\">Blue-light</div>\n      <ul class=\"list-reset leading-normal\">\n        <li class=\"hover:text-blue-light text-grey-lightest\">One</li>\n        <li class=\"hover:text-blue-light text-grey-lightest\">Two</li>\n        <li class=\"hover:text-blue-light text-grey-lightest\">Three</li>\n      </ul>\n\n    </div>\n    <div class=\"sm:w-1/4 h-auto sm:mt-0 mt-8\">\n      <div class=\"text-green mb-2\">Green</div>\n      <ul class=\"list-reset leading-normal\">\n        <li class=\"hover:text-green text-grey-lightest\">One</li>\n        <li class=\"hover:text-green text-grey-lightest\">Two</li>\n        <li class=\"hover:text-green text-grey-lightest\">Three</li>\n      </ul>\n\n      <div class=\"text-green-light mb-2 mt-4\">Green-light</div>\n      <ul class=\"list-reset leading-normal\">\n        <li class=\"hover:text-green-light text-grey-lightest\">One</li>\n        <li class=\"hover:text-green-light text-grey-lightest\">Two</li>\n        <li class=\"hover:text-green-light text-grey-lightest\">Three</li>\n      </ul>\n\n\n    </div>\n    <div class=\"sm:w-1/2 sm:mt-0 mt-8 h-auto\">\n      <div class=\"text-red-light mb-2\">Newsletter</div>\n      <p class=\"text-grey-lightest leading-normal\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,\n        consectetur. </p>\n      <div class=\"mt-4 flex\">\n        <input type=\"text\" class=\"p-2 border border-grey-light round text-grey-lightest text-sm h-auto\"\n          placeholder=\"Your email address\">\n        <button class=\"bg-orange text-white rounded-sm h-auto text-xs p-3\">Subscribe</button>\n      </div>\n    </div>\n\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/components/menu/footer/footer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/menu/footer/footer.component.ts ***!
  \************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/menu/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/menu/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/mega/mega.component.css":
/*!*********************************************************!*\
  !*** ./src/app/components/menu/mega/mega.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Navbar container */\n/* .navbar {\n  overflow: hidden;\n  background-color: #333;\n  font-family: Arial;\n} */\n/* Links inside the navbar */\n/* .navbar a {\n  float: left;\n  font-size: 16px;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n} */\n/* The dropdown container */\n.dropdown {\n  float: left;\n  overflow: hidden;\n}\n/* Dropdown button */\n.dropdown .dropbtn {\n  /* font-size: 16px;  */\n  border: none;\n  outline: none;\n  /* color: white; */\n  /* padding: 14px 16px; */\n  /* background-color: inherit; */\n  /* font: inherit; Important for vertical align on mobile phones */\n  margin: 0; /* Important for vertical align on mobile phones */\n}\n/* Add a red background color to navbar links on hover */\n/* Dropdown content (hidden by default) */\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  width: 100%;\n  left: 0;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n}\n/* Mega Menu header, if needed */\n.dropdown-content .header {\n  background: #ef4923;\n  padding: 16px;\n  color: white;\n}\n/* Show the dropdown menu on hover */\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n/* Create three equal columns that floats next to each other */\n/* .column {\n  float: left;\n  width: 33.33%;\n  padding: 10px;\n  background-color: #ccc;\n  height: 250px;\n} */\n/* Style links inside the columns */\n/* .column a {\n  float: none;\n  color: black;\n  padding: 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n} */\n/* Add a background color on hover */\n.column a:hover {\n  background-color: #ddd;\n}\n/* Clear floats after the columns */\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\nimg {\n  max-width: 30%;\n}"

/***/ }),

/***/ "./src/app/components/menu/mega/mega.component.html":
/*!**********************************************************!*\
  !*** ./src/app/components/menu/mega/mega.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<!--  -->\n<header class=\"bg-red shadow-xl content-center overflow-hidden\">\n  <div class=\"overflow-hidden\">\n    <div class=\"mx-auto container content-center\">\n      <ul class=\"justify-center overflow-hidden text-white\">\n        <li class=\"float-right py-3 px-6 hover:bg-white hover:text-red\">\n          <a href=\"\" class=\"\">NOSOTROS</a><svg xmlns=\"http://www.w3.org/2000/svg\" class=\"fill-current inline-block h-4 w-4\" viewBox=\"0 0 20 20\"><path d=\"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\"/></svg>\n        </li>\n        <li class=\"float-right py-3 px-6 hover:bg-white hover:text-red\">\n          <a href=\"\" class=\"\">SOPORTE</a><svg xmlns=\"http://www.w3.org/2000/svg\" class=\"fill-current inline-block h-4 w-4\" viewBox=\"0 0 20 20\"><path d=\"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\"/></svg>\n        </li>\n        <li class=\"float-right py-3 px-6 hover:bg-white hover:text-red\">\n          <a href=\"\" class=\"\">MARKETING</a><svg xmlns=\"http://www.w3.org/2000/svg\" class=\"fill-current inline-block h-4 w-4\" viewBox=\"0 0 20 20\"><path d=\"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\"/></svg>\n        </li>\n        <li class=\"float-right py-3 px-6 hover:bg-white hover:text-red\">\n          <a href=\"\" class=\"\">SOFTWARE</a><svg xmlns=\"http://www.w3.org/2000/svg\" class=\"fill-current inline-block h-4 w-4\" viewBox=\"0 0 20 20\"><path d=\"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\"/></svg>\n        </li>\n        <li class=\"float-right py-3 px-6 hover:bg-white hover:text-red\">\n          <a href=\"\" class=\"\">WEB</a><svg xmlns=\"http://www.w3.org/2000/svg\" class=\"fill-current inline-block h-4 w-4\" viewBox=\"0 0 20 20\"><path d=\"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\"/></svg>\n        </li>\n      </ul>\n    </div>    \n  </div>\n</header>\n\n<!-- \n<div class=\"align-middle overflow-hidden\">\n  <a href=\"https://www.vertikal.com.sv/\" class=\"float-left\">\n    <img src=\"../../../assets/images/logo-vertikal.png\" alt=\"Vertikal | Publicidad Y Marketing Digital El Salvador\" id=\"logo\">\n  </a>\n  <div class=\"float-right text-gray-700 hover:text-black\">\n    <div class=\"dropdown mx-4\">\n      <button class=\"dropbtn py-2 px-4 hover:bg-red rounded-full\">Web \n        <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"fill-current inline-block h-4 w-4\" viewBox=\"0 0 20 20\"><path d=\"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\"/></svg>\n      </button>\n      <div class=\"my-3 dropdown-content\">\n        <div class=\"flex mb-4\">\n          <div class=\"w-1/4 px-4 h-12\">\n            <h2>Sitio Web</h2>\n            <p>\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n            </p>\n          </div>\n          <div class=\"w-1/4 px-4 h-12\">\n            <h2>E-Commerce</h2>\n            <p>\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n            </p>\n          </div>\n          <div class=\"w-1/4 px-4 h-12\">\n            <h2>Landing Pages</h2>\n            <p>\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n            </p>\n          </div>\n          <div class=\"w-1/4 px-4 h-12\">\n            <h2>PWA</h2>\n            <p>\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n            </p>\n          </div>\n        </div>\n      </div>\n    </div> \n    <!--  -- >\n    <div class=\"dropdown mx-4\">\n      <button class=\"dropbtn py-2 px-4 hover:bg-red rounded-full\">Software \n        <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"fill-current inline-block h-4 w-4\" viewBox=\"0 0 20 20\"><path d=\"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\"/></svg>\n      </button>\n      <div class=\"my-3 dropdown-content\">\n        <div class=\"header\">\n          <h2>Mega Menu</h2>\n        </div> \n        <div class=\"flex mb-4\">\n          <div class=\"w-1/4 px-4 h-12\">\n            <h2>Category 1</h2>\n            <a href=\"#\">Link 1</a>\n            <a href=\"#\">Link 2</a>\n            <a href=\"#\">Link 3</a>\n          </div>\n          <div class=\"w-1/4 px-4 h-12\">\n            <h2>Category 2</h2>\n            <a href=\"#\">Link 1</a>\n            <a href=\"#\">Link 2</a>\n            <a href=\"#\">Link 3</a>\n          </div>\n          <div class=\"w-1/4 px-4 h-12\">\n            <h2>Category 3</h2>\n            <a href=\"#\">Link 1</a>\n            <a href=\"#\">Link 2</a>\n            <a href=\"#\">Link 3</a>\n          </div>\n        </div>\n      </div>\n    </div> \n    <!--  -- >\n    <div class=\"dropdown mx-4\">\n      <button class=\"dropbtn py-2 px-4 hover:bg-red rounded-full\">Marketing \n        <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"fill-current inline-block h-4 w-4\" viewBox=\"0 0 20 20\"><path d=\"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\"/></svg>\n      </button>\n      <div class=\"my-3 dropdown-content\">\n        <div class=\"header\">\n          <h2>Mega Menu</h2>\n        </div> \n        <div class=\"flex mb-4\">\n          <div class=\"w-1/4 px-4 h-12\">\n            <h2>Category 1</h2>\n            <a href=\"#\">Link 1</a>\n            <a href=\"#\">Link 2</a>\n            <a href=\"#\">Link 3</a>\n          </div>\n          <div class=\"w-1/4 px-4 h-12\">\n            <h2>Category 2</h2>\n            <a href=\"#\">Link 1</a>\n            <a href=\"#\">Link 2</a>\n            <a href=\"#\">Link 3</a>\n          </div>\n          <div class=\"w-1/4 px-4 h-12\">\n            <h2>Category 3</h2>\n            <a href=\"#\">Link 1</a>\n            <a href=\"#\">Link 2</a>\n            <a href=\"#\">Link 3</a>\n          </div>\n        </div>\n      </div>\n    </div> \n    <!--  -- >\n    <div class=\"dropdown mx-4\">\n      <button class=\"dropbtn py-2 px-4 hover:bg-red rounded-full\">Soporte \n        <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"fill-current inline-block h-4 w-4\" viewBox=\"0 0 20 20\"><path d=\"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\"/></svg>\n      </button>\n      <div class=\"my-3 dropdown-content\">\n        <div class=\"header\">\n          <h2>Mega Menu</h2>\n        </div> \n        <div class=\"flex mb-4\">\n          <div class=\"w-1/4 px-4 h-12\">\n            <h2>Category 1</h2>\n            <a href=\"#\">Link 1</a>\n            <a href=\"#\">Link 2</a>\n            <a href=\"#\">Link 3</a>\n          </div>\n          <div class=\"w-1/4 px-4 h-12\">\n            <h2>Category 2</h2>\n            <a href=\"#\">Link 1</a>\n            <a href=\"#\">Link 2</a>\n            <a href=\"#\">Link 3</a>\n          </div>\n          <div class=\"w-1/4 px-4 h-12\">\n            <h2>Category 3</h2>\n            <a href=\"#\">Link 1</a>\n            <a href=\"#\">Link 2</a>\n            <a href=\"#\">Link 3</a>\n          </div>\n        </div>\n      </div>\n    </div> \n    <!--  -- >\n    <div class=\"dropdown mx-4\">\n      <button class=\"dropbtn py-2 px-4 hover:bg-red rounded-full\">Nosotros \n        <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"fill-current inline-block h-4 w-4\" viewBox=\"0 0 20 20\"><path d=\"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\"/></svg>\n      </button>\n      <div class=\"my-3 dropdown-content\">\n        <div class=\"header\">\n          <h2>Mega Menu</h2>\n        </div> \n        <div class=\"flex mb-4\">\n          <div class=\"w-1/4 px-4 h-12\">\n            <h2>Category 1</h2>\n            <a href=\"#\">Link 1</a>\n            <a href=\"#\">Link 2</a>\n            <a href=\"#\">Link 3</a>\n          </div>\n          <div class=\"w-1/4 px-4 h-12\">\n            <h2>Category 2</h2>\n            <a href=\"#\">Link 1</a>\n            <a href=\"#\">Link 2</a>\n            <a href=\"#\">Link 3</a>\n          </div>\n          <div class=\"w-1/4 px-4 h-12\">\n            <h2>Category 3</h2>\n            <a href=\"#\">Link 1</a>\n            <a href=\"#\">Link 2</a>\n            <a href=\"#\">Link 3</a>\n          </div>\n        </div>\n      </div>\n    </div> \n    <!--  -- >\n  </div>\n</div>\n -->\n"

/***/ }),

/***/ "./src/app/components/menu/mega/mega.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/menu/mega/mega.component.ts ***!
  \********************************************************/
/*! exports provided: MegaMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MegaMenuComponent", function() { return MegaMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MegaMenuComponent = /** @class */ (function () {
    function MegaMenuComponent() {
    }
    MegaMenuComponent.prototype.ngOnInit = function () {
    };
    MegaMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mega-menu',
            template: __webpack_require__(/*! ./mega.component.html */ "./src/app/components/menu/mega/mega.component.html"),
            styles: [__webpack_require__(/*! ./mega.component.css */ "./src/app/components/menu/mega/mega.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MegaMenuComponent);
    return MegaMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/simple/simple.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/menu/simple/simple.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  width: 70%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.centered-logo {\n  display: inline-block;\n}\n\n.li-logo {\n  width: 25%;\n}\n\nnav li:hover .menu-sub {\n  display: block;\n}\n\n.menu-sub {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  display: none;\n  color: #fff;\n  padding: 2em;\n}\n\n.menu-sub li {\n  display: block;\n}\n\n.menu-sub a {\n  padding: 0;\n  margin-bottom: .35em;\n}\n\n.menu-sub a:hover {\n  text-decoration: underline;\n}\n\n#sub-menu-content:hover {\n  display: block;\n}\n"

/***/ }),

/***/ "./src/app/components/menu/simple/simple.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/menu/simple/simple.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"bg-white shadow-md\">\n\n  <div class=\"container mx-auto\">\n\n    <ul class=\"content-center overflow-hidden text-blue\">\n      <li class=\"float-left py-6 px-3 hover:bg-green hover:text-white\">\n        <button href=\"\" class=\"\">WEB</button>\n        <div class=\"menu-sub shadow-lg bg-green-dark my-6\">\n          <div class=\"container overflow-hidden flex mx-auto mb-4 px-3\">\n            <div class=\"w-1/4 px-4\">\n              <a href=\"\" class=\"no-underline text-xl\">\n                Sitios Web\n              </a>\n              <p class=\"text-sm px-4\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                ex ea commodo consequat\n              </p>\n            </div>\n            <div class=\"w-1/4 px-4\">\n              <a href=\"\" class=\"no-underline text-xl\">\n                e-Commerce\n              </a>\n              <p class=\"text-sm px-4\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                ex ea commodo consequat\n              </p>\n            </div>\n            <div class=\"w-1/4 px-4\">\n              <a href=\"\" class=\"no-underline text-xl\">\n                Landing Page\n              </a>\n              <p class=\"text-sm px-4\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                ex ea commodo consequat\n              </p>\n            </div>\n            <div class=\"w-1/4 px-4\">\n              <a href=\"\" class=\"no-underline text-xl\">\n                PWA\n              </a>\n              <p class=\"text-sm px-4\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                ex ea commodo consequat\n              </p>\n            </div>\n          </div>\n        </div>\n      </li>\n      <li class=\"float-left py-6 px-3 hover:bg-green hover:text-white\">\n        <button href=\"\" class=\"\">SOFTWARE</button>\n        <div class=\"menu-sub shadow-lg bg-green-dark my-6\">\n          <div class=\"container overflow-hidden flex mx-auto mb-4 px-3\">\n            <div class=\"w-1/4 px-4\">\n              <a href=\"\" class=\"no-underline text-xl\">\n                ERP&rsquo;s\n              </a>\n              <p class=\"text-sm px-4\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                ex ea commodo consequat\n              </p>\n            </div>\n            <div class=\"w-1/4 px-4\">\n              <a href=\"\" class=\"no-underline text-xl\">\n                CRM&rsquo;s\n              </a>\n              <p class=\"text-sm px-4\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                ex ea commodo consequat\n              </p>\n            </div>\n            <div class=\"w-1/4 px-4\">\n              <a href=\"\" class=\"no-underline text-xl\">\n                Aplicaciones M&oa cute;viles\n              </a>\n              <p class=\"text-sm px-4\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                ex ea commodo consequat\n              </p>\n            </div>\n            <div class=\"w-1/4 px-4\">\n              <a href=\"\" class=\"no-underline text-xl\">\n                Aplicaciones Web\n              </a>\n              <p class=\"text-sm px-4\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                ex ea commodo consequat\n              </p>\n            </div>\n          </div>\n        </div>\n      </li>\n      <li class=\"float-left py-6 px-3 hover:bg-green hover:text-white\">\n        <button href=\"\" class=\"\">MARKETING</button>\n        <div class=\"menu-sub shadow-lg bg-green-dark my-6\">\n          <div class=\"container overflow-hidden flex mx-auto mb-4 px-3\">\n            <div class=\"w-1/4 px-4\">\n              <a href=\"\" class=\"no-underline text-xl\">\n                Redes Sociales\n              </a>\n              <p class=\"text-sm px-4\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                ex ea commodo consequat\n              </p>\n            </div>\n            <div class=\"w-1/4 px-4\">\n              <a href=\"\" class=\"no-underline text-xl\">\n                SEO\n              </a>\n              <p class=\"text-sm px-4\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                ex ea commodo consequat\n              </p>\n            </div>\n            <div class=\"w-1/4 px-4\">\n              <a href=\"\" class=\"no-underline text-xl\">\n                Video Marketing\n              </a>\n              <p class=\"text-sm px-4\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                ex ea commodo consequat\n              </p>\n            </div>\n            <div class=\"w-1/4 px-4\">\n              <a href=\"\" class=\"no-underline text-xl\">\n                Email Marketing\n              </a>\n              <p class=\"text-sm px-4\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                ex ea commodo consequat\n              </p>\n            </div>\n          </div>\n          <div class=\"container overflow-hidden flex mx-auto mb-4 px-3\">\n            <div class=\"w-1/4 px-4\">\n              <a href=\"\" class=\"no-underline text-xl\">\n                Branding\n              </a>\n              <p class=\"text-sm px-4\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                ex ea commodo consequat\n              </p>\n            </div>\n            <div class=\"w-1/4 px-4\">\n              <a href=\"\" class=\"no-underline text-xl\">\n                Dise&ntilde;o Gr&aacute;fico\n              </a>\n              <p class=\"text-sm px-4\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                ex ea commodo consequat\n              </p>\n            </div>\n            <div class=\"w-1/4 px-4\">\n              <a href=\"\" class=\"no-underline text-xl\">\n                Correo\n              </a>\n              <ul class=\"text-sm px-4\">\n                <li>Personal</li>\n                <li>Corporativo</li>\n              </ul>\n            </div>\n            <div class=\"w-1/4 px-4\">\n              <a href=\"\" class=\"no-underline text-xl\">\n                Produccion\n              </a>\n              <ul class=\"text-sm px-4\">\n                <li>EFoto</li>\n                <li>Multimedia</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </li>\n      <li class=\"float-left py-6 px-3 hover:bg-green hover:text-white\">\n        <button href=\"\" class=\"\">SOPORTE</button>\n        <div class=\"menu-sub shadow-lg bg-green-dark my-6\">\n          <div class=\"container overflow-hidden flex mx-auto mb-4 px-3\">\n            <div class=\"w-1/5 px-4\">\n              <a href=\"\" class=\"no-underline text-xl\">\n                Cont&aacute;ctanos\n              </a>\n              <p class=\"text-sm px-4\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                ex ea commodo consequat\n              </p>\n            </div>\n            <div class=\"w-1/5 px-4\">\n              <a href=\"\" class=\"no-underline text-xl\">\n                Google\n              </a>\n              <ul class=\"text-sm px-4\">\n                <li>Partner</li>\n                <li>Maps</li>\n                <li>Business</li>\n                <li>ADS</li>\n                <li>Analytics</li>\n              </ul>\n            </div>\n            <div class=\"w-1/5 px-4\">\n              <a href=\"\" class=\"no-underline text-xl\">\n                Soporte Web\n              </a>\n              <p class=\"text-sm px-4\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                ex ea commodo consequat\n              </p>\n            </div>\n            <div class=\"w-1/5 px-4\">\n              <a href=\"\" class=\"no-underline text-xl\">\n                Pasarela de Pago\n              </a>\n              <p class=\"text-sm px-4\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                ex ea commodo consequat\n              </p>\n            </div>\n            <div class=\"w-1/5 px-4\">\n              <a href=\"\" class=\"no-underline text-xl\">\n                Portal Vertikal\n              </a>\n              <p class=\"text-sm px-4\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                ex ea commodo consequat\n              </p>\n            </div>\n          </div>\n        </div>\n      </li>\n      <li class=\"float-left py-6 px-3 hover:bg-green hover:text-white\">\n        <button href=\"\" class=\"\">NOSOTROS</button>\n  \n        <div class=\"menu-sub shadow-lg bg-green-dark my-6\">\n            <div class=\"container overflow-hidden flex mx-auto mb-4 px-3\">\n              <div class=\"w-1/5 px-4\">\n                <a href=\"\" class=\"no-underline text-xl\">\n                  Vertikal &reg;\n                </a>\n                <p class=\"text-sm px-4\">\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                  ex ea commodo consequat\n                </p>\n              </div>\n              <div class=\"w-1/5 px-4\">\n                <a href=\"\" class=\"no-underline text-xl\">\n                  Nuestro Equipo\n                </a>\n                <p class=\"text-sm px-4\">\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                    ex ea commodo consequat\n                  </p>\n              </div>\n              <div class=\"w-1/5 px-4\">\n                <a href=\"\" class=\"no-underline text-xl\">\n                  Nuestro Compromiso\n                </a>\n                <p class=\"text-sm px-4\">\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                  ex ea commodo consequat\n                </p>\n              </div>\n              <div class=\"w-1/5 px-4\">\n                <a href=\"\" class=\"no-underline text-xl\">\n                  Nuestro Trabajo\n                </a>\n                <p class=\"text-sm px-4\">\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                  ex ea commodo consequat\n                </p>\n              </div>\n              <div class=\"w-1/5 px-4\">\n                <a href=\"\" class=\"no-underline text-xl\">\n                  Trabaja con Nosotros\n                </a>\n                <p class=\"text-sm px-4\">\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                  ex ea commodo consequat\n                </p>\n              </div>\n            </div>\n          </div>\n      </li>\n      <li class=\"py-2 float-left li-logo\">\n        <a href=\"https://www.vertikal.com.sv/\" class=\"py-2\">\n          <img src=\"../../../assets/images/logo-vertikal.png\"\n            alt=\"Vertikal | Publicidad Y Marketing Digital El Salvador\" id=\"logo\">\n        </a>\n      </li>\n      <li>\n        <button class=\"float-right py-5\">\n          <a href=\"\" class=\"my-auto align-middle py-4 px-4 rounded hover:bg-red hover:text-white\">\n            ES\n            <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"fill-current inline-block h-4 w-4\" viewBox=\"0 0 20 20\">\n              <path d=\"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\" /></svg>\n          </a>\n        </button>\n      </li>\n      <li>\n        <button class=\"float-right py-5\">\n          <a href=\"\" class=\"my-auto align-middle py-4 px-4 rounded hover:bg-red hover:text-white\">\n            Log In\n          </a>\n        </button>\n      </li>\n      <li>\n        <button class=\"float-right py-5\">\n          <a href=\"\" class=\"my-auto align-middle py-4 px-4 rounded hover:bg-red hover:text-white\">\n            Blog\n          </a>\n        </button>\n      </li>\n      <li>\n        <button class=\"float-right py-5\">\n          <a href=\"\" class=\"my-auto align-middle py-4 px-4 rounded hover:bg-red hover:text-white\">\n            Shop\n          </a>\n        </button>\n      </li>\n      <li>\n        <button class=\"float-right py-5\">\n          <a href=\"\" class=\"my-auto align-middle py-4 px-4 rounded hover:bg-red hover:text-white\">\n            Cotizar\n          </a>\n        </button>\n      </li>\n    </ul>\n\n\n\n\n\n    <!-- <div class=\"align-middle overflow-hidden\">\n        <div class=\"my-2 align-middle float-right text-blue\">\n          \n        </div>\n      </div> -->\n  </div>\n\n</nav>"

/***/ }),

/***/ "./src/app/components/menu/simple/simple.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/menu/simple/simple.component.ts ***!
  \************************************************************/
/*! exports provided: MenuSimpleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuSimpleComponent", function() { return MenuSimpleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuSimpleComponent = /** @class */ (function () {
    function MenuSimpleComponent() {
    }
    MenuSimpleComponent.prototype.ngOnInit = function () {
    };
    MenuSimpleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-simple',
            template: __webpack_require__(/*! ./simple.component.html */ "./src/app/components/menu/simple/simple.component.html"),
            styles: [__webpack_require__(/*! ./simple.component.css */ "./src/app/components/menu/simple/simple.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuSimpleComponent);
    return MenuSimpleComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vertikalmarketing/Documents/Vertikal Coding Projects/Burbz/Burbz Fase 2/vertikal-ng-webapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map