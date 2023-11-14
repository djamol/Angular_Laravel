(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([["main"],{

/***/ 2483:
/*!*********************************************************!*\
  !*** ./resources/angular/src/app/app-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/home/home.component */ 7612);
/* harmony import */ var _component_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/about/about.component */ 1153);
/* harmony import */ var _component_admin_book_admin_book_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/admin-book/admin-book.component */ 9236);
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/login/login.component */ 7219);
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/register/register.component */ 1717);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);








const routes = [{
  path: '',
  component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'about',
  component: _component_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent
}, {
  path: 'admin',
  component: _component_admin_book_admin_book_component__WEBPACK_IMPORTED_MODULE_2__.AdminBookComponent
}, {
  path: 'login',
  component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent
}, {
  path: 'register',
  component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__.RegisterComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 5803:
/*!****************************************************!*\
  !*** ./resources/angular/src/app/app.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/auth.service */ 241);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




function AppComponent_li_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7)(1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function AppComponent_li_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7)(1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function AppComponent_li_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7)(1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_li_16_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function AppComponent_li_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7)(1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class AppComponent {
  constructor(AuthService) {
    this.AuthService = AuthService;
    this.title = 'angular';
    this.token = '';
    this.flag_status = true;
    this.notification_status = {
      "show": false
    };
    this.token = this.AuthService.getToken();
  }
  ngOnInit() {}
  showMessage(title, message, time, err = 0) {
    if (err == 1) {
      this.flag_status = false;
    } else {
      this.flag_status = true;
    }
    this.notification_status.show = true;
    this.notification_status.title = title;
    this.notification_status.message = message;
    this.notification_status.time = time;
    setTimeout(() => {
      this.notification_status.show = false;
    }, 3000);
  }
  logout() {
    this.AuthService.cookie.delCookie('token');
    this.token = '';
    location.reload();
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 29,
  vars: 9,
  consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], ["routerLink", "/", 1, "nav-link"], ["routerLink", "/about", 1, "nav-link"], ["class", "nav-item", 4, "ngIf"], [1, "toast-container", "position-fixed", "bottom-0", "end-0", "p-3", 3, "hidden"], ["id", "liveToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "notification", 3, "ngClass"], [1, "toast-header"], [1, "me-auto"], ["type", "button", "data-bs-dismiss", "toast", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "toast-body"], ["routerLink", "/login", 1, "nav-link"], ["routerLink", "/register", 1, "nav-link"], [1, "nav-link", 3, "click"], ["routerLink", "/admin", 1, "nav-link"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Welcome");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "ul", 6)(8, "li", 7)(9, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 7)(12, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "About Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AppComponent_li_14_Template, 3, 0, "li", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AppComponent_li_15_Template, 3, 0, "li", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AppComponent_li_16_Template, 3, 0, "li", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AppComponent_li_17_Template, 3, 0, "li", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11)(20, "div", 12)(21, "div", 13)(22, "strong", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_26_listener() {
        return ctx.notification_status.show = false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.AuthService.getToken() == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.AuthService.getToken() == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.AuthService.getToken() != "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.AuthService.getToken() != "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.notification_status.show == false);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.flag_status ? "status_g" : "status_r");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.notification_status.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.notification_status.time);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.notification_status.message, " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
  styles: [".notification[_ngcontent-%COMP%]{\n    --bs-toast-zindex: 1090;\n    --bs-toast-padding-x: .75rem;\n    --bs-toast-padding-y: .5rem;\n    --bs-toast-spacing: 1.5rem;\n    --bs-toast-max-width: 350px;\n    --bs-toast-font-size: .875rem;\n    --bs-toast-color: ;\n    --bs-toast-bg: rgba(255, 255, 255, .85);\n    --bs-toast-border-width: 1px;\n    --bs-toast-border-color: var(--bs-border-color-translucent);\n    --bs-toast-border-radius: .375rem;\n    --bs-toast-box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);\n    --bs-toast-header-color: #6c757d;\n    --bs-toast-header-bg: rgba(255, 255, 255, .85);\n    --bs-toast-header-border-color: rgba(0, 0, 0, .05);\n    width: var(--bs-toast-max-width);\n    max-width: 100%;\n    font-size: var(--bs-toast-font-size);\n    color: var(--bs-toast-color);\n    pointer-events: auto;\n    background-color: var(--bs-toast-bg);\n    background-clip: padding-box;\n    border: var(--bs-toast-border-width) solid var(--bs-toast-border-color);\n    box-shadow: var(--bs-toast-box-shadow);\n    border-radius: var(--bs-toast-border-radius)\n\n}\n.status_g[_ngcontent-%COMP%]{\nbackground: #aee1ae;\n}\n.status_r[_ngcontent-%COMP%]{\n    background: #fb995f;\n    }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9hbmd1bGFyL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsdUNBQXVDO0lBQ3ZDLDRCQUE0QjtJQUM1QiwyREFBMkQ7SUFDM0QsaUNBQWlDO0lBQ2pDLHNEQUFzRDtJQUN0RCxnQ0FBZ0M7SUFDaEMsOENBQThDO0lBQzlDLGtEQUFrRDtJQUNsRCxnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLG9DQUFvQztJQUNwQyw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLG9DQUFvQztJQUNwQyw0QkFBNEI7SUFDNUIsdUVBQXVFO0lBQ3ZFLHNDQUFzQztJQUN0Qzs7QUFFSjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyIubm90aWZpY2F0aW9ue1xuICAgIC0tYnMtdG9hc3QtemluZGV4OiAxMDkwO1xuICAgIC0tYnMtdG9hc3QtcGFkZGluZy14OiAuNzVyZW07XG4gICAgLS1icy10b2FzdC1wYWRkaW5nLXk6IC41cmVtO1xuICAgIC0tYnMtdG9hc3Qtc3BhY2luZzogMS41cmVtO1xuICAgIC0tYnMtdG9hc3QtbWF4LXdpZHRoOiAzNTBweDtcbiAgICAtLWJzLXRvYXN0LWZvbnQtc2l6ZTogLjg3NXJlbTtcbiAgICAtLWJzLXRvYXN0LWNvbG9yOiA7XG4gICAgLS1icy10b2FzdC1iZzogcmdiYSgyNTUsIDI1NSwgMjU1LCAuODUpO1xuICAgIC0tYnMtdG9hc3QtYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgLS1icy10b2FzdC1ib3JkZXItY29sb3I6IHZhcigtLWJzLWJvcmRlci1jb2xvci10cmFuc2x1Y2VudCk7XG4gICAgLS1icy10b2FzdC1ib3JkZXItcmFkaXVzOiAuMzc1cmVtO1xuICAgIC0tYnMtdG9hc3QtYm94LXNoYWRvdzogMCAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgLjE1KTtcbiAgICAtLWJzLXRvYXN0LWhlYWRlci1jb2xvcjogIzZjNzU3ZDtcbiAgICAtLWJzLXRvYXN0LWhlYWRlci1iZzogcmdiYSgyNTUsIDI1NSwgMjU1LCAuODUpO1xuICAgIC0tYnMtdG9hc3QtaGVhZGVyLWJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMDUpO1xuICAgIHdpZHRoOiB2YXIoLS1icy10b2FzdC1tYXgtd2lkdGgpO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IHZhcigtLWJzLXRvYXN0LWZvbnQtc2l6ZSk7XG4gICAgY29sb3I6IHZhcigtLWJzLXRvYXN0LWNvbG9yKTtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy10b2FzdC1iZyk7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICBib3JkZXI6IHZhcigtLWJzLXRvYXN0LWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tYnMtdG9hc3QtYm9yZGVyLWNvbG9yKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1icy10b2FzdC1ib3gtc2hhZG93KTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1icy10b2FzdC1ib3JkZXItcmFkaXVzKVxuXG59XG4uc3RhdHVzX2d7XG5iYWNrZ3JvdW5kOiAjYWVlMWFlO1xufVxuLnN0YXR1c19ye1xuICAgIGJhY2tncm91bmQ6ICNmYjk5NWY7XG4gICAgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1481:
/*!*************************************************!*\
  !*** ./resources/angular/src/app/app.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 2483);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5803);
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/home/home.component */ 7612);
/* harmony import */ var _component_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/about/about.component */ 1153);
/* harmony import */ var _component_admin_book_admin_book_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/admin-book/admin-book.component */ 9236);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _service_book_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/book.service */ 9752);
/* harmony import */ var _service_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/category.service */ 4462);
/* harmony import */ var _service_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/cookie.service */ 6755);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.service */ 7264);
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/login/login.component */ 7219);
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/register/register.component */ 1717);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
  providers: [_app_service__WEBPACK_IMPORTED_MODULE_8__.AppService, _service_book_service__WEBPACK_IMPORTED_MODULE_5__.BookService, _service_category_service__WEBPACK_IMPORTED_MODULE_6__.CategoryService, _service_cookie_service__WEBPACK_IMPORTED_MODULE_7__.CookieService],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _component_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _component_about_about_component__WEBPACK_IMPORTED_MODULE_3__.AboutComponent, _component_admin_book_admin_book_component__WEBPACK_IMPORTED_MODULE_4__.AdminBookComponent, _auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__.LoginComponent, _auth_register_register_component__WEBPACK_IMPORTED_MODULE_10__.RegisterComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule]
  });
})();

/***/ }),

/***/ 7264:
/*!**************************************************!*\
  !*** ./resources/angular/src/app/app.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppService": () => (/* binding */ AppService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



class AppService {
  constructor(http, location) {
    this.http = http;
    this.location = location;
    this.apiUrl = this.getApiUrl('api');
    this.apiUrl = window.location.href.replace('/assets/angular', '');
    this.apiUrl = this.apiUrl + "api";
    console.log("apiURL", this.apiUrl);
  }
  getApiUrl(endpoint) {
    const domainUrl = this.location.prepareExternalUrl('');
    const apiUrl = `${domainUrl}/api/${endpoint}`;
    return apiUrl;
  }
  addDefaultParam(method = "post", data = {}) {
    data = {
      ...data,
      user_token: 'test'
    };
    // data['website_id'] = data['website_id']||this.website_id;
    // data['user_token'] = this.user_token;
    if (method == "post") {
      return data;
    } else {
      return typeof data == "string" ? data : Object.keys(data).map(function (k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
      }).join("&");
    }
  }
}
AppService.ɵfac = function AppService_Factory(t) {
  return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.Location));
};
AppService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: AppService,
  factory: AppService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7219:
/*!*****************************************************************!*\
  !*** ./resources/angular/src/app/auth/login/login.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/auth.service */ 241);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app/app.component */ 5803);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);





const _c0 = function () {
  return {
    standalone: true
  };
};
class LoginComponent {
  constructor(AuthService, router, main) {
    this.AuthService = AuthService;
    this.router = router;
    this.main = main;
    this.form = {};
  }
  ngOnInit() {
    //this.register();
  }
  login() {
    const observer = {
      next: response => {
        if (response.token) {
          this.AuthService.cookie.storeCookie('token', response.token);
          this.router.navigate(['/admin']);
        } else {
          this.main.showMessage('Error :' + response.status, "Error Auth", '', 1);
        }
      },
      error: error => {
        console.log('Error:', error.error);
        this.main.showMessage('Error :' + error.status, error.error.error, '', 1);
      },
      complete: () => {
        console.log('Complete');
      }
    };
    this.AuthService.login(this.form).subscribe(observer);
    this.AuthService.login(this.form).subscribe(data => {
      console.log("e", data);
      if (data.token) {
        this.AuthService.cookie.storeCookie('token', data.token);
        this.router.navigate(['/admin']);
      } else if (data.error) {
        this.main.showMessage('Error :' + data.status, data.error, '');
      }
      console.log("login", data);
    });
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 28,
  vars: 6,
  consts: [[1, "vh-100", 2, "background-color", "#eee"], [1, "container", "h-100"], [1, "row", "d-flex", "justify-content-center", "align-items-center", "h-100"], [1, "col-lg-12", "col-xl-11"], [1, "card", "text-black", 2, "border-radius", "25px"], [1, "card-body", "p-md-5"], [1, "row", "justify-content-center"], [1, "col-md-10", "col-lg-6", "col-xl-5", "order-2", "order-lg-1"], [1, "text-center", "h1", "fw-bold", "mb-5", "mx-1", "mx-md-4", "mt-4"], [1, "mx-1", "mx-md-4"], [1, "d-flex", "flex-row", "align-items-center", "mb-4"], [1, "fas", "fa-envelope", "fa-lg", "me-3", "fa-fw"], [1, "form-outline", "flex-fill", "mb-0"], ["type", "email", "id", "form3Example3c", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "form3Example3c", 1, "form-label"], [1, "fas", "fa-lock", "fa-lg", "me-3", "fa-fw"], ["type", "password", "id", "form3Example4c", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "form3Example4c", 1, "form-label"], [1, "d-flex", "justify-content-center", "mx-4", "mb-3", "mb-lg-4"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", 3, "click"], [1, "col-md-10", "col-lg-6", "col-xl-7", "d-flex", "align-items-center", "order-1", "order-lg-2"], ["src", "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp", "alt", "Sample image", 1, "img-fluid"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Sign in");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "form", 9)(11, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 12)(14, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) {
        return ctx.form.email = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Your Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_20_listener($event) {
        return ctx.form.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 18)(24, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_24_listener() {
        return ctx.login();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "img", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.form.email)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.form.password)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c0));
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1717:
/*!***********************************************************************!*\
  !*** ./resources/angular/src/app/auth/register/register.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/auth.service */ 241);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.component */ 5803);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);





const _c0 = function () {
  return {
    standalone: true
  };
};
class RegisterComponent {
  constructor(AuthService, router, main) {
    this.AuthService = AuthService;
    this.router = router;
    this.main = main;
    this.form = {};
  }
  ngOnInit() {
    //this.register();
  }
  register() {
    const observer = {
      next: response => {
        if (response.token) {
          this.AuthService.cookie.storeCookie('token', response.token);
          this.router.navigate(['/admin']);
          this.main.showMessage('Success', 'Successfully Logged', '');
        }
        let token = this.AuthService.cookie.readCookie('token');
        console.log("token--", token);
        console.log("login", response);
      },
      error: error => {
        console.log('Error:', error.error);
        this.main.showMessage('Error :' + error.status, error.error.message, '', 1);
      },
      complete: () => {
        console.log('Complete');
      }
    };
    this.AuthService.register(this.form).subscribe(observer);
  }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
  return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent));
};
RegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: RegisterComponent,
  selectors: [["app-register"]],
  decls: 40,
  vars: 12,
  consts: [[1, "vh-100", 2, "background-color", "#eee"], [1, "container", "h-100"], [1, "row", "d-flex", "justify-content-center", "align-items-center", "h-100"], [1, "col-lg-12", "col-xl-11"], [1, "card", "text-black", 2, "border-radius", "25px"], [1, "card-body", "p-md-5"], [1, "row", "justify-content-center"], [1, "col-md-10", "col-lg-6", "col-xl-5", "order-2", "order-lg-1"], [1, "text-center", "h1", "fw-bold", "mb-5", "mx-1", "mx-md-4", "mt-4"], [1, "mx-1", "mx-md-4"], [1, "d-flex", "flex-row", "align-items-center", "mb-4"], [1, "fas", "fa-user", "fa-lg", "me-3", "fa-fw"], [1, "form-outline", "flex-fill", "mb-0"], ["type", "text", "id", "form3Example1c", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "form3Example1c", 1, "form-label"], [1, "fas", "fa-envelope", "fa-lg", "me-3", "fa-fw"], ["type", "email", "id", "form3Example3c", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "form3Example3c", 1, "form-label"], [1, "fas", "fa-lock", "fa-lg", "me-3", "fa-fw"], ["type", "password", "id", "form3Example4c", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "form3Example4c", 1, "form-label"], [1, "form-check", "d-flex", "justify-content-center", "mb-5"], ["type", "checkbox", "value", "", "id", "form2Example3c", 1, "form-check-input", "me-2", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "form2Example3", 1, "form-check-label"], ["href", "#!"], [1, "d-flex", "justify-content-center", "mx-4", "mb-3", "mb-lg-4"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", 3, "click"], [1, "col-md-10", "col-lg-6", "col-xl-7", "d-flex", "align-items-center", "order-1", "order-lg-2"], ["src", "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp", "alt", "Sample image", 1, "img-fluid"]],
  template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Sign up");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "form", 9)(11, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 12)(14, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_14_listener($event) {
        return ctx.form.name = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Your Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_20_listener($event) {
        return ctx.form.email = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Your Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 12)(26, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_26_listener($event) {
        return ctx.form.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 21)(30, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_30_listener($event) {
        return ctx.form.tos = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " I agree all statements in ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Terms of service");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 25)(36, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_36_listener() {
        return ctx.register();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "img", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.form.name)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.form.email)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.form.password)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.form.tos)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](11, _c0));
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1153:
/*!**********************************************************************!*\
  !*** ./resources/angular/src/app/component/about/about.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class AboutComponent {}
AboutComponent.ɵfac = function AboutComponent_Factory(t) {
  return new (t || AboutComponent)();
};
AboutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AboutComponent,
  selectors: [["app-about"]],
  decls: 4,
  vars: 0,
  consts: [["href", "http://github.com/djamol"]],
  template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Amol Patil");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "GitHUB");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9236:
/*!********************************************************************************!*\
  !*** ./resources/angular/src/app/component/admin-book/admin-book.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminBookComponent": () => (/* binding */ AdminBookComponent)
/* harmony export */ });
/* harmony import */ var _model_book_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/book.model */ 6030);
/* harmony import */ var _model_category_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/category.model */ 21);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/book.service */ 9752);
/* harmony import */ var _service_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/category.service */ 4462);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.component */ 5803);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/auth.service */ 241);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);









function AdminBookComponent_div_8_option_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", category_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](category_r6.name);
  }
}
function AdminBookComponent_div_8_tr_28_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const book_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", book_r7.title, " ");
  }
}
const _c0 = function () {
  return {
    standalone: true
  };
};
function AdminBookComponent_div_8_tr_28_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AdminBookComponent_div_8_tr_28_ng_container_3_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21);
      const book_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](book_r7.title = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const book_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", book_r7.title)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](2, _c0));
  }
}
function AdminBookComponent_div_8_tr_28_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const book_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", book_r7.author, " ");
  }
}
function AdminBookComponent_div_8_tr_28_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AdminBookComponent_div_8_tr_28_ng_container_6_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const book_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](book_r7.author = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const book_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", book_r7.author)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](2, _c0));
  }
}
function AdminBookComponent_div_8_tr_28_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const book_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", book_r7.isbn, " ");
  }
}
function AdminBookComponent_div_8_tr_28_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AdminBookComponent_div_8_tr_28_ng_container_9_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31);
      const book_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](book_r7.isbn = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const book_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", book_r7.isbn)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](2, _c0));
  }
}
function AdminBookComponent_div_8_tr_28_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const book_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", book_r7.genre, " ");
  }
}
function AdminBookComponent_div_8_tr_28_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AdminBookComponent_div_8_tr_28_ng_container_12_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36);
      const book_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](book_r7.genre = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const book_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", book_r7.genre)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](2, _c0));
  }
}
function AdminBookComponent_div_8_tr_28_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const book_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", book_r7.category_id, " ");
  }
}
function AdminBookComponent_div_8_tr_28_ng_container_15_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", category_r40.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](category_r40.name);
  }
}
function AdminBookComponent_div_8_tr_28_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AdminBookComponent_div_8_tr_28_ng_container_15_Template_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r43);
      const book_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](book_r7.category_id = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AdminBookComponent_div_8_tr_28_ng_container_15_option_2_Template, 2, 2, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const book_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", book_r7.category_id)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r17.categories);
  }
}
function AdminBookComponent_div_8_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AdminBookComponent_div_8_tr_28_ng_container_2_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AdminBookComponent_div_8_tr_28_ng_container_3_Template, 2, 3, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, AdminBookComponent_div_8_tr_28_ng_container_5_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, AdminBookComponent_div_8_tr_28_ng_container_6_Template, 2, 3, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, AdminBookComponent_div_8_tr_28_ng_container_8_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, AdminBookComponent_div_8_tr_28_ng_container_9_Template, 2, 3, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, AdminBookComponent_div_8_tr_28_ng_container_11_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, AdminBookComponent_div_8_tr_28_ng_container_12_Template, 2, 3, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, AdminBookComponent_div_8_tr_28_ng_container_14_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, AdminBookComponent_div_8_tr_28_ng_container_15_Template, 3, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "td")(17, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminBookComponent_div_8_tr_28_Template_button_click_17_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r46);
      const book_r7 = restoredCtx.$implicit;
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r45.toggleEditing(book_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminBookComponent_div_8_tr_28_Template_button_click_19_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r46);
      const book_r7 = restoredCtx.$implicit;
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r47.deleteBook(book_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const book_r7 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r4.isEditing[book_r7.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.isEditing[book_r7.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r4.isEditing[book_r7.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.isEditing[book_r7.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r4.isEditing[book_r7.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.isEditing[book_r7.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r4.isEditing[book_r7.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.isEditing[book_r7.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r4.isEditing[book_r7.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.isEditing[book_r7.id]);
  }
}
function AdminBookComponent_div_8_nav_29_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u00AB Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("href", ctx_r48.page_data.prevPageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function AdminBookComponent_div_8_nav_29_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u00AB Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AdminBookComponent_div_8_nav_29_li_5_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const link_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("href", ctx_r54.page_data.link.url, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](link_r53.label);
  }
}
function AdminBookComponent_div_8_nav_29_li_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const link_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](link_r53.label);
  }
}
function AdminBookComponent_div_8_nav_29_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AdminBookComponent_div_8_nav_29_li_5_a_1_Template, 2, 2, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AdminBookComponent_div_8_nav_29_li_5_span_2_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r50.page_data.currentPage === ctx_r50.page_data.link.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r50.page_data.link.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r50.page_data.link.url);
  }
}
function AdminBookComponent_div_8_nav_29_a_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Next \u00BB");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("href", ctx_r51.page_data.nextPageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function AdminBookComponent_div_8_nav_29_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Next \u00BB");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AdminBookComponent_div_8_nav_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nav", 17)(1, "ul", 18)(2, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AdminBookComponent_div_8_nav_29_a_3_Template, 2, 1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, AdminBookComponent_div_8_nav_29_span_4_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, AdminBookComponent_div_8_nav_29_li_5_Template, 3, 4, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, AdminBookComponent_div_8_nav_29_a_7_Template, 2, 1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, AdminBookComponent_div_8_nav_29_span_8_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("disabled", !ctx_r5.page_data.prevPageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.page_data.prevPageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r5.page_data.prevPageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r5.page_data.links);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("disabled", !ctx_r5.page_data.nextPageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.page_data.nextPageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r5.page_data.nextPageUrl);
  }
}
function AdminBookComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Book List");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "form")(4, "div", 4)(5, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AdminBookComponent_div_8_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r59);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r58.searchKey = $event);
    })("input", function AdminBookComponent_div_8_Template_input_input_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r59);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r60.filterBooks());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 4)(7, "select", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AdminBookComponent_div_8_Template_select_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r59);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r61.category_id = $event);
    })("change", function AdminBookComponent_div_8_Template_select_change_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r59);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r62.filterBooks());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "All Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, AdminBookComponent_div_8_option_10_Template, 2, 2, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 0)(12, "table", 9)(13, "thead")(14, "tr")(15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Author");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "ISBN");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Genre");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, AdminBookComponent_div_8_tr_28_Template, 21, 10, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, AdminBookComponent_div_8_nav_29_Template, 9, 9, "nav", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.searchKey)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.category_id)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](8, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.filteredBooks);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.unFilteredBooks);
  }
}
function AdminBookComponent_div_9_option_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", category_r64.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](category_r64.name);
  }
}
function AdminBookComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Add Book");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "form", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function AdminBookComponent_div_9_Template_form_ngSubmit_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r66);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r65.addBook());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4)(5, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AdminBookComponent_div_9_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r66);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r67.selectedBook.title = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 4)(7, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AdminBookComponent_div_9_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r66);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r68.selectedBook.author = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 4)(9, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AdminBookComponent_div_9_Template_select_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r66);
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r69.selectedBook.category_id = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, AdminBookComponent_div_9_option_12_Template, 2, 2, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 4)(14, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AdminBookComponent_div_9_Template_input_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r66);
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r70.selectedBook.description = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 4)(16, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AdminBookComponent_div_9_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r66);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r71.selectedBook.genre = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 4)(18, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AdminBookComponent_div_9_Template_input_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r66);
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r72.selectedBook.image = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 4)(20, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AdminBookComponent_div_9_Template_input_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r66);
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r73.selectedBook.isbn = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 4)(22, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AdminBookComponent_div_9_Template_input_ngModelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r66);
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r74.selectedBook.publisher = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Add Book");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r1.selectedBook.title)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](17, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r1.selectedBook.author)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](18, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r1.selectedBook.category_id)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](19, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r1.selectedBook.description)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](20, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r1.selectedBook.genre)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](21, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r1.selectedBook.image)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](22, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r1.selectedBook.isbn)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](23, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r1.selectedBook.publisher)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](24, _c0));
  }
}
function AdminBookComponent_div_10_tr_18_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const category_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", category_r76.name, " ");
  }
}
function AdminBookComponent_div_10_tr_18_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AdminBookComponent_div_10_tr_18_ng_container_5_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r82);
      const category_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](category_r76.name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const category_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", category_r76.name)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](2, _c0));
  }
}
function AdminBookComponent_div_10_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, AdminBookComponent_div_10_tr_18_ng_container_4_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, AdminBookComponent_div_10_tr_18_ng_container_5_Template, 2, 3, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "td")(7, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminBookComponent_div_10_tr_18_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r85);
      const category_r76 = restoredCtx.$implicit;
      const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r84.toggleEditingCategories(category_r76));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminBookComponent_div_10_tr_18_Template_button_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r85);
      const category_r76 = restoredCtx.$implicit;
      const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r86.deleteCategory(category_r76));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const category_r76 = ctx.$implicit;
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", category_r76.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r75.isEditing[category_r76.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r75.isEditing[category_r76.id]);
  }
}
function AdminBookComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Add Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "form", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function AdminBookComponent_div_10_Template_form_ngSubmit_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r88);
      const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r87.addCategory());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AdminBookComponent_div_10_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r88);
      const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r89.selectedCategory.name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Add Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 0)(8, "table", 9)(9, "thead")(10, "tr")(11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Category Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, AdminBookComponent_div_10_tr_18_Template, 11, 3, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r2.selectedCategory.name)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.categories);
  }
}
class AdminBookComponent {
  constructor(bookService, categoryService, cdr, main, auth) {
    this.bookService = bookService;
    this.categoryService = categoryService;
    this.cdr = cdr;
    this.main = main;
    this.auth = auth;
    this.books = [];
    this.filteredBooks = [];
    this.unFilteredBooks = false;
    this.searchKey = '';
    this.category_id = '0';
    this.show = 1;
    this.selectedCategory = new _model_category_model__WEBPACK_IMPORTED_MODULE_1__.Category();
    this.categories = [];
    this.isEditing = [];
    this.selectedBook = new _model_book_model__WEBPACK_IMPORTED_MODULE_0__.Book();
  }
  ngOnInit() {
    this.getBooks();
    this.getCategories();
    console.log("auth", this.auth.getToken());
    console.log("auth api", this.auth.apiUrl);
  }
  /*
      getBooks() {
        this.bookService.getBooks().subscribe((data: Book[]) => {
          this.books = data;
          this.filteredBooks = this.books; // Initialize the filtered list
        });
      }
  */
  toggleEditing(book) {
    if (this.isEditing[book.id]) {
      this.isEditing[book.id] = false;
      this.editBook(book);
      this.getBooks();
    } else {
      this.isEditing[book.id] = true;
    }
  }
  toggleEditingCategories(category) {
    if (this.isEditing[category.id]) {
      this.isEditing[category.id] = false;
      this.editCategory(category);
      this.getCategories();
    } else {
      this.isEditing[category.id] = true;
    }
  }
  filterBooks() {
    if (this.category_id == 'All' || this.category_id == 0) {
      this.filteredBooks = this.books.filter(book => book.title.toLowerCase().includes(this.searchKey.toLowerCase()));
      this.unFilteredBooks = true;
      return;
    }
    this.unFilteredBooks = false;
    this.filteredBooks = this.books.filter(book => book.title.toLowerCase().includes(this.searchKey.toLowerCase()) && book.category_id == this.category_id);
    this.cdr.detectChanges();
  }
  getBooks() {
    this.bookService.getBooks().subscribe(books => {
      this.books = books.data;
      this.filteredBooks = this.books;
      this.page_data = books;
      this.unFilteredBooks = true;
    });
  }
  getCategories() {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
  addBook() {
    this.bookService.createBook(this.selectedBook).subscribe(() => {
      this.getBooks();
      this.selectedBook = new _model_book_model__WEBPACK_IMPORTED_MODULE_0__.Book();
      this.main.showMessage('Success', 'Successfully created a new book.', '');
    });
  }
  editBook(book) {
    this.bookService.updateBook(book.id, book).subscribe(() => {
      this.getBooks();
      this.main.showMessage('Success', 'Book successfully updated', '');
    });
  }
  deleteBook(book) {
    this.bookService.deleteBook(book.id).subscribe(() => {
      this.getBooks();
      this.main.showMessage('Success', 'Book successfully deleted', '');
    });
  }
  addCategory() {
    this.categoryService.createCategory(this.selectedCategory).subscribe(() => {
      this.getCategories();
      this.selectedCategory = new _model_category_model__WEBPACK_IMPORTED_MODULE_1__.Category();
      this.main.showMessage('Success', 'Successfully created a new category.', '');
    });
  }
  editCategory(category) {
    this.categoryService.updateCategory(category.id, category).subscribe(() => {
      this.getCategories();
      this.main.showMessage('Success', 'Category successfully updated', '');
    });
  }
  deleteCategory(category) {
    this.categoryService.deleteCategory(category.id).subscribe(() => {
      this.getCategories();
      this.main.showMessage('Success', 'Category successfully deleted', '');
    });
  }
}
AdminBookComponent.ɵfac = function AdminBookComponent_Factory(t) {
  return new (t || AdminBookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_book_service__WEBPACK_IMPORTED_MODULE_2__.BookService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_category_service__WEBPACK_IMPORTED_MODULE_3__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService));
};
AdminBookComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: AdminBookComponent,
  selectors: [["app-admin-book"]],
  decls: 11,
  vars: 3,
  consts: [[1, "container"], [1, "btn-group"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-primary", 3, "click"], [4, "ngIf"], [1, "form-group"], ["type", "text", "value", "", "placeholder", "Search by Title", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange", "input"], [1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange", "change"], ["value", "All"], [3, "value", 4, "ngFor", "ngForOf"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], ["aria-label", "Page navigation", 4, "ngIf"], [3, "value"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-danger", 3, "click"], ["type", "text", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["name", "category_id", "id", "category_id", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["aria-label", "Page navigation"], [1, "pagination"], [1, "page-item"], ["class", "page-link", 3, "href", 4, "ngIf"], ["class", "page-link", 4, "ngIf"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "page-link", 3, "href"], [1, "page-link"], [3, "ngSubmit"], ["name", "title", "placeholder", "Title", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["name", "author", "placeholder", "Author", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "category_id"], ["name", "description", "placeholder", "Description", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["name", "genre", "placeholder", "Genre", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["name", "image", "placeholder", "Image", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["name", "isbn", "placeholder", "ISBN", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["name", "publisher", "placeholder", "Publisher", "required", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary"], ["placeholder", "Category Name", "required", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "submit"]],
  template: function AdminBookComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminBookComponent_Template_button_click_2_listener() {
        return ctx.show = 1;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Books ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminBookComponent_Template_button_click_4_listener() {
        return ctx.show = 2;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Add Book ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminBookComponent_Template_button_click_6_listener() {
        return ctx.show = 3;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " Categories ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, AdminBookComponent_div_8_Template, 30, 9, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, AdminBookComponent_div_9_Template, 25, 25, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, AdminBookComponent_div_10_Template, 19, 4, "div", 3);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.show == 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.show == 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.show == 3);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7612:
/*!********************************************************************!*\
  !*** ./resources/angular/src/app/component/home/home.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _service_book_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/book.service */ 9752);
/* harmony import */ var _service_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/category.service */ 4462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);





function HomeComponent_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", category_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](category_r2.name);
  }
}
function HomeComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 11)(3, "div", 12)(4, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Add to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const book_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", book_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](book_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](book_r3.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](book_r3.description);
  }
}
const _c0 = function () {
  return {
    standalone: true
  };
};
class HomeComponent {
  constructor(bookService, cdr, categoryService) {
    this.bookService = bookService;
    this.cdr = cdr;
    this.categoryService = categoryService;
    this.books = [];
    this.filteredBooks = [];
    this.categories = [];
    this.searchKey = '';
    this.category_id = '0';
    this.login_b = true;
    this.unFilteredBooks = false;
  }
  ngOnInit() {
    //this.login();
    this.getBooks();
    this.getCategories();
  }
  /*
      login() {
        this.AuthService.login({
          "name":"amol",
          "email":"amol@asf.in",
          "password":"password"
      }).subscribe((data: any) => {
          this.AuthService.cookie.storeCookie('token',data.token);
          console.log("login",data.token);
      });
      } */
  buttonToogle() {
    this.login_b = !this.login_b;
  }
  getBooks() {
    this.bookService.getBooks().subscribe(books => {
      this.books = books.data;
      this.filteredBooks = this.books;
      this.page_data = books;
      this.unFilteredBooks = true;
    });
  }
  filterBooks() {
    if (this.category_id == 'All' || this.category_id == 0) {
      this.filteredBooks = this.books.filter(book => book.title.toLowerCase().includes(this.searchKey.toLowerCase()));
      this.unFilteredBooks = true;
      return;
    }
    this.unFilteredBooks = false;
    this.filteredBooks = this.books.filter(book => book.title.toLowerCase().includes(this.searchKey.toLowerCase()) && book.category_id == this.category_id);
    this.cdr.detectChanges();
  }
  getCategories() {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_book_service__WEBPACK_IMPORTED_MODULE_0__.BookService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_category_service__WEBPACK_IMPORTED_MODULE_1__.CategoryService));
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 12,
  vars: 8,
  consts: [[1, "container"], [1, "row"], [1, "form-group"], ["type", "text", "value", "", "placeholder", "Search by Title", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange", "input"], [1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange", "change"], ["value", "All"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [3, "value"], [1, "col-md-4"], ["alt", "Book Image", 1, "card-img-top", 3, "src"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle", "mb-2", "text-muted"], [1, "card-text"], [1, "btn", "btn-primary"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form")(3, "div", 2)(4, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_4_listener($event) {
        return ctx.searchKey = $event;
      })("input", function HomeComponent_Template_input_input_4_listener() {
        return ctx.filterBooks();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2)(6, "select", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_select_ngModelChange_6_listener($event) {
        return ctx.category_id = $event;
      })("change", function HomeComponent_Template_select_change_6_listener() {
        return ctx.filterBooks();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "All Categories");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, HomeComponent_option_9_Template, 2, 2, "option", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, HomeComponent_div_11_Template, 12, 4, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchKey)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.category_id)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.categories);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.filteredBooks);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6030:
/*!*******************************************************!*\
  !*** ./resources/angular/src/app/model/book.model.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Book": () => (/* binding */ Book)
/* harmony export */ });
class Book {
  constructor() {
    this.id = 0;
    this.title = '';
    this.author = '';
    this.genre = '';
    this.description = '';
    this.isbn = '';
    this.image = '';
    this.published = new Date();
    this.publisher = '';
    this.category_id = 0;
  }
}

/***/ }),

/***/ 21:
/*!***********************************************************!*\
  !*** ./resources/angular/src/app/model/category.model.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Category": () => (/* binding */ Category)
/* harmony export */ });
class Category {
  constructor() {
    this.id = 0;
    this.name = '';
  }
}

/***/ }),

/***/ 241:
/*!***********************************************************!*\
  !*** ./resources/angular/src/app/service/auth.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _cookie_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookie.service */ 6755);






class AuthService {
  constructor(http, location, cookie) {
    this.http = http;
    this.location = location;
    this.cookie = cookie;
    // HTTP headers, if needed
    this.httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.apiUrl = this.getApiUrl('api');
    this.apiUrl = window.location.href.replace('/assets/angular', '');
    this.apiUrl = this.apiUrl + "api";
    console.log("apiURL", this.apiUrl);
    //this.apiUrl="https://amol.com/api"
    //console.log("apiURL",this.apiUrl);
  }

  getApiUrl(endpoint) {
    const domainUrl = this.location.prepareExternalUrl('');
    const apiUrl = `${domainUrl}/api/${endpoint}`;
    return apiUrl;
  }
  getToken() {
    return this.cookie.readCookie('token');
  }
  login(auth) {
    return this.http.post(this.apiUrl + "/login", auth, this.httpOptions);
  }
  register(auth) {
    return this.http.post(this.apiUrl + "/register", auth, this.httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      throw error;
    }));
  }
}
AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_cookie_service__WEBPACK_IMPORTED_MODULE_0__.CookieService));
};
AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9752:
/*!***********************************************************!*\
  !*** ./resources/angular/src/app/service/book.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookService": () => (/* binding */ BookService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 241);





class BookService {
  constructor(http, location, auth) {
    this.http = http;
    this.location = location;
    this.auth = auth;
    this.token = '';
    // HTTP headers, if needed
    this.httpOptions = {};
    this.apiUrl = this.auth.apiUrl;
    console.log("api-book", this.apiUrl);
  }
  setHeader() {
    let auth = 'Bearer ' + this.auth.getToken();
    console.log("auth test->", auth.replaceAll('"', ''));
    this.httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': auth.replaceAll('"', '')
      })
    };
  }
  // Fetch all books
  getBooks() {
    return this.http.get(this.apiUrl + "/books");
  }
  // Create a new book
  createBook(book) {
    this.setHeader();
    return this.http.post(this.apiUrl + "/books", book, this.httpOptions);
  }
  // Update an existing book
  updateBook(id, book) {
    this.setHeader();
    const url = `${this.apiUrl}/books/${id}`;
    return this.http.put(url, book, this.httpOptions);
  }
  // Delete a book by ID
  deleteBook(id) {
    this.setHeader();
    const url = `${this.apiUrl}/books/${id}`;
    return this.http.delete(url, this.httpOptions);
  }
}
BookService.ɵfac = function BookService_Factory(t) {
  return new (t || BookService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
};
BookService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: BookService,
  factory: BookService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4462:
/*!***************************************************************!*\
  !*** ./resources/angular/src/app/service/category.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryService": () => (/* binding */ CategoryService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 241);





class CategoryService {
  constructor(http, location, auth) {
    this.http = http;
    this.location = location;
    this.auth = auth;
    this.httpOptions = {};
    this.apiUrl = this.auth.apiUrl;
    console.log("api-categories", this.apiUrl);
  }
  getApiUrl(endpoint) {
    const domainUrl = this.location.prepareExternalUrl('');
    const apiUrl = `${domainUrl}/api/${endpoint}`;
    return apiUrl;
  }
  // HTTP headers, if needed
  setHeader() {
    let auth = 'Bearer ' + this.auth.getToken();
    console.log("auth test->", auth.replaceAll('"', ''));
    this.httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': auth.replaceAll('"', '')
      })
    };
  }
  // Fetch all Categorys
  getCategories() {
    return this.http.get(this.apiUrl + "/categories");
  }
  // Create a new Category
  createCategory(Category) {
    this.setHeader();
    return this.http.post(this.apiUrl + "/categories", Category, this.httpOptions);
  }
  // Update an existing Category
  updateCategory(id, Category) {
    this.setHeader();
    const url = `${this.apiUrl}/categories/${id}`;
    return this.http.put(url, Category, this.httpOptions);
  }
  // Delete a Category by ID
  deleteCategory(id) {
    this.setHeader();
    const url = `${this.apiUrl}/categories/${id}`;
    return this.http.delete(url, this.httpOptions);
  }
}
CategoryService.ɵfac = function CategoryService_Factory(t) {
  return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
};
CategoryService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: CategoryService,
  factory: CategoryService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6755:
/*!*************************************************************!*\
  !*** ./resources/angular/src/app/service/cookie.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CookieService": () => (/* binding */ CookieService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ 6240);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class CookieService {
  constructor(document) {
    this.document = document;
  }
  getCookie(name) {
    const cookies = this.document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return '';
  }
  storeCookie(key, value) {
    const encryptedData = crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.encrypt(JSON.stringify(value), 'secretKey').toString();
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 60 * 60 * 1000); // 1 hour from now
    const cookieOptions = {
      expires: expirationDate.toUTCString(),
      path: '/'
    };
    document.cookie = `${key}=${encryptedData}; ${Object.entries(cookieOptions).map(([k, v]) => `${k}=${v}`).join('; ')}`;
  }
  readCookie(key) {
    let value = this.getCookie(key);
    return crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.decrypt(value, 'secretKey').toString(crypto_js__WEBPACK_IMPORTED_MODULE_0__.enc.Utf8);
  }
  delCookie(key) {
    document.cookie = `${key}=; expires=Mon, 01 Jan 2000 00:00:00 UTC; path=/`;
  }
}
CookieService.ɵfac = function CookieService_Factory(t) {
  return new (t || CookieService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT));
};
CookieService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: CookieService,
  factory: CookieService.ɵfac
});

/***/ }),

/***/ 5873:
/*!***************************************!*\
  !*** ./resources/angular/src/main.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 1481);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 2480:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(5873)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map