import { useLocation, useHistory } from "react-router-dom";

//history.goBack()は遷移元の画面に戻る

export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);

  const history = useHistory();

  const onClickPage1 = () => {
    history.goBack();
  };

  return (
    <>
      <div>
        <h1>Page1DetailA</h1>
        <button onClick={onClickPage1}>戻る</button>
      </div>
    </>
  );
};
