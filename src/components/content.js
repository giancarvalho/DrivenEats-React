import Category from "./category";
import CATEGORIES from "./data";

export default function Categories({ readyToOrder }) {
  return CATEGORIES.map((category, index) => (
    <Category categoryData={category} key={index} readyToOrder={readyToOrder} />
  ));
}
