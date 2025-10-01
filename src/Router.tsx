import { createBrowserRouter, RouterProvider } from 'react-router';
import { Route } from 'constants/route';
import App from 'App';
import Home from 'pages/Home';
import Podcast from 'pages/Podcast';
import Episode from 'pages/Episode';

const router = createBrowserRouter([
  {
    path: Route.Home,
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: Route.Podcast,
        element: <Podcast />,
      },
      {
        path: Route.Episode,
        element: <Episode />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
