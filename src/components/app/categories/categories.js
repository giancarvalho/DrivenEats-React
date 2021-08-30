import Category from "./category/category";
import AVAILABLE_ITEMS from "../data/availableItems";
import { useState } from "react";

export default function Categories({ readyToOrder, orderMet }) {
  //sees if order list already has items on it
  const [orderFull] = useState(orderMet());

  return AVAILABLE_ITEMS.map((category, index) => (
    <Category
      categoryData={category}
      readyToOrder={readyToOrder}
      orderFull={orderFull}
      key={index}
    />
  ));
}
