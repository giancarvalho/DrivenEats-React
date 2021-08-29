import BottomBar from "../bottombar/bottombar";
import Header from "../header/header";
import { useState } from "react";
import ORDER from "../data/order";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ConfirmOrder from "../confirmorder/confirmorder";
import Categories from "../categories/categories";

export default function App() {
  const [status, setStatus] = useState("disabled");
  const [text, setText] = useState("Selecione os 3 itens para fechar o pedido");
  const [cancel, setCancel] = useState(false);

  function readyToOrder() {
    const { food, drink, dessert } = ORDER;

    if (food.length > 0 && drink.length > 0 && dessert.length > 0) {
      setStatus("active");
      setText("Fechar pedido");
    } else {
      setStatus(null);
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
                  <Categories
                    readyToOrder={readyToOrder}
                    cancel={cancel}
                    {...props}
                  />
                </main>
                <BottomBar active={{ status, text }} {...props} />
              </>
            )}
          ></Route>
          <Route
            exact
            path="/review"
            render={(props) => (
              <ConfirmOrder setCancel={setCancel} {...props} />
            )}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}
