import Category from "./category/category";
import AVAILABLE_ITEMS from "../data/availableItems";

export default function Categories({ readyToOrder, renderFromReview }) {
  return AVAILABLE_ITEMS.map((category, index) => (
    <Category
      categoryData={category}
      readyToOrder={readyToOrder}
      renderFromReview={renderFromReview}
      key={index}
    />
  ));
}
