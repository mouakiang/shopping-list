/* Imports */
// this will check if we have a user and set sign out link if it exists

import { signInUser, signUpUser } from './fetch-utils.js';
import { displayAuth } from './auth.js';

/* Get DOM Elements */
const signInForm = document.getElementById('sign-in');
const signInEmail = document.getElementById('sign-in-email');
const signInPw = document.getElementById('sign-in-password');

const signUpForm = document.getElementById('sign-up');
const signUpEmail = document.getElementById('sign-up-email');
const signUpPw = document.getElementById('sign-up-password');
/* State */

/* Events */
signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const user = await signInUser(signInEmail.value, signInPw.value);
});

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const user = await signUpUser(signUpEmail.value, signUpPw.value);
});
/* Display Functions */
displayAuth();
