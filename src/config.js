export const BASE_URL = 'http://10.58.52.78:3000';

export const API = {
  EMAIL_VERIFICATION_API: `${BASE_URL}/users/email-check`,
  LOGIN_API: `${BASE_URL}/users/login`,
  JOIN_API: `${BASE_URL}/users/`,
  COUNTRIES_API: `${BASE_URL}/users`,
  CART_API: `${BASE_URL}/orders`,
  PAYMENT_API: `${BASE_URL}/payments`,
};

export const CART_API = `${BASE_URL}/orders`;
export const PAYMENT_API = `${BASE_URL}/payments`;
export const PRODUCTLIST_API = `${BASE_URL}/products?countryId=`;
