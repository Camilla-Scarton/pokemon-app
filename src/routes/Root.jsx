import { Link, Outlet } from "react-router-dom";

export default function Root() {
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to={``}>Home</Link>
            </li>
            <li>
              <Link to={`list`}>List</Link>
            </li>
            <li>
              <Link to={`search-form`}>Search</Link>
            </li>
          </ul>
        </nav>
        <main>
        <Outlet />
        </main>
        <footer>footer</footer>
      </>
    );
  }