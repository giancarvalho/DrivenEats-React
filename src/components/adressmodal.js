export default function AddressModal() {
  return (
    <div className="address modal">
      <div>
        <input type="text" id="customer-name" placeholder="Digite seu nome" />
        <input
          type="text"
          id="customer-address"
          placeholder="Digite seu endereço"
        />
      </div>
      <div>
        <button className="send" onclick="nextWindow();">
          Prosseguir
        </button>
        <button
          className="cancel"
          onclick="toggleAddressWindow(); toggleOverlay();"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}
