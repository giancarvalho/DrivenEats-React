import ORDER from "../components/order";
import readyToOrder from "../components/readytoorder";

// function isNewItem(category, name) {
//   return !category.some((object) => object.item === name);
// }

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

export default function controlOrder({ name, price, category, operation }) {
  if (operation === "add") {
    addItem(name, price, category);
  } else if (operation === "remove") {
    removeItem(category, name);
  } else {
    console.log(category);
    changeAmount(name, category, operation);
  }
  console.log(ORDER);
}

//isNewItem(ORDER[category], name))
