import './css-files/Home.css';
import settings from './resources/settings-icon.png';
import pull from './resources/pull-icon.png';
import conflict from './resources/conflict-icon.png';
import notification from './resources/notification-icon.png';
import profile1 from './resources/profile1.jpg';
import profile2 from './resources/profile2.jpg';
import profile3 from './resources/profile3.jpg';
//added by sung for testing
import React, { useState } from 'react';
import ProjectCreatePopup from './ProjectCreatePopup';
import RepositoryCreatePopup from './RepositoryCreatePopup';

const Home = () => {
  const [showRepoPopup, setShowRepoPopup] = useState(false);
  const [showProjectPopup, setShowProjectPopup] = useState(false);

  const handleCreateNewRepoClick = () => { setShowRepoPopup(true); };
  const handleCloseRepoPopup = () => { setShowRepoPopup(false); };

  const handleCreateNewProjectClick = () => { setShowProjectPopup(true); };
  const handleCloseProjectPopup = () => { setShowProjectPopup(false); };

    return (
    <div className="container">
    <div className="left-container">
        <button className='editBut'>Edit...</button>
    <div className="menu">
          <div className="menu-item">
            <h3> Jump back in ...</h3>
            <div className="menu-content">
              <button><img src={profile1} alt="Icon" className="icon-image" /> - Python-Snake-Game</button>
              <button> <img src={profile2} alt="Icon" className="icon-image" /> - 4474GroupProject</button>
              <button> <img src={profile1} alt="Icon" className="icon-image" /> - CalculatorC++</button>
            </div>
          </div>
          <div className="menu-item">
            <h3>Projects</h3>
            <div className="menu-content">
              <button><img src={profile1} alt="Icon" className="icon-image" /> - Python-Snake-Game</button>
              <button><img src={profile1} alt="Icon" className="icon-image" /> - CalculatorC++</button>
              <button><img src={profile1} alt="Icon" className="icon-image" /> - React_webPage</button>
            </div>
            <button onClick={handleCreateNewProjectClick} className='addButt'> 
                 <span>+ Create New</span>
              </button>
              {showProjectPopup && <ProjectCreatePopup onClose={handleCloseProjectPopup} />}
          </div>
          <div className="menu-item">
            <h3>Repositories</h3>
            <div className="menu-content">
              <button><img src={profile2} alt="Icon" className="icon-image" /> - 4474GroupProject</button>
              <button><img src={profile3} alt="Icon" className="icon-image" /> - 3307GroupProject</button>
              <button><img src={profile3} alt="Icon" className="icon-image" /> - FakeRepo3</button>
            </div>
            <button onClick={handleCreateNewRepoClick} className='addButt'> 
                 <span>+ Create New</span>
              </button>
              {showRepoPopup && <RepositoryCreatePopup onClose={handleCloseRepoPopup} />}
          </div>
        </div>
    </div>
    <div className="middle-container">
      <h1> Home </h1>
      <button className='editBut'>Edit...</button>
      <div className="menu">
        <div className="menu-item">
            <h3>Welcome Back User!<img src={profile1} alt="Icon" className="icon-image" /> </h3>
            <div className="menu-content2">
              <button>Notifications <img src={notification} alt="Icon" className="icon-image" /></button>
              <button>Pull Requests <img src={pull} alt="Icon" className="icon-image" /></button>
              <button>Issues / Conflicts <img src={conflict} alt="Icon" className="icon-image" /></button>
              <button>Settings <img src={settings} alt="Icon" className="icon-image" /></button>
              <button>Visit My Profile</button>
            </div>
          </div>
        </div>
    </div>
    <div className="right-container">
    <button className='editBut'>Edit...</button>
      <div className="menu">
        <div className="menu-item">
            <h3> Changes </h3>
            <div className="menu-content3">
                <ul> 
                <li className='head'>3 Hours ago:</li>
                <li>User345 pushed changes to 4474GroupProject</li>
                <li className='head'>10 Hours ago:</li>
                <li>User984 pulled from main branch in 3307GroupProject</li>
                <li className='head'>2 Days ago:</li>
                <li>User543 created a branch 'feature' from main in FakeRepo3</li>
                <li className='head'>4 Days ago:</li>
                <li>User843 made a pull request in 3307GroupProject</li>
                </ul>
            </div>
          </div>
        </div>
        <div className="menu">
        <div className="menu-item">
            <h3> News </h3>
            <div className="menu-content3">
            <ul> 
                <li className='head'>7 Hours ago:</li>
                <li>GitHub launches AI to automattically right code</li>
                <li className='head'>3 Days ago:</li>
                <li>GitHub unveils new design overhaul</li>
                <li className='head'>7 Days ago:</li>
                <li>Microsoft purchases Github in blockbuster deal </li>
                </ul>
            </div>
          </div>
        </div>
        <div className="menu">
        <div className="menu-item">
            <h3> Public Repositories </h3>
            <div className="menu-content3">
              <h4> <img src={profile2} alt="Icon" className="icon-image" />  User803 / pythonGame</h4>
              <ul> 
              <li> This is a game made in python using Py game to create. To run this program ...</li>
              </ul>
              <h4> <img src={profile1} alt="Icon" className="icon-image" />  User103 / OpenCV - source </h4>
              <ul> 
              <li> This is the source packages for opencv mainly used for video and capture ...</li>
              </ul>
              <h4> <img src={profile3} alt="Icon" className="icon-image" />  User842 / OpenGl - source</h4>
              <ul> 
              <li> This is the source packages for opengl mainly used for building computer graphics ...</li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  </div>
  );
};

export default Home;