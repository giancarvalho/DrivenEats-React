import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BottomBar from "./bottombar";
import ConfirmOrder from "./confirmorder";
import Content from "./content";
import Header from "./header";
import ORDER from "./order";

export default function App() {
  const [status, setStatus] = useState("disabled");
  const [text, setText] = useState("Selecione os 3 itens para fechar o pedido");

  function readyToOrder() {
    const { food, drink, dessert } = ORDER;

    if (food.length > 0 && drink.length > 0 && dessert.length > 0) {
      setStatus("active");
      setText("Fechar pedido");
    } else {
      setStatus("disabled");
      setText("Selecione os 3 itens para fechar o pedido");
    }
  }

  return (
    <div className="website">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Content readyToOrder={readyToOrder} />
            <BottomBar active={{ status, text }} />
          </Route>
          <Route path="/review">
            <ConfirmOrder />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
