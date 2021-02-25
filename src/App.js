import './App.css';
import HomePage from './pages/homepage/HomePage'
import Shop from './pages/shop/Shop'
import { Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div className="">
      <Switch>
        <Route exact path = '/' component={HomePage} />
        <Route exact path = '/shop' component={Shop} />
      </Switch>
     {/* <Homepage /> */}
    </div>

  );
}

export default App;
