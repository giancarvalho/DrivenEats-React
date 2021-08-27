import ORDER from "./order";

export default function readyToOrder() {
  const { food, drink, dessert } = ORDER;

  if (food.length > 0 && drink.length > 0 && dessert.length > 0) {
    return true;
  }
}
