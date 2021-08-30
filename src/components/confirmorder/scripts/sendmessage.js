import ORDER from "../../data/order";
import calculateTotal from "./calculatetotal";
import formatAmount from "./formatAmount";
const RESTAURANT_NUMBER = "553099990000";

export default function sendMessage() {
  const { dishes, drinks, desserts } = ORDER;
  let dishesList = "";
  let drinksList = "";
  let dessertsList = "";

  dishes.forEach(
    (dish) => (dishesList += `${dish.itemName} ${formatAmount(dish.amount)}\n`)
  );
  drinks.forEach(
    (drink) =>
      (drinksList += `${drink.itemName} ${formatAmount(drink.amount)}\n`)
  );
  desserts.forEach(
    (dessert) =>
      (dessertsList += `${dessert.itemName} ${formatAmount(dessert.amount)}\n`)
  );

  let message = encodeURIComponent(
    `Olá, gostaria de fazer o pedido: \n - Prato: ${dishesList}  \n - Bebida: ${drinksList} \n - Sobremesa: ${dessertsList} \n Total: R$ ${calculateTotal()} \n`
  );
  window.open(`https://wa.me/${RESTAURANT_NUMBER}?text=${message}`, "_self");
}
