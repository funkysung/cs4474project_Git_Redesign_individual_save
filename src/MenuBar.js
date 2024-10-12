import React from 'react';
import { Link } from 'react-router-dom';
import './css-files/MenuBar.css'; 
import logo from './resources/small-logo-white.png';
import home from './resources/home-icon.png';
import help from './resources/help-icon.png';
import profile from './resources/profile-icon.png';
import projects from './resources/projects-icon.png';
import repo from './resources/repo-icon.png';
import view from './resources/view-icon.png';
import file from './resources/file-icon.png';
import { useNotifications } from './NotificationsContext';

// function for the menu bar
const MenuBar = () => {
  
  const { notifications } = useNotifications();
  return (
    <div className="menu-bar">
      <ul>
        <li>
            <img src={logo} className="menu-logo" alt="logo" />
        </li>
        <li>
        <div className="dropdown">
            <Link to="/" className="dropbtn">
              <span>Home</span>
              <img src={home} alt="Icon" className="icon-image" />
            </Link>
          </div>
        </li>
        <li>
        <div className="dropdown">
        <button className="dropbtn">
              <span>File</span>
              <img src={file} alt="Icon" className="icon-image" />
            </button>
            <div className="dropdown-content">
              <Link to="/">Settings...</Link>
              <Link to="/">Exit </Link>
            </div>
          </div>
        </li>
        <li>
        <div className="dropdown">
        <button className="dropbtn">
              <span>View</span>
              <img src={view} alt="Icon" className="icon-image" />
            </button>
            <div className="dropdown-content">
              <Link to="/view">Prefrences</Link>
            </div>
          </div>
        </li> 
        <li>
        <div className="dropdown">
            <button className="dropbtn">
              <span>Profile</span>
              <img src={profile} alt="Icon" className="icon-image"/>
            </button>
            <div className="dropdown-content">
              <Link to="/profile">My Profile</Link>
              <Link to="/profile">Messages</Link>
              <Link to="/profile">My Repositories</Link>
              <Link to="/profile">My Projects</Link>
              <Link to="/profile">Sign Out</Link>
            </div>
          </div>
        </li>
        <li>
        <div className="dropdown">
        <button className="dropbtn">
              <span>Projects</span>
              <img src={projects} alt="Icon" className="icon-image" />
            </button>
            <div className="dropdown-content">
              <Link to="/">Recently Viewed</Link>
              <Link to="/">All Projects</Link>
              <Link to="/">Create New</Link>
            </div>
          </div>
        </li>
        <li>
        <div className="dropdown">
        <button className="dropbtn">
              <span>Repositories</span>
              <img src={repo} alt="Icon" className="icon-image" />
            </button>
            <div className="dropdown-content">
              <Link to="/">Recently Viewed</Link>
              <Link to="/">All Repositories</Link>
              <Link to="/">New Repository</Link>
              <Link to="/">New Local Repository</Link>
              <Link to="/">Clone Repository</Link>
            </div>
          </div>    
        </li>
        <li>

        
        <div className="dropdown">
        <button className="dropbtn">
        <div class="notification-icon">
        <span class="notification-count">1</span>
        <span class="notification-text">Notifications</span>
        <span class="notification-message"> User Signed In</span>
      </div>

      
          {notifications.length > 0 && <span className="badge">{notifications.length}</span>}

        </button>
        <div className="dropdown-content">
          {notifications.map((notification, index) => (
            <Link key={index} to={notification.link}>{notification.message}</Link>
          ))}
        </div>
        </div>
        </li>
        <li>
        <div className="dropdown">
        <button className="dropbtn">
              <span>Help</span>
              <img src={help} alt="Icon" className="icon-image" />
            </button>
            <div className="dropdown-content">
              <Link to="/">About GitHub</Link>
              <Link to="/">Report Issue</Link>
              <Link to="/">How to use</Link>
              <Link to="/">Contact</Link>
            </div>
          </div>
        </li>
        <li>
            <input type="text" placeholder="Search..." className="search-bar" />
        </li>
       
      </ul>
    </div>
  );
};

export default MenuBar;