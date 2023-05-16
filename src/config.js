const BASE_URL = 'http://13.125.231.183:3000/';
const PRODUCTLIST_URL = 'http://13.125.231.183:3000/';

export const API = {
  EMAIL_VERIFICATION_API: `${BASE_URL}/users/email-check`,
  LOGIN_API: `${BASE_URL}/users/login`,
  JOIN_API: `${BASE_URL}/users/`,
  COUNTRIES_API: `${BASE_URL}/users`,
  CART_API: `${BASE_URL}/orders`,
  PAYMENT_API: `${BASE_URL}/payments`,
  PRODUCT_DETAIL: `${BASE_URL}/products/`,
  ADD_CART: `${BASE_URL}/orders`,
};

export const CART_API = `${BASE_URL}/orders`;
export const PAYMENT_API = `${BASE_URL}/payments`;
export const PRODUCTLIST_API = `${PRODUCTLIST_URL}/products?countryId=`;
