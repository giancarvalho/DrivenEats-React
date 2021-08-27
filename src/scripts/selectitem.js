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

function decreaseAmount(name, category) {
  let selectedCategory = ORDER[category];
  selectedCategory.forEach((product) => {
    if (product.item === name) {
      product.amount -= 1;
    }
  });
}

function increaseAmount(name, category) {
  let selectedCategory = ORDER[category];
  selectedCategory.forEach((product) => {
    if (product.item === name) {
      product.amount += 1;
    }
  });
  console.log(ORDER);
}

export default function controlOrder({ name, price, category, operation }) {
  console.log(ORDER);
  if (operation === "add") {
    addItem(name, price, category);
  } else if (operation === "remove") {
    removeItem(category, name);
  } else if (operation === "decrease") {
    decreaseAmount(name, category);
  } else {
    console.log(category);
    increaseAmount(name, category);
  }
}

//isNewItem(ORDER[category], name))
