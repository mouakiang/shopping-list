/* Imports */
// this will check if we have a user and set sign out link if it exists

import {
    checkAuth,
    completeList,
    createList,
    deleteList,
    getList,
    signOutUser,
} from './fetch-utils.js';
import { renderList } from './render-utils.js';
// import { displayAuth } from './auth.js';

/* Get DOM Elements */
const inputForm = document.querySelector('.input-form');
const sectionEl = document.querySelector('section');
const deleteButton = document.querySelector('.delete-button');

let lists = [];
//Events
window.addEventListener('load', (async) => {
    displayList();
});

inputForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(inputForm);

    const newData = { item_name: data.get('item-name') };
    await createList(newData);

    displayList();

    inputForm.reset();
});
// /* Display Functions */
async function displayList() {
    sectionEl.textContent = '';

    lists = await getList();

    for (let list of lists) {
        const render = renderList(list);

        render.addEventListener('click', async () => {
            await completeList(list.id);
            displayList();
        });
        sectionEl.append(render);
    }
}
// displayAuth();
checkAuth();

deleteButton.addEventListener('click', async () => {
    await deleteList();
    displayList();
});

const signOutLink = document.getElementById('sign-out-link');
if (signOutLink) {
    signOutLink.addEventListener('click', () => {
        signOutUser();
    });
}
