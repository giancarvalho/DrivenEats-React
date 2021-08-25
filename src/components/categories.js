import SelectItem from "../scripts/selectitem";
import CATEGORIES from "./data";

function Item(props) {
  const { category } = props;
  const { image, name, description, price } = props.itemData;

  return (
    <button
      className={`${category} item`}
      onClick={() => SelectItem(name, price, category)}
    >
      <img src={`assets/${image}`} className="image-product" />
      <p className="name">{name}</p>
      <p className="description">{description}</p>
      <div className="bottom-item">
        <p>
          R$<span className="price">{price.toLocaleString("pt-BR")}</span>
        </p>
        <div className="amount">
          <button className="decrease">-</button>
          <span>1</span>
          <button className="increase">+</button>
        </div>
      </div>
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
