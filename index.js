// Declaring an empty shopping list array to store items
const shoppinglist = []; 

// Function to handle adding an item to the shopping list
function Inputitem(){
    const itemInput = document.getElementById('itemInput');
    const itemValue = itemInput.value.trim();

    if (itemValue !== '') {
        const newItem = {
            name: itemValue,
            
        };

        // Add the new item to the shopping list array
        shoppinglist.push(newItem);

        // Create a new list element (li) for the item
        const newList = document.createElement('li');
        newList.textContent = itemValue;

        newList.addEventListener('click', () => {
            newList.classList.toggle('purchased');
        });

         // Append the new list item to the unordered list (ul) in the HTML
        document.getElementById('list').appendChild(newList);

        itemInput.value = '';
    }
};
         // purchased
const Markpurchased = () => {
    const listItems = document.querySelectorAll('#list li');
    
     // Loop through each list item and toggle the 'purchased' class
    listItems.forEach(item => {
        item.classList.toggle('purchased');
    });
};

// Function to clear all items from the shopping list
function Clearlist() {
    const list = document.getElementById('list');
    list.innerHTML = '';
}



