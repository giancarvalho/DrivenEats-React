export default function BottomBar(props) {
  const { status } = props.status;

  return (
    <div className={`bottom-bar ${status}`}>
      <button className="checkout">
        Selecione os 3 itens para fechar o pedido
      </button>
    </div>
  );
}
