import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import MainLayout from './Mainlayout/MainLayout';
import Homepage from './Mainlayout/Pages/Homepage';
import EnglishPage from './Mainlayout/Pages/EnglishPage';
import ProfessionalDevelopment from './Mainlayout/Pages/ProfessionalDevelopment';
import EnglishCommunication from './Mainlayout/Pages/EnglishCommunication';
import WebDevelopment from './Mainlayout/Pages/WebDevelopment';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainLayout />,
        children: [
          { index: true, element: <Homepage /> }, // Default homepage
          { path: 'home', element: <Homepage /> },
          { path: 'english', element: <EnglishPage /> },
          { path: 'professional-development', element: <ProfessionalDevelopment /> },
          { path: 'english-communication', element: <EnglishCommunication /> },
          { path: 'web-development', element: <WebDevelopment /> },
        ],
      },
    ],
    
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

