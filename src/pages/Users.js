import { Outlet, Link, useSearchParams } from "react-router-dom";

//an optional query string (in React Router called search params) which comes in key/value pairs after a ? separator in the URL.
//For example, /users?name=robin would be a URL with one search params pair where the key would be name and the value would be robin.

const Users = (props) => {
  //props:  users

  const [searchParams, setSearchParams] = useSearchParams();
  console.log("seaaarch", searchParams);
  // At its core, React Router's useSearchParams Hook is the same as React's useState Hook with the difference that this state is a URL state and not a local state in React.
  const searchTerm = searchParams.get("name") || "";

  const handleSearch = (event) => {
    const typedTerm = event.target.value;
    if (typedTerm) {
      setSearchParams({ name: typedTerm });
    } else {
      setSearchParams({});
    }
    // searchParams = {name: typedTerm}
  };

  return (
    <>
      <h2>Users Component</h2>
      <input type='text' value={searchTerm} onChange={handleSearch} />

      <ul>
        {props.users
          .filter(
            (user) =>
              user.fullName
                .toLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
            // It's filtering the list based on the word that is being typed in the input field(searchTerm).
          )
          .map((user) => (
            <li key={user.id}>
              <Link to={user.id}>{user.fullName}</Link>
              {/* = <Link to={`/users/${user.id}`}>{user.fullName}</Link> */}
            </li>
          ))}
      </ul>

      {/* <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            <Link to={user.id}>{user.fullName}</Link>
                         = <Link to={`/users/${user.id}`}>{user.fullName}</Link>
          </li>
        ))}
      </ul> */}

      <Outlet />
      {/* because the Users component has to render its Nested Route too */}
    </>
  );
};

export default Users;

// After all, having search params in your URL gives you the benefit of sharing more specific URLs with others.
//If you are on an ecommerce website where you have an active search for black shoes, you may want to share the
//whole URL (e.g. myecommerce.com/shoes?color=black) instead of only the path (e.g. myecommerce.com/shoes).
//The former gives the person who opens your URL the filtered list as starting point.
