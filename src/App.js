import './App.css';
import { Recipe } from './components/recipe';
const data = require('../recipes.json')

function App() {
  return (
    <div className="App">
        <Recipe data={dara}/>
    </div>
  );
}

export default App;
