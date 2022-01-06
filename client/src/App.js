import "./App.css";
import { Route, Switch } from "react-router-dom";
import {
  NavBar,
  Homepage,
  SignIn,
  MyPage,
  CryptoWorld,
  DetailWorld,
} from "./components/main";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/SignIn">
          <SignIn />
        </Route>
        <Route path="/MyPage">
          <MyPage />
        </Route>
        <Route path="/CryptoWorld">
          <CryptoWorld />
        </Route>
        <Route path="/detail/:id">
          <DetailWorld />
        </Route>
      </Switch>
    </div>
  );
}

export default App;