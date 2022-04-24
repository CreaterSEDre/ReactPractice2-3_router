import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";
import "./styles.css";

//LinkタグでURL遷移を実装
//Switchタグ以下でLinkタグに沿った画面遷移を実装

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
      <Router />
    </BrowserRouter>
  );
}
