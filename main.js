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
/* harmony import */ var _arts_arts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./arts/arts.component */ "./src/app/arts/arts.component.ts");
/* harmony import */ var _study_study_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./study/study.component */ "./src/app/study/study.component.ts");
/* harmony import */ var _peckboy_peckboy_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./peckboy/peckboy.component */ "./src/app/peckboy/peckboy.component.ts");
/* harmony import */ var _colorsattack_colorsattack_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./colorsattack/colorsattack.component */ "./src/app/colorsattack/colorsattack.component.ts");
/* harmony import */ var _personal_personal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./personal/personal.component */ "./src/app/personal/personal.component.ts");
/* harmony import */ var _donkeykongfour_donkeykongfour_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./donkeykongfour/donkeykongfour.component */ "./src/app/donkeykongfour/donkeykongfour.component.ts");













var routes = [
    { path: 'resume', component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'models', component: _models_models_component__WEBPACK_IMPORTED_MODULE_6__["ModelsComponent"] },
    { path: 'arts', component: _arts_arts_component__WEBPACK_IMPORTED_MODULE_7__["ArtsComponent"] },
    { path: 'study', component: _study_study_component__WEBPACK_IMPORTED_MODULE_8__["StudyComponent"] },
    { path: 'peckboy', component: _peckboy_peckboy_component__WEBPACK_IMPORTED_MODULE_9__["PeckboyComponent"] },
    { path: 'colorsattack', component: _colorsattack_colorsattack_component__WEBPACK_IMPORTED_MODULE_10__["ColorsattackComponent"] },
    { path: 'personal', component: _personal_personal_component__WEBPACK_IMPORTED_MODULE_11__["PersonalComponent"] },
    { path: 'donkeykongfour', component: _donkeykongfour_donkeykongfour_component__WEBPACK_IMPORTED_MODULE_12__["DonkeykongfourComponent"] },
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

module.exports = "header h1 {\r\n    font-size: 30px;\r\n    padding: 0.75em;   \r\n    font-weight: 900;\r\n    text-transform: uppercase;\r\n    letter-spacing: .06em;\r\n}\r\n\r\na img {\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n\r\nfooter ul {\r\n    list-style-type: none;\r\n    text-align: right;\r\n}\r\n\r\nfooter li {\r\n    display: inline;\r\n    margin-right: 1em;\r\n}\r\n\r\nfooter {\r\n    margin-left: 3em;\r\n    margin-right: 3em;\r\n}\r\n\r\n.content {\r\n    margin-bottom: 20em;\r\n}\r\n\r\n.mobile {\r\n    display: none;\r\n}\r\n\r\nheader .navbar{   \r\n    letter-spacing: .06em;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    /* For mobile phones: */\r\n\r\n    header .navbar{\r\n        margin-bottom: 2em;\r\n        border-bottom: solid 1px rgba(0,0,0,.1);\r\n        background-color: white !important;\r\n    }\r\n\r\n    header .navbar-light .navbar-toggler{\r\n        border-color: transparent;\r\n    }\r\n\r\n    header .dropdown-menu{\r\n        border-radius: 0;\r\n    }\r\n\r\n    header h1 {\r\n        font-size: 25px;\r\n        margin-left: 0.4em;        \r\n    }\r\n\r\n    footer ul {\r\n        margin-right: 2.5em;\r\n    }\r\n\r\n    footer {\r\n        text-align: center;\r\n        margin-right: 3.2em;\r\n    }\r\n\r\n    .content {\r\n        margin-bottom: 17em;\r\n    }\r\n\r\n    .desktop {\r\n        display: none;\r\n    }\r\n\r\n    .mobile {\r\n        display: unset;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 768px) and (orientation: landscape) {\r\n\r\n    header .navbar{\r\n        margin-bottom: 2em;\r\n        border-bottom: solid 1px rgba(0,0,0,.1);\r\n        background-color: white !important;\r\n    }\r\n\r\n    header .navbar-light .navbar-toggler{\r\n        border-color: transparent;\r\n    }\r\n\r\n    header .dropdown-menu{\r\n        border-radius: 0;\r\n    }\r\n\r\n    .content {\r\n        margin-bottom: 15em;\r\n    }\r\n\r\n    .desktop {\r\n        display: none;\r\n    }\r\n\r\n    .mobile {\r\n        display: unset;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksdUJBQXVCOztJQUV2QjtRQUNJLGtCQUFrQjtRQUNsQix1Q0FBdUM7UUFDdkMsa0NBQWtDO0lBQ3RDOztJQUVBO1FBQ0kseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksa0JBQWtCO1FBQ2xCLHVDQUF1QztRQUN2QyxrQ0FBa0M7SUFDdEM7O0lBRUE7UUFDSSx5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIgaDEge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgcGFkZGluZzogMC43NWVtOyAgIFxyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjA2ZW07XHJcbn1cclxuXHJcbmEgaW1nIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5mb290ZXIgdWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbmZvb3RlciBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNlbTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBlbTtcclxufVxyXG5cclxuLm1vYmlsZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5oZWFkZXIgLm5hdmJhcnsgICBcclxuICAgIGxldHRlci1zcGFjaW5nOiAuMDZlbTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLyogRm9yIG1vYmlsZSBwaG9uZXM6ICovXHJcblxyXG4gICAgaGVhZGVyIC5uYXZiYXJ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDAsMCwwLC4xKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIGhlYWRlciAubmF2YmFyLWxpZ2h0IC5uYXZiYXItdG9nZ2xlcntcclxuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGhlYWRlciAuZHJvcGRvd24tbWVudXtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGhlYWRlciBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjRlbTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGZvb3RlciB1bCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyLjVlbTtcclxuICAgIH1cclxuXHJcbiAgICBmb290ZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMuMmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxN2VtO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXNrdG9wIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5tb2JpbGUge1xyXG4gICAgICAgIGRpc3BsYXk6IHVuc2V0O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuXHJcbiAgICBoZWFkZXIgLm5hdmJhcntcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMCwwLDAsLjEpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaGVhZGVyIC5uYXZiYXItbGlnaHQgLm5hdmJhci10b2dnbGVye1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaGVhZGVyIC5kcm9wZG93bi1tZW51e1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1ZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2t0b3Age1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vYmlsZSB7XHJcbiAgICAgICAgZGlzcGxheTogdW5zZXQ7XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<header>\n  <h1 class=\"desktop\">Leandro Ferrete - Portfolio</h1>\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\"\n      aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">HOME <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\"\n            aria-haspopup=\"true\" aria-expanded=\"false\">\n            PROJECTS\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n            <a class=\"dropdown-item\" routerLink=\"/peckboy\">Peckboy</a>\n            <a class=\"dropdown-item\" routerLink=\"/colorsattack\">Colors Attack</a>\n            <a class=\"dropdown-item\" routerLink=\"/donkeykongfour\">Donkey Kong Country 4</a>\n            <a class=\"dropdown-item\" routerLink=\"/personal\">Personal Projects</a>\n            <div class=\"dropdown-divider\"></div>            \n            <a class=\"dropdown-item\" routerLink=\"/models\">3D Models</a>\n            <a class=\"dropdown-item\" routerLink=\"/arts\">2D Arts</a>\n            <a class=\"dropdown-item\" routerLink=\"/study\">Study Gallery</a>\n            <!-- <a class=\"dropdown-item\" routerLink=\"/arts\">Inspiration</a> -->\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/resume\">RESUME</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/contact\">CONTACT</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  <h1 class=\"mobile\">Leandro Ferrete - Portfolio</h1>\n</header>\n\n<div class=\"container content\">\n  <router-outlet></router-outlet>\n</div>\n\n<footer>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <span>© 2020 Leandro Ferrete</span>\n      </div>\n      <div class=\"col-sm-6\">\n        <ul>\n          <li>\n            <a href=\"mailto:leandro.ferrete@hotmail.com\">\n              <img src=\"/assets/social/email.svg\">\n            </a>\n          </li>\n          <!-- <li>\n          <a href=\"https://www.instagram.com/ferreteleandro/?hl=pt-br\">\n            <img src=\"/assets/social/instagram.svg\">            \n          </a>\n        </li>     -->\n          <li>\n            <a href=\"https://www.linkedin.com/in/leandro-ferrete/\">\n              <img src=\"/assets/social/linkedin.svg\">\n            </a>\n          </li>\n          <li>\n            <a href=\"https://www.youtube.com/channel/UCZMXSqjJxETUNerWPMCW1AQ\">\n              <img src=\"/assets/social/youtube.svg\">\n            </a>\n          </li>\n          <li>\n            <a href=\"https://twitter.com/leandroferrete\">\n              <img src=\"/assets/social/twitter.svg\">\n            </a>\n          </li>\n          <!-- <li>\n          <a href=\"https://www.facebook.com/leandro.ferrete\">\n            <img src=\"/assets/social/facebook.svg\">            \n          </a>\n        </li>  -->\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>"

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
/* harmony import */ var _arts_arts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./arts/arts.component */ "./src/app/arts/arts.component.ts");
/* harmony import */ var _study_study_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./study/study.component */ "./src/app/study/study.component.ts");
/* harmony import */ var _peckboy_peckboy_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./peckboy/peckboy.component */ "./src/app/peckboy/peckboy.component.ts");
/* harmony import */ var _colorsattack_colorsattack_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./colorsattack/colorsattack.component */ "./src/app/colorsattack/colorsattack.component.ts");
/* harmony import */ var _personal_personal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./personal/personal.component */ "./src/app/personal/personal.component.ts");
/* harmony import */ var _donkeykongfour_donkeykongfour_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./donkeykongfour/donkeykongfour.component */ "./src/app/donkeykongfour/donkeykongfour.component.ts");















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
                _models_models_component__WEBPACK_IMPORTED_MODULE_8__["ModelsComponent"],
                _arts_arts_component__WEBPACK_IMPORTED_MODULE_9__["ArtsComponent"],
                _study_study_component__WEBPACK_IMPORTED_MODULE_10__["StudyComponent"],
                _peckboy_peckboy_component__WEBPACK_IMPORTED_MODULE_11__["PeckboyComponent"],
                _colorsattack_colorsattack_component__WEBPACK_IMPORTED_MODULE_12__["ColorsattackComponent"],
                _personal_personal_component__WEBPACK_IMPORTED_MODULE_13__["PersonalComponent"],
                _donkeykongfour_donkeykongfour_component__WEBPACK_IMPORTED_MODULE_14__["DonkeykongfourComponent"]
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

/***/ "./src/app/arts/arts.component.css":
/*!*****************************************!*\
  !*** ./src/app/arts/arts.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydHMvYXJ0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/arts/arts.component.html":
/*!******************************************!*\
  !*** ./src/app/arts/arts.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1 class=\"display-4\">2D Arts</h1>\n  <p class=\"lead\">These are some 2D arts that I made for study and personal projects.</p>\n  <hr class=\"my-4\">\n  <div class=\"row catalog\">\n    <div class=\"col-lg-6\">\n      <h2><strong>Mortal Kombat: Character Select Screen</strong></h2>\n      <a href=\"https://drive.google.com/file/d/1mX_NvvqcZb76KfUFZTHdDM9QOLbmTQwu/view?usp=sharing\">\n        <img src=\"https://drive.google.com/uc?export=view&id=1EcC60gXbhQT98HtehmGFbLgT9sFOM29Z\">\n      </a>\n    </div>\n    <div class=\"col-lg-6\">\n      <h2><strong>Resident Evil 3: Inventory</strong></h2>\n      <a href=\"https://drive.google.com/file/d/10o-z0kLVsfH3oVmSV_GPfBYIQ2eLq8Xj/view?usp=sharing\">\n        <img src=\"https://drive.google.com/uc?export=view&id=10o-z0kLVsfH3oVmSV_GPfBYIQ2eLq8Xj\">\n      </a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/arts/arts.component.ts":
/*!****************************************!*\
  !*** ./src/app/arts/arts.component.ts ***!
  \****************************************/
/*! exports provided: ArtsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtsComponent", function() { return ArtsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ArtsComponent = /** @class */ (function () {
    function ArtsComponent() {
    }
    ArtsComponent.prototype.ngOnInit = function () {
    };
    ArtsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-arts',
            template: __webpack_require__(/*! ./arts.component.html */ "./src/app/arts/arts.component.html"),
            styles: [__webpack_require__(/*! ./arts.component.css */ "./src/app/arts/arts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ArtsComponent);
    return ArtsComponent;
}());



/***/ }),

/***/ "./src/app/colorsattack/colorsattack.component.css":
/*!*********************************************************!*\
  !*** ./src/app/colorsattack/colorsattack.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "iframe{\r\n    width: 100%;\r\n    height: 25em;\r\n}\r\n\r\n.overview .thumb{\r\n    height: 90%;\r\n    margin-bottom: 1.5em;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    /* For mobile phones: */\r\n    iframe{\r\n        height: 15em;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 768px) and (orientation: landscape) {\r\n   \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sb3JzYXR0YWNrL2NvbG9yc2F0dGFjay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBOztBQUVBIiwiZmlsZSI6InNyYy9hcHAvY29sb3JzYXR0YWNrL2NvbG9yc2F0dGFjay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaWZyYW1le1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI1ZW07XHJcbn1cclxuXHJcbi5vdmVydmlldyAudGh1bWJ7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNWVtO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAvKiBGb3IgbW9iaWxlIHBob25lczogKi9cclxuICAgIGlmcmFtZXtcclxuICAgICAgICBoZWlnaHQ6IDE1ZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/colorsattack/colorsattack.component.html":
/*!**********************************************************!*\
  !*** ./src/app/colorsattack/colorsattack.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1 class=\"display-4\">Colors Attack</h1>\n  <hr class=\"my-4\">\n  <div class=\"row overview\">\n    <div class=\"col-lg-6\">\n      <iframe src=\"https://www.youtube.com/embed/Wu4xMato0qI\" frameborder=\"0\"\n        allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n    </div>\n    <div class=\"col-lg-6\">\n      <p><strong>What I did:</strong> This is a simple spaceship game with a neon graphic style in which to kill enemies\n        the shot needs to be the same color. </p>\n      <p>The objective of this game is to stay as long as possible alive and the higher the score the greater the\n        difficulty and speed at which enemies appear on the screen.</p>\n      <p>The game ends when the ship is hit by an enemy.</p>\n      <p>I developed this project alone, all visual assets and programming were developed by me and the songs and sounds\n        were used from sites with a free creative commons license.</p>\n      <p>The project was released on google play and is available for download.</p>\n      <p><strong>Platforms:</strong> Android</p>\n      <p><strong>Engine and tools:</strong> Unity Engine and Adobe Photoshop</p>\n      <p><strong>Programming Language:</strong> C#</p>\n      <p><strong>Time on project:</strong> 2 Weeks</p>\n    </div>\n  </div>\n  <h1 class=\"display-4\">Image Gallery</h1>\n  <div class=\"row overview\">\n    <div class=\"col-lg-4\">\n      <a href=\"https://drive.google.com/file/d/1oYpBt0Ghw-HIhXm2d_wHPr835FUApo6f/view?usp=sharing\">\n        <img class=\"thumb\" src=\"https://drive.google.com/uc?export=view&id=1oYpBt0Ghw-HIhXm2d_wHPr835FUApo6f\">\n      </a>\n    </div>\n  </div>\n  <h1 class=\"display-4\">Video Gallery</h1>\n  <div class=\"row overview\">\n    <div class=\"col-lg-4\">\n      <iframe id=\"gallery-item\" src=\"https://www.youtube.com/embed/lrUCDEyEbdQ\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/colorsattack/colorsattack.component.ts":
/*!********************************************************!*\
  !*** ./src/app/colorsattack/colorsattack.component.ts ***!
  \********************************************************/
/*! exports provided: ColorsattackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsattackComponent", function() { return ColorsattackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ColorsattackComponent = /** @class */ (function () {
    function ColorsattackComponent() {
    }
    ColorsattackComponent.prototype.ngOnInit = function () {
    };
    ColorsattackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-colorsattack',
            template: __webpack_require__(/*! ./colorsattack.component.html */ "./src/app/colorsattack/colorsattack.component.html"),
            styles: [__webpack_require__(/*! ./colorsattack.component.css */ "./src/app/colorsattack/colorsattack.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ColorsattackComponent);
    return ColorsattackComponent;
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

/***/ "./src/app/donkeykongfour/donkeykongfour.component.css":
/*!*************************************************************!*\
  !*** ./src/app/donkeykongfour/donkeykongfour.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "iframe{\r\n    width: 100%;\r\n    height: 25em;\r\n}\r\n\r\n.overview .thumb{\r\n    height: 15em;\r\n    margin-bottom: 1.5em;\r\n}\r\n\r\n#gallery-item{  \r\n    height: 15em;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    /* For mobile phones: */\r\n    iframe{\r\n        height: 15em;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 768px) and (orientation: landscape) {\r\n   \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9ua2V5a29uZ2ZvdXIvZG9ua2V5a29uZ2ZvdXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkI7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7O0FBRUEiLCJmaWxlIjoic3JjL2FwcC9kb25rZXlrb25nZm91ci9kb25rZXlrb25nZm91ci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaWZyYW1le1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI1ZW07XHJcbn1cclxuXHJcbi5vdmVydmlldyAudGh1bWJ7XHJcbiAgICBoZWlnaHQ6IDE1ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcclxufVxyXG5cclxuI2dhbGxlcnktaXRlbXsgIFxyXG4gICAgaGVpZ2h0OiAxNWVtO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAvKiBGb3IgbW9iaWxlIHBob25lczogKi9cclxuICAgIGlmcmFtZXtcclxuICAgICAgICBoZWlnaHQ6IDE1ZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/donkeykongfour/donkeykongfour.component.html":
/*!**************************************************************!*\
  !*** ./src/app/donkeykongfour/donkeykongfour.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1 class=\"display-4\">Donkey Kong Country 4: The Kongs Return</h1>\n  <hr class=\"my-4\">\n  <div class=\"row overview\">\n    <div class=\"col-lg-6\">\n      <iframe src=\"https://www.youtube.com/embed/6EHuygtCpS8\" frameborder=\"0\"\n        allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n    </div>\n    <div class=\"col-lg-6\">\n      <p><strong>What I did:</strong> I did the level design of many levels of this game taking inspiration from the\n        Donkey Kong Country trilogy released for the Super Nintendo.</p>\n      <p>This was the first game development project in which I participated in my life, it was where I created\n        inspiration and realized that it was possible to create\n        a game even though it seemed like a distant dream.</p>\n      <p>I was very young and a beginner when I got to know the project so I had the opportunity to learn a lot of Adobe\n        Photoshop and all the steps to create a game.</p>\n      <p><strong>Link: </strong> <a href=\"https://www.facebook.com/dkc4project\">https://www.facebook.com/dkc4project</a>\n      </p>\n      <p><strong>Platform:</strong> PC</p>\n      <p><strong>Engine and tools:</strong> Clickteam Fusion Developer and Adobe Photoshop</p>\n      <p><strong>Time on project:</strong> 8 Years</p>\n    </div>\n  </div>\n  <h1 class=\"display-4\">Overview</h1>\n  <div class=\"row overview\">\n    <div class=\"col-lg-6\">\n      <p>Donkey Kong Country 4 is a tribute to the original Donkey Kong Country trilogy developed by Rare released by\n        Nintendo.</p>\n      <p>The inspiration of the project was the great love of the whole team for this franchise and the desire to expand\n        this experience that provided many remarkable moments for many people.</p>\n      <p>This project is being developed by fans and does not belong to the universe created by Rare and Nintendo.</p>\n      <p>All rights are reserved to Nintendo.</p>\n    </div>\n    <div class=\"col-lg-6\">\n      <iframe src=\"https://www.youtube.com/embed/TgxErenhg3k\" frameborder=\"0\"\n        allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n    </div>\n  </div>\n  <h1 class=\"display-4\">Image Gallery</h1>\n  <div class=\"row overview\">\n    <div class=\"col-lg-4\">\n      <a href=\"https://drive.google.com/file/d/1_zb6VMCY6ClxEoZCeF065bfy33Kb3mBB/view?usp=sharing\">\n        <img class=\"thumb\" src=\"https://drive.google.com/uc?export=view&id=1_zb6VMCY6ClxEoZCeF065bfy33Kb3mBB\">\n      </a>\n    </div>\n    <div class=\"col-lg-4\">\n      <a href=\"https://drive.google.com/file/d/1hn9iOUEyGZ0TDqhQfavglelFz3am1Df4/view?usp=sharing\">\n        <img class=\"thumb\" src=\"https://drive.google.com/uc?export=view&id=1hn9iOUEyGZ0TDqhQfavglelFz3am1Df4\">\n      </a>\n    </div>\n    <div class=\"col-lg-4\">\n      <a href=\"https://drive.google.com/file/d/18FUbw4Ni1qaidGEesyLpCuyn-7KE4edO/view?usp=sharing\">\n        <img class=\"thumb\" src=\"https://drive.google.com/uc?export=view&id=18FUbw4Ni1qaidGEesyLpCuyn-7KE4edO\">\n      </a>\n    </div>\n    <div class=\"col-lg-4\">\n      <a href=\"https://drive.google.com/file/d/1gdyeIQ5xGYgSvmMf3CA7cb9d4RCylVN-/view?usp=sharing\">\n        <img class=\"thumb\" src=\"https://drive.google.com/uc?export=view&id=1gdyeIQ5xGYgSvmMf3CA7cb9d4RCylVN-\">\n      </a>\n    </div>\n    <div class=\"col-lg-4\">\n      <a href=\"https://drive.google.com/file/d/1fI9RblbzKJA_Vb0R7QKyU1CUDCV2nq1C/view?usp=sharing\">\n        <img class=\"thumb\" src=\"https://drive.google.com/uc?export=view&id=1fI9RblbzKJA_Vb0R7QKyU1CUDCV2nq1C\">\n      </a>\n    </div>\n    <div class=\"col-lg-4\">\n      <a href=\"https://drive.google.com/file/d/1brFW4G7KeJ_ItaFcD2d0XmsyOp9CpPK1/view?usp=sharing\">\n        <img class=\"thumb\" src=\"https://drive.google.com/uc?export=view&id=1brFW4G7KeJ_ItaFcD2d0XmsyOp9CpPK1\">\n      </a>\n    </div>\n    <div class=\"col-lg-4\">\n      <a href=\"https://drive.google.com/file/d/1A3CGjN89altiIfSi6GhYUW5chgI8Ttq8/view?usp=sharing\">\n        <img class=\"thumb\" src=\"https://drive.google.com/uc?export=view&id=1A3CGjN89altiIfSi6GhYUW5chgI8Ttq8\">\n      </a>\n    </div>\n    <div class=\"col-lg-4\">\n      <a href=\"https://drive.google.com/file/d/1H3jheX_FvqMRNJSDOrjV-qOl4qr2mPy_/view?usp=sharing\">\n        <img class=\"thumb\" src=\"https://drive.google.com/uc?export=view&id=1H3jheX_FvqMRNJSDOrjV-qOl4qr2mPy_\">\n      </a>\n    </div>\n    <div class=\"col-lg-4\">\n      <a href=\"https://drive.google.com/file/d/1TS_frz2c_e0-q_DEEE0FoidiLH4x_rP1/view?usp=sharing\">\n        <img class=\"thumb\" src=\"https://drive.google.com/uc?export=view&id=1TS_frz2c_e0-q_DEEE0FoidiLH4x_rP1\">\n      </a>\n    </div>\n    <div class=\"col-lg-4\">\n      <a href=\"https://drive.google.com/file/d/1df8FELpb1tw97NGQzY1-voZOgnzVWHTr/view?usp=sharing\">\n        <img class=\"thumb\" src=\"https://drive.google.com/uc?export=view&id=1df8FELpb1tw97NGQzY1-voZOgnzVWHTr\">\n      </a>\n    </div>\n    <div class=\"col-lg-4\">\n      <a href=\"https://drive.google.com/file/d/1vM6D8BI_HYwU_-CFyAt8YHOXATRlD128/view?usp=sharing\">\n        <img class=\"thumb\" src=\"https://drive.google.com/uc?export=view&id=1vM6D8BI_HYwU_-CFyAt8YHOXATRlD128\">\n      </a>\n    </div>\n    <div class=\"col-lg-4\">\n      <a href=\"https://drive.google.com/file/d/1juAzSaYZ5_yzNWSiwBmRRMEgDTzIX63d/view?usp=sharing\">\n        <img class=\"thumb\" src=\"https://drive.google.com/uc?export=view&id=1juAzSaYZ5_yzNWSiwBmRRMEgDTzIX63d\">\n      </a>\n    </div>\n    <div class=\"col-lg-4\">\n      <a href=\"https://drive.google.com/file/d/1d1NKf2YobhHfg7p6jrnG_bi-xjuBWgFW/view?usp=sharing\">\n        <img class=\"thumb\" src=\"https://drive.google.com/uc?export=view&id=1d1NKf2YobhHfg7p6jrnG_bi-xjuBWgFW\">\n      </a>\n    </div>\n    <div class=\"col-lg-4\">\n      <a href=\"https://drive.google.com/file/d/1fbDSvt9pw4tBCcCkAmor0PpNyWXRvXTU/view?usp=sharing\">\n        <img class=\"thumb\" src=\"https://drive.google.com/uc?export=view&id=1fbDSvt9pw4tBCcCkAmor0PpNyWXRvXTU\">\n      </a>\n    </div>\n    <div class=\"col-lg-4\">\n      <a href=\"https://drive.google.com/file/d/1ReabIUJJMx-gn5t8HGGs938laAD9Rzxl/view?usp=sharing\">\n        <img class=\"thumb\" src=\"https://drive.google.com/uc?export=view&id=1ReabIUJJMx-gn5t8HGGs938laAD9Rzxl\">\n      </a>\n    </div>\n  </div>\n  <h1 class=\"display-4\">Video Gallery</h1>\n  <div class=\"row overview\">\n    <div class=\"col-lg-4\">\n      <iframe id=\"gallery-item\" src=\"https://www.youtube.com/embed/MI1EnMQpLlo\" frameborder=\"0\"\n        allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n    </div>\n    <div class=\"col-lg-4\">\n      <iframe id=\"gallery-item\" src=\"https://www.youtube.com/embed/oxRa0V1X_94\" frameborder=\"0\"\n        allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n    </div>\n    <div class=\"col-lg-4\">\n      <iframe id=\"gallery-item\" src=\"https://www.youtube.com/embed/tvyI0EffJIY\" frameborder=\"0\"\n        allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n    </div>\n    <div class=\"col-lg-4\">\n      <iframe id=\"gallery-item\" src=\"https://www.youtube.com/embed/v3JHRhTIFuA\" frameborder=\"0\"\n        allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n    </div>\n    <div class=\"col-lg-4\">\n      <iframe id=\"gallery-item\" src=\"https://www.youtube.com/embed/HhpRerQ04is\" frameborder=\"0\"\n        allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n    </div>\n    <div class=\"col-lg-4\">\n      <iframe id=\"gallery-item\" src=\"https://www.youtube.com/embed/x9cnQLuj6nk\" frameborder=\"0\"\n        allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/donkeykongfour/donkeykongfour.component.ts":
/*!************************************************************!*\
  !*** ./src/app/donkeykongfour/donkeykongfour.component.ts ***!
  \************************************************************/
/*! exports provided: DonkeykongfourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonkeykongfourComponent", function() { return DonkeykongfourComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DonkeykongfourComponent = /** @class */ (function () {
    function DonkeykongfourComponent() {
    }
    DonkeykongfourComponent.prototype.ngOnInit = function () {
    };
    DonkeykongfourComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-donkeykongfour',
            template: __webpack_require__(/*! ./donkeykongfour.component.html */ "./src/app/donkeykongfour/donkeykongfour.component.html"),
            styles: [__webpack_require__(/*! ./donkeykongfour.component.css */ "./src/app/donkeykongfour/donkeykongfour.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DonkeykongfourComponent);
    return DonkeykongfourComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n    background-color: white !important;\r\n}\r\n\r\n.my-image {\r\n    width: 80%;\r\n    border-radius: 50%;\r\n}\r\n\r\n.social a img {\r\n    width: 35px;\r\n    height: 35px;\r\n}\r\n\r\nul {\r\n    margin-top: 1em;\r\n    list-style-type: none;\r\n}\r\n\r\nli {\r\n    display: inline;\r\n    margin-right: 0.5em;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    /* For mobile phones: */\r\n    img {\r\n        margin-bottom: 20px;\r\n    }\r\n\r\n    ul {\r\n        margin-right: 1.5em;\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 768px) and (orientation: landscape) {\r\n    ul {\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBR0E7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QjtRQUNJLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLG1CQUFtQjtRQUNuQixrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm15LWltYWdlIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5zb2NpYWwgYSBpbWcge1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcblxyXG51bCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbmxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC8qIEZvciBtb2JpbGUgcGhvbmVzOiAqL1xyXG4gICAgaW1nIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHVsIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNWVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICB1bCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1 class=\"display-4\">About</h1>\n  <hr class=\"my-4\">\n  <div class=\"row\">\n    <div class=\"col-lg-3 text-center\">\n      <img class=\"my-image\" src=\"/assets/img/my-photo.jpg\" alt=\"image\">\n    </div>\n    <div class=\"col-lg-9\">\n      <p>My name is Leandro Ferrete I'm living in Brazil and I'm a programmer working with software development for 5 years and I have been studying and developing games through\n        personal projects for at least 10 years.</p>\n      <p>Creating new experiences through games and making people feel better about my work is my motivation to study\n        and work with it.</p>\n      <p>I have skills in all areas of game development including 3D modeling, animation and 2D art.</p>\n      <p>I am looking for a job opportunity as a professional game developer and will be showing all my work using this\n        web page.</p>\n    </div>\n    <div class=\"col-lg-12 social\">\n      <ul>\n        <li>\n          <a href=\"mailto:leandro.ferrete@hotmail.com\">\n            <img src=\"/assets/social/email.svg\">\n          </a>\n        </li>\n        <!-- <li>\n          <a href=\"https://www.instagram.com/ferreteleandro/?hl=pt-br\">\n            <img src=\"/assets/social/instagram.svg\">            \n          </a>\n        </li>     -->\n        <li>\n          <a href=\"https://www.linkedin.com/in/leandro-ferrete/\">\n            <img src=\"/assets/social/linkedin.svg\">\n          </a>\n        </li>\n        <li>\n          <a href=\"https://www.youtube.com/channel/UCZMXSqjJxETUNerWPMCW1AQ\">\n            <img src=\"/assets/social/youtube.svg\">\n          </a>\n        </li>\n        <li>\n          <a href=\"https://twitter.com/leandroferrete\">\n            <img src=\"/assets/social/twitter.svg\">\n          </a>\n        </li>\n        <!-- <li>\n          <a href=\"https://www.facebook.com/leandro.ferrete\">\n            <img src=\"/assets/social/facebook.svg\">            \n          </a>\n        </li>  -->\n      </ul>\n    </div>\n  </div>\n  <hr class=\"my-4\">\n  <h1 class=\"display-4\">Projects</h1>\n  <div class=\"row catalog\">\n    <div class=\"col-lg-6\">\n      <h2>Games for 2 (2018)</h2>\n      <a>\n        <img src=\"https://drive.google.com/uc?export=view&id=1zFLidqxWaDoQY_0neQTWPUsXbw6YWEuf\">\n      </a>\n    </div>\n    <div class=\"col-lg-6\">\n      <h2>Jumper VR (2017)</h2>\n      <a>\n        <img src=\"https://drive.google.com/uc?export=view&id=1KTjsA2cgGAzYWBXh5FQ4EMR2rFWZHCHw\">\n      </a>\n    </div>\n    <div class=\"col-lg-6\">\n      <h2>Peckboy (2016)</h2>\n      <a routerLink=\"/peckboy\">\n        <img src=\"https://drive.google.com/uc?export=view&id=1XUOxXY3ebQ7tNvKrMAxMEkgrOGpwm6IZ\">\n      </a>\n    </div>\n    <div class=\"col-lg-6\">\n      <h2>Colors Attack (2016)</h2>\n      <a routerLink=\"/colorsattack\">\n        <img src=\"https://drive.google.com/uc?export=view&id=1oYpBt0Ghw-HIhXm2d_wHPr835FUApo6f\">\n      </a>\n    </div>\n    <div class=\"col-lg-6\">\n      <h2>Donkey Kong Country 4 Fan Game (2012)</h2>\n      <a routerLink=\"/donkeykongfour\">\n        <img src=\"https://drive.google.com/uc?export=view&id=1_zb6VMCY6ClxEoZCeF065bfy33Kb3mBB\">\n      </a>\n    </div>\n  </div>\n</div>"

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

module.exports = "iframe{\r\n    width: 100%;\r\n    height: 25em;\r\n}\r\n\r\n.pagination{\r\n    margin-top: 3em;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    /* For mobile phones: */\r\n    iframe{\r\n        height: 15em;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 768px) and (orientation: landscape) {\r\n   \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kZWxzL21vZGVscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBOztBQUVBIiwiZmlsZSI6InNyYy9hcHAvbW9kZWxzL21vZGVscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaWZyYW1le1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI1ZW07XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9ue1xyXG4gICAgbWFyZ2luLXRvcDogM2VtO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAvKiBGb3IgbW9iaWxlIHBob25lczogKi9cclxuICAgIGlmcmFtZXtcclxuICAgICAgICBoZWlnaHQ6IDE1ZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/models/models.component.html":
/*!**********************************************!*\
  !*** ./src/app/models/models.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1 class=\"display-4\">3D Models</h1>\n  <p class=\"lead\">These are some 3D models that I made for study and personal projects.</p>\n  <hr class=\"my-4\">\n  <div class=\"row catalog\" *ngIf=\"currentPage == 1\">\n    <div class=\"col-lg-6\">\n      <h2><strong>SNES - Cartridge</strong></h2>\n      <div class=\"sketchfab-embed-wrapper\">\n        <iframe title=\"A 3D model\"\n          src=\"https://sketchfab.com/models/daf9261902714f9f8de52b5ea2bfefc2/embed?autostart=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1\"\n          frameborder=\"0\" allow=\"autoplay; fullscreen; vr\" mozallowfullscreen=\"true\"\n          webkitallowfullscreen=\"true\"></iframe>\n      </div>\n    </div>\n    <div class=\"col-lg-6\">\n      <h2><strong>Donkey Kong Country 2 - Live Balloon</strong></h2>\n      <div class=\"sketchfab-embed-wrapper\">\n        <iframe title=\"A 3D model\"\n          src=\"https://sketchfab.com/models/7b3cdf65ced047e496b672fb7560964b/embed?autostart=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1\"\n          frameborder=\"0\" allow=\"autoplay; fullscreen; vr\" mozallowfullscreen=\"true\"\n          webkitallowfullscreen=\"true\"></iframe>\n      </div>\n    </div>\n    <div class=\"col-lg-6\">\n      <h2><strong>Donkey Kong Country 3 - Bonus Coin</strong></h2>\n      <div class=\"sketchfab-embed-wrapper\">\n        <iframe title=\"A 3D model\"\n          src=\"https://sketchfab.com/models/6a687b67229042a686ef6ddcad2c8607/embed?autostart=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1\"\n          frameborder=\"0\" allow=\"autoplay; fullscreen; vr\" mozallowfullscreen=\"true\"\n          webkitallowfullscreen=\"true\"></iframe>\n      </div>\n    </div>\n    <div class=\"col-lg-6\">\n      <h2><strong>Donkey Kong Country 2 - Crate</strong></h2>\n      <div class=\"sketchfab-embed-wrapper\">\n        <iframe title=\"A 3D model\"\n          src=\"https://sketchfab.com/models/66cb2ab19a1e4320aae97049c19ef521/embed?autostart=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1\"\n          frameborder=\"0\" allow=\"autoplay; fullscreen; vr\" mozallowfullscreen=\"true\"\n          webkitallowfullscreen=\"true\"></iframe>\n      </div>\n    </div>\n  </div>\n  <div class=\"row catalog\" *ngIf=\"currentPage == 2\">\n    <div class=\"col-lg-6\">\n      <h2><strong>Donkey Kong Country 2 and 3 - Letter K</strong></h2>\n      <div class=\"sketchfab-embed-wrapper\">\n        <iframe title=\"A 3D model\"\n          src=\"https://sketchfab.com/models/34be27cff2b1487fbd509de0efe09420/embed?autostart=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1\"\n          frameborder=\"0\" allow=\"autoplay; fullscreen; vr\" mozallowfullscreen=\"true\"\n          webkitallowfullscreen=\"true\"></iframe>\n      </div>\n    </div>\n    <div class=\"col-lg-6\">\n      <h2><strong>Donkey Kong Country 2 and 3 - Letter O</strong></h2>\n      <div class=\"sketchfab-embed-wrapper\">\n        <iframe title=\"A 3D model\"\n          src=\"https://sketchfab.com/models/ef736d44b1384d6d85a80420cc4a4839/embed?autostart=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1\"\n          frameborder=\"0\" allow=\"autoplay; fullscreen; vr\" mozallowfullscreen=\"true\"\n          webkitallowfullscreen=\"true\"></iframe>\n      </div>\n    </div>\n    <div class=\"col-lg-6\">\n      <h2><strong>Donkey Kong Country 2 and 3 - Letter N</strong></h2>\n      <div class=\"sketchfab-embed-wrapper\">\n        <iframe title=\"A 3D model\"\n          src=\"https://sketchfab.com/models/0a70826200204ef781175e949a944a6d/embed?autostart=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1\"\n          frameborder=\"0\" allow=\"autoplay; fullscreen; vr\" mozallowfullscreen=\"true\"\n          webkitallowfullscreen=\"true\"></iframe>\n      </div>\n    </div>\n    <div class=\"col-lg-6\">\n      <h2><strong>Donkey Kong Country 2 and 3 - Letter G</strong></h2>\n      <div class=\"sketchfab-embed-wrapper\">\n        <iframe title=\"A 3D model\" width=\"640\" height=\"480\"\n          src=\"https://sketchfab.com/models/551717f58aab45caa0d8618c4c5927e0/embed?autostart=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1\"\n          frameborder=\"0\" allow=\"autoplay; fullscreen; vr\" mozallowfullscreen=\"true\"\n          webkitallowfullscreen=\"true\"></iframe>\n      </div>\n    </div>\n  </div>\n  <div class=\"row catalog\" *ngIf=\"currentPage == 3\">\n    <div class=\"col-lg-6\">\n      <h2><strong>Donkey Kong Country 2 - Rambi Box</strong></h2>\n      <div class=\"sketchfab-embed-wrapper\">\n        <iframe title=\"A 3D model\" width=\"640\" height=\"480\"\n          src=\"https://sketchfab.com/models/6c4d3dc0d48c41d1ad852197390ad083/embed?autostart=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1\"\n          frameborder=\"0\" allow=\"autoplay; fullscreen; vr\" mozallowfullscreen=\"true\"\n          webkitallowfullscreen=\"true\"></iframe>\n      </div>\n    </div>\n    <div class=\"col-lg-6\">\n      <h2><strong>Donkey Kong Country 2 - Enguarde Box</strong></h2>\n      <div class=\"sketchfab-embed-wrapper\">\n        <iframe title=\"A 3D model\"\n          src=\"https://sketchfab.com/models/d9665c8750984ddf9f433ff4b05320dc/embed?autostart=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1\"\n          frameborder=\"0\" allow=\"autoplay; fullscreen; vr\" mozallowfullscreen=\"true\"\n          webkitallowfullscreen=\"true\"></iframe>\n      </div>\n    </div>\n    <div class=\"col-lg-6\">\n      <h2><strong>Donkey Kong Country 2 - Barrel</strong></h2>\n      <div class=\"sketchfab-embed-wrapper\">\n        <iframe title=\"A 3D model\" width=\"640\" height=\"480\"\n          src=\"https://sketchfab.com/models/51d1341516504500ba8ab3c807ff8930/embed?autostart=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1\"\n          frameborder=\"0\" allow=\"autoplay; fullscreen; vr\" mozallowfullscreen=\"true\"\n          webkitallowfullscreen=\"true\"></iframe>\n      </div>\n    </div>\n  </div>\n  <nav aria-label=\"Page navigation example\">\n    <ul class=\"pagination justify-content-center\">\n      <li class=\"page-item\" [class.disabled]=\"currentPage === 1\">\n        <a class=\"page-link\" (click)=\"changePage(currentPage-1)\">Previous</a>\n      </li>\n      <li class=\"page-item\" [class.active]=\"currentPage === 1\"><a (click)=\"changePage(1)\" class=\"page-link\">1</a></li>\n      <li class=\"page-item\" [class.active]=\"currentPage === 2\"><a (click)=\"changePage(2)\" class=\"page-link\">2</a></li>\n      <li class=\"page-item\" [class.active]=\"currentPage === 3\"><a (click)=\"changePage(3)\" class=\"page-link\">3</a></li>\n      <li class=\"page-item\" [class.disabled]=\"currentPage === totalPages\">\n        <a class=\"page-link\" (click)=\"changePage(currentPage+1)\">Next</a>\n      </li>\n    </ul>\n  </nav>\n</div>"

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
        this.totalPages = 3;
    }
    ModelsComponent.prototype.ngOnInit = function () {
        this.currentPage = 1;
    };
    ModelsComponent.prototype.changePage = function (val) {
        this.currentPage = val;
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

/***/ "./src/app/peckboy/peckboy.component.css":
/*!***********************************************!*\
  !*** ./src/app/peckboy/peckboy.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "iframe{\r\n    width: 100%;\r\n    height: 25em;\r\n}\r\n\r\n.overview .thumb{\r\n    height: 90%;\r\n    margin-bottom: 1.5em;\r\n}\r\n\r\n#gallery-item{  \r\n    height: 15em;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    /* For mobile phones: */\r\n    iframe{\r\n        height: 15em;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 768px) and (orientation: landscape) {\r\n   \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVja2JveS9wZWNrYm95LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBOztBQUVBIiwiZmlsZSI6InNyYy9hcHAvcGVja2JveS9wZWNrYm95LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpZnJhbWV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjVlbTtcclxufVxyXG5cclxuLm92ZXJ2aWV3IC50aHVtYntcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41ZW07XHJcbn1cclxuXHJcbiNnYWxsZXJ5LWl0ZW17ICBcclxuICAgIGhlaWdodDogMTVlbTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLyogRm9yIG1vYmlsZSBwaG9uZXM6ICovXHJcbiAgICBpZnJhbWV7XHJcbiAgICAgICAgaGVpZ2h0OiAxNWVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/peckboy/peckboy.component.html":
/*!************************************************!*\
  !*** ./src/app/peckboy/peckboy.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1 class=\"display-4\">Peckboy</h1>\n  <hr class=\"my-4\">\n  <div class=\"row overview\">\n    <div class=\"col-lg-6\">\n      <iframe src=\"https://www.youtube.com/embed/r7l6kOv9Joc\" frameborder=\"0\"\n        allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n    </div>\n    <div class=\"col-lg-6\">\n      <p><strong>What I did:</strong> The project was developed only by me with the help of some third party assets such\n        as sprites and music.</p>\n      <p>My intention was to do something similar to Mega Man games but with the difference that the acquired powers\n        would be used to pass through the obstacles of the level.</p>\n      <p>I had to program different systems such as dialog systems, rain and some levels with unique systems to create a\n        great variation of gameplay and also a system for changing languages.</p>\n      <p>The project contains 10 levels and was never launched for google play due to the lack of 2D assets.</p>\n      <p>Today I keep the project on hold until one day I manage to develop all the necessary assets.</p>\n      <p>In the meantime I am using all material developed as a portfolio.</p>\n      <p>This was an attempt to create something more professional to be released on google play.</p>\n      <p><strong>Platforms:</strong> Android</p>\n      <p><strong>Engine and tools:</strong> Unity Engine and Adobe Photoshop</p>\n      <p><strong>Programming Language:</strong> C#</p>\n      <p><strong>Time on project:</strong> 5 months</p>\n    </div>\n  </div>\n  <h1 class=\"display-4\">Overview</h1>\n  <div class=\"row overview\">\n    <div class=\"col-lg-6\">\n      <p>Peckboy is a 2D adventure game in the Side-Scrolling style that brings back several elements of the classic\n        games of\n        generation 8 and 16-bit, the game tells the story of Peckboy a normal boy who suddenly was hit by something and\n        was unconscious by A time when awake he sees himself in a new world\n        and furthermore his whole body is now robotic and he will need to use all his abilities to save this world from\n        the threats that are to come and to be able to return to the house.</p>\n    </div>\n    <div class=\"col-lg-6\">\n      <iframe src=\"https://www.youtube.com/embed/OpBA_dC6QgM\" frameborder=\"0\"\n        allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n    </div>\n  </div>\n  <h1 class=\"display-4\">Image Gallery</h1>\n  <div class=\"row overview\">\n    <div class=\"col-lg-4\">\n      <a href=\"https://drive.google.com/file/d/1XUOxXY3ebQ7tNvKrMAxMEkgrOGpwm6IZ/view?usp=sharing\">\n        <img class=\"thumb\" src=\"https://drive.google.com/uc?export=view&id=1XUOxXY3ebQ7tNvKrMAxMEkgrOGpwm6IZ\">\n      </a>\n    </div>\n    <div class=\"col-lg-4\">\n      <a href=\"https://drive.google.com/file/d/1KZ2UeciNRRTCvTsMNNOUa5Zd0VH3h6pS/view?usp=sharing\">\n        <img class=\"thumb\" src=\"https://drive.google.com/uc?export=view&id=1KZ2UeciNRRTCvTsMNNOUa5Zd0VH3h6pS\">\n      </a>\n    </div>\n    <div class=\"col-lg-4\">\n      <a href=\"https://drive.google.com/file/d/19f-1AMR1K1wIYFRd-GLCb-HQJwLRNJHc/view?usp=sharing\">\n        <img class=\"thumb\" src=\"https://drive.google.com/uc?export=view&id=19f-1AMR1K1wIYFRd-GLCb-HQJwLRNJHc\">\n      </a>\n    </div>\n    <div class=\"col-lg-4\">\n      <a href=\"https://drive.google.com/file/d/1ddnr47TrcKuRU11_aPUYPIqIusupvM78/view?usp=sharing\">\n        <img class=\"thumb\" src=\"https://drive.google.com/uc?export=view&id=1ddnr47TrcKuRU11_aPUYPIqIusupvM78\">\n      </a>\n    </div>\n    <div class=\"col-lg-4\">\n      <a href=\"https://drive.google.com/file/d/19KyHzZXFpTaAMNKK789WYRybimCRac6I/view?usp=sharing\">\n        <img class=\"thumb\" src=\"https://drive.google.com/uc?export=view&id=19KyHzZXFpTaAMNKK789WYRybimCRac6I\">\n      </a>\n    </div>\n    <div class=\"col-lg-4\">\n      <a href=\"https://drive.google.com/file/d/1zcaR5nPTKxBKocMXC_IBbif0ZLb0XN5X/view?usp=sharing\">\n        <img class=\"thumb\" src=\"https://drive.google.com/uc?export=view&id=1zcaR5nPTKxBKocMXC_IBbif0ZLb0XN5X\">\n      </a>\n    </div>\n    <div class=\"col-lg-4\">\n      <a href=\"https://drive.google.com/file/d/1HtHA-tolCNHfFRM_0aCbkUoTFoY5NY2F/view?usp=sharing\">\n        <img class=\"thumb\" src=\"https://drive.google.com/uc?export=view&id=1HtHA-tolCNHfFRM_0aCbkUoTFoY5NY2F\">\n      </a>\n    </div>\n    <div class=\"col-lg-4\">\n      <a href=\"https://drive.google.com/file/d/1xLEbf_QiNWsEsP2-DmlEiKV7HWqsOK55/view?usp=sharing\">\n        <img class=\"thumb\" src=\"https://drive.google.com/uc?export=view&id=1xLEbf_QiNWsEsP2-DmlEiKV7HWqsOK55\">\n      </a>\n    </div>\n    <div class=\"col-lg-4\">\n      <a href=\"https://drive.google.com/file/d/1XgWefKzbB37EgIPw4JWqHLUgEUKlIp8W/view?usp=sharing\">\n        <img class=\"thumb\" src=\"https://drive.google.com/uc?export=view&id=1XgWefKzbB37EgIPw4JWqHLUgEUKlIp8W\">\n      </a>\n    </div>\n    <div class=\"col-lg-4\">\n      <a href=\"https://drive.google.com/file/d/1OflMn5kzMkhCbFge4hwCJ7OGqi3h362E/view?usp=sharing\">\n        <img class=\"thumb\" src=\"https://drive.google.com/uc?export=view&id=1OflMn5kzMkhCbFge4hwCJ7OGqi3h362E\">\n      </a>\n    </div>\n    <div class=\"col-lg-4\">\n      <a href=\"https://drive.google.com/file/d/1uIQgHBqSog7CupozrnWwvFKMFyyWOYvg/view?usp=sharing\">\n        <img class=\"thumb\" src=\"https://drive.google.com/uc?export=view&id=1uIQgHBqSog7CupozrnWwvFKMFyyWOYvg\">\n      </a>\n    </div>\n    <div class=\"col-lg-4\">\n      <a href=\"https://drive.google.com/file/d/1ESx25Q-pwDNtYtLDWok9Ydfm4SJNjlfg/view?usp=sharing\">\n        <img class=\"thumb\" src=\"https://drive.google.com/uc?export=view&id=1ESx25Q-pwDNtYtLDWok9Ydfm4SJNjlfg\">\n      </a>\n    </div>\n  </div>\n  <h1 class=\"display-4\">Video Gallery</h1>\n  <div class=\"row overview\">\n    <div class=\"col-lg-4\">\n      <iframe id=\"gallery-item\" src=\"https://www.youtube.com/embed/S51Fm9SC9QE\" frameborder=\"0\"\n        allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/peckboy/peckboy.component.ts":
/*!**********************************************!*\
  !*** ./src/app/peckboy/peckboy.component.ts ***!
  \**********************************************/
/*! exports provided: PeckboyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeckboyComponent", function() { return PeckboyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var baguettebox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! baguettebox.js */ "./node_modules/baguettebox.js/dist/baguetteBox.min.js");
/* harmony import */ var baguettebox_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(baguettebox_js__WEBPACK_IMPORTED_MODULE_2__);



var PeckboyComponent = /** @class */ (function () {
    function PeckboyComponent() {
    }
    PeckboyComponent.prototype.ngOnInit = function () {
        baguettebox_js__WEBPACK_IMPORTED_MODULE_2___default.a.run('.gallery');
    };
    PeckboyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-peckboy',
            template: __webpack_require__(/*! ./peckboy.component.html */ "./src/app/peckboy/peckboy.component.html"),
            styles: [__webpack_require__(/*! ./peckboy.component.css */ "./src/app/peckboy/peckboy.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PeckboyComponent);
    return PeckboyComponent;
}());



/***/ }),

/***/ "./src/app/personal/personal.component.css":
/*!*************************************************!*\
  !*** ./src/app/personal/personal.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "iframe{\r\n    width: 100%;\r\n    height: 25em;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    /* For mobile phones: */\r\n    iframe{\r\n        height: 15em;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 768px) and (orientation: landscape) {\r\n   \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29uYWwvcGVyc29uYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBOztBQUVBIiwiZmlsZSI6InNyYy9hcHAvcGVyc29uYWwvcGVyc29uYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlmcmFtZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNWVtO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAvKiBGb3IgbW9iaWxlIHBob25lczogKi9cclxuICAgIGlmcmFtZXtcclxuICAgICAgICBoZWlnaHQ6IDE1ZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/personal/personal.component.html":
/*!**************************************************!*\
  !*** ./src/app/personal/personal.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1 class=\"display-4\">Personal Projects</h1>\n  <p class=\"lead\">These are my personal projects developed for the purpose of studying.</p>\n  <hr class=\"my-4\">\n  <div class=\"row catalog\">\n    <div class=\"col-lg-6\">\n      <h2><strong>Resident Evil 3 Remake Classic Style - (2016)</strong></h2>\n      <iframe src=\"https://www.youtube.com/embed/VV0ZfYCSwQQ\" frameborder=\"0\"\n        allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n      <p><strong>What I did:</strong> In this project I tried to remake the game Resident Evil 3: Nemesis released by\n        Capcom in 1999 for Playstation 1.</p>\n      <p>All programming was developed by me where I tried to recreate the fixed camera system and tank gameplay of\n        classic horror games.</p>\n      <p>All 3D assets were reused from the original games developed by Capcom with the exception of the Inventory and\n        Menus that I needed to re-design using Photoshop.</p>\n      <p>The project was not completed but it contributed a lot to my studies in different parts of 3D game development.\n      </p>\n      <p>All rights are reserved for Capcom.</p>\n      <p><strong>Platforms:</strong> PC</p>\n      <p><strong>Engine and tools:</strong> Unity Engine, Blender and Adobe Photoshop</p>\n      <p><strong>Programming Language:</strong> C#</p>\n      <p><strong>Time on project:</strong> 3 months</p>\n    </div>\n    <div class=\"col-lg-6\">\n      <h2><strong>Medieval Run - (2015)</strong></h2>\n      <iframe src=\"https://www.youtube.com/embed/gslLczfZGBE\" frameborder=\"0\"\n        allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n      <p><strong>What I did:</strong>\n      <p>This project was one of the first in which I studied the development of 3D games for mobile and had great\n        challenges in\n        optimization and controls on the touchscreen, my idea was to create a simple 2.5D side-scrolling runner for\n        mobile.</p>\n      <p>All assets and 3D models are free for personal use and including animations, only the programming, menus and\n        level design were developed by me.</p>\n      <p><strong>Platforms:</strong> Android</p>\n      <p><strong>Engine and tools:</strong> Unity Engine, Blender and Adobe Photoshop</p>\n      <p><strong>Programming Language:</strong> C#</p>\n      <p><strong>Time on project:</strong> 2 months</p>\n    </div>\n    <div class=\"col-lg-6\">\n      <h2><strong>Donkey Kong Country HD Remix - (2014)</strong></h2>\n      <iframe src=\"https://www.youtube.com/embed/XQSO8J7crf4\" frameborder=\"0\"\n        allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n      <p><strong>What I did:</strong> This project was the first in which I worked with 3D models and Unity Engine in an\n        attempt to make an HD remake\n        of the Donkey Kong Country Trilogy of the Super Nintendo</p>\n      <p>The entire project including Programming, Level Design, 3D Modeling of objects and HUD images were done\n        entirely by me with the exception of only the 3D models of the characters that I ripped from the original games\n        developed by Nintendo.</p>\n      <p>The project was not completed but it contributed a lot to my studies in different parts of 3D game development.\n      </p>\n      <p>All rights are reserved for Nintendo.</p>\n      <p><strong>Platforms:</strong> PC</p>\n      <p><strong>Engine and tools:</strong> Unity Engine, Blender, Adobe Mixamo and Adobe Photoshop</p>\n      <p><strong>Programming Language:</strong> C#</p>\n      <p><strong>Time on project:</strong> 2 months</p>\n    </div>\n    <div class=\"col-lg-6\">\n      <h2><strong>Mighty Morphin Power Rangers: The New Menace Arrives (2014)</strong></h2>\n      <iframe src=\"https://www.youtube.com/embed/eNv_-V4Bh2o\" frameborder=\"0\"\n        allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n      <p><strong>What I did:</strong> This project was one of the first that I developed on Unity Engine to learn game\n        programming and sprite editing in general. My intention was to recreate the famous game\n        Mighty Morphin Power Rangers: The Movie released for the Super Nintendo in 1995 by Bandai.</p>\n      <p>All the sprites used and assets used in this project were ripped from the original game and only the\n        programming.</p>\n      <p>The project was not completed but it contributed a lot to my studies in different parts of 2D game development.\n      </p>\n      <p>All rights are reserved for Bandai.</p>\n      <p><strong>Platforms:</strong> PC</p>\n      <p><strong>Engine and tools:</strong> Unity Engine and Adobe Photoshop</p>\n      <p><strong>Programming Language:</strong> C#</p>\n      <p><strong>Time on project:</strong> 1 month</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/personal/personal.component.ts":
/*!************************************************!*\
  !*** ./src/app/personal/personal.component.ts ***!
  \************************************************/
/*! exports provided: PersonalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalComponent", function() { return PersonalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PersonalComponent = /** @class */ (function () {
    function PersonalComponent() {
    }
    PersonalComponent.prototype.ngOnInit = function () {
    };
    PersonalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-personal',
            template: __webpack_require__(/*! ./personal.component.html */ "./src/app/personal/personal.component.html"),
            styles: [__webpack_require__(/*! ./personal.component.css */ "./src/app/personal/personal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PersonalComponent);
    return PersonalComponent;
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

/***/ "./src/app/study/study.component.css":
/*!*******************************************!*\
  !*** ./src/app/study/study.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "iframe{\r\n    width: 100%;\r\n    height: 25em;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    /* For mobile phones: */\r\n    iframe{\r\n        height: 15em;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 768px) and (orientation: landscape) {\r\n   \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZHkvc3R1ZHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBOztBQUVBIiwiZmlsZSI6InNyYy9hcHAvc3R1ZHkvc3R1ZHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlmcmFtZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNWVtO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAvKiBGb3IgbW9iaWxlIHBob25lczogKi9cclxuICAgIGlmcmFtZXtcclxuICAgICAgICBoZWlnaHQ6IDE1ZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/study/study.component.html":
/*!********************************************!*\
  !*** ./src/app/study/study.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1 class=\"display-4\">Study Gallery</h1>\n  <p class=\"lead\">These are some registers of my studies</p>\n  <hr class=\"my-4\">\n  <div class=\"row catalog\">\n    <div class=\"col-lg-12\">\n      <h2><strong>Unity Engine 2019 HDRP</strong></h2>\n      <p>This is a simple test rendering my Donkey Kong Country 3D models in Unity Engine with HDR and Raytracing</p>\n      <a href=\"https://drive.google.com/file/d/1DsUWg0JbYR-f_okiZemg3goh97oMFGIr/view?usp=sharing\">\n        <img src=\"https://drive.google.com/uc?export=view&id=1DsUWg0JbYR-f_okiZemg3goh97oMFGIr\">\n      </a>\n    </div>\n    <div class=\"col-lg-12\">\n      <h2><strong>Bedroom Monster Night Project</strong></h2>\n      <p>This is the Render of a 3D model of a children's room that I developed for a first person horror project that I\n        was developing for study.</p>\n      <a href=\"https://drive.google.com/file/d/1GFJmjullgmZStx9yLBZ95exgH0EK7D-E/view?usp=sharing\">\n        <img src=\"https://drive.google.com/uc?export=view&id=1GFJmjullgmZStx9yLBZ95exgH0EK7D-E\">\n      </a>\n    </div>\n    <div class=\"col-lg-12\">\n      <h2><strong>SNES Cartridge Development</strong></h2>\n      <p>This is the development record of the 3D modeling of the SNES cartridge.</p>\n      <div id=\"carouselSNESCartridge\" class=\"carousel slide\" data-ride=\"carousel\">\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item active\">\n            <img src=\"https://drive.google.com/uc?export=view&id=1J_k3egLn6C3dgus4T1bDUE4beOm3npIj\"\n              class=\"d-block w-100\" alt=\"...\">\n          </div>\n          <div class=\"carousel-item\">\n            <img src=\"https://drive.google.com/uc?export=view&id=13KEvCFd9Z89FIIzxmlmVedhsdaze2aYc\"\n              class=\"d-block w-100\" alt=\"...\">\n          </div>\n          <div class=\"carousel-item\">\n            <img src=\"https://drive.google.com/uc?export=view&id=1xyk258-KMCSy4BjI9hYSXSE_GfvUlPmy\"\n              class=\"d-block w-100\" alt=\"...\">\n          </div>\n          <div class=\"carousel-item\">\n            <img src=\"https://drive.google.com/uc?export=view&id=1RC3ZlF8gm89pBRPXTPq_NZEmlX8iXlkf\"\n              class=\"d-block w-100\" alt=\"...\">\n          </div>\n          <div class=\"carousel-item\">\n            <img src=\"https://drive.google.com/uc?export=view&id=1RC3ZlF8gm89pBRPXTPq_NZEmlX8iXlkf\"\n              class=\"d-block w-100\" alt=\"...\">\n          </div>\n        </div>\n        <a class=\"carousel-control-prev\" href=\"#carouselSNESCartridge\" role=\"button\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#carouselSNESCartridge\" role=\"button\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-lg-12\">\n      <h2><strong>Simple Snes 3D Model</strong></h2>\n      <p>This is one Render of a 3D model of a Super Nintendo\n        was developed in Blender for study.</p>\n      <a href=\"https://drive.google.com/file/d/1MnSLrDG5UUpI1dr2nYlIrGr6hAwSHOio/view?usp=sharing\">\n        <img src=\"https://drive.google.com/uc?export=view&id=1MnSLrDG5UUpI1dr2nYlIrGr6hAwSHOio\">\n      </a>\n    </div>\n    <div class=\"col-lg-12\">\n      <h2><strong>Goof Troop HD</strong></h2>\n      <p>This was a test to try to recreate the SNES Goof Troop game.</p>\n      <a href=\"https://drive.google.com/file/d/15mw6LVRtnsY1YpGJSXXRgOG1FEJ_Z6XC/view?usp=sharing\">\n        <img src=\"https://drive.google.com/uc?export=view&id=15mw6LVRtnsY1YpGJSXXRgOG1FEJ_Z6XC\">\n      </a>\n    </div>\n    <div class=\"col-lg-12\">\n      <h2><strong>Resident Evil 3 Remake Development Registers</strong></h2>\n      <p>These are some of the records I made while developing the Resident Evil 3 Remake project</p>\n      <div id=\"carouselResidentEvil\" class=\"carousel slide\" data-ride=\"carousel\">\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item active\">\n            <img src=\"https://drive.google.com/uc?export=view&id=1bRWPRBqGkYJYXXR5bnRC_usnlmzq17ja\"\n              class=\"d-block w-100\" alt=\"...\">\n          </div>\n          <div class=\"carousel-item\">\n            <img src=\"https://drive.google.com/uc?export=view&id=1GmSJFuQcUK3zzO_ZPKgFhDH44JD-n2rF\"\n              class=\"d-block w-100\" alt=\"...\">\n          </div>\n          <div class=\"carousel-item\">\n            <img src=\"https://drive.google.com/uc?export=view&id=1C6mhZQeV-0AJTvOhTH6zTfYOYYe9CW4j\"\n              class=\"d-block w-100\" alt=\"...\">\n          </div>\n          <div class=\"carousel-item\">\n            <img src=\"https://drive.google.com/uc?export=view&id=1BozwKzQSdqe5YsixBOxWNzVm_3STusTY\"\n              class=\"d-block w-100\" alt=\"...\">\n          </div>\n          <div class=\"carousel-item\">\n            <img src=\"https://drive.google.com/uc?export=view&id=1rnLBbfJ3ufgSKSesYxg2MLQoJqSSEy42\"\n              class=\"d-block w-100\" alt=\"...\">\n          </div>\n          <div class=\"carousel-item\">\n            <img src=\"https://drive.google.com/uc?export=view&id=1mnLbJpTJHQfyQn4MM_0AGUby23tNt-Q_\"\n              class=\"d-block w-100\" alt=\"...\">\n          </div>\n          <div class=\"carousel-item\">\n            <img src=\"https://drive.google.com/uc?export=view&id=1SMO8IEhw2Rpgts8vrIx5C1UhG9FVYWKL\"\n              class=\"d-block w-100\" alt=\"...\">\n          </div>\n          <div class=\"carousel-item\">\n            <img src=\"https://drive.google.com/uc?export=view&id=1S7ljsIMKSht1g-GjMgUWGUzZglkUhDT5\"\n              class=\"d-block w-100\" alt=\"...\">\n          </div>\n          <div class=\"carousel-item\">\n            <img src=\"https://drive.google.com/uc?export=view&id=1rXTSjIKQ4Zz9I3CNcecraszqwlXqLMAx\"\n              class=\"d-block w-100\" alt=\"...\">\n          </div>\n          <div class=\"carousel-item\">\n            <img src=\"https://drive.google.com/uc?export=view&id=1rgTn3YykiXPCQO2quvQU3MUgqhrK5sEU\"\n              class=\"d-block w-100\" alt=\"...\">\n          </div>\n          <div class=\"carousel-item\">\n            <img src=\"https://drive.google.com/uc?export=view&id=1u0Xb2XRwijnqe4Ky43PGPd0kdPieHaNz\"\n              class=\"d-block w-100\" alt=\"...\">\n          </div>\n        </div>\n        <a class=\"carousel-control-prev\" href=\"#carouselResidentEvil\" role=\"button\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#carouselResidentEvil\" role=\"button\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-lg-12\">\n      <h2><strong>Donkey Kong Country HD Remix Development Registers</strong></h2>\n      <p>These are some of the records I made while developing the Resident Evil 3 Remake project</p>\n      <div id=\"carouselDKCRemix\" class=\"carousel slide\" data-ride=\"carousel\">\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item active\">\n            <img src=\"https://drive.google.com/uc?export=view&id=1J_0X1AwnPgWzvqVvdzlitVUztVNFte03\"\n              class=\"d-block w-100\" alt=\"...\">\n          </div>\n          <div class=\"carousel-item\">\n            <img src=\"https://drive.google.com/uc?export=view&id=1J3buiMQ90pbQcGgGN87q9H6e_U6honKa\"\n              class=\"d-block w-100\" alt=\"...\">\n          </div>\n          <div class=\"carousel-item\">\n            <img src=\"https://drive.google.com/uc?export=view&id=16YErcEfgwECoq8_Xye1wQ3PZReT5FGJ6\"\n              class=\"d-block w-100\" alt=\"...\">\n          </div>\n          <div class=\"carousel-item\">\n            <img src=\"https://drive.google.com/uc?export=view&id=15kS_FCYYvqKagdytBAn8BWO4pSXe1A_A\"\n              class=\"d-block w-100\" alt=\"...\">\n          </div>\n          <div class=\"carousel-item\">\n            <img src=\"https://drive.google.com/uc?export=view&id=1Aj-TKTzFEBzc5p36FnfLhlZlgtNAkz1M\"\n              class=\"d-block w-100\" alt=\"...\">\n          </div>\n          <div class=\"carousel-item\">\n            <img src=\"https://drive.google.com/uc?export=view&id=18BYf6f3rDLMvjfvwEhXOnniNqer4ghw9\"\n              class=\"d-block w-100\" alt=\"...\">\n          </div>\n          <div class=\"carousel-item\">\n            <img src=\"https://drive.google.com/uc?export=view&id=1gZIiZRTyuCsKMcTqKxE6VEHJF-4QB46H\"\n              class=\"d-block w-100\" alt=\"...\">\n          </div>\n          <div class=\"carousel-item\">\n            <img src=\"https://drive.google.com/uc?export=view&id=1pItzPtI5ZliYLhnav1IkiX8dE6DEP0Xs\"\n              class=\"d-block w-100\" alt=\"...\">\n          </div>\n          <div class=\"carousel-item\">\n            <img src=\"https://drive.google.com/uc?export=view&id=13t5UImqkTbhOmyHrMaGYgNcw3fYcBdWC\"\n              class=\"d-block w-100\" alt=\"...\">\n          </div>\n        </div>\n        <a class=\"carousel-control-prev\" href=\"#carouselDKCRemix\" role=\"button\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#carouselDKCRemix\" role=\"button\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-lg-12\">\n      <h2><strong>Mighty Morphin Power Rangers Development Register</strong></h2>\n      <p>A Simple Screenshot during development of Mighty Morphin Power Rangers to Study</p>\n      <a href=\"https://drive.google.com/file/d/16ABuKBYlyMzdMET5n09EV28Pn3sbyNx3/view?usp=sharing\">\n        <img src=\"https://drive.google.com/uc?export=view&id=16ABuKBYlyMzdMET5n09EV28Pn3sbyNx3\">\n      </a>\n    </div>\n    <div class=\"col-lg-12\">\n      <h2><strong>Street Fighter Study Register</strong></h2>\n      <p>A Simple Screenshot during one of my studies</p>\n      <a href=\"https://drive.google.com/file/d/1P8ROQDgwNZRJZEms5ylTMrqorUUhLs3n/view?usp=sharing\">\n        <img src=\"https://drive.google.com/uc?export=view&id=1P8ROQDgwNZRJZEms5ylTMrqorUUhLs3n\">\n      </a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/study/study.component.ts":
/*!******************************************!*\
  !*** ./src/app/study/study.component.ts ***!
  \******************************************/
/*! exports provided: StudyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyComponent", function() { return StudyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StudyComponent = /** @class */ (function () {
    function StudyComponent() {
    }
    StudyComponent.prototype.ngOnInit = function () {
    };
    StudyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-study',
            template: __webpack_require__(/*! ./study.component.html */ "./src/app/study/study.component.html"),
            styles: [__webpack_require__(/*! ./study.component.css */ "./src/app/study/study.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StudyComponent);
    return StudyComponent;
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