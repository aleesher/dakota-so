"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
var USER_ID = "user_id";
var JWT = "user_jwt";
var USER_FIRST_LOGINNED = "user_first_loginned";
var NEEDS_AGREEMENT = "needs_agreement";
var USER_REMEMBER = "user_remember";
var USER_AUTHORIZATION_DATE = "user_authorization_date";
var USER_PATH = "user_path";
var MIN_AUTHORIZATION_TIME = 1;
var MAX_AUTHORIZATION_TIME = 10;
var SELECTED_COMPANY_CUSTOMER_ID = "selected_customer_id";
var SELECTED_COMPANY_NAME = "selected_customer_name";
exports.CUSTOMER_EVENT = {
    LOGIN: "LoginAsCustomer",
    LOGOUT: "LogoutAsCustomer"
};
var LoginAsCustomerEvent = new Event(exports.CUSTOMER_EVENT.LOGIN);
var LogoutAsCustomerEvent = new Event(exports.CUSTOMER_EVENT.LOGOUT);
var authHelper = {
    getToken: function () {
        var remember = localStorage.getItem(USER_REMEMBER);
        var authDate = moment_1.default(new Date(localStorage.getItem(USER_AUTHORIZATION_DATE)));
        var minimumAcceptableValue = moment_1.default().subtract(remember ? MAX_AUTHORIZATION_TIME : MIN_AUTHORIZATION_TIME, "hours");
        if (authDate.isBefore(minimumAcceptableValue)) {
            this.signout();
            return null;
        }
        return localStorage.getItem("user_jwt");
    },
    get userId() {
        return localStorage.getItem(USER_ID);
    },
    get isRemembered() {
        return localStorage.getItem(USER_REMEMBER);
    },
    get isAuthenticated() {
        return this.getToken() && true;
    },
    get isNeedAgreement() {
        return localStorage.getItem(NEEDS_AGREEMENT);
    },
    get isUserFirstLoginned() {
        return localStorage.getItem(USER_FIRST_LOGINNED);
    },
    updateUserAuthorizationDate: function () {
        localStorage.setItem(USER_AUTHORIZATION_DATE, new Date().toString());
    },
    setUserFirstLoginned: function () {
        localStorage.setItem(USER_FIRST_LOGINNED, "true");
    },
    setNeedAgreement: function (isNeeded) {
        if (isNeeded === void 0) { isNeeded = "true"; }
        localStorage.setItem(NEEDS_AGREEMENT, isNeeded);
    },
    authenticate: function (jwt, id, remember, cb) {
        localStorage.setItem(USER_ID, id);
        localStorage.setItem(JWT, jwt);
        localStorage.setItem(USER_AUTHORIZATION_DATE, new Date().toString());
        if (remember) {
            localStorage.setItem(USER_REMEMBER, "true");
        }
        if (cb) {
            setTimeout(cb, 100);
        }
    },
    signout: function (cb) {
        localStorage.removeItem(JWT);
        localStorage.removeItem(USER_AUTHORIZATION_DATE);
        this.signoutAsCustomer();
        if (cb) {
            setTimeout(cb, 100);
        }
    },
    setCurrentPath: function (path) {
        localStorage.setItem(USER_PATH, path);
    },
    getCurrentPath: function () { return localStorage.getItem(USER_PATH); },
    // customer
    signinAsCustomer: function (customerId, companyName) {
        sessionStorage.setItem(SELECTED_COMPANY_CUSTOMER_ID, customerId);
        sessionStorage.setItem(SELECTED_COMPANY_NAME, companyName);
        window.dispatchEvent(LoginAsCustomerEvent);
    },
    signoutAsCustomer: function () {
        sessionStorage.removeItem(SELECTED_COMPANY_CUSTOMER_ID);
        sessionStorage.removeItem(SELECTED_COMPANY_NAME);
        window.dispatchEvent(LogoutAsCustomerEvent);
    },
    isLoginnedAsCustomer: function () {
        return !!sessionStorage.getItem(SELECTED_COMPANY_CUSTOMER_ID);
    },
    get customerId() {
        return sessionStorage.getItem(SELECTED_COMPANY_CUSTOMER_ID);
    },
    get companyName() {
        return sessionStorage.getItem(SELECTED_COMPANY_NAME) || "";
    }
};
exports.default = authHelper;
//# sourceMappingURL=authHelpers.js.map