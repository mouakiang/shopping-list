export function renderList(list) {
    // create a div and a p tag
    const divEl = document.createElement('div');
    const pEl = document.createElement('p');

    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
    if (list.completed) {
        divEl.classList.add('complete');
    } else {
        divEl.classList.add('incomplete');
    }
    // add the 'todo' css class no matter what
    divEl.classList.add('list');
    // put the todo's text into the p tag
    pEl.textContent = list.item_name;
    // append stuff
    divEl.append(pEl);
    // return the div
    return divEl;
}
