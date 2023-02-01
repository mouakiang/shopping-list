/* Imports */
// this will check if we have a user and set sign out link if it exists

import { checkAuth, completeList, createList, getList } from './fetch-utils.js';
import { renderList } from './render-utils.js';
// import { displayAuth } from './auth.js';

/* Get DOM Elements */
const inputForm = document.querySelector('.input-form');
const sectionEl = document.querySelector('section');

let lists = [];
//Events
inputForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(inputForm);

    const newData = { item_name: data.get('item-name') };
    console.log(newData);
    await createList(newData);

    inputForm.reset();
});
// /* Display Functions */
async function displayList() {
    sectionEl.textContent = '';

    newList = await getList();

    for (let list of lists) {
        const render = renderList(list);

        render.addEventListener('click', async () => {
            await completeList(list.id);
            displayList();
        });
    }
}
// displayAuth();
checkAuth();
