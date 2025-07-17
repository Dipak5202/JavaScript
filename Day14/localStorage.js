
itemList = document.getElementById('itemList');

buttonClick = document.getElementById('addItem');

inputField = document.getElementById('itemInput');

agefield = document.getElementById('ageInput');

buttonClick.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.classList.add('item');
    newItem.textContent = inputField.value;
    inputField.value = ''; // Clear input field
    // Adding click event listener to the new item

    localStorage.setItem(newItem.textContent, newItem.textContent); // Store item in localStorage
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
        localStorage.removeItem(event.target.textContent); // Remove item from localStorage
    });
    itemList.appendChild(newItem);
});

(function(){
  // Load items from localStorage
  for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      const newItem = document.createElement('li');
      newItem.classList.add('item');
      newItem.textContent = value;

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
          localStorage.removeItem(event.target.textContent); // Remove item from localStorage
      });
      itemList.appendChild(newItem);
  }
})();
