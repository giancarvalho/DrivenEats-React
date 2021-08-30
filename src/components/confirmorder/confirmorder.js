import { Link } from "react-router-dom";
import calculateTotal from "./scripts/calculatetotal";
import formatAmount from "./scripts/formatAmount";
import sendMessage from "./scripts/sendmessage";
import ORDER from "../data/order";

//iterates through each category to render each item
function Items() {
  const categories = Object.keys(ORDER);

  return categories.map((category) => renderItems(ORDER[category]));
}
//renders each item in the review list
function renderItems(category) {
  return category.map((item, index) => (
    <li key={index}>
      <p>
        {item.itemName} {formatAmount(item.amount)}
      </p>
      <p>R${(item.price * item.amount).toFixed(2)}</p>
    </li>
  ));
}

export default function ConfirmOrder({ setRenderFromReview }) {
  return (
    <main>
      <div className="review-order">
        <div className="category">
          <p>Revise seu pedido</p>
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
          <Link
            to="/"
            className="cancel"
            onClick={() => setRenderFromReview(true)}
          >
            Cancelar
          </Link>
        </div>
      </div>
    </main>
  );
}
