import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Detail from './pages/Detail';
import Home from './pages/Home';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Link to="/">Home</Link>
          <Link to="/detail">Detail</Link>

          <Switch>
            <Route path="/detail" component={Detail}></Route>
            <Route path="/" exact component={Home}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
