import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";
import { Page2 } from "./Page2";
import "./styles.css";

//LinkタグでURL遷移を実装
//Switchタグ以下でLinkタグに沿った画面遷移を実装
//exact→完全一致のパスのみをtrueで返す
//Page1をexact→配下の「DetailA」等が「/Page1」の完全一致では無くなるため、
//付けてはいけない

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/Page1">Page1</Link>
        <br />
        <Link to="/Page2">Page2</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          path="/Page1"
          render={({ match: { url } }) => (
            <Switch>
              <Route exact path={url}>
                <Page1 />
              </Route>
              <Route path={`${url}/DetailA`}>
                <Page1DetailA />
              </Route>
              <Route path={`${url}/DetailB`}>
                <Page1DetailB />
              </Route>
            </Switch>
          )}
        />
        <Route exact path="/Page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
