document.addEventListener('DOMContentLoaded', () => {
  // Define the items array
  let items = [
    { material: 'Wood', type: 'Armor', price: 0 },
    { material: 'Iron', type: 'Armor', price: 0 },
    { material: 'Silver', type: 'Armor', price: 0 },
    { material: 'Wood', type: 'Weapon', price: 0 },
    { material: 'Iron', type: 'Weapon', price: 0 },
    { material: 'Silver', type: 'Weapon', price: 0 },
  ];

  // Populate the table cells with prices
  populateTable();

  // Define the showItemDetails function
  function showItemDetails(item) {
    const details = document.getElementById('details');
    details.innerHTML = `
      <h2>${item.material} ${item.type}</h2>
      <p>Price: ${item.price} gold</p>
    `;
    details.addEventListener('click', hideItemDetails);
  }

  // Define the hideItemDetails function
  function hideItemDetails() {
    const details = document.getElementById('details');
    details.innerHTML = '';
    details.removeEventListener('click', hideItemDetails);
  }

  // Define the refreshPrices function
  function refreshPrices() {
    // Generate random prices for each item
    items.forEach(item => {
      switch (item.material) {
        case 'Wood':
          item.price = Math.floor(Math.random() * 10) + 1;
          break;
        case 'Iron':
          item.price = Math.floor(Math.random() * 40) + 11;
          break;
        case 'Silver':
          item.price = Math.floor(Math.random() * 90) + 61;
          break;
      }
    });

    // Sort the items by price
    items.sort((a, b) => a.price - b.price);

    // Populate the table cells with the new prices
    populateTable();
  }

  // Define the populateTable function
  function populateTable() {
    items.forEach(item => {
      const cell = document.getElementById(`${item.material.toLowerCase()}-${item.type.toLowerCase()}`);
      cell.textContent = `${item.price} gold`;
      cell.addEventListener('click', () => {
        showItemDetails(item);
      });
    });
  }
});
