// Runtime configuration, set with REACT_APP_* variables (see .env.example). There are deliberately no
// defaults for the backend address or the Razorpay key: this is the Kakinada site, and a missing value
// must fail loudly instead of quietly using another city's backend or payment account.
export const API_URL = process.env.REACT_APP_API_URL || '';

// Razorpay key ids are public by design (the secret stays on the server).
export const RAZORPAY_KEY = process.env.REACT_APP_RAZORPAY_KEY || '';

export const RAZORPAY_SCRIPT_URL = 'https://checkout.razorpay.com/v1/checkout.js';
