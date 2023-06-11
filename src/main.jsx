import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './routes/Root'
import ErrorPage from './routes/ErrorPage';
import Welcome from './routes/Welcome';
import List from './routes/List';
import SearchForm from './routes/SearchForm';

import "./style/index.css";

const router = createBrowserRouter([
  {
    path: "/pokemon-app/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: "list",
        element: <List />,
      },
      {
        path: "search-form",
        element: <SearchForm />
      }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
