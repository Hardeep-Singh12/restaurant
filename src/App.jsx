import { Toaster } from 'react-hot-toast';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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
        element: <Home />,
      }, {
        path: "SignUp",
        element: <SignUp />,
      }, {
        path: "Feed",
        element: <Feed />,
      },
      {
        path: "about",
        element: <About_us />,
      },      {
        path: "Home",
        element: <Home />,
      },
      {
        path: "register",   // `/register`
        element: <Register />,
      }
    ],
  },
  // {
  //   path:"/",
  //       element: <Register />,
  // },

  {
    path: "*",
    element: <h1>404 - Page Not Found</h1>,
  }
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
