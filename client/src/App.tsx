import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
// import Login from './components/Login';
// import Register from './components/Authentication';
import Home from './pages/Home';
import Episodes from './pages/Episodes';
import About from './pages/About';
import EpisodeFeature from './pages/EpisodeFeature';

// Remove the unsupported 'v7_startTransition' property
const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/episodes', element: <Episodes /> },
        { path: '/episodes/:id', element: <EpisodeFeature /> },
        { path: '/about', element: <About /> }
        // { path: '/login', element: <Login /> },
        // { path: '/signup', element: <Register /> },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
