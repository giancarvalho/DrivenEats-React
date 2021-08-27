import BottomBar from "./bottombar";
import Content from "./content";
import Header from "./header";
import { useState } from "react";
import readyToOrder from "./readytoorder";

export default function App() {
  const [status, setStatus] = useState("disabled");

  if (readyToOrder()) {
    setStatus("active");
  }

  return (
    <div className="website">
      <Header />
      <Content />
      <BottomBar status={status} />
    </div>
  );
}
