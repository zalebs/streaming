
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

import SignIn from './components/SignIn';
import SignUpPage from './components/SignUpPage';
import Signup from './pages/Signup';
import { useNavigate } from 'react-router-dom';
import Auth from './pages/Auth';
import User from './components/User';
import About from './components/About';

function App() {
  const Navigate=useNavigate()

  return (
    <div className="App">
      <Routes>
     <Route path="/" element={<Signup/>} />
     {/* <Route path="/dashboard" element={<HomePage/>} /> */}
     {/* <Route path="/dashboard" element={isAuthenticated ? <HomePage /> : <Navigate to="/signin" />} /> */}
     <Route
					path="/dashboard"
					element={
						<Auth>
							<HomePage />
						</Auth>
					}
				/>
         <Route
					path="/user"
					element={
						<Auth>
							<User />
						</Auth>
					}
				/>
			
     <Route path="/signup" element={<SignUpPage/>} />
     <Route path="/signin" element={<SignIn/>} />
     <Route path="/about" element={<About/>} />
     

     <Route/>
      </Routes>
    </div>
  );
}

export default App;
