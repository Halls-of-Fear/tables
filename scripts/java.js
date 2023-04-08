const valueMapping = {
  'armor':1,
  'weapon':1,
  'wood': 1,
  'iron': 2,
  'silver': 3,
  'shiny':5,
  'rusty': 1,
  'light': 2,
  'heavy': 3,
  'glowing': 4,
  'enchanced': 5,
  'magical': 6,
  'by': 1,
  'with': 2,
  'scratches': -5,
  'runes': 2,
  'fire': 3,
  'frost': 4,
  'magic': 5,
  'blessed': 30,
  'cursed': -30,
  'enchanted': 6,
  'tempered': 2,
  'cavered': 3,
  'strengthened': 4,
};

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
  adjectives: ['shiny', 'rusty', 'enchanced', 'glowing', 'heavy', 'light', 'magical'],
  participles: ['blessed', 'cursed', 'enchanted', 'strengthened', 'tempered', 'cavered'],
  pretext: ['with', 'by'],
  nouns: ['magic', 'runes', 'scratches', 'fire', 'frost']
};

let descriptions = {};

function generateDescriptions() {
  items.forEach(item => {
    let randomAdjective = data.adjectives[Math.floor(Math.random() * data.adjectives.length)];
    let randomParticiple = data.participles[Math.floor(Math.random() * data.participles.length)];
    let randomPretext = data.pretext[Math.floor(Math.random() * data.pretext.length)];
    let randomNoun = data.nouns[Math.floor(Math.random() * data.nouns.length)];

    console.log(`Adjective: ${randomAdjective}, Participle: ${randomParticiple}, Pretext: ${randomPretext}, Noun: ${randomNoun}`);

    let fullItemId = `${item.material.charAt(0).toUpperCase()}${item.material.slice(1)} ${item.type.charAt(0).toUpperCase()}${item.type.slice(1)}`;
    let randomDescription = `${randomAdjective} ${fullItemId} ${randomParticiple} ${randomPretext} ${randomNoun}`;

    descriptions[item.id] = randomDescription;
  });
}

function calculateValue(description) {
  const words = description.split(' ');
  let totalValue = 0;
  let material = '';
  let type = '';

  words.forEach(word => {
    const value = valueMapping[word.toLowerCase()];
    if (value) {
      totalValue += value;
      console.log(`Word: ${word}, Value: ${value}`);
      if (word.toLowerCase() === 'wood' || word.toLowerCase() === 'iron' || word.toLowerCase() === 'silver') {
        material = word.toLowerCase();
      } else if (word.toLowerCase() === 'armor' || word.toLowerCase() === 'weapon') {
        type = word.toLowerCase();
      }
    } else {
      console.log(`Word: ${word}, Value not found`);
    }
  });

  console.log(`Material: ${material}, Type: ${type}`);

  if (material && type) {
    const materialValue = valueMapping[material];
    const typeValue = valueMapping[type];
    if (materialValue && typeValue) {
      // Remove the following line:
      // totalValue += materialValue + typeValue;
      console.log(`Material Value: ${materialValue}, Type Value: ${typeValue}`);
    }
  }

  console.log(`Total Value: ${totalValue}`);
  return totalValue;
}

function showItemDetails(item) {
  const details = document.getElementById('details');
  let fullItemId = `${item.material.charAt(0).toUpperCase()}${item.material.slice(1)} ${item.type.charAt(0).toUpperCase()}${item.type.slice(1)}`;

  details.innerHTML = `<h2>${fullItemId}</h2>
                        <table>
                          <tr>
                            <th>Price</th>
                            <th>Description</th>
                          </tr>
                          <tr>
                            <td>${item.price} gold</td>
                            <td>${descriptions[item.id]}</td>
                          </tr>
                        </table>`;
  details.addEventListener('click', hideItemDetails);
}

function hideItemDetails() {
  const details = document.getElementById('details');
  details.innerHTML = '';
  details.removeEventListener('click', hideItemDetails);
}

function refreshPrices() {
  items.forEach(item => {
    item.price = calculateValue(descriptions[item.id]);

    console.log(`Item: ${item.id}, New Price: ${item.price}`);

    const cell = document.querySelector(`td[data-id="${item.id}"]`);
    cell.textContent = `${item.price} gold`;

    cell.addEventListener('click', () => {
      showItemDetails(item);
    });
  });

  generateDescriptions();
  items.sort((a, b) => b.price - a.price);
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