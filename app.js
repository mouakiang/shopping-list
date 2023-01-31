/* Imports */
// this will check if we have a user and set sign out link if it exists

import { checkAuth, redirect, signInUser, signUpUser } from './fetch-utils.js';
// import { displayAuth } from './auth.js';

/* Get DOM Elements */
const inputForm = document.querySelector('.input-form');

//Events
inputForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(inputForm);

    const newData = { item_name: data.get('item-name') };
});
// /* Display Functions */

// displayAuth();
checkAuth();
