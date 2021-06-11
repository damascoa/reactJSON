import List from './pages/List'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import New from './pages/New';
import Nota from './pages/Nota';
function App() {

  var styles = {
    margin10: {
      margin: "10px"
    }
  }

  return (
    <Router>
      <div className="App" style={styles.margin10}>
        <h1>Template</h1>
        <div>
          <Link to="/" style={styles.margin10}>Home</Link>
          <Link to="/novo" style={styles.margin10}>Novo</Link>
          <Link to="/nota" style={styles.margin10}>Nota</Link>
        </div>

        <br />
        <br />
        <Switch>
          <Route path="/" exact component={List} />
          <Route path="/novo" component={New} />
          <Route path="/Nota" component={Nota} />
          <Route path="/editar/:id" component={New} />
        </Switch>
      </div>
    </Router>


  );
}

export default App;
