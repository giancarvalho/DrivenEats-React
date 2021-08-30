import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import BottomBar from "../bottombar/bottombar";
import Header from "../header/header";
import ConfirmOrder from "../confirmorder/confirmorder";
import Categories from "../categories/categories";
import ORDER from "../data/order";

export default function App() {
  //manages the state of checkout button
  const [status, setStatus] = useState("disabled");
  const [text, setText] = useState("Selecione os 3 itens para fechar o pedido");
  //indicates if the user is coming from the review order page
  const [renderFromReview, setRenderFromReview] = useState(false);

  function readyToOrder() {
    const { dishes, drinks, desserts } = ORDER;

    if (dishes.length > 0 && drinks.length > 0 && desserts.length > 0) {
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
                    renderFromReview={renderFromReview}
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
              <ConfirmOrder
                setRenderFromReview={setRenderFromReview}
                {...props}
              />
            )}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}
