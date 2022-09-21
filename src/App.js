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
(function(h,o,t,j,a,r){
  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
  h._hjSettings={hjid:3168045,hjsv:6};
  a=o.getElementsByTagName('head')[0];
  r=o.createElement('script');r.async=1;
  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
  a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');

export default App;

