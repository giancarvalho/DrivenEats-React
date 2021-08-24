export default function ConfirmOrder() {
  return (
    <div className="confirm-order modal">
      <strong>Confirme seu pedido</strong>
      <div className="order-items">
        <div className="first">
          <p className="name"></p>
          <p className="price"></p>
        </div>
        <div className="second">
          <p className="name"></p>
          <p className="price"></p>
        </div>
        <div className="third">
          <p className="name"></p>
          <p className="price"></p>
        </div>
        <div className="total">
          <p>Total</p>
          <p className="total-order"></p>
        </div>
      </div>
      <div className="confirm-buttons">
        <button className="send" onclick="sendMessage();">
          Tudo certo, pode pedir
        </button>
        <button
          className="cancel"
          onclick="toggleConfirmWindow(); toggleOverlay()"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}
