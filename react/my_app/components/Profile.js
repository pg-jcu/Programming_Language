import { useParams } from "react-router-dom";
import '../style/Profile.scss';

const data = {
  jeong: {
    name: 'jeong chan uk',
    description: 'programmer'
  },
  gildong: {
    name: 'hong gil dong',
    description: 'old man'
  }
};

function Profile() {
  const { username } = useParams();
  const profile = data[username];

  if (!profile) {
    return <div className="Profile">User doesn't exist.</div>
  }

  return (
    <div className="Profile">
      <h3>{username}({profile.name})</h3>
      <p>{profile.description}</p>
    </div>
  );
}

export default Profile;