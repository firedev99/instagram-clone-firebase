import './App.css';
import { Route, Switch } from "react-router-dom";
// components
import Home from "./pages/home";
import Admin from "./pages/admin";
import Login from "./pages/login";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact >
          <Home />
        </Route>
        <Route path="/login" exact >
          <Login />
        </Route>
        <Route path="/admin" exact >
          <Admin />
        </Route>
      </Switch>
    </>
  );
}

export default App;
