import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <main style={{ color: "orange" }}>
        <Outlet />
        {/* outlet = children */}
      </main>
    </>
  );
};

export default Layout;
