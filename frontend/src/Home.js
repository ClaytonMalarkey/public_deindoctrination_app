import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <nav>
        <Link to="/login">Login</Link> | 
        <Link to="/register">Register</Link>
      </nav>
    </div>
  );
}

export default Home;
