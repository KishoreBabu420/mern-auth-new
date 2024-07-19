// Import necessary modules
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';

// Define lazy-loaded components
const Home = lazy(() => import('./pages/home.page'));
const About = lazy(() => import('./pages/about.page'));
const Profile = lazy(() => import('./pages/profile.page'));
const Login = lazy(() => import('./pages/login.page'));
const Register = lazy(() => import('./pages/register.page'));

//Private Route
import PrivateRoute from './routes/private.route';

//import Necessary Components
import { Header } from './components';

// Export the App component
export default function App() {
  // Return the BrowserRouter component with Routes and Route components
  return (
    <BrowserRouter>
      {/* Load the sharing component header */}
      <div>
        <Toaster
          position='top-right'
          reverseOrder={false}
        />
      </div>

      <Header />
      {/* Use the Suspense component to handle lazy loading */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Define the login route */}
          <Route
            path='/login'
            element={<Login />}
          />

          {/* Define the register route */}
          <Route
            path='/register'
            element={<Register />}
          />

          <Route element={<PrivateRoute />}>
            {/* Define the home route */}
            <Route
              path='/'
              element={<Home />}
            />
            {/* Define the about route */}
            <Route
              path='/about'
              element={<About />}
            />
            {/* Define the profile route */}
            <Route
              path='/profile'
              element={<Profile />}
            />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
