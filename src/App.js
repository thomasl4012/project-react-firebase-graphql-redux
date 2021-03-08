import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/homepage/shop/shop-page.component";
import Header from "./components/header/header.component";
import Login from "./pages/homepage/login/login.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/signin" component={Login} />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
