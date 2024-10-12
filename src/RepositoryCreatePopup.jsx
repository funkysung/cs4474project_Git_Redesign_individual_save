import React, { useState } from 'react';
import './css-files/Popup.css';
import publicIcon from './resources/popupPublic.png';
import privateIcon from './resources/popupPrivate.png';

const RepositoryCreatePopup = ({ onClose }) => {
    const [showExtraContent, setShowExtraContent] = useState(false);
    const [visibility, setVisibility] = useState('');
    const [gitignoreChecked, setGitignoreChecked] = useState(false);
    const [licenseChecked, setLicenseChecked] = useState(false);
    const [owner, setOwner] = useState('');
    const [repoName, setRepoName] = useState('');
    const [error, setError] = useState('');

    const handleExtraContentClick = () => {
      setShowExtraContent(!showExtraContent);
    };

    const onCreate = () => {
      if (!owner || !repoName || !visibility) {
        setError('You must specify the required fields');
      } else {
        setError('');
        onClose();
      }
    };

    const handleVisibilityChange = (e) => {
      setVisibility(e.target.value);
    };

    return (
      <div className="popup-overlay">
        <div className="popup-content">
          <div style={{textAlign: 'right', marginBottom: '10px'}}>
            <button onClick={onClose} className='popupCloseBtn'>close X</button>
          </div>
          <h1 style={{marginTop: 0}}>Create a new repository</h1>
          <p className='greyOut'>A repository contains all project files, including the revision history.</p>
          <hr className='textDiv'></hr>
          <p>Required fields are marked with an asterisk (*).</p>
          <div className="search-container">
            <select 
              className="popupOwnerSearchDropdown"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
            >
              <option value="" disabled selected>Choose Owner *</option>
              <option value="option1">Steve4474</option>
              <option value="option2">Alex4474</option>
              {/* Add more options as needed */}
            </select>
            <span style={{ fontSize: '30px', margin: '0 10px' }}>/</span>
            <input
              type="text"
              className="search-input"
              placeholder="Hello_World *"
              value={repoName}
              onChange={(e) => setRepoName(e.target.value)}
            />
            <div style={{marginRight: '15px'}}>
              {visibility === 'public' && <img src={publicIcon} alt="public" />}
              {visibility === 'private' && <img src={privateIcon} alt="private" />}
            </div>
          </div>
          <br></br>
          <p style={{marginBottom: '7px', marginTop: '7px'}}>Repository Visibility *</p>
          <div className='checkboxGroup'>
            <div>
              <input className='popupVisibiityRadio' type='radio' name='visibility' id='publicRadio'
                value='public'
                checked={visibility === 'public'}
                onChange={handleVisibilityChange}
              />
              <label htmlFor='publicRadio' style={{ marginLeft: '7px'}}>Public</label>
            </div>
            <div style={{marginTop: '3px'}}>
              <input className='popupVisibiityRadio' type='radio' name='visibility' id='privateRadio'
                value='private'
                checked={visibility === 'private'}
                onChange={handleVisibilityChange}
              />
              <label htmlFor='privateRadio' style={{ marginLeft: '7px'}}>Private</label>
            </div>
          </div>
          <br></br>
          <hr className='textDiv'></hr>
          <div>
            <button onClick={handleExtraContentClick} className='popupDropdownBtn'>
            <u>
            {showExtraContent ? 'Show Less' : 'Show More'}
            </u>
            </button>
          </div>
          {showExtraContent && (
            <div className='popupExtraDiv'>
              <div>
                <input type="checkbox" id="addReadMe" name="addReadMe" />
                <label htmlFor="addReadMe" style={{marginLeft:'8px'}}>Add README</label>
                <p style={{ marginTop: '2px', marginLeft: '20px' }} className='greyOut'>This is where you can write a long description for your project.</p>
              </div>
              <div>
                <input type="checkbox" id="gitignore" name="gitignore" onChange={() => setGitignoreChecked(!gitignoreChecked)} />
                <label htmlFor="gitignore" style={{marginLeft:'8px'}}>Add Gitignore</label>
                {gitignoreChecked && (
                  <div style={{ marginLeft: '20px', marginTop: '8px' }}>
                    <select className="popupExtraDivSearchDropdown" >
                      <option value="" disabled selected>Choose Template</option>
                      <option value="option1">AL</option>
                      <option value="option2">Agda</option>
                      <option value="option3">CMake</option>
                      <option value="option4">CakePHP</option>
                      <option value="option5">Clojure</option>
                      <option value="option6">Lisp</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                )}
                <p style={{ marginTop: '2px', marginLeft: '20px' }} className='greyOut'>Choose which files not to track from a list of templates.</p>
              </div>
              <div>
                <input type="checkbox" id="license" name="license" onChange={() => setLicenseChecked(!licenseChecked)} />
                <label htmlFor="license" style={{marginLeft:'8px'}}>Add License</label>
                {licenseChecked && (
                  <div  style={{ marginLeft: '20px', marginTop: '8px' }}>
                    <select className="popupExtraDivSearchDropdown" >
                      <option value="" disabled selected>Choose License</option>
                      <option value="option1">Apache License 2.0</option>
                      <option value="option2">GNU General Public License v3.0</option>
                      <option value="option3">MIT License</option>
                      <option value="option4">BSD 2-Clause</option>
                      <option value="option5">Boost sfw license v1.0</option>
                      <option value="option6">Eclipse Public License 2.0</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                )}
                <p style={{ marginTop: '2px', marginLeft: '20px' }} className='greyOut'>A license tells others what they can and can't do with your code.</p>
              </div>
            </div>
          )}
          <br></br>
          <button onClick={onCreate} className='popupCreateBtn'>Create</button>
        {error && <p style={{ color: '#ff0000' }}>{error}</p>}
        </div>
      </div>
    );
  };
  
  export default RepositoryCreatePopup;