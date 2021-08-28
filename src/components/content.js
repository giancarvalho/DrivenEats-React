import Categories from "./categories";

export default function Content({ readyToOrder }) {
  return (
    <main>
      <Categories readyToOrder={readyToOrder} />
    </main>
  );
}
