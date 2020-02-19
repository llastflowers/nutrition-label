import React from 'react';
import FoodSearchSelect from '../containers/FoodSearchSelect';
import FoodDetail from '../containers/FoodDetail';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Nutrition Quest</h1>
    <nav>
      <Link to="/">Back to Search</Link>
    </nav>
  </header>
);

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={FoodSearchSelect}/>
        <Route path="/:id" component={FoodDetail}/>
      </Switch>
    </Router>
  );
}
  
