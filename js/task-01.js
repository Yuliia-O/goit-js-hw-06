const listEl = document.querySelector('#categories');
console.log(`Number of categories: ${listEl.children.length}`);

const listItemsEl = listEl.querySelectorAll('.item');
listItemsEl.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});

