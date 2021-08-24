export default function BottomBar() {
  return (
    <div className="bottom-bar">
      <button
        className="checkout"
        onclick="toggleAddressWindow(); toggleOverlay();"
      >
        Selecione os 3 itens para fechar o pedido
      </button>
    </div>
  );
}
