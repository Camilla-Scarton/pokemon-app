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
        <div className="links">
          <a href="https://pokeapi.co/">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/25.png"
            alt="badge"
          />
          <span>API</span>
        </a>
        <a href="https://tenor.com/it/">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/31.png"
            alt="badge"
          />
          <span>GIF</span>
        </a>
        </div>
        <div className="links">
          <a href="https://github.com/Camilla-Scarton">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/26.png"
              alt="badge"
            />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/camilla-scarton/">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/27.png"
              alt="badge"
            />
            <span>LinkedIn</span>
          </a>
        </div>
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
