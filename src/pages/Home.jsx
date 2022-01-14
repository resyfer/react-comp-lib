import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="pl-4">
      <br />
      <Outlet />
    </div>
  );
}

export default Home;
