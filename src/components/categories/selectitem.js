import ORDER from "../data/order";

function removeItem(category, name) {
  ORDER[category] = ORDER[category].filter((object) => object.item !== name);
}

function addItem(name, price, category) {
  ORDER[category].push({ item: name, price, amount: 1 });
}

function changeAmount(name, category, operation) {
  const selectedCategory = ORDER[category];

  if (operation === "decrease") {
    selectedCategory.forEach((product) => {
      if (product.item === name) {
        product.amount -= 1;
      }
    });
  } else {
    selectedCategory.forEach((product) => {
      if (product.item === name) {
        product.amount += 1;
      }
    });
  }
}

export default function manageOrder({ name, price, category, operation }) {
  if (operation === "add") {
    addItem(name, price, category);
  } else if (operation === "remove") {
    removeItem(category, name);
  } else {
    changeAmount(name, category, operation);
  }
  console.log(ORDER);
}
