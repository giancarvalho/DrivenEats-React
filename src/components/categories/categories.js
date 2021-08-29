import Category from "./category";
import AVAILABLE_ITEMS from "../data/availableItems";

export default function Categories({ readyToOrder }) {
  return AVAILABLE_ITEMS.map((category, index) => (
    <Category categoryData={category} key={index} readyToOrder={readyToOrder} />
  ));
}
