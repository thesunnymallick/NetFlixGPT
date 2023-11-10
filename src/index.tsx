import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import store from './store/store';
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from './pages/auth/Login';
import Browse from './pages/home/Browse';
import VideoPlay from './pages/video/VideoPlay';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const appRouter = createBrowserRouter([

  {

    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/browse",
        element: <Browse />
      }
    ],

  },
  {
    path: "/videoPlay/:id",
    element: <VideoPlay />
  }
])
root.render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>


);
