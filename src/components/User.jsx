import {
  fetchUsersFailure,
  fetchUsersRequest,
  fetchUsersSuccess,
} from "../redux/users/userAction";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";

function User() {
  const dispatch = useDispatch();
  const { loading, users, error } = useSelector((state) => state.users);

  const fetchUsers = async () => {
    dispatch(fetchUsersRequest());
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      const data = await res.data;
      dispatch(fetchUsersSuccess(data));
    } catch (error) {
      dispatch(fetchUsersFailure(error.message));
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div >
        <div >
          <h1>Teachers</h1>
        </div>

        <div >
          <h1>Users</h1>
          {loading ? <h2>Loading...</h2> : null}
          {error ? <h3>{error}</h3> : null}
          {users.length > 0 ? (
            <ul>
              {users.map((user) => (
                <li key={user.id}>
                  {user.id}
                  <h1>{user.username}</h1>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default User;
