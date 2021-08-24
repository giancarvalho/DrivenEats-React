export default function BottomBar() {
  return (
    <div class="bottom-bar">
      <button
        class="checkout"
        onclick="toggleAddressWindow(); toggleOverlay();"
      >
        Selecione os 3 itens para fechar o pedido
      </button>
    </div>
  );
}
