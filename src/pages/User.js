import { Link, useParams, useNavigate } from "react-router-dom";
//we can always get the dynamic paths (called parameters or params) from the URL by using React Router's useParams Hook.
const User = (props) => {
  //props: onRemoveUser

  const { userId } = useParams();

  return (
    <>
      <h2>User: {userId}</h2>

      <button onClick={() => props.onRemoveUser(userId)}>
        Remove this user
      </button>

      <br />
      <br />

      <Link to='/users'>Back to Users</Link>
    </>
  );
};

export default User;
