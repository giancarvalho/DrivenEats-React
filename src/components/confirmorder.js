import { Link } from "react-router-dom";
import calculateTotal from "../scripts/calculatetotal";
import ORDER from "./order";

function sendMessage() {
  const { food, drink, dessert } = ORDER;
  let foodList = "";
  let drinkList = "";
  let dessertList = "";

  food.forEach((item) => (foodList += `${item.item} \n`));
  drink.forEach((item) => (drinkList += `${item.item} \n`));
  dessert.forEach((item) => (dessertList += `${item.item} \n`));

  let message = encodeURIComponent(
    `Olá, gostaria de fazer o pedido: \n - Prato: ${foodList} \n - Bebida: ${drinkList} \n - Sobremesa: ${dessertList} \n Total: R$ ${calculateTotal()} \n`
  );
  window.open(`https://wa.me/5532999744968?text=${message}`, "_self");
}

function Items() {
  const categories = Object.keys(ORDER);

  return categories.map((category) => renderItems(ORDER[category]));
}

function renderItems(category) {
  return category.map((item, index) => (
    <li key={index}>
      <p>{item.item}</p>
      <p>
        {item.amount} x R${item.price.toFixed(2)}
      </p>
    </li>
  ));
}

export default function ConfirmOrder() {
  return (
    <main>
      <div className="review-order">
        <div className="category">
          <p>Revisar seu pedido</p>
          <div className="order-container">
            <ul>
              <Items />
              <li className="total">
                <p>TOTAL</p>
                <p>R${calculateTotal()}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="confirm-buttons">
          <button className="confirm" onClick={() => sendMessage()}>
            Tudo certo, pode pedir
          </button>
          <Link to="/" className="cancel">
            Cancelar
          </Link>
        </div>
      </div>
    </main>
  );
}
