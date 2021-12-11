import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Day3 from './pages/Day3';
import Day4 from './pages/Day4/Day4';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>Advent of Code</h1>
            <Switch>
              <Route path='/day3' exact component={Day3}/>
              <Route path='/day4' exact component={Day4}/>
            </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
