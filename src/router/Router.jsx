import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page1Routes } from "./Page1Route";
import { Page2Routes } from "./Page2Route";
import { Page404 } from "../Page404";

//exact→完全一致のパスのみをtrueで返す
//ネストされたページ遷移はrenderを用いて同じことを繰り返す
//renderは暗黙的にpropsを受け取っており、matchのurlを使用→console.log()で確認
//Page1をexact→配下の「DetailA」等が「/Page1」の完全一致では無くなるため、
//付けてはいけない
//Switchの最後に「Path＝*」ルートを指定すると記述以外の遷移は全てそのルートへ行きつく

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/Page1"
        render={({ match: { url } }) => (
          <Switch>
            {Page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route
        path="/Page2"
        render={({ match: { url } }) => (
          <Switch>
            {Page2Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
