import ORDER from "../../data/order";
import calculateTotal from "./calculatetotal";
import formatAmount from "./formatAmount";
const RESTAURANT_NUMBER = "553099990000";

export default function sendMessage() {
  const { food, drink, dessert } = ORDER;
  let foodList = "";
  let drinkList = "";
  let dessertList = "";

  food.forEach(
    (dish) => (foodList += `${dish.item} ${formatAmount(dish.amount)}\n`)
  );
  drink.forEach(
    (drink) => (drinkList += `${drink.item} ${formatAmount(drink.amount)}\n`)
  );
  dessert.forEach(
    (dessert) =>
      (dessertList += `${dessert.item} ${formatAmount(dessert.amount)}\n`)
  );

  let message = encodeURIComponent(
    `Olá, gostaria de fazer o pedido: \n - Prato: ${foodList}  \n - Bebida: ${drinkList} \n - Sobremesa: ${dessertList} \n Total: R$ ${calculateTotal()} \n`
  );
  window.open(`https://wa.me/${RESTAURANT_NUMBER}?text=${message}`, "_self");
}
