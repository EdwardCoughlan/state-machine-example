import { useMachine } from "@xstate/react";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppMachine } from "../../machines/AppMachine";
import Layout from "../layout/Layout";
import { inspect } from "@xstate/inspect";
import "./App.css";

// inspect({
//   iframe: false,
// });

function App() {
  const [state] = useMachine(AppMachine);

  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/login">
            <div>login</div>
          </Route>
          <Route exact path="/">
            <div>Home</div>
            <div>{JSON.stringify(state)}</div>
            <div>{JSON.stringify(state.context)}</div>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
