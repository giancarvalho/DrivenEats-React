import { useState } from "react";
import manageOrder from "../scripts/selectitem";
import CATEGORIES from "./data";

function Item(props) {
  const { category, readyToOrder } = props;
  const { image, name, description, price } = props.itemData;
  const [item, setItem] = useState("item");
  const [quantity, setQuantity] = useState(1);

  function selectItem(deselect) {
    if (item === "item") {
      setItem("item selected");
      manageOrder({ name, price, category, operation: "add" });
    }

    if (deselect) {
      setItem("item");
      setQuantity(1);
      manageOrder({ name, category, operation: "remove" });
    }

    readyToOrder();
  }

  function changeQuantity(operator) {
    if (operator === "+") {
      setQuantity(quantity + 1);
      manageOrder({ name, category, operation: "increase" });
    } else {
      setQuantity(quantity - 1);
      manageOrder({ name, category, operation: "decrease" });
      if (quantity - 1 === 0) {
        selectItem(true);
      }
    }
  }

  return (
    <div className={item} onClick={() => selectItem()}>
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
    </div>
  );
}

export default function Category(props) {
  const { description, category, items } = props.categoryData;
  const { readyToOrder } = props;

  return (
    <div className="category">
      <p>{description}</p>
      <div className="products">
        {items.map((item, index) => (
          <Item
            category={category}
            itemData={item}
            index={index}
            key={index}
            readyToOrder={readyToOrder}
          />
        ))}
      </div>
    </div>
  );
}
