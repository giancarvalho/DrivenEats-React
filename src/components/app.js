import BottomBar from "./bottombar";
import Content from "./content";
import Header from "./header";

export default function App() {
  return (
    <div className="website">
      <Header />
      <Content />
      <BottomBar />
    </div>
  );
}
