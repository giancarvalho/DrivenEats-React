import BottomBar from "./bottombar";
import Content from "./content";

export default function MainPage() {
  return (
    <>
      <Content readyToOrder={readyToOrder} />
      <BottomBar active={{ status, text }} />
    </>
  );
}
