import React from 'react';
import FoodSearchSelect from '../containers/FoodSearchSelect';
// import NutritionLabel from '../containers/NutritionLabel';
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
      <Link to="/">Home</Link>
      <Link to="/nutritionlabel">View Nutrition</Link>
    </nav>
  </header>
);

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={FoodSearchSelect}/>
        {/* <Route path="/nutritionlabel" component={NutritionLabel} /> */}
      </Switch>
    </Router>
  );
}
  
