import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from "react-router-dom";
const Start = () => {
  return <h2>get Started</h2>;
};
const News = () => {
  return <h2>News</h2>;
};
const Contact = () => {
  return <h2>Welcome on Contact</h2>;
};
const ErrorPage = () => {
  return <h2>Page does not exist</h2>;
};
function App() {
  return (
    <Router>
      <div>
        <header>
          <nav>
            {/* <li>
              <Link to="/">start</Link>
            </li>
            <li>
              <Link to="/news">news</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li> */}
            {/* NavLink Sprawia, że mamy klasę active, możemy nadawać różne nazwy*/}
            <li>
              <NavLink to="/" activeClassName="start_selected">
                start
              </NavLink>
            </li>
            <li>
              <NavLink to="/news">news</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </nav>
        </header>
        <section>
          <Switch>
            <Route path="/" exact component={Start} />
            <Route path="/news" component={News} />
            <Route path="/contact" exact component={Contact} />
            <Route component={ErrorPage} />
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
