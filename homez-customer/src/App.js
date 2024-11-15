import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import { Layout } from './Components';
import './App.css';
import Signin from './pages/Auth/Signin';
import SignUp from './pages/Auth/SignUp';
import PageNotFound from './pages/Auth/PageNotFound';

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes (Without Layout) */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Main Routes Wrapped in Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* Add more main routes as needed */}
        </Route>

        {/* 404 Not Found Route */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
