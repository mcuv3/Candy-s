import React, { Suspense } from "react";

import LayOut from "./HOC/LayOut";
import LoadingBar from "./components/UI/LoadingBar/LoadingBar";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const Dulces = React.lazy(() => import("./Containers/Dulces/Dulces"));
const AdminDulces = React.lazy(() => import("./Containers/DulcesAdmin/Dulces"));
const AgregarDulce = React.lazy(() =>
  import("./Containers/AgregarDulce/AgregarDulce")
);

function App() {
  return (
    <BrowserRouter>
      <LayOut>
        <Suspense fallback={<LoadingBar />}>
          <Switch>
            <Route path="/dulces" component={Dulces} />
            <Route path="/admin/dulces" component={AdminDulces} />
            <Route path="/agregar-dulce" component={AgregarDulce} />
            <Redirect to="/dulces" />
          </Switch>
        </Suspense>
      </LayOut>
    </BrowserRouter>
  );
}

export default App;
