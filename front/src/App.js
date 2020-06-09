import React, { Suspense } from "react";
import classes from "./App.css";
import LayOut from "./HOC/LayOut";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Dulces = React.lazy(() => import("./Containers/Dulces/Dulces"));
const AgregarDulce = React.lazy(() =>
  import("./Containers/AgregarDulce/AgregarDulce")
);
const Carro = React.lazy(() => import("./Containers/Carro/Carro"));

function App() {
  return (
    <div className={classes.App}>
      <BrowserRouter>
        <LayOut>
          <Suspense fallback={<div>Loading....</div>}>
            <Switch>
              <Route path="/dulces" component={Dulces} />
              <Route path="/carro" component={Carro} />
              <Route path="/agregar-dulce" component={AgregarDulce} />
            </Switch>
          </Suspense>
        </LayOut>
      </BrowserRouter>
    </div>
  );
}

export default App;
