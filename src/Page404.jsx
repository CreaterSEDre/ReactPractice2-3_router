import { useHistory } from "react-router-dom";

export const Page404 = () => {
  const history = useHistory();

  const onClickGoHome = () => {
    history.push("/");
  };
  return (
    <>
      <div>
        <h1>ページが見つかりません</h1>
        <button onClick={onClickGoHome}>Homeに戻る</button>
      </div>
    </>
  );
};
