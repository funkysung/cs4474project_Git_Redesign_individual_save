import '../css-files/Profile.scss';
import {TextArea} from "@carbon/react";
import React, { useState } from 'react';
import {View} from 'react-native';
import { TaskAdd, Return } from '@carbon/icons-react';
import pullIconBlack from '../resources/pullIconBlack.svg';
import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap'

const InDevelopement = (props) => {

    const [tasks, setTasks] = useState(props.tasks);

    const handleExit = () => {
        props.revealHome();
    }

    const addNewProject = () => {
        const newItem = {
            IssueName : "test",
            dueData : "04/08/2024"
        }

        setTasks([...tasks, newItem]);
    }

    return(
        <div className='toDoMain'>

            <Return
                size={32}
                onClick={handleExit}
                className='return'
            />

            <div className='projectTitle'>In Progress</div>

            <div className='assignmentListParent'>
                <div className='assignmentList'>
                    {tasks.map((task) => {
                        return (
                            <div className='taskBackground'>
                                <div className='taskName'>{task.IssueName}</div>
                                <div className='taskData'>Due: {task.dueData}</div>
                            </div>
                        );
                    })}
                </div>
                <TaskAdd className = "projectIconAdd" size={32} onClick={addNewProject}/>
            </div>
        </div>
    );
};

export default InDevelopement;