import { Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import User from "./components/user";
import Error from "./components/error";
import { Switch } from "react-router";
export default (
  <div>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about" exact>
        <About />
      </Route>
      <Route path="/users/:username" exact>
        <User />
      </Route>
      <Route path="*" exact>
        <Error />
      </Route>
    </Switch>
  </div>
);
