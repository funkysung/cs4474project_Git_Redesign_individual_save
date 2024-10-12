import React, { useState } from 'react';
import './css-files/Popup.css';
import table from './resources/TemplateTable.png';
import board from './resources/TemplateBoard.png';
import roadmap from './resources/TemplateRoadmap.png';

const ProjectCreatePopup = ({ onClose }) => {
  const [selectedTemplate, setSelectedTemplate] = useState('Table');
  const [owner, setOwner] = useState('');
  const [projName, setProjName] = useState('');
  const [error, setError] = useState('');
  const templates = {
    'Table': {image: table, text: 'Start with a powerful spreadsheet style table to filter, sort and group your issues and pull requests. Easily switch to a board or roadmap layout at any time.'},
    'Board': {image: board, text: 'Start with a board to spread your issues and pull requests across customizable columns. Easily switch to a table or roadmap layout at any time.'},
    'Roadmap': {image: roadmap, text: 'Start with a roadmap for a high-level visualization of your project over time. Easily switch to a table or board layout at any time.'}
  }
  const handleTemplateClick = (template) => {
    setSelectedTemplate(template);
  };

  const onCreate = () => {
    if (!owner || !projName) {
      setError('You must specify the title of your project');
    } else {
      setError('');
      onClose();
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div style={{textAlign: 'right', marginBottom: '10px'}}>
          <button onClick={onClose} className='popupCloseBtn'>close X</button>
        </div>
        <h1 style={{marginTop: 0}}>Create a new Project</h1>
        <p className='greyOut'>Project folder contains all files related to your project. You may initialise your repository in here.</p>
        <hr className='textDiv'></hr>
        <p>Required fields are marked with an asterisk (*).</p>
        <div className="search-container">
          <span style={{ fontSize: '30px', margin: '0 10px', fontFamily: 'sans-serif' }}>@</span>
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
          <input
            type="text"
            className="search-input"
            placeholder="Unnamed_Project *"
            style={{marginLeft: '10px'}}
            value={projName}
            onChange={(e) => setProjName(e.target.value)}

          />
        </div>
        <br></br>
        <p style={{marginBottom: '7px', marginTop: '7px'}}>Select Template *</p>
        <div className="template-container">
          {Object.keys(templates).map((template, index) => (
            <div
              key={index}
              className={`template-box ${selectedTemplate === template ? 'selected' : ''}`}
              onClick={() => handleTemplateClick(template)}
            >
              {template}
            </div>
          ))}
        </div>
        <div className="image-container" style={{marginTop: '20px'}}>
          <img src={templates[selectedTemplate].image} alt={selectedTemplate} />
        </div>
        <div className="text-container">
          <p className='greyOut'>{templates[selectedTemplate].text}</p>
        </div>
          <button onClick={onCreate} className='popupCreateBtn'>Create</button>
        {error && <p style={{ color: '#FF6969', fontWeight: 'bold'}}>{error}</p>}

      </div>
    </div>
  );
};
  
  export default ProjectCreatePopup;