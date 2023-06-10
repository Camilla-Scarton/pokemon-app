import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="logo-container">
          <img
            className="logo"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            alt="app-logo"
          />
          <Link to={``}>
            <h2 className="title">My Pokémon app</h2>
          </Link>
        </div>
        <ul>
          <li>
            <Link to={``}>
              <h2 className="home">Home</h2>
            </Link>
          </li>
          <li>
            <Link to={`list`}>
              <h2 className="list">List</h2>
            </Link>
          </li>
          <li>
            <Link to={`search-form`}>
              <h2 className="search">Search</h2>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <a href="">API</a>
      </div>
    </footer>
  );
}

export default function Root() {
  return (
    <div id="page">
      <Navbar />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
