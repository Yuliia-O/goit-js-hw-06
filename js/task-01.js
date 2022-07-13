const listEl = document.querySelector('#categories');
console.log(`Number of categories: ${listEl.children.length}`);

const listItemsEl = listEl.querySelectorAll('.item');

listItemsEl.forEach(item => {
    const titleEl = item.querySelector('h2');
    console.log(`Category: ${titleEl.textContent}`);
    const sublistEl = item.querySelector('ul');
    console.log(`Elements: ${sublistEl.children.length}`);
})
