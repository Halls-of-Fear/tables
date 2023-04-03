let items = [
  { material: 'Wood', type: 'Armor', price: 0 },
  { material: 'Iron', type: 'Armor', price: 0 },
  { material: 'Silver', type: 'Armor', price: 0 },
  { material: 'Wood', type: 'Weapon', price: 0 },
  { material: 'Iron', type: 'Weapon', price: 0 },
  { material: 'Silver', type: 'Weapon', price: 0 },
];

items.forEach(item => {
  item.id = `${item.material.toLowerCase()}-${item.type.toLowerCase()}`;
});

let data = {
  adjectives: ['shiny', 'rusty', 'enchanted', 'glowing', 'heavy', 'light', 'magical'],
  participles: ['blessed', 'cursed', 'enchanted', 'strengthened', 'tempered', 'cavered'],
  pretext: ['with', 'by'],
  nouns: ['magic', 'runes', 'scrathes', 'fire', 'frost']
};

let descriptions = {};

function generateDescriptions() {
  items.forEach(item => {
    let randomAdjective = data.adjectives[Math.floor(Math.random() * data.adjectives.length)];
    let randomParticiple = data.participles[Math.floor(Math.random() * data.participles.length)];
    let randomPretext = data.pretext[Math.floor(Math.random() * data.pretext.length)];
    let randomNoun = data.nouns[Math.floor(Math.random() * data.nouns.length)];

    let fullItemId = `${item.material.charAt(0).toUpperCase()}${item.material.slice(1)} ${item.type.charAt(0).toUpperCase()}${item.type.slice(1)}`;
    let randomDescription = `${randomAdjective} ${fullItemId} ${randomParticiple} ${randomPretext} ${randomNoun}`;
    
    descriptions[item.id] = randomDescription;
  });
}

function showItemDetails(item) {
  const details = document.getElementById('details');
  let fullItemId = `${item.material.charAt(0).toUpperCase()}${item.material.slice(1)} ${item.type.charAt(0).toUpperCase()}${item.type.slice(1)}`;
  
  details.innerHTML = `
    <h2>${fullItemId}</h2>
    <table>
      <tr>
        <th>Price</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>${item.price} gold</td>
        <td>${descriptions[item.id]}</td>
      </tr>
    </table>
  `;
  details.addEventListener('click', hideItemDetails);
}

function hideItemDetails() {
  const details = document.getElementById('details');
  details.innerHTML = '';
  details.removeEventListener('click', hideItemDetails);
}

function refreshPrices() {
  const details = document.getElementById('details');
  details.innerHTML = '';
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
  generateDescriptions(); // added this line to refresh the item descriptions
  items.sort((a, b) => a.price - b.price);
  populateTable();
  hideItemDetails();
}

function populateTable() {
  items.forEach(item => {
    const cell = document.querySelector(`td[data-id="${item.id}"]`);
    cell.textContent = `${item.price} gold`;
    cell.addEventListener('click', () => {
      showItemDetails(item);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  generateDescriptions();
  refreshPrices();
});