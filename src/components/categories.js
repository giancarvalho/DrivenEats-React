import { useState } from "react";
import addItem from "../scripts/selectitem";
import CATEGORIES from "./data";

function Item(props) {
  const { category } = props;
  const { image, name, description, price } = props.itemData;
  const [item, setItem] = useState("item");
  const [quantity, setQuantity] = useState(1);
  let amount;

  function SelectItem(deselect) {
    if (item === "item") {
      setItem("item selected");
    }

    if (deselect) {
      setItem("item");
      setQuantity(1);
    }
  }

  function changeQuantity(operator) {
    if (operator === "+") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1);
      if (quantity - 1 === 0) {
        SelectItem(true);
      }
    }
  }

  return (
    <button className={`${category} ${item}`} onClick={() => SelectItem()}>
      <img src={`assets/${image}`} className="image-product" />
      <p className="name">{name}</p>
      <p className="description">{description}</p>
      <div className="bottom-item">
        <p>
          R$<span className="price">{price.toLocaleString("pt-BR")}</span>
        </p>
        <div className="amount">
          <button className="decrease" onClick={() => changeQuantity("-")}>
            -
          </button>
          <span>{quantity}</span>
          <button className="increase" onClick={() => changeQuantity("+")}>
            +
          </button>
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
          <Item category={category} itemData={item} index={index} key={index} />
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
