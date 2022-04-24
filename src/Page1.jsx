import { Link, useHistory } from "react-router-dom";

//Linkタグにstateを用いて値を渡すことが出来る
//useHistoryはLinkを用いずに画面遷移を行う場合に使用する。push(遷移先のルート)
export const Page1 = () => {
  const arr = [...Array(100).keys()];

  const history = useHistory();

  const onClickDetailA = () => {
    history.push("/Page1/DetailA");
  };
  return (
    <>
      <div>
        <h1>Page1</h1>
        <Link to={{ pathname: "/Page1/DetailA", state: arr }}>DetailA</Link>
        <br />
        <Link to={{ pathname: "/Page1/DetailB" }}>DetailB</Link>
        <br />
        <button onClick={onClickDetailA}>DetailA</button>
      </div>
    </>
  );
};
