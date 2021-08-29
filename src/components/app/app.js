import BottomBar from "../bottombar";
import Header from "../header";
import { useState } from "react";
import ORDER from "../order";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ConfirmOrder from "../confirmorder";
import Categories from "../categories/categories";

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
          <Route
            exact
            path="/"
            render={(props) => (
              <>
                <main>
                  <Categories readyToOrder={readyToOrder} {...props} />
                </main>
                <BottomBar active={{ status, text }} {...props} />
              </>
            )}
          ></Route>
          <Route exact path="/review" component={ConfirmOrder}></Route>
        </Switch>
      </Router>
    </div>
  );
}
