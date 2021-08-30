import "../../css/reset.css";
import "../../css/styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import BottomBar from "./bottombar/bottombar";
import Header from "./header/header";
import ConfirmOrder from "./confirmorder/confirmorder";
import Categories from "./categories/categories";
import ORDER from "./data/order";

export default function App() {
  //manages the state of checkout button
  const [status, setStatus] = useState("disabled");
  const [text, setText] = useState("Selecione os 3 itens para fechar o pedido");

  function isOrderConditionMet() {
    const { dishes, drinks, desserts } = ORDER;
    return dishes.length > 0 && drinks.length > 0 && desserts.length > 0;
  }

  function readyToOrder() {
    if (isOrderConditionMet()) {
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
                  <Categories
                    readyToOrder={readyToOrder}
                    orderMet={isOrderConditionMet}
                    {...props}
                  />
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
