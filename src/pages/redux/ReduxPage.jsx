import { useNavigate } from "react-router-dom";

function ReduxPage() {
  const nav = useNavigate();

  return (
    <>
      <h2>Redux</h2>
      <button onClick={() => nav("sync")}>Sync</button>
      <button onClick={() => nav("async")}>Async</button>
    </>
  );
}

export default ReduxPage;
