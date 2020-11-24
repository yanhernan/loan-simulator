import { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { SimulatorPage } from "./pages";

const Routes: FunctionComponent = () => (
  <Router>
    <Switch>
      <Route path="/simulator" component={SimulatorPage} />
      <Redirect to="/simulator"  />
    </Switch>
  </Router>
);

export default Routes;
