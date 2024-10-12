import '../css-files/Profile.scss';
import {TextArea, ComboBox} from "@carbon/react";
import React, { useState } from 'react';
import {TextInput, View} from 'react-native';


const ProfileInfo = () => {
    
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [bio, setBio] = useState("");
    const [Pronoun, setPronoun] = useState("");
    const [company, setCompany] = useState("");
    const [location, setLocation] = useState("");

    return (
        <div className='ProfileContent'>
            
            <h3 className='profileHeader'>Public Profile</h3>
            <div className='row'>
                <div className='subTitle'>Username: </div>
                <div style={{maxWidth: '15rem'}}> 
                    <View
                        style = {{borderStyle: 'solid', borderWidth: '1px'}}
                    >
                        <TextInput 
                            editable 
                            value={username} 
                            onChangeText={text => setUsername(text)} 
                            style={{width: '100%', maxWidth: '20rem'}}
                        />  
                    </View>      
                </div>
            </div>

            <div className='row'>

                <div className='row rowSection rowSection1'>
                    <div className='subTitle'>First name: </div>
                    <div style={{maxWidth: '15rem'}}> 
                        <View
                            style = {{borderStyle: 'solid', borderWidth: '1px'}}
                        >
                            <TextInput 
                                editable 
                                value={firstName} 
                                onChangeText={text => setFirstName(text)} 
                                style={{width: '100%', maxWidth: '15rem'}}
                            />  
                        </View>      
                    </div>
                </div>

                <div className='row rowSection'>
                    <div className='subTitle'>Last name: </div>
                    <div style={{maxWidth: '15rem'}}> 
                        <View
                            style = {{borderStyle: 'solid', borderWidth: '1px'}}
                        >
                            <TextInput 
                                editable 
                                value={lastName} 
                                onChangeText={text => setLastName(text)} 
                                style={{width: '100%', maxWidth: '15rem'}}
                            />  
                        </View>      
                    </div>
                </div>

            </div>

            <div className='row'>
                <div className='subTitle'>Bio: </div>
                <div className='areaConstraint'>
                    <TextArea 
                        onChange={text => setBio(text)} 
                        enableCounter
                        defaultValue={bio}
                        style={{width: '100%', maxWidth: '20rem'}}                        
                    />
                </div>
            </div>

            <div className='row'>
                <div className='subTitle'>Pronouns: </div>
                <div className='boxConstraint'>
                    <ComboBox 
                        onChange={e => setPronoun(e.selectedItem)} 
                        items={["Don't Specify", "they/them", "her/she", "he/him"]}
                        initialSelectedItem = {Pronoun}
                    />
                </div>
                
            </div>


            <div className='row'>
                <div className='subTitle'>Company: </div>
                
                <div style={{maxWidth: '15rem'}}> 
                    <View
                        style = {{borderStyle: 'solid', borderWidth: '1px'}}
                    >
                        <TextInput 
                            editable 
                            value={company} 
                            onChangeText={text => setCompany(text)} 
                            style={{width: '100%', maxWidth: '15rem'}}
                        />  
                    </View>      
                </div>
                
            </div>


            <div className='row'>
                <div className='subTitle'>Location: </div>
                
                <div style={{maxWidth: '15rem'}}> 
                    <View
                        style = {{borderStyle: 'solid', borderWidth: '1px'}}
                    >
                        <TextInput 
                            editable 
                            value={company} 
                            onChangeText={text => setCompany(text)} 
                            style={{width: '100%', maxWidth: '15rem'}}
                        />  
                    </View>      
                </div>

            </div>

        </div>
    );
};

export default ProfileInfo;