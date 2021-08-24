export default function Content() {
  return (
    <main>
      <div class="category">
        <p>Primeiro, seu prato</p>
        <div class="products">
          <button class="first item" onclick="selectButton(this)">
            <img src="assets/hamburguer.jpg" class="image-product" />
            <p class="name">Hambúrguer</p>
            <p class="description">Seu hambúrguer tradicional</p>
            <p>
              R$<span class="price">16,90</span>
            </p>
            <img src="assets/checkmark-circle 2.png" class="checkmark" />
          </button>
          <button class="first item" onclick="selectButton(this)">
            <img src="assets/vegano.jpg" class="image-product" />
            <p class="name">Hambúrguer Vegano</p>
            <p class="description">Feito a base de grão de bico</p>
            <p>
              R$<span class="price">25,90</span>
            </p>
            <img src="assets/checkmark-circle 2.png" class="checkmark" />
          </button>

          <button class="first item" onclick="selectButton(this)">
            <img src="assets/xtudo.jpg" class="image-product" />
            <p class="name">X-Tudo Gourmet</p>
            <p class="description">Xtudo, só que 3x mais caro</p>
            <p>
              R$<span class="price">39,90</span>
            </p>
            <img src="assets/checkmark-circle 2.png" class="checkmark" />
          </button>
        </div>
      </div>

      <div class="category">
        <p>Agora, sua bebida</p>
        <div class="products">
          <button class="second item" onclick="selectButton(this)">
            <img src="assets/coca.jpg" class="image-product" />
            <p class="name">Coca Quente</p>
            <p class="description">Foto meramente ilustrativa</p>
            <p>
              R$<span class="price">4,90</span>
            </p>
            <img src="assets/checkmark-circle 2.png" class="checkmark" />
          </button>

          <button class="second item" onclick="selectButton(this)">
            <img src="assets/coca.jpg" class="image-product" />
            <p class="name">Coca Gelada</p>
            <p class="description"></p>
            <p>
              R$<span class="price">6,90</span>
            </p>
            <img src="assets/checkmark-circle 2.png" class="checkmark" />
          </button>

          <button class="second item" onclick="selectButton(this)">
            <img src="assets/cana.jpg" class="image-product" />
            <p class="name">Caldo de Cana</p>
            <p class="description">Atenção: contém cana</p>
            <p>
              R$<span class="price">6,00</span>
            </p>
            <img src="assets/checkmark-circle 2.png" class="checkmark" />
          </button>
        </div>
      </div>

      <div class="category">
        <p>Por fim, sua sobremesa</p>
        <div class="products">
          <button class="third item" onclick="selectButton(this)">
            <img src="assets/brigadeiro.jpg" class="image-product" />
            <p class="name">Brigadeiro</p>
            <p class="description"></p>
            <p>
              R$<span class="price">2,90</span>
            </p>
            <img src="assets/checkmark-circle 2.png" class="checkmark" />
          </button>

          <button class="third item" onclick="selectButton(this)">
            <img src="assets/cenoura.png" class="image-product" />
            <p class="name">Bolo de Cenoura</p>
            <p class="description">Inclui cobertura de chocolate</p>
            <p>
              R$<span class="price">3,90</span>
            </p>
            <img src="assets/checkmark-circle 2.png" class="checkmark" />
          </button>

          <button class="third item" onclick="selectButton(this)">
            <img src="assets/sorvete.jpg" class="image-product" />
            <p class="name">Sorvete de Chocolate</p>
            <p class="description">Ou qual sabor estiver disponível</p>
            <p>
              R$<span class="price">8,00</span>
            </p>
            <img src="assets/checkmark-circle 2.png" class="checkmark" />
          </button>
        </div>
      </div>

      <div class="address modal">
        <div>
          <input type="text" id="customer-name" placeholder="Digite seu nome" />
          <input
            type="text"
            id="customer-address"
            placeholder="Digite seu endereço"
          />
        </div>
        <div>
          <button class="send" onclick="nextWindow();">
            Prosseguir
          </button>
          <button
            class="cancel"
            onclick="toggleAddressWindow(); toggleOverlay();"
          >
            Cancelar
          </button>
        </div>
      </div>

      <div class="confirm-order modal">
        <strong>Confirme seu pedido</strong>
        <div class="order-items">
          <div class="first">
            <p class="name"></p>
            <p class="price"></p>
          </div>
          <div class="second">
            <p class="name"></p>
            <p class="price"></p>
          </div>
          <div class="third">
            <p class="name"></p>
            <p class="price"></p>
          </div>
          <div class="total">
            <p>Total</p>
            <p class="total-order"></p>
          </div>
        </div>
        <div class="confirm-buttons">
          <button class="send" onclick="sendMessage();">
            Tudo certo, pode pedir
          </button>
          <button
            class="cancel"
            onclick="toggleConfirmWindow(); toggleOverlay()"
          >
            Cancelar
          </button>
        </div>
      </div>

      <div class="overlay"></div>
    </main>
  );
}
