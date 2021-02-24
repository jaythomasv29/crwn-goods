import './App.css';
import HomePage from './pages/homepage/HomePage'
import { Switch, Route } from 'react-router-dom'

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div className="">
      <Switch>
        <Route exact path = '/' component={HomePage} />
        <Route exact path = '/shop/hats' component={HatsPage} />
      </Switch>
     {/* <Homepage /> */}
    </div>

  );
}

export default App;
