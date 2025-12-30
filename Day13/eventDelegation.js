

// Instead of adding an event listener to many child elements,
// add one event listener to their parent and handle events there.

itemList = document.getElementById('itemList');

buttonClick = document.getElementById('addItem');

buttonClick.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.classList.add('item');
    newItem.textContent = `New Item ${itemList.children.length + 1}`;

    /////Without event delegation for the item list
        // Here we would add event listeners to each new item individually
    // Adding click event listener to the new item
    // newItem.addEventListener('click', (event) => {
    //     event.stopPropagation(); // Prevents the event from bubbling up to the parent
    //     if (event.target.style.backgroundColor === 'lightblue') {
    //         event.target.style.backgroundColor = ''; // Reset background color
    //     }else {
    //         event.target.style.backgroundColor = 'lightblue'; // Change background color
    //     }
    // });

      /////Without event delegation for the item list
        // Here we would add event listeners to each new item individually
    // newItem.addEventListener('dblclick', (event) => {
    //     event.target.remove(); // Remove the item on double click
    // });
    itemList.appendChild(newItem);
});


// Instead of adding an event listener to many child elements,
// add one event listener to their parent and handle events there.
// If we add event listeners to each item individually, it can lead to performance issues
// and increased memory usage, especially with a large number of items.
function handleItemClick(event) {
        if (event.target.style.backgroundColor === 'lightblue' && event.target.nodeName === 'LI') {
            event.target.style.backgroundColor = ''; // Reset background color
        }else {
            event.target.style.backgroundColor = 'lightblue'; // Change background color
        }
}
itemList.addEventListener('click', handleItemClick);

itemList.addEventListener('dblclick', (event) => {
        if (event.target.nodeName === 'LI'){
            event.target.remove(); // Remove the item on double click
        }
    });
    