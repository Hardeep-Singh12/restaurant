import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './App.css';

import Register from './comp/loginComp/Register';
import SignUp from './comp/loginComp/SignUp';
import Main from './comp/siteComp/Main';
import Feed from './comp/siteComp/Feed';
import About_us from './comp/siteComp/About_us';
import Home from './comp/siteComp/Home';

const routes = createBrowserRouter([
  {
    path: "/", 
    element: <Main />,
    children: [
      {
        index: true, 
        element: <Register />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "feed", 
        element: <Feed />,
      },
      {
        path: "about", 
        element: <About_us />,
      },
      {
        path: "home", 
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>404 - Page Not Found</h1>,
  },
]);
function App() {
  return (
    <>
      <Toaster />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
