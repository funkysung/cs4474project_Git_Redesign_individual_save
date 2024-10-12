import React, {useState} from 'react';
import './css-files/View.css';
import sun from './resources/sun-icon.png';
import moon from './resources/moon-icon.png';

const ViewPage = () => {


  const Slider = () => {
    const [isChecked, setIsChecked] = useState(false);
  
    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
    };
  
    return (
      
        <div>
        <h3>Colour Mode: 
          <label className="switch">
            <input 
              type="checkbox" 
              checked={isChecked} 
              onChange={handleCheckboxChange} 
            />
            <span className="slider">
              <img 
                src={isChecked ? moon : sun} 
                alt="Icon" 
                className={isChecked ? "icon-checked" : "icon-unchecked"} 
              />
            </span>
          </label>
        </h3>
        { isChecked && <Save/>}
        </div>
    );
  };

    const initVal = 12;

    //control button
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };

    const [isChecked, setIsChecked] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [isCheckedS, setIsCheckedS] = useState(false);

    //function for the spinner to change text size
    function Spinner() {
      const [value, setValue] = useState(initVal); 
    
      const increment = () => {
        if (value  + 1 < 25) {
          setValue(prevValue => prevValue + 1);
        }
      };
    
      const decrement = () => {
        if (value -1 > 4) {
          setValue(prevValue => prevValue - 1);
        }
      };
    
      return (
        <div>
          <span>Text Size: </span>
          <button onClick={decrement}>-</button>
          <input type="text" value={value + "px"} readOnly />
          <button onClick={increment}>+</button>
          {value !== initVal && <span>Text size changed</span>}
        </div>
      );
    };

    //function for user to select a language
    function LanguageSelector() {
      const [selectedLanguage, setSelectedLanguage] = useState('en');
    
      const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
      };
    
      return (
        <div>
          <label htmlFor="language">Select Language:</label>
          <select id="language" value={selectedLanguage} onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            <option value="It">Italian</option>
            <option value="Ch">Mandarin</option>
            
          </select>
          {selectedLanguage !== "en" && <p>You selected: {selectedLanguage}</p>}

          { (selectedLanguage !== "en") && (<Save/>)}
        </div>
      );
    };

    
    //function for exclusive checkboxes to choose between editing limitations
    function ExclusiveCheckboxes2() {
      const [isChecked6, setIsChecked6] = useState(true);
      const [isChecked7, setIsChecked7] = useState(false);
      const [isChecked8, setIsChecked8] = useState(false);

      const [isChecked4, setIsChecked4] = useState(true);
      const [isChecked5, setIsChecked5] = useState(false);
    
      const handleCheckbox4Change = () => {
        setIsChecked4(true);
        setIsChecked5(false);
      };
    
      const handleCheckbox5Change = () => {
        setIsChecked4(false);
        setIsChecked5(true);
      };

      const handleCheckbox6Change = () => {
        setIsChecked6(true);
        setIsChecked7(false);
        setIsChecked8(false);
      };
    
      const handleCheckbox7Change = () => {
        setIsChecked6(false);
        setIsChecked7(true);
        setIsChecked8(false);
      };

      const handleCheckbox8Change = () => {
        setIsChecked6(false);
        setIsChecked7(false);
        setIsChecked8(true);
      };
    
      return (
        <div>
          <label>
            <span style={{ fontWeight: 'bold' }}>Account Mode: </span>  
            <span >Public:</span>
            <input
              type="checkbox"
              checked={isChecked4}
              onChange={handleCheckbox4Change}
            />
          </label>
          <span>    Private:</span>
          <label>
            <input
              type="checkbox"
              checked={isChecked5}
              onChange={handleCheckbox5Change}
            />
          </label>
          <br />
          <label>
            <span style={{ fontWeight: 'bold' }}>Cloning Limitations: </span>
            <span>All accounts:</span>
            <input
              type="checkbox"
              checked={isChecked6}
              onChange={handleCheckbox6Change}
            />
          </label>
          <span>    Friends:</span>
          <label>
            <input
              type="checkbox"
              checked={isChecked7}
              onChange={handleCheckbox7Change}
            />
          </label>
          <label>
          <span>    No one:</span>
            <input
              type="checkbox"
              checked={isChecked8}
              onChange={handleCheckbox8Change}
            />
          </label>
          <br />
          { (!isChecked6 || !isChecked4) && (<Save/>)}
        </div>
      );
    };

    //this is the pop up that shows the blocked users
    function BlockedUsers() {
      const [isPopupOpen, setIsPopupOpen] = useState(false);
      const [text, setText] = useState('');
      const [showTextField, setShowTextField] = useState(false);
      const [blockedUsers, setBlockedUsers] = useState(['User742', 'User632', 'User713', 'User945']); 

      const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
      };

      const handleAddNewClick = () => {
        setShowTextField(true);
      };

      const handleInputChange = (event) => {
        setText(event.target.value);
      };

      const handleSaveClick = () => {
        setBlockedUsers(prevUsers => [...prevUsers, text]);
        setText('');
        setShowTextField(false);
      };
    
      return (
        <div>
          <span style={{ fontWeight: 'bold' }}>Blocked Users: </span>
          <button className= "blockButt" onClick={togglePopup}>See Blocked Users</button>
          {isPopupOpen && (
            <div className="popup">
              <div className="popup-content">
                <h2>Blocked Users</h2>
                {blockedUsers.map((user, index) => (
                <p key={index}>{user}</p>
                ))}
                <button className= "addNew" onClick={handleAddNewClick}>Add New +</button>
                <p></p>
                {showTextField && (
                <div>
                <input type="text" value={text} onChange={handleInputChange} />
                <button onClick={handleSaveClick}>Save</button>
                </div> )}
                <button onClick={togglePopup}>Close</button>
              </div>
            </div>
          )}
        </div>
      );
    };
    
    function Save() {

      return(
        <><h5>Save Content: CTRL + S</h5><button className="saveButt"> Save Changes</button></>
      );

    };

    //render the right pane according to button press
    const renderContent = () => {


        if (selectedButton === "Sign In Security") {
            return( 
              <div className='rContainer'>
              <h2>Sign In Security</h2>
              <h3>Enable Double security Sign In: <label>
               <input type="checkbox" checked={isCheckedS} onChange={() => setIsCheckedS(!isCheckedS)} />
               {isCheckedS && <span type= "feedback">Double Security Sign In Enabled!</span>}
              </label></h3>
              </div>
            );
        } 
        else if(selectedButton === "Accesibility"){
            return( 
             <div className='rContainer'>
              <h2>Accesibility</h2>
              <h3>Voice Over:  <label>
               <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
               {isChecked && <span type= "feedback" >Voice Over Set!</span>}
              </label></h3>
              <h3>Bold Text: <label>
               <input type="checkbox" checked={isChecked3} onChange={() => setIsChecked3(!isChecked3)} />
               {isChecked3 && <span type= "feedback" >Text is bolded!</span>}
              </label> </h3>
              <h3><Spinner/> </h3>
              </div>
            );
        }

        else if(selectedButton === "Language"){
            return( 
                <div className='rContainer'>
              <h2>Language</h2>
              <h3><LanguageSelector/> </h3>
              </div>
            );
        }
        else if(selectedButton === "Moderation"){
            return( 
              <div className='rContainer'>
              <h2>Moderation</h2>
              <h3><BlockedUsers/> </h3>
              <h3><ExclusiveCheckboxes2/> </h3>
              </div>
            );
        }
        else if(selectedButton === "Notifications"){
            return( 
              <div className='rContainer'>
              <h2>Notifications</h2>
              <h3>Silence Notifications: <label>
               <input type="checkbox" checked={isChecked2} onChange={() => setIsChecked2(!isChecked2)} />
               {isChecked2 && <span type= "feedback">Notifications Silenced!</span>}
              </label></h3>
              
              </div>
            );
        }
        else {
            return(
            <div className='rContainer'>
              <h2> Appearence</h2>
              <h3><Slider/>
              </h3>
              </div> 
            );
        }
    };

    return (
    <div className="split-page">
      <div className="left-pane">
      <div className="button-container">
        <h2> Menu </h2>
        <button onClick={() => handleButtonClick("Appearence")}>Appearence</button>
        <button onClick={() => handleButtonClick("Accesibility")}>Accesibility</button>
        <button onClick={() => handleButtonClick("Language")}>Language</button>
        <button onClick={() => handleButtonClick("Moderation")}>Moderation</button>
        <button onClick={() => handleButtonClick("Notifications")}>Notifications</button>
        <button onClick={() => handleButtonClick("Sign In Security")}>Sign In Security</button>
        </div>
      </div>
      <div className="right-pane">
        {renderContent()}
        { (isChecked || isChecked2 || isChecked3 || isCheckedS) && (<Save/>)}
      </div>
    </div>
    );

};

export default ViewPage;