import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected <span class="error">ERROR</span> has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={``}>
        <h2>Return to app!</h2>
      </Link>
    </div>
  );
}