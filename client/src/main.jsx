import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  // redirect,
  RouterProvider,
} from 'react-router-dom';

import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <App />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
