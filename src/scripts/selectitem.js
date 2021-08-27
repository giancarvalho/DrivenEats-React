let ORDER = { food: [], drink: [], dessert: [] };

function isNewItem(category, name) {
  return !category.some((object) => object.item === name);
}

function removeItem(category, name) {
  ORDER[category] = ORDER[category].filter((object) => object.item !== name);
}

export default function addItem(name, price, category) {
  if (isNewItem(ORDER[category], name)) {
    ORDER[category].push({ item: name, price });
  } else {
    removeItem(category, name);
  }

  console.log(ORDER);
}
