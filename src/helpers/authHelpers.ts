import moment from "moment";

const USER_ID = "user_id";
const JWT = "user_jwt";
const USER_FIRST_LOGINNED = "user_first_loginned";
const NEEDS_AGREEMENT = "needs_agreement";
const USER_REMEMBER = "user_remember";
const USER_AUTHORIZATION_DATE = "user_authorization_date";
const USER_PATH = "user_path";
const MIN_AUTHORIZATION_TIME = 1;
const MAX_AUTHORIZATION_TIME = 10;

const SELECTED_COMPANY_CUSTOMER_ID = "selected_customer_id";
const SELECTED_COMPANY_NAME = "selected_customer_name";

export const CUSTOMER_EVENT = {
  LOGIN: "LoginAsCustomer",
  LOGOUT: "LogoutAsCustomer"
};

const LoginAsCustomerEvent = new Event(CUSTOMER_EVENT.LOGIN);
const LogoutAsCustomerEvent = new Event(CUSTOMER_EVENT.LOGOUT);

const authHelper = {
  getToken() {
    const remember = localStorage.getItem(USER_REMEMBER);

    const authDate = moment(
      new Date(localStorage.getItem(USER_AUTHORIZATION_DATE))
    );
    const minimumAcceptableValue = moment().subtract(
      remember ? MAX_AUTHORIZATION_TIME : MIN_AUTHORIZATION_TIME,
      "hours"
    );

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
  updateUserAuthorizationDate() {
    localStorage.setItem(USER_AUTHORIZATION_DATE, new Date().toString());
  },
  setUserFirstLoginned() {
    localStorage.setItem(USER_FIRST_LOGINNED, "true");
  },
  setNeedAgreement(isNeeded = "true") {
    localStorage.setItem(NEEDS_AGREEMENT, isNeeded);
  },
  authenticate(jwt: string, id?: string, remember?, cb?: () => void) {
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
  signout(cb?: () => void) {
    localStorage.removeItem(JWT);
    localStorage.removeItem(USER_AUTHORIZATION_DATE);
    this.signoutAsCustomer();

    if (cb) {
      setTimeout(cb, 100);
    }
  },
  setCurrentPath(path) {
    localStorage.setItem(USER_PATH, path);
  },
  getCurrentPath: () => localStorage.getItem(USER_PATH),

  // customer
  signinAsCustomer(customerId: string, companyName: string) {
    sessionStorage.setItem(SELECTED_COMPANY_CUSTOMER_ID, customerId);
    sessionStorage.setItem(SELECTED_COMPANY_NAME, companyName);
    window.dispatchEvent(LoginAsCustomerEvent);
  },
  signoutAsCustomer() {
    sessionStorage.removeItem(SELECTED_COMPANY_CUSTOMER_ID);
    sessionStorage.removeItem(SELECTED_COMPANY_NAME);
    window.dispatchEvent(LogoutAsCustomerEvent);
  },
  isLoginnedAsCustomer() {
    return !!sessionStorage.getItem(SELECTED_COMPANY_CUSTOMER_ID);
  },
  get customerId() {
    return sessionStorage.getItem(SELECTED_COMPANY_CUSTOMER_ID);
  },
  get companyName() {
    return sessionStorage.getItem(SELECTED_COMPANY_NAME) || "";
  }
};

export default authHelper;
