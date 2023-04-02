document.addEventListener('DOMContentLoaded', () => {
  // Define the items array
  const items = [
    { material: 'Wood', type: 'Armor', price: 10 },
    { material: 'Iron', type: 'Armor', price: 50 },
    { material: 'Silver', type: 'Armor', price: 100 },
    { material: 'Wood', type: 'Weapon', price: 5 },
    { material: 'Iron', type: 'Weapon', price: 30 },
    { material: 'Silver', type: 'Weapon', price: 80 },
  ];

  // Loop through the items and populate the table cells with prices
  items.forEach(item => {
    const cell = document.getElementById(`${item.material.toLowerCase()}-${item.type.toLowerCase()}`);
    cell.textContent = `${item.price} gold`;
    cell.addEventListener('click', () => {
      showItemDetails(item);
    });
  });

  // Define the showItemDetails function
  function showItemDetails(item) {
    const details = document.getElementById('details');
    details.innerHTML = `
      <h2>${item.material} ${item.type}</h2>
      <p>Price: ${item.price} gold</p>
    `;
  }

  // Define the hideItemDetails function
  function hideItemDetails() {
    const details = document.getElementById('details');
    details.innerHTML = '';
  }
});
