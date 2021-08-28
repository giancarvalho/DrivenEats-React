import AddressModal from "./adressmodal";
import Categories from "./categories";
import ConfirmOrder from "./confirmorder";

export default function Content({ readyToOrder }) {
  return (
    <main>
      <Categories readyToOrder={readyToOrder} />
      <AddressModal />
      <ConfirmOrder />
      <div className="overlay"></div>
    </main>
  );
}
