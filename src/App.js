import List from './pages/List'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import New from './pages/New';
function App() {

  return (
    <Router>
      <div className="App">
        <h1>Template</h1>
        <Link to="/">Home</Link>
        <Link to="/novo">Novo</Link>
        <Switch>
          <Route path="/" exact component={List} />
          <Route path="/novo" component={New} />
          <Route path="/editar/:id" component={New} />
        </Switch>
      </div>
    </Router>


  );
}

export default App;
