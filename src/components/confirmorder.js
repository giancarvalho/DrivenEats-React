import { Link } from "react-router-dom";

export default function ConfirmOrder() {
  return (
    <main>
      <div className="review-order">
        <div className="category">
          <p>Revisar seu pedido</p>
          <div className="order-container">
            <ul>
              <li className="total">
                <p>TOTAL</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="confirm-buttons">
          <button className="confirm">Tudo certo, pode pedir</button>
          <Link to="/" className="cancel">
            Cancelar
          </Link>
        </div>
      </div>
    </main>
  );
}
