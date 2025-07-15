
itemList = document.getElementById('itemList');

buttonClick = document.getElementById('addItem');

buttonClick.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.classList.add('item');
    newItem.textContent = `New Item ${itemList.children.length + 1}`;
    // Adding click event listener to the new item
    newItem.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevents the event from bubbling up to the parent
        if (event.target.style.backgroundColor === 'lightblue') {
            event.target.style.backgroundColor = ''; // Reset background color
        }else {
            event.target.style.backgroundColor = 'lightblue'; // Change background color
        }
    });

    //Event delegation for the item list
    // Adding double click event listener to the new item
    newItem.addEventListener('dblclick', (event) => {
        event.target.remove(); // Remove the item on double click
    });
    itemList.appendChild(newItem);
});
