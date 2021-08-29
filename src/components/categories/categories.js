import Category from "./category/category";
import AVAILABLE_ITEMS from "../data/availableItems";

export default function Categories({ readyToOrder, cancel }) {
  return AVAILABLE_ITEMS.map((category, index) => (
    <Category
      categoryData={category}
      readyToOrder={readyToOrder}
      cancel={cancel}
      key={index}
    />
  ));
}
