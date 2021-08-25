const CATEGORIES = [
  {
    category: "food",
    description: "Primeiro, seu prato",
    items: [
      {
        name: "Hambúrguer",
        description: "Seu hambúrguer tradicional",
        price: 16.9,
        image: "hamburguer.jpg",
      },
      {
        name: "Hambúrguer Vegano",
        description: "Feito a base de grão de bico",
        price: 25.9,
        image: "vegano.jpg",
      },
      {
        name: "X-Tudo Gourmet",
        description: "Xtudo, só que 3x mais caro",
        price: 39.9,
        image: "xtudo.jpg",
      },
    ],
  },
  {
    category: "drink",
    description: "Agora, sua bebida",
    items: [
      {
        name: "Hambúrguer",
        description: "Seu hambúrguer tradicional",
        price: 16.9,
        image: "hamburguer.jpg",
      },
      {
        name: "Hambúrguer Vegano",
        description: "Feito a base de grão de bico",
        price: 25.9,
        image: "vegano.jpg",
      },
      {
        name: "X-Tudo Gourmet",
        description: "Xtudo, só que 3x mais caro",
        price: 39.9,
        image: "xtudo.jpg",
      },
    ],
  },
  {
    category: "dessert",
    description: "Por fim, sua sobremesa",
    items: [
      {
        name: "Hambúrguer",
        description: "Seu hambúrguer tradicional",
        price: 16.9,
        image: "hamburguer.jpg",
      },
      {
        name: "Hambúrguer Vegano",
        description: "Feito a base de grão de bico",
        price: 25.9,
        image: "vegano.jpg",
      },
      {
        name: "X-Tudo Gourmet",
        description: "Xtudo, só que 3x mais caro",
        price: 39.9,
        image: "xtudo.jpg",
      },
    ],
  },
];

function Item(props) {
  const { category } = props;
  const { image, name, description, price } = props.itemData;

  return (
    <button className={`${category} item`} onclick="selectButton(this)">
      <img src={`assets/${image}`} className="image-product" />
      <p className="name">{name}</p>
      <p className="description">{description}</p>
      <p>
        R$<span className="price">{price}</span>
      </p>
      <img src="assets/checkmark-circle 2.png" className="checkmark" />
    </button>
  );
}

function Category(props) {
  const { description, category, items } = props.categoryData;

  return (
    <div className="category">
      <p>{description}</p>
      <div className="products">
        {items.map((item, index) => (
          <Item category={category} itemData={item} key={index} />
        ))}
      </div>
    </div>
  );
}
export default function Categories() {
  return CATEGORIES.map((category, index) => (
    <Category categoryData={category} key={index} />
  ));
}
