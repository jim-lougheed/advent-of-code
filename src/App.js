import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Day3 from './pages/Day3';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>Advent of Code</h1>
            <Switch>
              <Route path='/day3' exact component={Day3}/>
            </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
