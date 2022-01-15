import { Outlet } from "react-router-dom";
import Navigate from "../components/Navigate";

function Home() {
  return (
    <div className="m-4">
      <Navigate />
      <br />
      <hr />
      <br />
      <Outlet />
    </div>
  );
}

export default Home;
