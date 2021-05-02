import React from 'react';
import './MySkill.css'
const MySkill = () => {
    return (
        <div className="py-5">
        <div className="progress-bar-section">
        <ul>
            <li class="html"><p>HTML</p> <p>95%</p></li>
            <li class="css"><p>CSS</p> <p>85%</p></li>
            <li class="bootstrap"><p>Bootstrap</p> <p>90%</p></li>
            <li class="js"><p>JavaScript</p> <p>75%</p></li>
            <li class="ng"><p>React</p> <p>70%</p></li>
            <li class="node"><p>Node</p> <p>40%</p></li>
            <li class="express"><p>Express JS</p> <p>60%</p></li>
            

        </ul>
        </div>
        </div>
    );
};

export default MySkill;