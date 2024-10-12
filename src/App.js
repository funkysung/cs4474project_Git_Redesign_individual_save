import './css-files/App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MenuBar from './MenuBar';
import Home from './Home';
import React, { useState } from 'react';
import logo from './resources/small-logo-white.png';
import { NotificationsProvider, useNotifications } from './NotificationsContext';
import ProfilePageMain from './Profiles/ProfilePageMain';
import RepositoryData from './jsonDummyData/Repositories.json'
import RepositoryHome from './RepositoryMainPage/RepositoryHome';
import ProjectPage from './ProjectPage/ProjectPage';
import ProjectData from './jsonDummyData/Projects.json';
import ViewPage from './View';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const { addNotification } = useNotifications();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault(); // Prevent form submission
    // Simulate authentication (replace with actual authentication logic)
    if (username === 'admin' && password === 'password') {
      setIsSignedIn(true);
      addNotification({ message: 'You have successfully signed in!', link: '/' });
    } else {
      addNotification({ message: 'Incorrect username or password', link: '/' });
    }
  };

  const handleSignOut = () => {
    setIsSignedIn(false)
  }

  //for testing

  return (
    <NotificationsProvider>
      <div className="App">
        {!isSignedIn ? (
          <>
            <div className="signin-container">
              <img src={logo} className="menu-logo" alt="logo" />
              <h1>GitHub</h1>
              <h2>Sign In</h2>

              <form onSubmit={handleSignIn}> {/* Use form onSubmit to handle button click */}
                <div className="input-container">
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="input-field"
                  />
                </div>
                <div className="input-container">
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field"
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="rememberMe" className='remember-me-label'>Remember Me</label>
                  <input type="checkbox" id="rememberMe" className="remember-me-checkbox" />
                </div>
                <button type="submit" className="signin-button">Sign In</button> {/* Set button type to submit */}
              </form>
            </div>
          </>
        ) : (
          <>
            <Router>
              <MenuBar/>
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/view" element={<ViewPage />} />
                <Route path="/profile" element={<ProfilePageMain signOutFunction = {handleSignOut}/>} />
                {RepositoryData.map((repo) => {
                  return (
                    <Route path={'/repository/id=' + repo.id} element={<RepositoryHome name = {repo.name} info = {repo.description} />}/>
                  );
                })}
                
                {ProjectData.map((project) => {
                  return (
                    <Route path={'/project/id=' + project.id} element={<ProjectPage name = {project.name} info = {project.description} data = {project.data}/>}/>
                  );
                })}

              </Routes>
            </Router>
          </>
        )
      }
    </div>
    </NotificationsProvider>
  );
}

export default App;
