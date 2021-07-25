import Cadastro from './pages/Cadastro';
import Carrinho from './pages/Carrinho';
import HomeProdutos from './pages/HomeProdutos';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/carrinho">
              <Carrinho />
          </Route>
          <Route exact path="/Cadastro">
              <Cadastro />
          </Route>
          <Route exact path="/">
              <HomeProdutos />
          </Route>
      </Switch>
    </Router>


  );
}

export default App;
