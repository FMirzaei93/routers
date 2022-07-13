import Nav from "./pages/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Users from "./pages/Users";
import User from "./pages/User";
import Layout from "./pages/Layout.js";
import { Routes, Route, useNavigate } from "react-router-dom";
//useNavigate Hook allows us to navigate a user programmatically to another route
import React from "react";

function App() {
  const navigate = useNavigate();

  const [users, setUsers] = React.useState([
    { id: "1", fullName: "Robin Wieruch" },
    { id: "2", fullName: "Sarah Finnley" },
  ]);

  const handleRemoveUser = (userId) => {
    setUsers((prev) => prev.filter((user) => user.id !== userId));
    navigate("/users");
  };

  return (
    <>
      <Nav />
      <Routes>
        {/* To specify which component to go, based on the url(determined in Nav component, by NavLink s)*/}
        <Route element={<Layout />}>
          {/* To assign a specific style to these components */}
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/users' element={<Users users={users} />}>
            <Route
              path=':userId'
              // ='/users/:userId'
              element={<User onRemoveUser={handleRemoveUser} />}
            />
          </Route>
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

// An application can have multiple <Routes>. Our basic example only uses one.
// <Route>s can be nested. The first <Route> has a path of / and renders the Layout component.
// The nested <Route>s inherit and add to the parent route. So the about path is combined with the parent and becomes /about
// The Home component route does not have a path but has an index attribute. That specifies this route as the default route for the parent route, which is /
// Setting the path to * will act as a catch-all for any undefined URLs. This is great for a 404 error page.
