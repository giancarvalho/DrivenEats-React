import { useState } from "react";
import ORDER from "../../data/order";
import manageOrder from "./scripts/selectitem";

function isItemInOrder(category, name) {
  return ORDER[category].some((item) => item.itemName === name);
}
//generates each item in the category
function Item(props) {
  const { category, readyToOrder, renderFromReview } = props;
  const { image, name, description, price } = props.itemData;
  const [itemClass, setItemClass] = useState("item");
  const [amount, setAmount] = useState(1);
  //selects again the items if user is coming from the review page
  if (renderFromReview) {
    if (isItemInOrder(category, name)) {
      selectItem();
    }
  }

  function selectItem(deselect) {
    if (itemClass === "item") {
      setItemClass("item selected");
      if (!isItemInOrder(category, name)) {
        manageOrder({ name, price, category, operation: "add" });
      }
    }

    if (deselect) {
      setItemClass("item");
      setAmount(1);
      manageOrder({ name, category, operation: "remove" });
    }

    readyToOrder();
  }

  function changeQuantity(operator) {
    if (operator === "+") {
      setAmount(amount + 1);
      manageOrder({ name, category, operation: "increase" });
    } else {
      setAmount(amount - 1);
      manageOrder({ name, category, operation: "decrease" });
      if (amount - 1 === 0) {
        selectItem(true);
      }
    }
  }

  return (
    <div className={itemClass} onClick={() => selectItem()}>
      <img src={`assets/${image}`} className="image-product" />
      <p className="name">{name}</p>
      <p className="description">{description}</p>
      <div className="bottom-item">
        <p>
          R$<span className="price">{price.toFixed(2)}</span>
        </p>
        <div className="amount">
          <button className="decrease" onClick={() => changeQuantity("-")}>
            -
          </button>
          <span>{amount}</span>
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
  const { readyToOrder, renderFromReview } = props;

  return (
    <div className="category">
      <p>{description}</p>
      <div className="products">
        {items.map((item, index) => (
          <Item
            category={category}
            itemData={item}
            readyToOrder={readyToOrder}
            renderFromReview={renderFromReview}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
