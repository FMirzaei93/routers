import { NavLink } from "react-router-dom";
const style = ({ isActive }) => ({
  color: isActive ? "green" : "pink",
  fontWeight: "bold",
  padding: ".5rem",
});
const Nav = () => {
  return (
    <>
      <h2>Nav Component</h2>
      <nav>
        {/* we can use the NavLink component over a Link component whenever we want to show its active state. */}
        <NavLink to='/' style={style}>
          Home
        </NavLink>

        <NavLink to='/about' style={style}>
          About
        </NavLink>

        <NavLink to='/contact' style={style}>
          Contact
        </NavLink>
        <NavLink to='/users' style={style}>
          Users
        </NavLink>

        <NavLink to='/other' style={style}>
          other
        </NavLink>

        <NavLink
          to={{
            pathname: "/settings",
            search: "?sort=date",
            state: { fromHome: true },
          }}
        ></NavLink>
      </nav>
    </>
  );
};

export default Nav;
