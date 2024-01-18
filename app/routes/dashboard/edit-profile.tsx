// edit-profile.tsx
import { Link } from 'react-router-dom';




function EditProfile() {

  return (
    <div>
      <nav className="navbar">
        <Link to="./edit-profile">Edit Profile</Link>
      </nav>
      <section>
        <h1>Edit Me</h1>
      </section>
    </div>
  );
}

export default EditProfile;