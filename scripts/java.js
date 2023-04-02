// Define the items and their prices
const items = [
    { name: 'Wooden Armor', material: 'Wood', type: 'Armor', price: Math.floor(Math.random() * 10) + 1 },
    { name: 'Iron Armor', material: 'Iron', type: 'Armor', price: Math.floor(Math.random() * 10) + 11 },
    { name: 'Silver Armor', material: 'Silver', type: 'Armor', price: Math.floor(Math.random() * 10) + 21 },
    { name: 'Wooden Sword', material: 'Wood', type: 'Weapon', price: Math.floor(Math.random() * 10) + 1 },
    { name: 'Iron Sword', material: 'Iron', type: 'Weapon', price: Math.floor(Math.random() * 10) + 11 },
    { name: 'Silver Sword', material: 'Silver', type: 'Weapon', price: Math.floor(Math.random() * 10) + 21 }
  ];
  
  // Loop through the items and populate the table cells with prices
  items.forEach(item => {
    const cell = document.getElementById(`${item.material.toLowerCase()}-${item.type.toLowerCase()}`);
    cell.textContent = `${item.price} gold`;
    cell.addEventListener('click', () => {
      showItemDetails(item);
    });
  });
  
  // Define a function to show the details of an item
  function showItemDetails(item) {
    // Create a new HTML page to show the item details
    const detailsPage = document.createElement('div');
    detailsPage.innerHTML = `
      <h2>${item.name}</h2>
      <p>${item.material} ${item.type}</p>
      <p>${item.price} gold</p>
      <p>A short description of the item goes here.</p>
      <a href="#" onclick="hideItemDetails()">Back</a>
    `;
    
    // Hide the main table and show the item details page
    const mainTable = document.querySelector('table');
    mainTable.style.display = 'none';
    document.body.appendChild(detailsPage);
  }
  
  // Define a function to hide the item details and show the main table again
  function hideItemDetails() {
    const detailsPage = document.querySelector('div');
    detailsPage.remove();
    const mainTable = document.querySelector('table');
    mainTable.style.display = 'table';
  }