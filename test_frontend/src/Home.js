import React from "react";
import Test1 from "./Test1";
import Test2 from "./Test2";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Test 1</Link>
            </li>
            <li>
              <Link to="/test2">Test 2</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/test2">
            <Test2 />
          </Route>
          <Route path="/">
            <Test1 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
