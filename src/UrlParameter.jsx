import { useParams, useLocation } from "react-router-dom";

//useLocationはパスの情報を返す。searchに「？」以降の値が入ってくる
//URLSearchParamsはデフォルトの機能でURLに対するあらゆる操作をまとめて提供する
export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(search);
  console.log(query);
  return (
    <>
      <div>
        <h1>UrlParameter</h1>
        <p>Param = {id}</p>
        <p>query = {query.get("name")}</p>
      </div>
    </>
  );
};
