import ORDER from "../../../data/order";

function removeItem(category, name) {
  ORDER[category] = ORDER[category].filter((item) => item.itemName !== name);
}

function addItem(name, price, category) {
  ORDER[category].push({ itemName: name, price, amount: 1 });
}

function changeAmount(name, category, operation) {
  const selectedCategory = ORDER[category];

  if (operation === "decrease") {
    selectedCategory.forEach((item) => {
      if (item.itemName === name) {
        item.amount -= 1;
      }
    });
  } else {
    selectedCategory.forEach((item) => {
      if (item.itemName === name) {
        item.amount += 1;
      }
    });
  }
}
//modifies the order according to each operation
export default function manageOrder({ name, price, category, operation }) {
  if (operation === "add") {
    addItem(name, price, category);
  } else if (operation === "remove") {
    removeItem(category, name);
  } else {
    changeAmount(name, category, operation);
  }
}
