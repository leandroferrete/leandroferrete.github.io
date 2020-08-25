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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _models_models_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/models.component */ "./src/app/models/models.component.ts");







var routes = [
    { path: 'resume', component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'models', component: _models_models_component__WEBPACK_IMPORTED_MODULE_6__["ModelsComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header h1 {\r\n    font-size: 30px;\r\n    padding: 0.75em;\r\n}\r\n\r\na img {\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n\r\nfooter ul {\r\n    list-style-type: none;\r\n    text-align: right;\r\n}\r\n\r\nfooter li {\r\n    display: inline;\r\n    margin-right: 1em;\r\n}\r\n\r\nfooter {\r\n    margin-left: 3em;\r\n    margin-right: 3em;\r\n}\r\n\r\n.content {\r\n    margin-bottom: 30em;\r\n}\r\n\r\n.mobile {\r\n    display: none;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    /* For mobile phones: */\r\n\r\n    header .navbar{\r\n        margin-bottom: 2em;\r\n        border-bottom: solid 1px rgba(0,0,0,.1);\r\n        background-color: white !important;\r\n    }\r\n\r\n    header .navbar-light .navbar-toggler{\r\n        border-color: transparent;\r\n    }\r\n\r\n    header .dropdown-menu{\r\n        border-radius: 0;\r\n    }\r\n\r\n    header h1 {\r\n        font-size: 25px;\r\n        margin-left: 0.4em;\r\n    }\r\n\r\n    footer ul {\r\n        margin-right: 2.5em;\r\n    }\r\n\r\n    footer {\r\n        text-align: center;\r\n        margin-right: 3.2em;\r\n    }\r\n\r\n    .content {\r\n        margin-bottom: 17em;\r\n    }\r\n\r\n    .desktop {\r\n        display: none;\r\n    }\r\n\r\n    .mobile {\r\n        display: unset;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 768px) and (orientation: landscape) {\r\n\r\n    header .navbar{\r\n        margin-bottom: 2em;\r\n        border-bottom: solid 1px rgba(0,0,0,.1);\r\n        background-color: white !important;\r\n    }\r\n\r\n    header .navbar-light .navbar-toggler{\r\n        border-color: transparent;\r\n    }\r\n\r\n    header .dropdown-menu{\r\n        border-radius: 0;\r\n    }\r\n\r\n    .content {\r\n        margin-bottom: 15em;\r\n    }\r\n\r\n    .desktop {\r\n        display: none;\r\n    }\r\n\r\n    .mobile {\r\n        display: unset;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHVCQUF1Qjs7SUFFdkI7UUFDSSxrQkFBa0I7UUFDbEIsdUNBQXVDO1FBQ3ZDLGtDQUFrQztJQUN0Qzs7SUFFQTtRQUNJLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7QUFDSjs7QUFFQTs7SUFFSTtRQUNJLGtCQUFrQjtRQUNsQix1Q0FBdUM7UUFDdkMsa0NBQWtDO0lBQ3RDOztJQUVBO1FBQ0kseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHBhZGRpbmc6IDAuNzVlbTtcclxufVxyXG5cclxuYSBpbWcge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbmZvb3RlciB1bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuZm9vdGVyIGxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNlbTtcclxuICAgIG1hcmdpbi1yaWdodDogM2VtO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMGVtO1xyXG59XHJcblxyXG4ubW9iaWxlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC8qIEZvciBtb2JpbGUgcGhvbmVzOiAqL1xyXG5cclxuICAgIGhlYWRlciAubmF2YmFye1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJlbTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgwLDAsMCwuMSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICBoZWFkZXIgLm5hdmJhci1saWdodCAubmF2YmFyLXRvZ2dsZXJ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuXHJcbiAgICBoZWFkZXIgLmRyb3Bkb3duLW1lbnV7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIH1cclxuXHJcbiAgICBoZWFkZXIgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMC40ZW07XHJcbiAgICB9XHJcblxyXG4gICAgZm9vdGVyIHVsIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIuNWVtO1xyXG4gICAgfVxyXG5cclxuICAgIGZvb3RlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMy4yZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE3ZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2t0b3Age1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vYmlsZSB7XHJcbiAgICAgICAgZGlzcGxheTogdW5zZXQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG5cclxuICAgIGhlYWRlciAubmF2YmFye1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJlbTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgwLDAsMCwuMSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICBoZWFkZXIgLm5hdmJhci1saWdodCAubmF2YmFyLXRvZ2dsZXJ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuXHJcbiAgICBoZWFkZXIgLmRyb3Bkb3duLW1lbnV7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVlbTtcclxuICAgIH1cclxuXHJcbiAgICAuZGVza3RvcCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAubW9iaWxlIHtcclxuICAgICAgICBkaXNwbGF5OiB1bnNldDtcclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<header>\n  <h1 class=\"desktop\">Leandro Ferrete - Portfolio</h1>\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\"\n      aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\"\n            aria-haspopup=\"true\" aria-expanded=\"false\">\n            Projects\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n            <a class=\"dropdown-item\" href=\"#\">Professional</a>\n            <a class=\"dropdown-item\" href=\"#\">Personal</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" routerLink=\"/models\">3D Models</a>\n            <a class=\"dropdown-item\" href=\"#\">2D Arts</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/resume\">Resume</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/contact\">Contact</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  <h1 class=\"mobile\">Leandro Ferrete - Portfolio</h1>\n</header>\n\n<div class=\"container content\">\n  <router-outlet></router-outlet>\n</div>\n\n<footer>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <span>© 2020 Leandro Ferrete</span>\n      </div>\n      <div class=\"col-sm-6\">\n        <ul>\n          <li>\n            <a href=\"mailto:leandro.ferrete@hotmail.com\">\n              <img src=\"/assets/social/email.svg\">\n            </a>\n          </li>\n          <!-- <li>\n          <a href=\"https://www.instagram.com/ferreteleandro/?hl=pt-br\">\n            <img src=\"/assets/social/instagram.svg\">            \n          </a>\n        </li>     -->\n          <li>\n            <a href=\"https://www.linkedin.com/in/leandro-ferrete/\">\n              <img src=\"/assets/social/linkedin.svg\">\n            </a>\n          </li>\n          <li>\n            <a href=\"https://www.youtube.com/channel/UCZMXSqjJxETUNerWPMCW1AQ\">\n              <img src=\"/assets/social/youtube.svg\">\n            </a>\n          </li>\n          <li>\n            <a href=\"https://twitter.com/leandroferrete\">\n              <img src=\"/assets/social/twitter.svg\">\n            </a>\n          </li>\n          <!-- <li>\n          <a href=\"https://www.facebook.com/leandro.ferrete\">\n            <img src=\"/assets/social/facebook.svg\">            \n          </a>\n        </li>  -->\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Leandro Ferrete Portfolio';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _models_models_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models/models.component */ "./src/app/models/models.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _resume_resume_component__WEBPACK_IMPORTED_MODULE_5__["ResumeComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _models_models_component__WEBPACK_IMPORTED_MODULE_8__["ModelsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron{\r\n    background-color: white !important;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQ0FBa0M7QUFDdEMiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1 class=\"display-4\">Contact</h1>\n  <hr class=\"my-4\">\n  <p>To professional contact and for more information about my projects.</p>\n  <p><strong>Email: &nbsp;</strong> <a href=\"mailto:leandro.ferrete@hotmail.com\">leandro.ferrete@hotmail.com</a></p>\n</div>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n    background-color: white !important;\r\n}\r\n\r\n.my-image {\r\n    width: 80%;\r\n    border-radius: 50%;\r\n}\r\n\r\n.social a img {\r\n    width: 35px;\r\n    height: 35px;\r\n}\r\n\r\nul {\r\n    margin-top: 1em;\r\n    list-style-type: none;\r\n}\r\n\r\nli {\r\n    display: inline;\r\n    margin-right: 0.5em;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    /* For mobile phones: */\r\n    img {\r\n        margin-bottom: 20px;\r\n    }\r\n\r\n    ul {\r\n        margin-right: 1.5em;\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 768px) and (orientation: landscape) {\r\n    ul {\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFHQTtJQUNJLHVCQUF1QjtJQUN2QjtRQUNJLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLG1CQUFtQjtRQUNuQixrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm15LWltYWdlIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5zb2NpYWwgYSBpbWcge1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxubGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC8qIEZvciBtb2JpbGUgcGhvbmVzOiAqL1xyXG4gICAgaW1nIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHVsIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNWVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICB1bCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1 class=\"display-4\">About</h1>\n  <hr class=\"my-4\">\n  <div class=\"row\">\n    <div class=\"col-lg-3 text-center\">\n      <img class=\"my-image\" src=\"/assets/img/my-photo.jpg\" alt=\"image\">\n    </div>\n    <div class=\"col-lg-9\">\n      <p>I am a programmer working with software development for 5 years and I have been developing games through\n        personal projects for at least 10 years.</p>\n      <p>Creating new experiences through games and making people feel better about my work is my motivation to study\n        and work with it.</p>\n      <p>I have skills in all areas of game development including 3D modeling, animation and 2D art.</p>\n      <p>I am looking for a job opportunity as a professional game developer and will be showing all my work using this\n        web page.</p>\n    </div>\n    <div class=\"col-lg-12 social\">\n      <ul>\n        <li>\n          <a href=\"mailto:leandro.ferrete@hotmail.com\">\n            <img src=\"/assets/social/email.svg\">\n          </a>\n        </li>\n        <!-- <li>\n          <a href=\"https://www.instagram.com/ferreteleandro/?hl=pt-br\">\n            <img src=\"/assets/social/instagram.svg\">            \n          </a>\n        </li>     -->\n        <li>\n          <a href=\"https://www.linkedin.com/in/leandro-ferrete/\">\n            <img src=\"/assets/social/linkedin.svg\">\n          </a>\n        </li>\n        <li>\n          <a href=\"https://www.youtube.com/channel/UCZMXSqjJxETUNerWPMCW1AQ\">\n            <img src=\"/assets/social/youtube.svg\">\n          </a>\n        </li>\n        <li>\n          <a href=\"https://twitter.com/leandroferrete\">\n            <img src=\"/assets/social/twitter.svg\">\n          </a>\n        </li>\n        <!-- <li>\n          <a href=\"https://www.facebook.com/leandro.ferrete\">\n            <img src=\"/assets/social/facebook.svg\">            \n          </a>\n        </li>  -->\n      </ul>\n    </div> \n  </div>\n  <hr class=\"my-4\">\n  <h1 class=\"display-4\">Projects</h1>\n  <div class=\"row catalog\">\n    <div class=\"col-lg-6\">\n      <h2>Games for 2 (2018)</h2>\n      <a>\n        <img src=\"https://drive.google.com/uc?export=view&id=1zFLidqxWaDoQY_0neQTWPUsXbw6YWEuf\">\n      </a>\n    </div>\n    <div class=\"col-lg-6\">\n      <h2>Jumper VR (2017)</h2>\n      <a>\n        <img src=\"https://drive.google.com/uc?export=view&id=1KTjsA2cgGAzYWBXh5FQ4EMR2rFWZHCHw\">\n      </a>\n    </div>\n    <div class=\"col-lg-6\">\n      <h2>Peckboy (2016)</h2>\n      <a>\n        <img src=\"https://drive.google.com/uc?export=view&id=1XUOxXY3ebQ7tNvKrMAxMEkgrOGpwm6IZ\">\n      </a>\n    </div>\n    <div class=\"col-lg-6\">\n      <h2>Colors Attack (2016)</h2>\n      <a>\n        <img src=\"https://drive.google.com/uc?export=view&id=1oYpBt0Ghw-HIhXm2d_wHPr835FUApo6f\">\n      </a>\n    </div>\n    <div class=\"col-lg-6\">\n      <h2>Medieval Run (2015)</h2>\n      <a>\n        <img src=\"https://drive.google.com/uc?export=view&id=1Gug_HgUWDBPERPM1BiV1y5CWKEAUy1A4\">\n      </a>\n    </div>\n    <div class=\"col-lg-6\">\n      <h2>Donkey Kong Country 4 (2012)</h2>\n      <a>\n        <img src=\"https://drive.google.com/uc?export=view&id=1_zb6VMCY6ClxEoZCeF065bfy33Kb3mBB\">\n      </a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/models/models.component.css":
/*!*********************************************!*\
  !*** ./src/app/models/models.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "iframe{\r\n    width: 100%;\r\n    height: 25em;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    /* For mobile phones: */\r\n    iframe{\r\n        height: 15em;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 768px) and (orientation: landscape) {\r\n   \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kZWxzL21vZGVscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkI7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7O0FBRUEiLCJmaWxlIjoic3JjL2FwcC9tb2RlbHMvbW9kZWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpZnJhbWV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjVlbTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLyogRm9yIG1vYmlsZSBwaG9uZXM6ICovXHJcbiAgICBpZnJhbWV7XHJcbiAgICAgICAgaGVpZ2h0OiAxNWVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/models/models.component.html":
/*!**********************************************!*\
  !*** ./src/app/models/models.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1 class=\"display-4\">3D Models</h1>\n  <hr class=\"my-4\">\n  <p>These are some 3D models that I made for study and some personal projects.</p>\n  <div class=\"row catalog\">\n    <div class=\"col-lg-6\">\n      <h2>SNES - Cartridge</h2>\n      <div class=\"sketchfab-embed-wrapper\">\n        <iframe title=\"A 3D model\"\n          src=\"https://sketchfab.com/models/daf9261902714f9f8de52b5ea2bfefc2/embed?autostart=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1\"\n          frameborder=\"0\" allow=\"autoplay; fullscreen; vr\" mozallowfullscreen=\"true\"\n          webkitallowfullscreen=\"true\"></iframe>\n      </div>\n    </div>\n    <div class=\"col-lg-6\">\n      <h2>Donkey Kong Country 2 - Live Balloon</h2>\n      <div class=\"sketchfab-embed-wrapper\">\n        <iframe title=\"A 3D model\"\n          src=\"https://sketchfab.com/models/7b3cdf65ced047e496b672fb7560964b/embed?autostart=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1\"\n          frameborder=\"0\" allow=\"autoplay; fullscreen; vr\" mozallowfullscreen=\"true\"\n          webkitallowfullscreen=\"true\"></iframe>\n      </div>\n    </div>\n    <div class=\"col-lg-6\">\n      <h2>Donkey Kong Country 3 - Bonus Coin</h2>\n      <div class=\"sketchfab-embed-wrapper\">\n        <iframe title=\"A 3D model\"\n          src=\"https://sketchfab.com/models/6a687b67229042a686ef6ddcad2c8607/embed?autostart=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1\"\n          frameborder=\"0\" allow=\"autoplay; fullscreen; vr\" mozallowfullscreen=\"true\"\n          webkitallowfullscreen=\"true\"></iframe>\n      </div>\n    </div>\n    <div class=\"col-lg-6\">\n      <h2>Donkey Kong Country 2 - Crate</h2>\n      <div class=\"sketchfab-embed-wrapper\">\n        <iframe title=\"A 3D model\"\n          src=\"https://sketchfab.com/models/66cb2ab19a1e4320aae97049c19ef521/embed?autostart=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1\"\n          frameborder=\"0\" allow=\"autoplay; fullscreen; vr\" mozallowfullscreen=\"true\"\n          webkitallowfullscreen=\"true\"></iframe>\n      </div>\n    </div>\n    <div class=\"col-lg-6\">\n      <h2>Donkey Kong Country 2 and 3 - Letter K</h2>\n      <div class=\"sketchfab-embed-wrapper\">\n        <iframe title=\"A 3D model\"\n          src=\"https://sketchfab.com/models/34be27cff2b1487fbd509de0efe09420/embed?autostart=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1\"\n          frameborder=\"0\" allow=\"autoplay; fullscreen; vr\" mozallowfullscreen=\"true\"\n          webkitallowfullscreen=\"true\"></iframe>\n      </div>\n    </div>\n    <div class=\"col-lg-6\">\n      <h2>Donkey Kong Country 2 and 3 - Letter O</h2>\n      <div class=\"sketchfab-embed-wrapper\">\n        <iframe title=\"A 3D model\"\n          src=\"https://sketchfab.com/models/ef736d44b1384d6d85a80420cc4a4839/embed?autostart=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1\"\n          frameborder=\"0\" allow=\"autoplay; fullscreen; vr\" mozallowfullscreen=\"true\"\n          webkitallowfullscreen=\"true\"></iframe>\n      </div>\n    </div>\n    <div class=\"col-lg-6\">\n      <h2>Donkey Kong Country 2 and 3 - Letter N</h2>\n      <div class=\"sketchfab-embed-wrapper\">\n        <iframe title=\"A 3D model\"\n          src=\"https://sketchfab.com/models/0a70826200204ef781175e949a944a6d/embed?autostart=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1\"\n          frameborder=\"0\" allow=\"autoplay; fullscreen; vr\" mozallowfullscreen=\"true\"\n          webkitallowfullscreen=\"true\"></iframe>\n      </div>\n    </div>\n    <div class=\"col-lg-6\">\n      <h2>Donkey Kong Country 2 and 3 - Letter G</h2>\n      <div class=\"sketchfab-embed-wrapper\">\n        <iframe title=\"A 3D model\" width=\"640\" height=\"480\"\n          src=\"https://sketchfab.com/models/551717f58aab45caa0d8618c4c5927e0/embed?autostart=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1\"\n          frameborder=\"0\" allow=\"autoplay; fullscreen; vr\" mozallowfullscreen=\"true\"\n          webkitallowfullscreen=\"true\"></iframe>\n      </div>\n    </div>\n    <div class=\"col-lg-6\">\n      <h2>Donkey Kong Country 2 - Rambi Box</h2>\n      <div class=\"sketchfab-embed-wrapper\">\n        <iframe title=\"A 3D model\" width=\"640\" height=\"480\"\n          src=\"https://sketchfab.com/models/6c4d3dc0d48c41d1ad852197390ad083/embed?autostart=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1\"\n          frameborder=\"0\" allow=\"autoplay; fullscreen; vr\" mozallowfullscreen=\"true\"\n          webkitallowfullscreen=\"true\"></iframe>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/models/models.component.ts":
/*!********************************************!*\
  !*** ./src/app/models/models.component.ts ***!
  \********************************************/
/*! exports provided: ModelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelsComponent", function() { return ModelsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModelsComponent = /** @class */ (function () {
    function ModelsComponent() {
    }
    ModelsComponent.prototype.ngOnInit = function () {
    };
    ModelsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-models',
            template: __webpack_require__(/*! ./models.component.html */ "./src/app/models/models.component.html"),
            styles: [__webpack_require__(/*! ./models.component.css */ "./src/app/models/models.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModelsComponent);
    return ModelsComponent;
}());



/***/ }),

/***/ "./src/app/resume/resume.component.css":
/*!*********************************************!*\
  !*** ./src/app/resume/resume.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron{\r\n    background-color: white !important;\r\n}\r\n\r\nimg{\r\n    width: 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmp1bWJvdHJvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIHdpZHRoOiA1MCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/resume/resume.component.html":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1 class=\"display-4\">Resume</h1>\n  <hr class=\"my-4\">\n  <p>For detailed information about my knowledge you can download my resume by clicking on the flags below.</p>\n  <div class=\"row text-center\">\n    <div class=\"col-md-6\">\n      <a><img src=\"/assets/flags/usa.svg\"></a>\n    </div>\n    <div class=\"col-md-6\">\n      <a href=\"/assets/resume/PTBR Leandro Ferrete CV.pdf\"><img src=\"/assets/flags/brazil.svg\"></a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.css */ "./src/app/resume/resume.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\leandro-portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map