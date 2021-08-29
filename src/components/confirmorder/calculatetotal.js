import ORDER from "../data/order";

function sumCategory(category) {
  let totalCategory = 0;

  category.forEach((item) => (totalCategory += item.price * item.amount));

  return totalCategory;
}

export default function calculateTotal() {
  let totalOrder = 0;
  const orderCategories = Object.keys(ORDER);

  orderCategories.forEach((category) => {
    totalOrder += sumCategory(ORDER[category]);
  });

  return totalOrder.toFixed(2);
}
