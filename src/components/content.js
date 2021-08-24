import AddressModal from "./adressmodal";
import Categories from "./categories";
import ConfirmOrder from "./confirmorder";

export default function Content() {
  return (
    <main>
      <Categories />
      <AddressModal />
      <ConfirmOrder />

      <div className="overlay"></div>
    </main>
  );
}
