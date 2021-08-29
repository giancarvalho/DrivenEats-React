import { Link } from "react-router-dom";
import calculateTotal from "../scripts/calculatetotal";
import formatAmount from "../scripts/formatAmount";
import sendMessage from "../scripts/sendmessage";
import ORDER from "./order";

function Items() {
  const categories = Object.keys(ORDER);

  return categories.map((category) => renderItems(ORDER[category]));
}

function renderItems(category) {
  return category.map((item, index) => (
    <li key={index}>
      <p>
        {item.item} {formatAmount(item.amount)}
      </p>
      <p>R${(item.price * item.amount).toFixed(2)}</p>
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
