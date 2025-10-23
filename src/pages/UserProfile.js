// UserProfile.js
import { useParams, useOutletContext } from "react-router-dom";

function UserProfile() {
  const { id } = useParams();
  const users = useOutletContext();
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) return <h1>Loading...</h1>;

  return (
    <aside>
      <h1>{user.name}</h1>
    </aside>
  );
}

export default UserProfile;