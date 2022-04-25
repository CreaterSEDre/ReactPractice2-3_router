import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

//URL情報をパラメータとして扱う場合は[:]を用いる
export const Page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/:id",
    exact: true,
    children: <UrlParameter />
  }
];
